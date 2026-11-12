"use client";

import { useEffect, useRef, useState } from "react";

type Msg = { role: "user" | "assistant"; content: string };

const suggestions = [
  "What AI work has Sweta shipped to production?",
  "Why both engineering and consulting?",
  "What's her strongest project?",
];

export default function AskSweta() {
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = listRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages]);

  async function ask(question: string) {
    const q = question.trim();
    if (!q || loading) return;

    const history: Msg[] = [...messages, { role: "user", content: q }];
    setMessages([...history, { role: "assistant", content: "" }]);
    setInput("");
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: history.slice(-8) }),
      });
      if (!res.ok || !res.body) throw new Error((await res.text()) || "No answer came back.");

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let text = "";
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        text += decoder.decode(value, { stream: true });
        setMessages([...history, { role: "assistant", content: text }]);
      }
      if (!text.trim()) throw new Error("No answer came back. Try again in a moment.");
    } catch (err) {
      setMessages(history.slice(0, -1));
      setInput(q);
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="rounded-2xl border border-purple-400/25 bg-white/[0.03] p-5 shadow-[0_0_80px_-30px_rgba(192,132,252,0.6)]">
      <div className="flex items-baseline justify-between gap-4">
        <p className="font-semibold">Ask about my experience</p>
        <p className="text-xs text-white/40">AI assistant, answers from my resume</p>
      </div>

      <div ref={listRef} aria-live="polite" className="mt-4 h-72 space-y-3 overflow-y-auto pr-1">
        {messages.length === 0 ? (
          <div className="flex h-full flex-col justify-end gap-2">
            <p className="mb-1 text-sm text-white/50">Skip the scrolling. Try one of these:</p>
            {suggestions.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => ask(s)}
                className="w-fit rounded-full border border-white/10 px-3.5 py-1.5 text-left text-sm text-white/80 transition-colors hover:border-pink-400/50"
              >
                {s}
              </button>
            ))}
          </div>
        ) : (
          messages.map((m, i) =>
            m.role === "user" ? (
              <div key={i} className="ml-auto w-fit max-w-[85%] rounded-2xl rounded-br-sm bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 text-sm">
                {m.content}
              </div>
            ) : (
              <div key={i} className="max-w-[92%] whitespace-pre-wrap rounded-2xl rounded-bl-sm bg-white/[0.06] px-4 py-2 text-sm leading-relaxed text-white/85">
                {m.content || <span className="text-white/40">Thinking…</span>}
              </div>
            )
          )
        )}
      </div>

      {error && <p className="mt-3 text-sm text-red-400">{error}</p>}

      <form
        onSubmit={(e) => {
          e.preventDefault();
          ask(input);
        }}
        className="mt-4 flex gap-2"
      >
        <label htmlFor="ask-input" className="sr-only">Ask a question about Sweta</label>
        <input
          id="ask-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          maxLength={300}
          placeholder="Has she worked with LLMs in production?"
          className="min-w-0 flex-1 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm outline-none placeholder:text-white/30 focus:border-pink-400/60"
        />
        <button type="submit" disabled={loading || !input.trim()} className="btn-primary px-5 py-2.5 text-sm disabled:opacity-50">
          {loading ? "…" : "Ask"}
        </button>
      </form>
    </div>
  );
}