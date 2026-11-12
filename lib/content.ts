// One source of truth for the site AND the AI assistant.
// Update your resume → update this file → both stay in sync.

export const profile = {
  name: "Sweta Das",
  tagline: "I build AI tools people can trust.",
  intro: "CS + HCI at Virginia Tech, M.Eng. Dec 2027.",
  openTo: "Summer 2027 internships and co-ops in SWE, AI/ML, consulting, and data.",
  links: {
    linkedin: "https://www.linkedin.com/in/sweta-das-aaa201314",
    github: "https://github.com/swetadas251",
  },
};

export const headshot = "/headshot.jpg"; // file in /public

export const education = {
  summary:
    "Virginia Tech: B.S. Computer Science (Dec 2026) and M.Eng. Computer Science (Dec 2027), minors in Human-Computer Interaction and Mathematics.",
};

// Not shown on the page; the assistant uses it to answer deeper questions.
export const about = [
  "Works at the intersection of AI and human-computer interaction: building tools that are technically rigorous and actually usable.",
  "Teaching assistant for CS 3114 Data Structures & Algorithms, supporting 500+ students.",
];

export const coursework = [
  "Data Structures and Algorithms", "Data and Algorithm Analysis", "Database Management Systems",
  "Software Engineering", "Computer Systems", "Computer Organization I/II", "Human-Computer Interaction",
  "Linear Algebra", "Statistical Methods for Engineers", "Applied Combinatorics", "Discrete Structures",
  "Comparative Languages", "Technical Writing",
];

export const skills: Record<string, string[]> = {
  "AI & ML": ["OpenAI API", "LangChain", "Gemini", "PyTorch", "TensorFlow"],
  Languages: ["Python", "Java", "TypeScript", "JavaScript", "SQL", "C", "C++", "HTML/CSS"],
  "Web & Backend": ["React", "Next.js", "Node.js", "Express", "Flask"],
  "Data & Cloud": ["AWS", "PostgreSQL", "Supabase", "Linux", "GitHub", "Tableau", "Power BI", "Excel"],
  "Consulting & Forensics": ["Relativity", "Cellebrite", "SharePoint", "PowerPoint"],
};

export type Role = {
  org: string;
  title: string;
  location: string;
  dates: string;
  logo?: string; // file in /public/logos, e.g. "/logos/fti.png"
  points: string[];
};

export const experience: Role[] = [
  {
    org: "Virginia Tech, CS 3114",
    logo: "/logos/vt.png",
    title: "Undergraduate Teaching Assistant",
    location: "Blacksburg, VA",
    dates: "Aug 2026 – Present",
    points: [
      "Support 500+ students across 3 sections, debugging Java skip lists, PR quadtrees, buffer pools, and disk-based sorting.",
      "Grade projects and GenAI-ethics assignments on how students verify AI-generated code.",
    ],
  },
  {
    org: "FTI Consulting",
    logo: "/logos/fti.png",
    title: "Technology Consulting Intern",
    location: "Washington, D.C.",
    dates: "May 2026 – Aug 2026",
    points: [
      "Owned daily review reporting in Relativity for an Am Law 100 firm's active litigation: reviewer throughput, privilege breakdowns, and priority documents.",
      "Pitched AI workflow improvements to senior leadership, evaluating FTI GPT and IQ.AI for document analysis and retrieval.",
      "In simulated client engagements, owned the IT workstream of a 22-process post-merger governance assessment and built a forensic IP-theft timeline from a 237 GB disk image; presented to 200+ consultants.",
    ],
  },
  {
    org: "Legal Chain",
    logo: "/logos/legalchain.png",
    title: "AI Intern",
    location: "Newport Beach, CA (Remote)",
    dates: "Jul 2025 – May 2026",
    points: [
      "Built 3 production REST APIs generating court-ready contracts with GPT-4 and Supabase.",
      "Cut AI hallucinations 95% with a deterministic formatter: hashed seeds, clause-level verification, and legal guardrails.",
      "Integrated the CourtListener API for jurisdiction-specific case law; contributed to a Gemini-powered legal translation pipeline.",
    ],
  },
  {
    org: "theCoderSchool",
    logo: "/logos/thecoderschool.png",
    title: "Code Coach",
    location: "McLean, VA",
    dates: "Jul 2024 – Aug 2025",
    points: ["Coached 100+ K–12 students in Python, Java, and C++."],
  },
];

export const research: Role[] = [
  {
    org: "Virginia Tech",
    logo: "/logos/vt.png",
    title: "Research Assistant, LLM Evaluation & Human-Centered AI",
    location: "Blacksburg, VA",
    dates: "May 2025 – May 2026",
    points: [
      "Co-led an IRB-approved study on how consistently GPT-4o and Gemini 1.5 Pro simulate stakeholder feedback in UI design. Accepted to HCI International 2026.",
      "Built the preprocessing pipeline merging human and JSON-based LLM feedback.",
      "Won 1st Place People's Choice at the VT Undergraduate CS Research Symposium.",
    ],
  },
  {
    org: "OpenDSA",
    logo: "/logos/vt.png",
    title: "Educational Infrastructure Researcher",
    location: "Blacksburg, VA",
    dates: "May 2025 – Aug 2025",
    points: ["Engineered timezone-aware assignment scheduling for a Rails + JavaScript LMS serving 1000+ students."],
  },
];

export const projects = [
  {
    name: "StudySpark",
    blurb: "AI study tool that turns any topic into explanations, notes, flashcards, and quizzes, with JWT auth, guest mode, and an analytics dashboard.",
    stack: ["Next.js", "Express", "PostgreSQL", "OpenAI"],
    github: "https://github.com/swetadas251/studyspark12",
    live: "https://studyspark12.vercel.app",
  },
  {
    name: "CodeSync",
    blurb: "Real-time collaborative code editor with live cursors, chat, and sandboxed JS/Python execution.",
    stack: ["Next.js", "TypeScript", "Socket.io", "Monaco"],
    github: "https://github.com/swetadas251/codesync",
    live: "https://codesync-eight-pink.vercel.app",
  },
  {
    name: "TUNL",
    blurb: "CLI that exposes localhost to the internet over secure WebSocket tunnels with HTTPS URLs. Built from scratch in Go.",
    stack: ["Go", "WebSocket", "TLS"],
    github: "https://github.com/swetadas251/tunl",
    live: "",
  },
];

export const honors = [
  "HCI International 2026, paper accepted",
  "1st Place People's Choice, VT CS Research Symposium",
  "1st Place, L2Ork Tweeter Hackathon",
  "IC CAE Scholar",
  "Dean's List",
];

export const involvement = [
  { org: "Student Engineers' Council", role: "Professional Development Committee", logo: "/logos/sec.png" },
  { org: "VTHacks", role: "UI/UX Committee", logo: "/logos/vthacks.png" },
  { org: "Society of Indian Americans", role: "Membership Chair Advisor", logo: "/logos/sia.png" },
  { org: "Alpha Omega Epsilon", role: "Member", logo: "/logos/aoe.png" },
  { org: "Society of Women Engineers", role: "Member", logo: "/logos/swe.png" },
];

// Flattens everything above into plain text for the AI assistant's system prompt.
export function profileContext(): string {
  const lines: string[] = [
    `Name: ${profile.name}`,
    profile.tagline,
    ...about,
    `Education: ${education.summary}`,
    `Open to: ${profile.openTo}`,
    `Coursework: ${coursework.join(", ")}`,
    "",
    "SKILLS",
    ...Object.entries(skills).map(([k, v]) => `${k}: ${v.join(", ")}`),
  ];
  const roles = (heading: string, list: Role[]) => {
    lines.push("", heading);
    for (const r of list) {
      lines.push(`${r.title}, ${r.org} (${r.location}), ${r.dates}`);
      r.points.forEach((p) => lines.push(`- ${p}`));
    }
  };
  roles("EXPERIENCE", experience);
  roles("RESEARCH", research);
  lines.push("", "PROJECTS", ...projects.map((p) => `${p.name} (${p.stack.join(", ")}): ${p.blurb}`));
  lines.push("", "HONORS", ...honors.map((h) => `- ${h}`));
  lines.push("", "INVOLVEMENT", ...involvement.map((i) => `- ${i.role}, ${i.org}`));
  lines.push("", `LinkedIn: ${profile.links.linkedin}`, `GitHub: ${profile.links.github}`);
  return lines.join("\n");
}