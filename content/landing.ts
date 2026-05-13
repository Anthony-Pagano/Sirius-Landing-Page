// Landing copy — see sirius-landing-page-spec-v1.md
export const landingContent = {
  meta: {
    wordmark: "Sirius",
    availability: "Private beta",
    tagline: "An assistant. In the proper sense.",
  },
  hero: {
    eyebrow: "Sirius",
    title: "An assistant. In the proper sense.",
    description:
      "Listens. Remembers. Captures your workflows. Voice or keyboard, on your machine.",
    primaryCta: "Join waitlist",
    headlineAlternates: [
      "The assistant the others were pretending to be.",
      "Quietly competent.",
    ],
  },
  workflows: {
    sectionLabel: "Workflows",
    title: "The work you already do, saved for next time.",
    intro:
      "You already have workflows. They’re just trapped in your head: the emails you rewrite, the checks you run before every meeting, and the same steps you take every time you want to ship a new feature.",
    coda:
      "Introducing workflows. A systematic way to get work done. Sirius makes them once, you can run them always. Think N8N, but for your assistant.",
    notes: [
      "Third 'Hey Anne, quick rundown' this month. Your calendar knows what you were in, your inbox knows what's still hanging, I can wire it together so this stops being a Friday chore.",
      "Your 14:00 with Daniel is coming up. Your brief is ready."
    ],
  },
  fourWays: {
    sectionLabel: "One assistant. Four ways to command it.",
    leadIn:
      "Sirius listens, remembers, schedules, and acts across the systems you already use. It'll search the web, your emails, calendar, slack and every other app you use..",
    items: [
      { id: "voice",     title: "Voice",     body: "Command Sirius naturally. You don't ever have to look awway form your work." },
      { id: "chat",      title: "Chat",      body: "One conversation. Everything you've ever told it. No new tabs." },
      { id: "feeds",     title: "Feeds",     body: "Connect the streams that matter. Sirius watches your world and notifies you when something deserves attention. Markets, papers, your team's PRs, anything." },
      { id: "schedules", title: "Schedules", body: "Automate the timing. Workflows or single actions, on a clock or when something happens." },
    ],
  },
  threeIdeas: {
    sectionLabel: "One system",
    title: "One app. Everything about you.",
    items: [
      { index: "01", role: "The conversation that keeps the context." },
      { index: "02", role: "The agent that does the work." },
      { index: "03", role: "The workflows that automate the boring stuff." },
    ],
    body:
      "Everything shares the same memory, so you never have to re-explain yourself. The chat knows what your schedules did this morning. Or what you emailed John yesterday. Or that project you started (but didn't finish) last week. ",
  },
  whatsNext: {
    sectionLabel: "What's next",
    headlineLead: "The desktop is where Sirius starts.",
    headlineTail: "Not where it stops.",
    fragments: ["SWITCHES", "NOZZLES", "AXES"],
  },
  localData: {
    sectionLabel: "Local-first",
    title: "Your data stays on your machine.",
    body:
      "Memories, conversations, files are all local. The workflows that need to run while you're asleep (outreach, briefings, anything recurring) run on Sirius's cloud, with only the data they need to do their job. Prefer fully local? You can have that. The trade is that those workflows stop when your laptop does.",
    footnote: "Private beta",
  },
  inPractice: {
    sectionLabel: "In practice",
    title: "\"Sirius, handle it for me.\"",
    weekly: [
      { id: "design",      label: "TUE",          tail: "FEEDBACK" },
      { id: "engineering", label: "MON 09:00",    tail: "STANDUP" },
      { id: "meeting",     label: "PER MEETING",  tail: "BRIEF" },
      { id: "research",    label: "DAILY am",     tail: "BRIEF" },
    ],
    vignettes: [
      {
        id: "design",
        seq: "01",
        kind: "DESIGN",
        frequency: "ad-hoc",
        voiceTrigger: "Sirius, what came in from the client?",
        title: "Client feedback, sorted before you read it.",
        body: "A client sends a messy list of comments. Sirius separates quick fixes from real decisions, drafts the easy changes, and flags what needs you.",
        punchline: "You review the call, not the chaos.",
      },
      {
        id: "engineering",
        seq: "02",
        kind: "ENGINEERING",
        frequency: "mon · 09:00",
        voiceTrigger: "Sirius, what's standup looking like?",
        title: "Your standup, ready before you are.",
        body: "Every Monday, Sirius pulls the week’s commits, closed tickets, and team threads. A draft is waiting before you sit down. You skim, fix anything off, and post.",
        punchline: "Twenty seconds, not twenty minutes.",
      },
      {
        id: "meeting",
        seq: "03",
        kind: "MEETINGS",
        frequency: "15 min before",
        voiceTrigger: "Sirius, what's the 14:00?",
        title: "Your next meeting, already briefed.",
        body: "Fifteen minutes before a meeting, Sirius pulls the last thread, open tasks, previous notes, and anything you promised to follow up on. You walk in with the file.",
        punchline: "Briefed, not blindsided.",
      },
      {
        id: "research",
        seq: "04",
        kind: "RESEARCH",
        frequency: "daily · am",
        voiceTrigger: "Sirius, what's worth knowing this morning?",
        title: "A research desk, for one.",
        body: "Sirius keeps a feed on the companies you're tracking. Two paragraphs of what's changed since yesterday, before your first coffee.",
        punchline: "Never miss a signal.",
      },
    ],
  },
  faq: {
    sectionLabel: "Questions",
    title: "What people ask first.",
    items: [
      {
        q: "Where does my data live?",
        a: "Your memories, conversations, and connected files will always always live on your machine. Soon, Sirius will be able to use the cloud tasks you want running while you're away from your computer, like scheduled workflows, but they run on your machine for now.",
      },
      {
        q: "What models does it use?",
        a: "Right now, Sirius uses a combination of Anthropic, OpenAI, and Gemini models.",
      },
      {
        q: "How is this different from any other chat agent?",
        a: "An agent answers when asked, forces you to re-explain every time, and you're stuck trying to convince it to do what you want it to do. Sirius remembers all the details about you, and builds a workflow once, you run it anytime after with certainty that it’ll do what you want. Without burning through all your tokens."
      },
      {
        q: "When can I expect access?",
        a: "Private beta is rolling out in small waves. Most invitations land within a couple of weeks of joining the list.",
      },
    ],
  },
  cta: {
    title: "Meet Sirius.",
    primaryCta: "Request access",
  },
} as const;
