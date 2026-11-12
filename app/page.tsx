import Image from "next/image";
import AskSweta from "@/components/AskSweta";
import Contact from "@/components/Contact";
import {
  profile,
  headshot,
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
  { label: "Ask my AI", href: "#ask" },
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

function Logo({ src, org }: { src?: string; org: string }) {
  const box = "flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-white/10";
  if (!src) {
    const initials = org
      .split(/[\s,]+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((w) => w[0])
      .join("")
      .toUpperCase();
    return <div className={`${box} bg-white/[0.04] text-sm font-semibold text-purple-300`}>{initials}</div>;
  }
  return (
    <div className={`${box} bg-white`}>
      <Image src={src} alt={`${org} logo`} width={48} height={48} className="h-full w-full object-contain" />
    </div>
  );
}

function RoleList({ roles }: { roles: Role[] }) {
  return (
    <ol className="space-y-5">
      {roles.map((r) => (
        <li key={r.org + r.title} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
          <div className="flex items-start gap-4">
            <Logo src={r.logo} org={r.org} />
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-lg font-semibold">{r.title}</h3>
                <span className="text-sm text-white/40">{r.dates}</span>
              </div>
              <p className="text-purple-300">
                {r.org}
                <span className="text-white/40">, {r.location}</span>
              </p>
            </div>
          </div>
          <ul className="mt-4 list-disc space-y-1.5 pl-5 leading-relaxed text-white/70 marker:text-white/25 md:pl-[5.25rem]">
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
          <div className="hidden gap-7 text-sm text-white/70 md:flex">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="transition-colors hover:text-white">
                {n.label}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <main id="top">
        {/* Hero: who I am on the left, photo on the right */}
        <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-16 pt-28 md:min-h-[90vh] md:grid-cols-[1.2fr_1fr] md:pt-20">
          <div className="rise">
            <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
              <span className="gradient-text">{profile.name}</span>
            </h1>
            <p className="mt-6 max-w-xl text-2xl text-white/90 md:text-3xl">{profile.tagline}</p>
            <p className="mt-4 max-w-md text-white/50">{profile.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#experience" className="btn-primary">See my experience</a>
              <a href="#ask" className="btn-secondary">Ask my AI about me</a>
            </div>
          </div>
          <div className="rise mx-auto w-full max-w-sm" style={{ animationDelay: "150ms" }}>
            <div className="rounded-3xl bg-gradient-to-br from-purple-400 to-pink-500 p-[2px] shadow-[0_0_80px_-30px_rgba(192,132,252,0.7)]">
              <Image
                src={headshot}
                alt={`Photo of ${profile.name}`}
                width={640}
                height={800}
                priority
                className="aspect-[4/5] w-full rounded-[calc(1.5rem-2px)] object-cover"
              />
            </div>
          </div>
        </section>

        <Section id="experience" title="Experience">
          <RoleList roles={experience} />
          <h3 className="mb-6 mt-16 text-xl font-semibold text-white/80">Research</h3>
          <RoleList roles={research} />
        </Section>

        <Section id="projects" title="Projects">
          <div className="grid gap-5 md:grid-cols-3">
            {projects.map((p) => (
              <div
                key={p.name}
                className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-purple-400/50"
              >
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-white/65">{p.blurb}</p>
                <p className="mt-4 text-xs text-white/40">{p.stack.join(", ")}</p>
                <div className="mt-4 flex gap-4 text-sm">
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noopener noreferrer" className="text-purple-300 transition-colors hover:text-pink-300">
                      Live demo ↗
                    </a>
                  )}
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className="text-white/60 transition-colors hover:text-white">
                    GitHub ↗
                  </a>
                </div>
              </div>
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
            <ul className="space-y-3">
              {involvement.map((i) => (
                <li key={i.org} className="flex items-center gap-3">
                  <Logo src={i.logo} org={i.org} />
                  <div>
                    <p className="text-white/85">{i.org}</p>
                    <p className="text-sm text-white/45">{i.role}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Section>

        <section id="ask" className="mx-auto max-w-3xl px-6 py-20">
          <h2 className="text-3xl font-bold md:text-4xl">Ask my AI about me</h2>
          <p className="mb-8 mt-3 max-w-xl text-white/60">
            Want more than the highlights? Ask about any role or project and get specifics: what I built, the tools, and the problems I solved.
          </p>
          <AskSweta />
        </section>

        <Contact />
      </main>

      <footer className="border-t border-white/5 px-6 py-8 text-center text-sm text-white/40">
        <p>Built with Next.js, TypeScript, Tailwind CSS, the Vercel AI SDK, and OpenAI. Deployed on Vercel.</p>
        <p className="mt-1">© 2026 Sweta Das</p>
      </footer>
    </>
  );
}