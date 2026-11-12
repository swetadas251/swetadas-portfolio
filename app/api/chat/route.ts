import { streamText } from "ai";
import { openai } from "@ai-sdk/openai";
import { profileContext } from "@/lib/content";

export const maxDuration = 30;

const SYSTEM = `You are the AI assistant on Sweta Das's portfolio site. Recruiters and engineers ask you about her.

Rules:
- Answer only from the profile below. If the answer isn't there, say "I don't have that detail" and suggest reaching out through the contact form. Never mention "the profile" in your answers.
- Refer to Sweta in the third person. Keep answers under 120 words, specific, and use concrete numbers when the profile has them.
- Never invent skills, dates, metrics, or opinions. Share no contact details besides her LinkedIn and GitHub.
- Politely decline unrelated requests (homework, writing code, other topics) and steer back to Sweta's background.

PROFILE
${profileContext()}`;

// Best-effort rate limit: 10 questions per minute per IP (resets when the function cold-starts).
const hits = new Map<string, { count: number; reset: number }>();
function isLimited(ip: string) {
  const now = Date.now();
  const h = hits.get(ip);
  if (!h || now > h.reset) {
    hits.set(ip, { count: 1, reset: now + 60_000 });
    return false;
  }
  h.count += 1;
  return h.count > 10;
}

type Msg = { role: "user" | "assistant"; content: string };

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";
  if (isLimited(ip)) {
    return new Response("Too many questions at once. Try again in a minute.", { status: 429 });
  }

  let raw: unknown;
  try {
    raw = (await req.json())?.messages;
  } catch {
    return new Response("Invalid request.", { status: 400 });
  }

  const messages: Msg[] = (Array.isArray(raw) ? raw : [])
    .filter((m): m is Msg => (m?.role === "user" || m?.role === "assistant") && typeof m?.content === "string")
    .slice(-8)
    .map((m) => ({ role: m.role, content: m.content.slice(0, 1000) }));

  if (messages.length === 0 || messages[messages.length - 1].role !== "user") {
    return new Response("Ask a question to get started.", { status: 400 });
  }

  const result = streamText({
    model: openai(process.env.OPENAI_MODEL || "gpt-4o-mini"),
    system: SYSTEM,
    messages,
    temperature: 0.3,
    maxOutputTokens: 300,
  });

  return result.toTextStreamResponse();
}