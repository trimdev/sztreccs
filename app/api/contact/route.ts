import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Payload = {
  fname?: string;
  lname?: string;
  email?: string;
  phone?: string;
  tent?: string;
  message?: string;
  _honey?: string;
};

const escapeHtml = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const trim = (v: unknown, max: number) =>
  typeof v === "string" ? v.trim().slice(0, max) : "";

export async function POST(req: Request) {
  let data: Payload;
  try {
    data = (await req.json()) as Payload;
  } catch {
    return NextResponse.json({ success: false, error: "invalid_json" }, { status: 400 });
  }

  if (typeof data._honey === "string" && data._honey.length > 0) {
    return NextResponse.json({ success: true });
  }

  const fname = trim(data.fname, 100);
  const lname = trim(data.lname, 100);
  const email = trim(data.email, 200);
  const phone = trim(data.phone, 50);
  const tent = trim(data.tent, 50);
  const message = trim(data.message, 4000);

  if (!fname || !lname || !email) {
    return NextResponse.json({ success: false, error: "missing_required" }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ success: false, error: "invalid_email" }, { status: 400 });
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatIdsRaw = process.env.TELEGRAM_CHAT_IDS ?? process.env.TELEGRAM_CHAT_ID ?? "";
  const chatIds = chatIdsRaw.split(",").map((s) => s.trim()).filter(Boolean);
  if (!token || chatIds.length === 0) {
    return NextResponse.json({ success: false, error: "server_misconfigured" }, { status: 500 });
  }

  const lines = [
    "<b>🏕️ Új ajánlatkérés — SztreccsSátor</b>",
    "",
    `<b>Név:</b> ${escapeHtml(`${fname} ${lname}`)}`,
    `<b>E-mail:</b> ${escapeHtml(email)}`,
  ];
  if (phone) lines.push(`<b>Telefon:</b> ${escapeHtml(phone)}`);
  if (tent) lines.push(`<b>Sátorméret:</b> ${escapeHtml(tent)}`);
  if (message) {
    lines.push("", "<b>Üzenet:</b>", escapeHtml(message));
  }

  const text = lines.join("\n");
  const results = await Promise.allSettled(
    chatIds.map((chatId) =>
      fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text,
          parse_mode: "HTML",
          disable_web_page_preview: true,
        }),
      }).then(async (r) => {
        if (!r.ok) {
          const body = await r.text().catch(() => "");
          throw new Error(`tg ${r.status} ${body.slice(0, 200)}`);
        }
      }),
    ),
  );

  const failed = results.filter((r) => r.status === "rejected");
  for (const f of failed) {
    if (f.status === "rejected") console.error("telegram send failed:", f.reason);
  }
  if (failed.length === chatIds.length) {
    return NextResponse.json({ success: false, error: "telegram_failed" }, { status: 502 });
  }

  return NextResponse.json({ success: true });
}
