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
      "It chats, it remembers, and it has the decency to notice when you've done the same thing three times — and offer to never do it again. Voice or keyboard.",
    primaryCta: "Request access",
    micPrompt: "Talk to it",
    micPrivacy: "Your voice stays in your browser. We're not listening.",
    headlineAlternates: [
      "The assistant the others were pretending to be.",
      "Quietly competent.",
    ],
  },
  workflows: {
    sectionLabel: "Workflows",
    title: "The work you already do, made callable.",
    intro:
      "You already have workflows. They live in your head — invisible until you run them, then you run them again, and again, by hand.",
    coda:
      "Sirius watches the patterns. It only speaks when there's a useful shape to point at — a workflow worth saving, a meeting worth briefing. Everything quieter waits in the digest.",
    notes: [
      "Three times this week, the same flavour of email. Want me to bottle it into a workflow?",
      "Your 14:00 with Daniel. You've never met. Brief?",
    ],
  },
  fourWays: {
    sectionLabel: "The four surfaces",
    leadIn:
      "Voice and chat tell Sirius what to run. Schedules tell it when. Feeds show what came back. Four surfaces, one assistant.",
    items: [
      { id: "voice",     title: "Voice",     body: "Talk to it. It's listening." },
      { id: "chat",      title: "Chat",      body: "One conversation. Everything you've ever told it. No new tabs." },
      { id: "feeds",     title: "Feeds",     body: "Pick what Sirius watches — markets, papers, your team's PRs, anything. It curates the updates against what you're working on. You read them at your pace." },
      { id: "schedules", title: "Schedules", body: "Tell Sirius when. \"Lights on at 8.\" \"Standup digest at 9.\" \"Draft a reply when this client emails.\" Workflows or single actions, on a clock or when something happens." },
    ],
  },
  threeIdeas: {
    sectionLabel: "One system",
    title: "Three parts. One app.",
    items: [
      { index: "01", role: "The conversation that knows you." },
      { index: "02", role: "The agent that acts for you." },
      { index: "03", role: "The plumbing that runs while you sleep." },
    ],
    body:
      "Arranged so a single assistant — the same one — does all three. The chat knows what your schedules did this morning. The schedules know what you talked about yesterday. Nothing falls between systems, because there is only one system.",
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
      "Memories, conversations, files — all local. The workflows that need to run while you're asleep (outreach, briefings, anything recurring) run on Sirius's cloud, with only the data they need to do their job. Prefer fully local? You can have that. The trade is that those workflows stop when your laptop does.",
    footnote: "Private beta",
  },
  inPractice: {
    sectionLabel: "In practice",
    title: "Four short demonstrations.",
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
        title: "Client feedback that triages itself.",
        body: "An email lands with eight nitpicks. Sirius makes the trivial edits, drafts the rest, then tells you the call — four done, two need you, one is scope creep.",
        punchline: "You read the bundle, not the inbox.",
      },
      {
        id: "engineering",
        seq: "02",
        kind: "ENGINEERING",
        frequency: "mon · 09:00",
        voiceTrigger: "Sirius, what's standup looking like?",
        title: "Your standup, already written.",
        body: "Every Monday, Sirius pulls the week's commits, the closed tickets, the team threads. A draft's in #standup before you sit down. You skim, fix the line that's wrong, post.",
        punchline: "Twenty seconds, not twenty minutes.",
      },
      {
        id: "meeting",
        seq: "03",
        kind: "MEETINGS",
        frequency: "15 min before",
        voiceTrigger: "Sirius, what's the 14:00?",
        title: "Your next meeting, already briefed.",
        body: "Fifteen minutes before each one, a brief lands — last contact, open threads, the thing you said you'd do. You walk in with the file.",
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
        punchline: "It already knows what you've read.",
      },
    ],
  },
  faq: {
    sectionLabel: "Questions",
    title: "What people ask first.",
    items: [
      {
        q: "Where does my data live?",
        a: "Memories, conversations, and files stay on your machine. Only the workflows you ask Sirius to run on a schedule — outreach, briefings, anything recurring — touch its cloud, and only with the data they need.",
      },
      {
        q: "What models does it use?",
        a: "Whichever ones do the job — currently Claude for the heavy reasoning, smaller models for the routine. Sirius picks; you don't have to.",
      },
      {
        q: "How is this different from a chat agent?",
        a: "An agent answers when asked. Sirius watches, remembers, and offers — and runs the things you've asked it to run, on the schedule you've asked. The chat is a thin slice of it.",
      },
      {
        q: "When can I expect access?",
        a: "Private beta is rolling out in small waves. Most invitations land within a couple of weeks of joining the list.",
      },
    ],
  },
  cta: {
    sectionLabel: "Availability",
    title: "Meet Sirius.",
    primaryCta: "Request access",
  },
} as const;
