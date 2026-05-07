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
    body: [
      "You already have workflows. Cold outreach to a particular type of person, the way you put together a weekly client update, the steps you take when a deal moves to contract, your routine for assembling the investor pipeline review. They live in your head. You re-explain them to yourself (or to ChatGPT) every time you do them, and you reload the context from scratch each round.",
      "Sirius watches you do them, and offers to extract them.",
    ],
    pulledQuote:
      "Three times this week you've opened a meeting blind — CRM scramble, email dig, what-did-I-promise. Shall I take this on? Fifteen minutes before each one, you'd find a brief in your calendar — last contact, open threads, the bit you said you'd do.",
    closing:
      "Once extracted, a workflow is callable. You name the target — \"do another one for X\" — and Sirius runs the pipeline you'd already built in your head, without you having to reload any of it. It pauses to ask when it needs a judgement call, runs hands-off when it doesn't.\n\nThe point isn't that Sirius lets you build automations. It's that Sirius notices you're already running the same procedure by hand, and quietly takes the typing out of it.",
  },
  itNotices: {
    sectionLabel: "It notices",
    title: "Proactive, in a way that doesn't talk over you.",
    body: [
      "Sirius doesn't open with \"good morning.\" It's not that kind of assistant. But if it sees you sending the same flavour of email three times in a week, it'll offer to lift it into a workflow. Mention a project you're trying to ship, and it may quietly suggest a way to take a slice off your plate.",
    ],
    noticedQuote:
      "Three times this week you've sent the same flavour of email. Want me to make it a workflow?",
  },
  fourWays: {
    sectionLabel: "The four surfaces",
    leadIn:
      "Voice and chat tell Sirius what to run. Schedules tell it when. Feeds show what came back. Four surfaces, one assistant.",
    items: [
      { id: "voice",     title: "Voice",     body: "Talk to it like a colleague who never goes to lunch." },
      { id: "chat",      title: "Chat",      body: "One conversation. Everything you've ever told it. No new tabs." },
      { id: "feeds",     title: "Feeds",     body: "Pick what you want Sirius to watch. NVDA news, papers on diffusion, your team's PRs. Sirius curates the updates, in the context of what you're working on. You read them at your pace." },
      { id: "schedules", title: "Schedules", body: "Fire your workflows on a clock, or when something happens." },
    ],
  },
  threeIdeas: {
    sectionLabel: "Three good ideas",
    title: "Three good ideas. One app.",
    items: [
      { name: "Claude",   gives: "the conversational depth" },
      { name: "OpenClaw", gives: "the autonomous execution" },
      { name: "n8n",      gives: "the recurring, plumbed-together automations" },
    ],
    body:
      "Arranged so a single assistant — the same one — does all three. The chat knows what your automations did this morning. The automations know what you talked about yesterday. Nothing falls between systems, because there is only one system.",
  },
  localData: {
    sectionLabel: "Local-first",
    title: "Your data stays on your machine.",
    body:
      "Memories, conversations, files — all local. The workflows that need to run while you're asleep (outreach, briefings, anything recurring) run on Sirius's cloud, with only the data they need to do their job. Prefer fully local? You can have that. The trade is that automations stop when your laptop does.",
    footnote: "Private beta",
  },
  inPractice: {
    sectionLabel: "In practice",
    title: "Four short demonstrations.",
    vignettes: [
      {
        id: "outreach",
        title: "Cold outreach, at scale, without the smell of automation.",
        voiceTrigger: "Sirius, hit my STEP-track list this Tuesday.",
        body: "Tell Sirius who you want to talk to — \"founders of pre-seed dev-tools companies in Melbourne.\" It finds them, drafts emails in your voice, sends them, and when someone replies it pings you with a one-line summary and the suggested next move. The automation runs every Tuesday; you see the pipeline, never the spreadsheet.",
        sampleOutput: [
          "Hi Mira — saw your work on Coda's mobile editor. Coming from dev-tools myself, I'd love to compare notes on what shipped vs. what stayed in the spec.",
        ],
      },
      {
        id: "design",
        title: "Client feedback that triages itself.",
        voiceTrigger: "Sirius, what came in from the client?",
        body: "A client email lands with eight nitpicks. Sirius parses each, tags them — figma-edit, copy-change, question, scope-creep, out-of-scope — makes the trivial Figma edits via plugin, drafts replies for the rest, then presents the bundle: four done, two need your call, one is scope creep. Want me to send?",
        sampleOutput: [
          "Logo darker — figma-edit, done.",
          "Brand fonts site-wide — figma-edit, done.",
          "Headline reads too formal — copy-change, drafted.",
          "Add testimonials section — scope-creep, flagged.",
          "Make it look like Stripe — out-of-scope, declined.",
        ],
        sampleOutputSummary: "4 done · 2 drafted · 2 flagged. Want me to send?",
      },
      {
        id: "research",
        title: "A research desk, for one.",
        voiceTrigger: "Sirius, what's worth knowing this morning?",
        body: "Sirius keeps a feed on the companies you're tracking — earnings, filings, analyst notes, the occasional odd signal on Twitter. Two paragraphs of what's changed since yesterday before your first coffee. Ask \"what's the bear case on X\" and it already knows what you've read.",
        sampleOutput: [
          "NVDA: two analyst upgrades since Friday.",
          "Anthropic: Sonnet 4.7 shipped, 1M-token context.",
          "n8n 1.78: OpenAI-compatible LLM nodes.",
        ],
      },
      {
        id: "standup",
        title: "Your standup, already written.",
        voiceTrigger: "Sirius, what's standup looking like?",
        body: "Every Monday, Sirius pulls last week's commits, the Linear tickets you closed, and the threads from #eng-team. By 9 a draft is waiting in #standup — what you shipped, what's next, what's blocking. You skim, fix the one line that's wrong, post.",
        sampleOutput: [
          "Shipped: Aurora migration, search-index flag, N+1 fix.",
          "Next: deploy-script consolidation, auth refactor.",
          "Blocking: Brennan to review LIN-901.",
        ],
      },
    ],
  },
  faq: {
    sectionLabel: "Questions",
    title: "What people ask first.",
    items: [
      {
        q: "Where does my data live?",
        a: "Memories, conversations, and files stay on your machine. Only the workflows you ask Sirius to run on a schedule — outreach, briefings, automations — touch its cloud, and only with the data they need.",
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
