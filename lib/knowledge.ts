// Deep-dive notes the AI assistant uses to answer detailed questions.
// NOT shown on the page, but the assistant can repeat anything here to anyone,
// so only write what you'd be comfortable saying in an interview.
//
// HOW TO FILL IN: paste each brief between the backticks.
// Empty sections are skipped automatically.
// If a brief contains a backtick (`) or the characters ${ , delete them first.

export const knowledge: Record<string, string> = {
  "FTI Consulting, Technology Consulting Intern (May–Aug 2026)": `
FTI CONSULTING: TECHNOLOGY CONSULTING INTERN (Washington, D.C.), May to August 2026

THE ORGANIZATION AND WHERE SHE FIT
FTI Consulting is a global business advisory firm. Its Technology segment handles e-discovery, digital forensics, and information governance: locating, processing, and analyzing electronic data for litigation, investigations, and regulatory matters. Sweta spent ten weeks as a Technology Consulting Intern at the Washington, D.C. headquarters, rotating through three practice areas while also contributing to live client engagements.
Important framing: the client reporting and workspace work were LIVE client matters. The digital forensics and information governance rotations were structured training engagements with simulated clients and real tooling. Always describe them that way.

CLIENT REPORTING AND PRODUCTION SUPPORT (live client work)
For an active litigation matter at an Am Law 100 law firm, Sweta owned daily review-progress reporting. A team of contract reviewers was reading collected documents and coding each for relevance, attorney-client privilege, and case significance. Each day she extracted current data from Relativity, the industry-standard e-discovery platform, and built tables covering per-reviewer document counts, responsiveness and privilege breakdowns, and counts of documents flagged as significant. This gave the supervising associates a standing read on review pace and coverage without reconstructing it themselves.
She also built search term reports: running counsel's proposed keyword lists and reporting hit counts per term, both standalone and with document families included, so counsel could judge which terms were usefully narrow.
On the production side (documents formally delivered to opposing counsel), she compiled and circulated production summaries documenting Bates number ranges, document and image counts, native versus placeholder files, redaction counts, total size, and run date. She audited production volumes against project records to catch discrepancies before delivery.

WORKSPACE RECONCILIATION AND DATA CORRECTION (live client work)
On a separate client matter, the task was parity between two document workspaces. Sweta audited field values, saved searches, and filter conditions in the client's workspace and rebuilt the missing equivalents in FTI's environment, reconciling naming and data-type mismatches so queries returned consistent results across both systems. She also authored saved searches that segmented the corpus into review batches by file type (voicemail families, multimedia, images split by size, other non-searchables, oversized files, chat messages, hard copy, email contacts) so each category routed to reviewers with the correct handling.
The same engagement included a field-mapping inconsistency affecting roughly 3.3 million records. She ran the bulk correction that standardized the affected field values, restoring searchability to previously unqueryable documents.

DIGITAL FORENSICS ROTATION (simulated investigation, real tooling)
In a simulated IP-theft investigation with fictional parties, Sweta analyzed a 237.86 GB NTFS forensic image of a departing employee's corporate laptop, alongside a mobile device image and an external drive. Using Cellebrite and Windows forensic tooling, she recovered deleted SMS from the phone's message database, email store contents, Windows Security event logs, Recycle Bin entries, and file system metadata.
She established exfiltration by comparing MD5 and SHA-1 hashes across two versions of a prototype document, tying a renamed copy to a cloud-synced export archive. She identified anti-forensic activity (altered Windows auditing settings, searches for permanent deletion methods, USB device connection, and execution of a file-wiping utility) and sequenced everything into a chronological timeline with all timestamps normalized to UTC, corroborating each finding against multiple independent artifacts. The engagement followed real legal protocol, including obtaining written authorization from counsel before collecting from a personal device.

INFORMATION GOVERNANCE ROTATION (simulated post-merger assessment)
For a simulated post-merger assessment, a team scored 22 business processes across Legal, Privacy, and IT against a four-level capability maturity framework, with findings plotted on an impact-by-likelihood risk matrix. Sweta owned the IT workstream: cloud computing, storage alignment, disposal and decommissioning, legacy data management, and data source cataloging. She conducted stakeholder interviews with Managing Directors playing client roles, compiled a documentation register cataloging policies and standards to surface retention and classification gaps, and drafted remediation recommendations covering centralized backup audit, storage platform consolidation, defensible deletion workflows, and unified retention governance.
Across the three rotations, she presented to a combined 200+ consultants firm-wide.

PROBLEMS AND HOW SHE SOLVED THEM
- Written policy versus actual practice. In governance interviews, stated policy rarely matched operations. Rather than working through a question list, she went in knowing what evidence would distinguish the two (whether a process was documented, followed, and auditable) and pushed past "we have a policy for that" to who verifies it. Where answers stayed vague, she went back for clarification rather than guessing at a score she couldn't defend.
- Cross-system inconsistency. Equivalent-looking fields across two workspaces behaved differently. She traced mismatches at both the structural level (search and condition definitions) and the data level before correcting.
- Evidence reliability. Single artifacts can mislead, so forensic findings were corroborated across independent sources before entering the timeline.

SKILLS AND INTERVIEW HIGHLIGHTS
Query construction against multi-million-record datasets; data extraction and reporting in Relativity; data reconciliation and QC; forensic artifact analysis and hash verification; stakeholder interviewing; maturity-framework scoring; translating technical findings for non-technical audiences.
The two strongest stories: the 3.3M-record field-mapping fix (scale, diagnosis, defensible outcome) and the forensic timeline (multi-source correlation).

LIKELY RECRUITER QUESTIONS
Q: Was this technical?
A: Yes: query logic, large-scale data correction, and forensic artifact analysis. It wasn't SQL or Python work; her SQL and Python come from her coursework, research, and projects.
Q: Real clients or training?
A: Both. The reporting and workspace work were live client matters; forensics and governance were structured training engagements with simulated clients and real tooling.
Q: What does e-discovery mean?
A: Narrowing millions of collected documents down to the ones that matter in a case, then delivering them in a defensible, documented form.
Q: What was the biggest thing she owned?
A: The IT workstream of the governance assessment, end to end, from interviews through recommendations.
Q: What was hardest?
A: Distinguishing documented process from actual practice in stakeholder interviews.
`,

  "Legal Chain, AI Intern (Jul 2025–May 2026)": `
LEGAL CHAIN: AI INTERN (Newport Beach, CA, remote), July 2025 to May 2026

ORGANIZATION AND TEAM
Legal Chain is an AI-powered legal technology startup building tools that automate contract generation, document analysis, and legal research. The platform helps businesses generate court-ready documents like NDAs and service contracts, review existing contracts for risk, and translate legal documents across jurisdictions while preserving legal meaning.
Sweta joined as one of the startup's first three engineering interns and worked across the full stack: backend services, frontend interfaces, database schemas, and DevOps configuration. She collaborated directly with founders, engineers, and legal professionals to define requirements and ship production-ready features.

PROJECTS AND CONTRIBUTIONS

Contract generation APIs
Sweta built three production-grade REST APIs that generate jurisdiction-appropriate legal documents. The system pulls from clause templates tailored to California, New York, and Texas law, assembles them based on user inputs, and produces complete contracts. She used OpenAI GPT-4 for text generation and Supabase (PostgreSQL) for data persistence.

Deterministic contract formatter
The core technical challenge was making AI output reliable enough for legal use. Generative AI can produce text that sounds authoritative but contains fabricated clauses or nonexistent case citations. Sweta built a verification pipeline that breaks documents into smaller components rather than treating the output as one black box. The system uses hashed seeds for reproducibility, clause-level checks against known-good templates, and legal guardrails that flag unusual output. This reduced hallucinations by about 95%.

Case law integration
Sweta integrated CourtListener, a U.S. case law database, into the contract generation workflow. When the system generates a contract, it can enrich the document with relevant legal precedents based on jurisdiction and keywords.

Global translation pipeline
Sweta contributed to a multilingual translation feature using Google Gemini for translation and OpenLaws for validation. The system flags high-risk terms that might lose legal meaning when translated, and supports 25+ languages with automated risk flagging.

Database and backend infrastructure
Sweta worked with Prisma ORM and PostgreSQL, including the core data models for users, documents, analysis results, and audit logs. She worked with role-based access control (separate roles for regular users, admins, attorneys, and small businesses) and audit-logging middleware that tracks document uploads, deletions, and legal reviews for compliance.

Route and controller debugging
Sweta debugged and fixed critical backend issues in the document management system: she removed an overly restrictive admin-only permission on uploads, added a missing review endpoint that had never been wired up, and fixed port configuration mismatches. She also traced a crash to a missing NLP dependency (the compromise library) required by the legal review controller for text analysis: extracting verbs, identifying legal terms, and detecting contract issues.

PROBLEMS AND SOLUTIONS
- Permission misconfiguration: document upload worked for admins but silently failed for regular users. An admin-only restriction set during early development had been forgotten. Sweta traced the issue through the routes, found the admin-only middleware blocking uploads, and removed it so any authenticated user could upload.
- Missing route wiring: the legal review feature had a working controller but no route pointing to it, so the review endpoint simply didn't exist. Sweta added the route and connected it to the existing controller.
- External API instability: the translation feature broke with a 404 error. After systematically checking API keys, endpoints, and configuration, Sweta found that Google had deprecated the Gemini model name (gemini-1.5-flash to gemini-2.0-flash). A one-line fix, but finding it meant ruling out every other cause first.
- Missing dependencies: the legal review endpoint crashed on import because the compromise NLP library wasn't installed. Sweta identified the missing package and documented the fix for the team.

SKILLS DEVELOPED
Full-stack development (Node.js, Express, React, Next.js, TypeScript); databases (PostgreSQL, Supabase, Prisma ORM, schema design); AI/ML integration (OpenAI GPT-4, Google Gemini, prompt engineering); external APIs (CourtListener, OpenLaws); auth and security (JWT middleware, role-based access control, audit logging); debugging across routes, controllers, and dependencies; cross-functional collaboration with legal professionals to define correct output.

LIKELY RECRUITER QUESTIONS
Q: What was the hardest technical problem?
A: Making AI output reliable for legal use. She built a clause-level verification system with hashed seeds and legal guardrails that reduced hallucinations by 95%.
Q: Tell me about a bug she fixed.
A: Document upload was failing silently for non-admin users. She traced it through the routes, found an unnecessary admin restriction left over from early development, and removed it. She also discovered the review endpoint wasn't wired up at all: the controller existed but had no route pointing to it.
Q: How did she work with non-technical stakeholders?
A: Regular check-ins with lawyers who reviewed AI output and flagged legal nuances, such as when "shall" vs. "will" carries different legal weight in certain jurisdictions.
Q: What's the tech stack?
A: Node.js/Express backend, React/Next.js frontend, PostgreSQL with Prisma ORM, OpenAI and Gemini for AI, deployed on Vercel and Render.
`,

  "Virginia Tech CS 3114, Undergraduate Teaching Assistant (Aug 2026–Present)": `
SWETA DAS: UNDERGRADUATE TEACHING ASSISTANT, VIRGINIA TECH
CS 3114 Data Structures and Algorithms, August 2026 to Present

OVERVIEW
Sweta is an Undergraduate Teaching Assistant (UTA) for CS 3114, Data Structures and Algorithms, a core Java course in the Virginia Tech Computer Science major. The course enrolls 400 to 500+ students across 3 lecture sections, and Sweta is one of 16 TAs, a mix of undergraduate and graduate TAs who work under the course instructor. Students build four large Java projects that are autograded on Web-CAT, a platform that scores correctness, test coverage, and mutation testing. They also complete OpenDSA online exercises, quizzes, two midterms, a final, and a series of GenAI and ethics reflection assignments. Sweta's role sits between the students and the instructor. She helps students debug and understand their code, answers questions on the course forum, grades projects and written assignments, and proctors exams.

COURSE CONTENT SHE SUPPORTS
Lists (array-based and linked), algorithm analysis (Big-O, Omega, Theta, recurrences), skip lists, heaps and priority queues, sorting (insertion, bubble, selection, merge, quick, heap, bin, radix), PR quadtrees, file processing (buffer pools, LRU/FIFO/LFU replacement, dirty bits), disk-based sorting, and hashing.

PROJECTS AND TASKS

Project 1 support: Spatial Rectangle Database (Skip List)
What students built: a command-driven database of rectangles stored in a generic skip list. The architecture runs SkipListProject, then CommandProcessor, then Database, then SkipList, then Rectangle/KVPair.
What Sweta did:
- Before office hours opened, she analyzed all 11 starter Java files, the lecture slides, the syllabus, the project specs, the reference output files, and forum threads so she could answer questions quickly and accurately.
- She found a defect in the starter code: the SkipNode constructor had the data assignment commented out, so records were silently stored as null. She flagged it before students ran into it.
- She documented the exact output formats for all seven commands, since Web-CAT string-matches output. She also documented edge-case rules, such as intersections using strict comparisons so that rectangles sharing only a border don't count as intersecting.
- She mapped where lecture terminology differed from the starter code, which is a predictable source of confusion. For example, SkipNode is a private inner class in the starter but top-level in lecture, the accessor names differ, and the starter uses a different iterator idiom.
- In live office hours she debugged real cases. One student's mutation testing was blocked by two failing starter tests. Another had untested intersection logic and output formatting errors.
Tools: Java, JUnit, Web-CAT, mutation testing, the Eclipse formatter, OpenDSA.

Project 2 support: PointsDB (Skip List + PR QuadTree)
What students built: a 2D point database combining a skip list for name lookups with a PR quadtree for spatial queries, using design patterns such as Flyweight for empty leaves and Composite for traversal.
What Sweta did:
- She identified ambiguities in the spec before students hit them: quadrant orientation, region-search rejection rules, point ordering after merges, error message formats, and dump formatting.
- She drafted forum answers on reusing Project 1 code, milestone requirements, static vs. non-static inner class errors, partner submission policy, and midterm scope.
- She graded Project 2 submissions against a standardized rubric. Every grade followed instructor policy on late penalties, extensions, accommodations, and edge cases such as submissions to the wrong project.

Project 3 support: External Quicksort with a Buffer Pool
What students built: an in-place quicksort over a binary file on disk, accessed through a buffer pool of 4096-byte blocks with LRU replacement, dirty bits, and counters for cache hits, disk reads, and disk writes.
What Sweta did:
- She wrote an office-hours reference covering the mental model (the file acts as the array), the recommended layering (the sorter knows nothing about blocks, and the buffer pool knows nothing about records), and performance tips for timed tests.
- She catalogued the bugs students were most likely to hit: forgetting to flush dirty buffers; writing back clean blocks, which inflates the write count; sign-extension errors when decoding keys from bytes; swapping only the key instead of the full record; stale buffer references when only one buffer is available; quicksort degrading to O(n^2) on duplicate-heavy data; tests corrupting their own input files.
- She listed spec questions that needed an instructor ruling and escalated them instead of guessing, such as whether the timed region includes the final flush and whether the stats file has an exact format.

Grading GenAI and ethics assignments
- She graded one-page essays connecting course topics to ethics (for example, the environmental impact of algorithms and fairness in priority-queue systems) in Canvas SpeedGrader.
- She used a 4-point rubric with two criteria, Identify Ethical Issues and Defend Ethical Positions, each scored as Developing, Competence, or Advanced.
- One assigned batch was 22 submissions. She wrote a personalized feedback comment for each student.
- She flagged irregularities, such as identical submissions or internal factual inconsistencies, to the instructor through the proper process.

Forum (Piazza) support
- She answered student questions and drafted replies that she checked against the syllabus and instructor rulings before posting.
- She tracked instructor rulings so her answers stayed consistent, for example where the AI-disclosure statement goes, that milestone grading uses any qualifying submission, and that project style is graded project-wide.

Exam proctoring
- She proctored a midterm, volunteered for a makeup exam, and signed up for Midterm 2 proctoring.

PROBLEMS AND HOW SHE SOLVED THEM
- Silent data loss in the starter code. Students' skip lists stored nothing, and there were no errors to explain why. Sweta traced it to a commented-out assignment in a constructor and prepared a plain-language explanation for office hours.
- Conflicting course materials. The lecture, the starter documentation, and the starter code disagreed on the minimum level returned by the skip list's random-level function, and the starter's own test contradicted the starter code. She escalated it to the instructor rather than giving students an answer that might later be overruled. She handled other conflicts the same way, including policy text that contradicted the syllabus.
- Mutation testing scoring 0% despite high coverage. The cause was student tests creating new temp files on the Web-CAT server. She turned this into guidance for the file-heavy Project 3: write to a fixed filename or a copied test file, and clean up afterward.
- Conflicting guidance on essay length. Answers on the forum disagreed about whether "one page" was a minimum or a limit. She tracked the threads until the instructor confirmed it was a minimum, then gave students one clear answer.
- An unsafe workaround posted by a student. When a student posted a way around a paywall for a required reading, she advised against endorsing it in an official answer. She drafted an alternative that pointed students to the university library and asked the instructor to post an accessible copy.
- Unreliable scope references. When the schedule links for a midterm topic turned out to point to the wrong page, she used the annotated lecture slides as the more reliable guide to what the exam covered.
- Accuracy before posting. She checked draft answers against instructor rulings before posting and caught incorrect claims, such as what a milestone actually required, before they reached students.

SKILLS BUILT
Debugging and root-cause analysis of other people's code under time pressure; deep Java and data-structures knowledge (skip lists, PR quadtrees, buffer pools, external sorting, hashing); software testing (JUnit, code coverage, mutation testing, autograder diagnostics); code review and rubric-based evaluation of design, readability, and testing; technical communication, turning complex concepts into plain-language explanations for students at different levels; judgment and escalation, knowing what she can answer, what the materials support, and what needs an instructor ruling; proactive preparation, reading through materials ahead of time to anticipate problems; coordinating within a 16-person TA team on grading policy and logistics.

WHAT TO HIGHLIGHT IN AN INTERVIEW
- She caught the starter-code bug before it reached students: a confused student, a "saving" bug that wasn't the student's fault, the root cause found, and a reusable explanation.
- She escalates instead of guessing when sources conflict, which shows integrity and sound judgment.
- She diagnoses mutation-testing failures, which shows an understanding of testing beyond "the tests pass."
- She works at scale: 400 to 500+ students, 3 sections, a 16-TA team.

LIKELY RECRUITER QUESTIONS
Q: What does a TA for this course actually do?
A: She runs weekly office hours debugging student Java code, answers questions on the course forum, grades programming projects and ethics assignments against rubrics, and proctors exams.
Q: How big is the course?
A: 400 to 500+ students across 3 lecture sections, supported by 16 TAs.
Q: What's a challenging problem you solved?
A: She found a bug in the provided starter code that made students' programs silently store nothing. She traced it to a single commented-out line and prepared an explanation before students got stuck.
Q: How do you handle a question you're not sure about?
A: She checks the syllabus, the spec, and past instructor rulings first. If the materials conflict, she escalates to the instructor instead of guessing, so students get one consistent answer.
Q: What technical skills did this role strengthen?
A: Java, JUnit, test coverage and mutation testing, debugging, and code review, along with data structures like skip lists, quadtrees, and buffer pools.
Q: How do you explain technical concepts to people at different levels?
A: She starts from a simple mental model, such as "the file is the array," and connects lecture terminology to the code students are actually looking at.
Q: How do you grade fairly?
A: She uses standardized rubrics, applies instructor policy consistently on lateness, extensions, and accommodations, writes specific feedback for each student, and flags irregularities through the proper channel.
Q: What did you learn about teamwork?
A: Working on a 16-person TA team meant coordinating grading policy, sharing fixes for common issues, and keeping student-facing answers consistent.
`,

  "LLM Evaluation Research, HCI International 2026 (May 2025–May 2026)": `
LLM EVALUATION RESEARCH: RESEARCH ASSISTANT, VIRGINIA TECH (May 2025 to May 2026)
Paper: "Are You Still the Same User? Evaluating the Consistency of Large Language Models as Simulated Stakeholders in Iterative Design." Accepted to HCI International 2026. Won 1st Place People's Choice at the VT Undergraduate CS Research Symposium.

TEAM AND SWETA'S ROLE
A six-author student research team at Virginia Tech advised by Dr. Sehrish Basir Nizamani; the first author is Khyati Goyal. Sweta is a co-author. She co-led the IRB-approved study and developed the Python data preprocessing pipeline that merged human survey responses with JSON-formatted LLM feedback into one analysis-ready dataset. She presented the findings at the VT Undergraduate CS Research Symposium.

THE QUESTION
Design teams need consistent stakeholder feedback across design iterations, but recruiting real stakeholders repeatedly is slow and expensive. The study asked whether large language models can act as reliable stand-in ("surrogate") stakeholders when comparing UI designs: Do they agree with humans? Do they give the same answer when asked again? And do they reason about designs the way people do?

STUDY DESIGN
- Nine high-fidelity dashboard mockups from open-source Figma files: three domains (an Educator dashboard, a Patient health app, a Productivity tool), each with three alternative designs (A, B, C).
- Each domain had its own rubric of 7 to 8 criteria (for example clarity, organization, navigation, sense of control, workload overview, goal alignment), rated on 1-to-5 Likert scales, plus open-ended feedback on strengths, weaknesses, and redesign ideas.
- Humans: 24 evaluators with usability, HCI, or interface design experience, 8 per domain, each rating all three designs in their domain (72 evaluations). Sessions ran 45 to 60 minutes with electronic consent.
- LLMs: GPT-4o and Gemini 1.5 Pro, each prompted to adopt the persona (educator, patient, productivity user) and use the identical rubric, returning results in a fixed JSON schema. Each model evaluated every design in three independent fresh sessions to test reproducibility (54 evaluations).
- Total dataset: 126 evaluations.

DATA PIPELINE AND ANALYSIS
- Python preprocessing pipeline: normalized rubric column names, cleaned ranking formats, removed design identifiers, and annotated each row with evaluator type, model identity, and trial number.
- Pattern alignment: cosine similarity between mean rating vectors, measuring whether humans and LLMs rank criteria the same way regardless of absolute scores.
- Magnitude alignment: Cohen's d on overall design scores, measuring systematic differences in how high or low each group scores.
- Ranking agreement: a modal agreement coefficient adapted from Fleiss' Kappa for within-group consensus on the top design, and Kendall's Tau-b for agreement between groups.
- Qualitative analysis: TF-IDF theme extraction (top 15 bigram/trigram themes) compared with Jaccard similarity, plus evaluation-style metrics: word counts, first-person pronoun frequency via regex, and vocabulary richness.

KEY FINDINGS
- Strong pattern alignment: cosine similarity between human and LLM ratings exceeded 0.96 in every domain. LLMs identified the same design strengths and weaknesses as humans. GPT-4o and Gemini agreed with each other even more closely (above 0.98).
- Systematic scoring differences: Cohen's d of 0.9 to 1.1 (a large effect). LLMs use a different internal scoring scale than people, so their absolute scores need calibration.
- High reproducibility: the same model re-evaluating the same design in fresh sessions produced stable patterns, so the differences from humans are systematic, not random.
- Different vocabulary, similar conclusions: theme overlap between humans and LLMs was only 0 to 3.45% (Jaccard), even though both groups judged design quality similarly. Humans said things like "teaching workflow"; Gemini said "lesson planning."
- Style differences: humans used 1.8 to 4.3 first-person pronouns per comment, while LLMs used none, even when told to adopt a persona. Gemini wrote the longest comments (109 to 123 words), GPT the shortest (38 to 45), humans in between (78 to 103).
- Top-choice disagreement: for the Educator dashboard, 75% of humans picked Design A, GPT unanimously picked B, and Gemini mostly picked C (Kendall's tau between the two models: -0.778). For the Patient app, both LLMs chose C while 75% of humans chose A. Productivity preferences were most split among humans (A/C tie).

TAKEAWAY
LLMs are good at answering "which design is better?" (A/B comparisons, tracking changes across versions) but less reliable for "is this design good enough?" They should augment human evaluators, with score calibration and human oversight, not replace them.

LIMITATIONS THE PAPER NAMES
The modal agreement coefficient approximates full Fleiss' Kappa; averaging pairwise Kendall's Tau inflates the effective sample size; and exact-phrase TF-IDF matching likely underestimates conceptual overlap when people and models use different words for the same idea. Future work: calibrating LLM scores to human anchors, prompting for more experiential first-person feedback, and longitudinal studies across real design iterations.

SKILLS
Human-subjects research under IRB; experimental design (within-subjects, multi-run reproducibility); prompt engineering with persona conditioning and structured JSON output; Python data pipelines; statistics (cosine similarity, Cohen's d, Fleiss-style agreement, Kendall's Tau-b); NLP text analysis (TF-IDF, Jaccard similarity, regex); academic writing and presenting research.

LIKELY RECRUITER QUESTIONS
Q: What was the research about?
A: Whether LLMs like GPT-4o and Gemini can stand in for real users when evaluating UI designs, and how consistent they are when asked repeatedly.
Q: What did you find?
A: LLMs matched humans on which design features were strong or weak (cosine similarity above 0.96) and were reproducible across runs, but scored on a different scale (Cohen's d around 1) and never spoke from personal experience. They're useful for comparing designs, not for judging whether a design is good enough on its own.
Q: What was her role?
A: She co-led the study and built the Python preprocessing pipeline that combined human survey data with the LLMs' JSON output for analysis, and presented the work at the VT CS Research Symposium.
Q: How big was the study?
A: 126 evaluations: 72 from 24 human evaluators and 54 from GPT-4o and Gemini 1.5 Pro across three independent runs each.
Q: Is it published?
A: It was accepted to HCI International 2026.
`,

  "OpenDSA, Educational Infrastructure Researcher (May–Aug 2025)": `
OPENDSA: EDUCATIONAL INFRASTRUCTURE RESEARCHER, VIRGINIA TECH (May to August 2025)

ORGANIZATION AND ROLE
OpenDSA is an open-source computer science education platform associated with Virginia Tech. It provides interactive learning materials covering data structures, algorithms, formal languages, finite automata, and programming languages, with visualizations, programming exercises, proficiency exercises, and knowledge-check questions. The platform supports 1,000+ students.
Sweta worked on the OpenDSA-LTI application, a Ruby on Rails learning management system integration, and its instructor-facing administration and book configuration interfaces. Rather than developing educational content, she focused on platform reliability, assignment scheduling, administrative usability, and the development environment.

PROJECTS AND TECHNICAL CONTRIBUTIONS

1. Timezone-aware assignment scheduling (her primary contribution)
Problem: the assignment date picker did not properly account for instructors' timezones. An instructor entering an 11:00 PM Eastern deadline could have that value interpreted incorrectly when the application converted or stored timestamps.
Her work:
- Investigated the assignment configuration interface and its JavaScript datetime picker.
- Identified that users already had timezone information stored in their OpenDSA accounts, and connected that account timezone to the instructor-facing configuration interface.
- Worked with Moment.js, Moment Timezone, and the Bootstrap datetimepicker; debugged date formatting, timezone initialization, and rendering behavior.
- Addressed frontend issues caused by interactions between existing JavaScript components and third-party date libraries.
The goal: instructors enter deadlines in their own timezone while the application handles UTC conversion automatically, including daylight saving time (for example, 11:00 PM Eastern Daylight Time is 3:00 AM UTC the next day).
Technologies: JavaScript, Ruby on Rails, HAML, jQuery, Moment.js, Moment Timezone, Bootstrap datetimepicker.

2. Admin interface improvements (ActiveAdmin)
She was assigned and investigated several instructor/admin usability improvements in the Rails ActiveAdmin interface: replacing a list-based user search on the LMS Accesses page with a direct search by username and narrowing table columns; reducing or removing the Email and Avatar columns on the Users page; and deleting book instances without reloading the whole admin display. This meant working within an older ActiveAdmin version whose capabilities differed from current documentation. Describe this as work she investigated and worked on, not as confirmed shipped features.

3. Local development and infrastructure debugging
She ran OpenDSA and OpenDSA-LTI locally with the OpenDSA-DevStack repository and Docker Compose: starting and rebuilding containerized services, troubleshooting reverse-proxy errors (HTTP 404 and Bad Gateway), investigating Rails database migrations and initialization, working with MySQL dependencies and seed data, diagnosing JavaScript runtime errors in Chrome DevTools, and investigating asset-loading order and frontend library compatibility.
Technologies: Docker, Docker Compose, Ruby on Rails, MySQL, Git, GitHub, JavaScript, Chrome DevTools.

PROBLEMS AND DEBUGGING
- Timezone library initialization: a JavaScript TypeError because moment.tz was undefined when the app tried to set a default timezone. She investigated whether Moment Timezone loaded correctly and whether scripts executed in the right order.
- Broken date picker behavior: during the timezone integration, the picker started showing unexpected historical dates, lost its AM/PM behavior, and sometimes failed to show selected dates. She investigated initialization settings, date formats, and compatibility between the date libraries.
- Database initialization failures: migration-state inconsistencies, duplicate database indexes, and foreign-key conflicts in LMS-related tables. She used Rails database commands and Docker troubleshooting to get to a working development environment.
- Legacy dependencies: older versions of ActiveAdmin and JavaScript libraries meant reconciling current documentation with the versions actually installed.

SKILLS AND INTERVIEW HIGHLIGHTS
Full-stack work in an established legacy codebase; JavaScript, Ruby on Rails, timezone handling, frontend/backend integration, Docker, MySQL, and third-party library troubleshooting.
Strongest story: the timezone-aware scheduling work, which required understanding account data, frontend date handling, backend timestamp behavior, and daylight saving time. Second story: diagnosing interconnected failures in a containerized Rails application instead of treating each error in isolation. The role also shows user-centered engineering: making instructor workflows more accurate and reliable.

LIKELY RECRUITER QUESTIONS
Q: What did Sweta do at OpenDSA?
A: She worked on educational platform infrastructure: mainly timezone-aware assignment scheduling, plus admin interface improvements and debugging a containerized Ruby on Rails application.
Q: What was her biggest contribution?
A: Timezone-aware assignment scheduling, so instructors could set deadlines in their own account timezone instead of manually calculating UTC offsets.
Q: What technologies did she use?
A: Ruby on Rails, JavaScript, jQuery, HAML, Moment.js, Moment Timezone, Docker, Docker Compose, MySQL, Git, and browser debugging tools.
Q: What was the most challenging technical problem?
A: Integrating timezone-aware behavior into an existing date picker without breaking formatting, date selection, or rendering, which meant debugging several interacting JavaScript libraries.
Q: Frontend or backend?
A: Both. Her work connected frontend scheduling interfaces to account timezone data and the Rails backend.
Q: What was the scale?
A: The platform serves 1,000+ students. There's no recorded performance metric or exact count of affected assignments.
Q: What did she learn?
A: Maintaining legacy software, troubleshooting complex development environments, integrating third-party libraries, and translating instructor usability problems into technical fixes.
`,

  "theCoderSchool, Code Coach (Jul 2024–Aug 2025)": `
`,

  "StudySpark (project)": `
STUDYSPARK: SOLO PERSONAL PROJECT (full-stack AI study tool, October 2025)

WHAT IT IS
StudySpark is a full-stack web app that works like an AI study assistant. A student types any topic (for example "photosynthesis" or "quantum mechanics") and picks one of four modes:
- Explain Simply: a student-friendly AI explanation of the topic
- Study Notes: structured notes
- Flashcards: a set of cards shown one at a time in a carousel, with previous/next controls
- Quiz Me: a multiple-choice quiz (for example "Question 1 of 4" with options A to D)
Users can create an account and log in, or use guest mode to try the features without signing up (a banner prompts guests to sign up to save progress and see analytics). Logged-in users get an analytics dashboard with summary stat cards, an activity-over-time line chart, a donut chart of which features they use, a bar chart of top topics, and a table of recent study sessions.

WHY SHE BUILT IT
She wanted a learning tool that feels like a real assistant during late-night study sessions. It's designed around real student friction: confusion, time pressure, and needing quick practice and review.

TECH STACK
- Frontend: Next.js (App Router), TypeScript, Tailwind CSS, Chart.js with react-chartjs-2.
- Backend: Node.js and Express, PostgreSQL hosted on Neon, Prisma for database access, JWT authentication middleware, and the OpenAI API (GPT-3.5), called server-side only so the API key never reaches the browser.
- Deployment: frontend on Vercel, backend on Render, database on Neon. The repo (swetadas251/studyspark12) is a monorepo with separate frontend and backend folders.

ARCHITECTURE
- The Next.js UI calls the Express API through a configurable base URL environment variable, so the same frontend can point at a local or deployed backend.
- Auth uses JWT: after login the token is stored client-side and sent with each request as an Authorization: Bearer header, and backend middleware verifies it.
- The backend uses PostgreSQL for user accounts.
- An analytics endpoint records per-user activity (topics studied and features used), which feeds the dashboard. Analytics are currently stored in memory rather than in the database, so they reset when the backend restarts. Moving them into Postgres is the natural next step.

RECRUITER-READINESS WORK
She reworked the README with side-by-side screenshots ordered flashcards, then quiz, then analytics for visual impact, added "What it does", "Why I built it", "Tech Stack", and "Architecture" sections, and documented Render free-tier cold starts (about 30 seconds for the backend to wake up).

SKILLS SHOWN
Full-stack development across a separate frontend and backend; REST API design with Express; JWT authentication and protected routes; PostgreSQL with Prisma; server-side LLM integration with secure key handling; data visualization with Chart.js; multi-service deployment across Vercel, Render, and Neon; environment-based configuration; product thinking (guest mode to lower the barrier to trying it).

LIKELY RECRUITER QUESTIONS
Q: What is StudySpark?
A: A full-stack AI study tool that turns any topic into explanations, notes, flashcards, and quizzes, with accounts, guest mode, and an analytics dashboard.
Q: What's the tech stack?
A: Next.js, TypeScript, Tailwind, and Chart.js on the frontend; Node/Express, PostgreSQL on Neon with Prisma, JWT auth, and the OpenAI API on the backend; deployed on Vercel, Render, and Neon.
Q: How does auth work?
A: JWT. The token is stored client-side after login and sent as a Bearer token, and Express middleware verifies it on protected routes.
Q: How is the OpenAI key kept safe?
A: All OpenAI calls happen on the Express backend; the frontend never sees the key.
Q: Any known limitations?
A: Analytics are stored in memory, so they reset when the server restarts, and the free-tier backend can take about 30 seconds to wake up. Persisting analytics in Postgres is the planned next step.
Q: Did she work alone?
A: Yes, it's a solo personal project.
Q: How many users?
A: No usage metrics are recorded.
`,

  "CodeSync (project)": `
CODESYNC: SOLO PERSONAL PROJECT (real-time collaborative code editor)

OVERVIEW
CodeSync is a real-time collaborative code editor, often described as "Google Docs for programming." There is no company or team behind it: Sweta is the sole creator and owns product direction, frontend, backend, and deployment. The code is in two GitHub repositories, swetadas251/codesync (frontend) and swetadas251/codesync-backend. The frontend is deployed on Vercel with a live demo, and the backend is hosted on Render. She added a GitHub "About" description and topic tags so recruiters can grasp the project at a glance.

WHAT SHE BUILT
- Real-time collaborative editor. Users join a shared room and edit the same code at the same time. The frontend uses Next.js, TypeScript, and the Monaco Editor (the editor engine behind VS Code). The backend uses Node.js and Socket.io. Socket events carry code edits, language changes, joins and leaves, and cursor positions, so each user sees the others' cursors live. A room-state event gives a new user the current code, language, and user list when they join.
- In-browser code execution. A Run button executes JavaScript in a sandboxed iframe and Python through the Piston API. Output appears in a collapsible panel.
- Team chat. A chat sidebar runs on its own socket event. Messages show per-user colors, timestamps, "You" labels, and an unread count.
- Session history. A timeline records joins, leaves, language switches, and edits. Edits are throttled to one entry every 3 seconds, and the backend keeps a capped 50-entry history per room that is included in the room state.
- Developer experience. Users can download their code with the right file extension for the selected language. Ctrl+Enter runs the code and Ctrl+S downloads it. A live line/column indicator sits in the status bar.
- UI redesign. A dark, IDE-styled landing page with a hero section, an editor preview mockup, and feature cards; the editor page was restyled to match.
Results: each feature was confirmed working, with multiple users syncing across browser tabs, before the next one was added. No usage, adoption, or performance metrics are recorded.

PROBLEMS AND SOLUTIONS
- Sync broke after a refactor. Splitting the single editor component into several components broke real-time sync between tabs. There were three root causes: the frontend sent an object where the backend expected a plain string, event names didn't match the backend's, and the guard that stops a user's own changes from echoing back stopped working. She used git history to find the last working commit, compared it with the broken code, and restored the original architecture with all socket logic inside one editor component that matched the backend's event contract exactly. Styling was layered on top without touching that logic. She chose the simplest restoration over further refactoring, which is what finally worked.
- Broken styling. The landing page rendered as one giant arrow icon because Tailwind CSS wasn't loading. She rebuilt the page with inline styles so it no longer depended on the broken setup.
- Chat sidebar layout. Opening the chat didn't make the editor shrink to fit. She fixed the div nesting and added minWidth: 0 and overflow: hidden to the flex children so Monaco could shrink.
- Lower-risk delivery. After the sync incident, she added new features one at a time, frontend-only changes first, testing each before starting the next.

SKILLS AND INTERVIEW HIGHLIGHTS
Real-time systems with WebSockets and Socket.io; designing client-server event contracts and keeping both sides consistent; React and Next.js state management, including effect cleanup; Monaco Editor integration; sandboxed code execution; CSS flexbox debugging; using git history to diagnose regressions; shipping features incrementally to limit risk.
Strongest interview story: the sync crash. A silent payload mismatch, git history used to find the change that caused it, and the simplest fix chosen over a deeper rework.
She is open that Replit, CodeSandbox, and VS Code Live Share offer similar functionality. She presents CodeSync as a hands-on way to understand how real-time sync works, not as a new invention.

LIKELY RECRUITER QUESTIONS
Q: Was this a team project?
A: No. It's Sweta's personal project, and she owns it end to end.
Q: What's the tech stack?
A: Next.js, TypeScript, Monaco Editor, Node.js, and Socket.io, with the frontend on Vercel and the backend on Render.
Q: How does real-time sync work?
A: Clients in a room send socket events for edits, language changes, and cursor moves. The server broadcasts them to the other clients and sends the full room state to anyone who joins.
Q: What was the hardest bug?
A: Sync broke after a refactor because the event payloads and names the frontend sent didn't match what the backend expected. She fixed it by restoring the last working architecture from git history.
Q: How does it run user code safely?
A: JavaScript runs in a sandboxed iframe in the browser. Python runs remotely through the Piston API.
Q: How is it different from Replit or Live Share?
A: It isn't meant to compete with them. She built it to learn how real-time collaboration works from the inside.
Q: How many users does it have?
A: No usage numbers are recorded.
`,

  "TUNL (project)": `
TUNL: SOLO PERSONAL PROJECT (Go localhost tunnel)

CONTEXT
TUNL is Sweta's independent project, not an employer or team. She is the sole creator and maintainer. The core piece is tunl, a localhost tunneling tool she wrote from scratch in Go. It works like a minimal ngrok: it gives a developer's local server a public URL. She built it to understand how tunneling tools work internally rather than just use them.

WHAT IT DOES
A developer runs "tunl 3000". The CLI client opens a persistent WebSocket connection to a relay server hosted on Render. The relay assigns a unique public URL. Any HTTP request to that URL is serialized as JSON, sent through the WebSocket to the client, and forwarded to the local app. The response returns along the same path.

ARCHITECTURE
The repo has two binaries and one shared package: cmd/relay is the public-facing relay server, cmd/tunl is the CLI client, and internal/protocol holds the message types both sides use. Each request carries a unique ID, so responses are matched to the right requester even when many requests are in flight at once.
Tools: Go, gorilla/websocket, goroutines and channels for concurrency, JSON messaging, TLS through the hosted relay, and Render's free tier. Licensed MIT.

RESULTS
After the fixes below, she verified the tunnel end to end: she ran a local Python HTTP server, connected the client, and got a live public URL on the relay. The request returned a 200 response in 13ms. The relay is live at tunl-npt8.onrender.com.

PROBLEMS AND HOW SHE SOLVED THEM
- The relay was broken. An AI-assisted code review of the repo found that the relay's main file had been accidentally overwritten with client code, so the project could not work at all. She restored a proper relay server, updated the client, and re-tested until the live tunnel worked, confirming each step before moving on.
- Writes were unsafe under concurrency. gorilla/websocket supports only one concurrent writer, so she added a sync.Mutex to protect writes to the WebSocket.
- Goroutines could leak. Requests that never got a response could hang forever, so she added a 30-second response timeout on the relay.
- The shared protocol package was defined but never imported. She refactored both binaries to use internal/protocol, which removed duplicated message types.
- There was no observability. She added a /health endpoint to the relay.
- Render's free tier causes cold starts of about 30 seconds. She documented this in the README; the next step she identified is an UptimeRobot ping against the health endpoint.

SKILLS AND INTERVIEW HIGHLIGHTS
Networking fundamentals (WebSockets, HTTP request/response multiplexing over a single connection, request-ID correlation); Go concurrency (goroutines, channels, mutex-guarded shared resources, timeouts to prevent leaks); debugging a broken codebase to its root cause, then verifying the fix end to end; clean project structure (separate cmd binaries plus an internal shared package); deployment on Render with health checks; technical communication (README sections like "Why I Built This", architecture diagrams, and a "Try It Locally" guide that runs with no deployment).
Headline story: she built an ngrok-style tunnel from scratch to understand how it works under the hood, then hardened it for concurrency.

LIKELY RECRUITER QUESTIONS
Q: What is tunl?
A: A Go CLI and relay server that exposes a localhost app to the internet through a WebSocket tunnel, like a minimal ngrok.
Q: How do concurrent requests stay straight?
A: Each request gets a unique ID, and responses are matched by that ID over the single WebSocket connection.
Q: What was the hardest bug?
A: The relay source file had been overwritten with client code, which left the system non-functional. She restored it, refactored onto the shared protocol package, and verified the tunnel end to end.
Q: How did she handle thread safety?
A: A mutex guards WebSocket writes, since the library allows only one writer at a time. A 30-second timeout prevents goroutine leaks.
Q: Is it live?
A: Yes, the relay runs on Render. The first connection may take around 30 seconds on the free tier.
Q: Did she work alone?
A: Yes, it's a solo personal project.
Q: How many users or how much traffic?
A: No usage metrics are recorded. The verified result is a working public tunnel returning a 200 in 13ms.
`,
};

export function knowledgeContext(): string {
  return Object.entries(knowledge)
    .filter(([, notes]) => notes.trim().length > 0)
    .map(([title, notes]) => `### ${title}\n${notes.trim()}`)
    .join("\n\n");
}