export const landingContent = {
  nav: [
    { label: "Problem", href: "#problem" },
    { label: "System", href: "#thesis" },
    { label: "Demo", href: "#demo" },
    { label: "Use Cases", href: "#use-cases" },
  ],
  hero: {
    title: "Speak an outcome. Sirius handles the scaffolding.",
    description:
      "A voice-first system for turning intent into workflows, automations, information feeds, and real-world actions across your tools and home.",
    primaryCta: "Request Early Access",
    secondaryCta: "See The Workflow",
    trustLine: "Private beta · voice-first workflows · software to hardware",
    chips: [
      { kind: "Workflow", title: "Ship release" },
      { kind: "Device", title: "Print document" },
      { kind: "Fabrication", title: "Start 3D print" },
      { kind: "Automation", title: "Prep evening" },
    ],
  },
  problemMap: [
    {
      kicker: "Documents",
      question: "Why can AI write the document, but not print it?",
      visual: "printer",
    },
    {
      kicker: "Fabrication",
      question: "Why can it design the object, but not upload and print it?",
      visual: "fabrication",
    },
    {
      kicker: "Environment",
      question: "Why can it access your tools, but not coordinate your environment?",
      visual: "environment",
    },
  ],
  thesis: {
    title: "Sirius is a declarative execution layer for software and the physical world.",
    description:
      "Users describe outcomes in plain language. Sirius composes the right tools, workflows, automations, and device actions behind the scenes, then keeps the human loop visible.",
  },
  pillars: [
    {
      kicker: "Describe outcomes",
      title: "Intent first",
      description:
        "Start from what should happen, not which app, integration, or device menu you need to touch.",
    },
    {
      kicker: "Compose capabilities",
      title: "Reusable systems",
      description:
        "Turn repeated actions into durable workflows that can mix agents, hosted automations, feeds, and personal tools.",
    },
    {
      kicker: "Act everywhere",
      title: "Software to hardware",
      description:
        "Extend beyond tabs and chat windows into printers, lights, speakers, and other connected surfaces.",
    },
  ],
  demo: {
    title: "A calm operator surface for tracking what Sirius is actually doing.",
    description:
      "The interface should make the system feel legible. Visitors need to see request capture, decomposition, tool execution, and status updates without reading a wall of copy.",
    points: [
      "Intent capture",
      "Workflow decomposition",
      "Tool invocation",
      "Progress visibility",
      "Human handoff",
    ],
  },
  workflowSteps: [
    { title: "Pull diff and verify branch", state: "done", stateLabel: "Done" },
    { title: "Run security review", state: "done", stateLabel: "Done" },
    { title: "Wait on CI · build and tests", state: "active", stateLabel: "In progress" },
    { title: "Notify reviewers", state: "next", stateLabel: "Up next" },
    { title: "Tag and deploy", state: "next", stateLabel: "Up next" },
  ],
  useCases: [
    {
      kicker: "Software delivery",
      title: "Run a release workflow and notify me when CI is green.",
      description:
        "Coordinate code review, security checks, CI status, and reviewer comms from one voice request.",
    },
    {
      kicker: "Document handling",
      title: "Print the document Sirius just created.",
      description:
        "Move from draft generation to actual output without forcing the user to switch context and finish the job manually.",
    },
    {
      kicker: "Physical fabrication",
      title: "Upload this model and start the 3D print.",
      description:
        "Bridge design generation and hardware execution so the system can take work all the way to material output.",
    },
    {
      kicker: "Ambient coordination",
      title: "Prep my evening routine before I get home.",
      description:
        "Combine messages, context, schedules, and smart-home actions into a single composable instruction.",
    },
  ],
  whyVoice: {
    title: "Voice removes friction where declarative systems usually slow down.",
    points: [
      {
        title: "Faster capture",
        description:
          "When the bottleneck is describing the desired outcome, speaking is often the highest-throughput interface.",
      },
      {
        title: "Ambient by default",
        description:
          "Voice works while the user is walking, building, cooking, commuting, or doing other work with their hands occupied.",
      },
      {
        title: "Natural orchestration",
        description:
          "A voice-first interface fits a system whose value comes from composition and follow-through rather than manual navigation.",
      },
    ],
  },
  cta: {
    title: "Built for AI-native early adopters who want systems that act, not just respond.",
    description:
      "Join the private beta for a voice-first system that turns requests into workflows, device actions, and coordinated follow-through.",
    buttonLabel: "Request Access",
    note: "Private beta · limited early access",
    helper: "Tell us where to send your invite. No spam, no public launch list.",
  },
} as const;
