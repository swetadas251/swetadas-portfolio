"use client";

import { useState } from "react";
import { profile } from "@/lib/content";

type Status = "idle" | "sending" | "sent" | "error";

const field =
  "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white outline-none placeholder:text-white/30 transition-colors focus:border-pink-400/60";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Message didn't send.");
      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Message didn't send.");
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-20">
      <h2 className="text-3xl font-bold md:text-4xl">Contact</h2>
      <p className="mt-3 max-w-xl text-white/60">
        Hiring, collaborating, or want my resume? Send a note and I&apos;ll reply by email.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 max-w-2xl space-y-4">
        {/* Honeypot: hidden from people, bots fill it in */}
        <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="sr-only">Your name</span>
            <input name="name" required maxLength={100} placeholder="Your name" className={field} />
          </label>
          <label className="block">
            <span className="sr-only">Your email</span>
            <input name="email" type="email" required maxLength={200} placeholder="you@company.com" className={field} />
          </label>
        </div>
        <label className="block">
          <span className="sr-only">Company or team</span>
          <input name="company" maxLength={150} placeholder="Company or team (optional)" className={field} />
        </label>
        <label className="block">
          <span className="sr-only">Message</span>
          <textarea
            name="message"
            required
            rows={5}
            maxLength={3000}
            placeholder="What's the role, project, or question?"
            className={`${field} resize-none`}
          />
        </label>

        <div className="flex flex-wrap items-center gap-3 pt-1">
          <button type="submit" disabled={status === "sending"} className="btn-primary disabled:opacity-60">
            {status === "sending" ? "Sending…" : "Send message"}
          </button>
          <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" className="btn-secondary">
            LinkedIn ↗
          </a>
          <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="btn-secondary">
            GitHub ↗
          </a>
        </div>

        <p aria-live="polite" className="text-sm">
          {status === "sent" && <span className="text-emerald-400">Message sent. I&apos;ll get back to you soon.</span>}
          {status === "error" && <span className="text-red-400">{error}</span>}
        </p>
      </form>
    </section>
  );
}