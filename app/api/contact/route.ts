import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const clean = (v: unknown, max: number) =>
  typeof v === "string" ? v.trim().slice(0, max) : "";

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot filled in = bot. Pretend it worked.
  if (clean(body.website, 200)) return Response.json({ ok: true });

  const name = clean(body.name, 100);
  const email = clean(body.email, 200);
  const company = clean(body.company, 150);
  const message = clean(body.message, 3000);

  if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json(
      { error: "Add your name, a valid email, and a message." },
      { status: 400 }
    );
  }

  const { error } = await resend.emails.send({
    from: "Portfolio <onboarding@resend.dev>",
    to: process.env.CONTACT_TO_EMAIL!, // your email lives only on the server
    replyTo: email,
    subject: `Portfolio: ${name}${company ? ` (${company})` : ""}`,
    text: `From: ${name} <${email}>\nCompany: ${company || "—"}\n\n${message}`,
  });

  if (error) {
    console.error(error);
    return Response.json(
      { error: "Message didn't send. Try LinkedIn instead." },
      { status: 500 }
    );
  }

  return Response.json({ ok: true });
}