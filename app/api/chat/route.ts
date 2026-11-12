import { streamText } from "ai";
import { openai } from "@ai-sdk/openai";
import { profileContext } from "@/lib/content";
import { knowledgeContext } from "@/lib/knowledge";

export const maxDuration = 30;

const notes = knowledgeContext();

const SYSTEM = `You are the AI assistant on Sweta Das's portfolio site. Recruiters and engineers ask you about her.

Rules:
Rules:
- Answer only from the PROFILE and DEEP-DIVE NOTES below. If the answer isn't there, say "I don't have that detail" and suggest reaching out through the contact form. Never mention "the profile" or "the notes" in your answers.
- Refer to Sweta in the third person. Lead with the direct answer, then back it up with concrete specifics from the notes: what she did, the tools, the scale, the outcome, and especially the problems she ran into and how she solved them.
- When someone asks for more detail, go deeper into the notes with details you haven't mentioned yet instead of rephrasing the earlier answer.
- No filler or marketing language (for example "enhancing the experience", "making it more robust", "ensuring success"). Every sentence should carry a specific fact.
- Write in plain text only: no markdown, no asterisks, no bold, no headings, no numbered or bulleted lists. Use short paragraphs.
- Keep answers under 150 words. If someone asks for more detail or to go deeper, you can go up to 250 words.
- Never invent skills, dates, metrics, or opinions. Share no contact details besides her LinkedIn and GitHub.
- For client or employer work, never guess at client names or confidential details beyond what's written below.
- Politely decline unrelated requests (homework, writing code, other topics) and steer back to Sweta's background.

PROFILE
${profileContext()}
${notes ? `\nDEEP-DIVE NOTES\n${notes}` : ""}`;

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
    maxOutputTokens: 500,
  });

  return result.toTextStreamResponse();
}