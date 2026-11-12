import AskSweta from "@/components/AskSweta";
import Contact from "@/components/Contact";
import {
  profile,
  education,
  experience,
  research,
  projects,
  skills,
  honors,
  involvement,
  type Role,
} from "@/lib/content";

const nav = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-5xl px-6 py-20">
      <h2 className="mb-10 text-3xl font-bold md:text-4xl">{title}</h2>
      {children}
    </section>
  );
}

function RoleList({ roles }: { roles: Role[] }) {
  return (
    <ol className="space-y-10 border-l border-white/10">
      {roles.map((r) => (
        <li key={r.org + r.title} className="relative pl-6">
          <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-gradient-to-br from-purple-400 to-pink-500" />
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <h3 className="text-lg font-semibold">{r.org}</h3>
            <span className="text-sm text-white/40">{r.dates}</span>
          </div>
          <p className="text-purple-300">
            {r.title}
            <span className="text-white/40">, {r.location}</span>
          </p>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 leading-relaxed text-white/70 marker:text-white/25">
            {r.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
}

export default function Home() {
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#0a0a0f]/80 backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="text-lg font-semibold">
            <span className="gradient-text">sweta</span>
            <span className="text-white/60">.das</span>
          </a>
          <div className="hidden gap-7 text-sm text-white/70 sm:flex">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="transition-colors hover:text-white">
                {n.label}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <main id="top">
        {/* Hero: who I am on the left, the AI assistant on the right */}
        <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-16 pt-28 md:min-h-screen md:grid-cols-[1.1fr_1fr] md:pt-20">
          <div className="rise">
            <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
              <span className="gradient-text">{profile.name}</span>
            </h1>
            <p className="mt-6 max-w-xl text-xl leading-relaxed text-white/85">{profile.tagline}</p>
            <p className="mt-4 max-w-xl text-white/50">{education.summary}</p>
            <p className="mt-2 max-w-xl text-white/50">Open to {profile.openTo.charAt(0).toLowerCase() + profile.openTo.slice(1)}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#experience" className="btn-primary">See my experience</a>
              <a href="#contact" className="btn-secondary">Get in touch</a>
            </div>
          </div>
          <div className="rise" style={{ animationDelay: "150ms" }}>
            <AskSweta />
          </div>
        </section>

        <Section id="experience" title="Experience">
          <RoleList roles={experience} />
          <h3 className="mb-8 mt-16 text-xl font-semibold text-white/80">Research</h3>
          <RoleList roles={research} />
        </Section>

        <Section id="projects" title="Projects">
          <div className="grid gap-5 md:grid-cols-3">
            {projects.map((p) => (
              <a
                key={p.name}
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-purple-400/50"
              >
                <h3 className="text-lg font-semibold transition-colors group-hover:text-purple-300">{p.name} ↗</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-white/65">{p.blurb}</p>
                <p className="mt-4 text-xs text-white/40">{p.stack.join(", ")}</p>
              </a>
            ))}
          </div>
        </Section>

        <Section id="skills" title="Skills">
          <dl className="space-y-5">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="grid gap-2 md:grid-cols-[200px_1fr] md:items-center">
                <dt className="text-white/50">{category}</dt>
                <dd className="flex flex-wrap gap-2">
                  {items.map((s) => (
                    <span key={s} className="skill-tag">{s}</span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section id="recognition" title="Recognition & involvement">
          <div className="grid gap-10 md:grid-cols-2">
            <ul className="space-y-2 text-white/75">
              {honors.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
            <ul className="space-y-2 text-white/75">
              {involvement.map((i) => (
                <li key={i.org}>
                  {i.org} <span className="text-white/40">({i.role})</span>
                </li>
              ))}
            </ul>
          </div>
        </Section>

        <Contact />
      </main>

      <footer className="border-t border-white/5 px-6 py-8 text-center text-sm text-white/40">
        <p>Built with Next.js, TypeScript, Tailwind CSS, the Vercel AI SDK, and OpenAI. Deployed on Vercel.</p>
        <p className="mt-1">© 2026 Sweta Das</p>
      </footer>
    </>
  );
}