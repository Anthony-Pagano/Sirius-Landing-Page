export const landingContent = {
  nav: [
    { label: "Problem", href: "#problem" },
    { label: "System", href: "#thesis" },
    { label: "Demo", href: "#demo" },
    { label: "Use Cases", href: "#use-cases" },
    { label: "Voice", href: "#why-voice" },
  ],
  hero: {
    title: "Speak outcomes. Sirius executes.",
    description:
      "Sirius turns a spoken request into a visible execution plan across apps, feeds, automations, and connected devices, with the human loop kept in view.",
    primaryCta: "Request Early Access",
    secondaryCta: "Inspect The Demo",
    trustLine: "Private beta · voice-first workflows · software to hardware actions",
    proofPoints: [
      "Human-visible execution",
      "Software and device follow-through",
      "Reusable workflow patterns",
    ],
    trustScaffold: [
      { label: "Private beta", detail: "limited early access" },
      { label: "Human approval gates", detail: "external actions require review" },
      { label: "Visible execution log", detail: "every step stays inspectable" },
      { label: "Software + device actions", detail: "apps, feeds, printers, home devices" },
      { label: "Reusable workflows", detail: "patterns can run again" },
    ],
    command: {
      prompt: "Run the release workflow and print the signed checklist when CI passes.",
      status: "Planning 5 actions",
      route: "voice -> workflow -> tools -> device",
    },
    ringLabels: [
      { label: "Speak", detail: "voice input" },
      { label: "Plan", detail: "workflow" },
      { label: "Act", detail: "device action" },
      { label: "Watch", detail: "automation" },
    ],
  },
  problemMap: [
    {
      kicker: "Documents",
      summary: "A draft is only useful when it reaches the right destination and the output is confirmed.",
      generated: "File",
      missing: "Approve + route",
      completed: "Confirmed output",
      visual: "printer",
    },
    {
      kicker: "Fabrication",
      summary: "A model still needs device readiness, material checks, and an operator gate before it becomes physical.",
      generated: "Model",
      missing: "Check + gate",
      completed: "Device job",
      visual: "fabrication",
    },
    {
      kicker: "Environment",
      summary: "A request becomes valuable when calendars, messages, feeds, and devices move together.",
      generated: "Request",
      missing: "Coordinate surfaces",
      completed: "Visible routine",
      visual: "environment",
    },
  ],
  thesis: {
    title: "A declarative execution layer for software and the physical world.",
    description:
      "Users describe outcomes in plain language. Sirius decomposes the work, chooses the right surfaces, requests confirmation when risk appears, and exposes progress instead of hiding it behind a chat transcript.",
  },
  pillars: [
    {
      kicker: "01",
      title: "Workflows",
      description:
        "On-demand outcome jobs you trigger by speaking. Sirius plans the steps, runs the tools, and shows progress.",
    },
    {
      kicker: "02",
      title: "Automations",
      description:
        "Always-on conditions that watch for changes and follow through when something needs to happen.",
    },
    {
      kicker: "03",
      title: "Feeds",
      description:
        "Curated information streams Sirius can summarize, monitor, and connect back into workflows.",
    },
  ],
  systemDiagram: {
    sequence: [
      { title: "Capture", detail: "voice request with context" },
      { title: "Decompose", detail: "steps, tools, approvals" },
      { title: "Execute", detail: "apps, feeds, devices" },
      { title: "Confirm", detail: "status, handoff, reuse" },
    ],
    branches: ["Voice request", "Workflow plan", "Tool execution", "Human-visible status"],
    endpoints: ["Apps", "Feeds", "Printers", "Home devices"],
    memoryTitle: "Execution stays visible, reusable, and interruptible.",
    memoryDescription:
      "Sirius keeps enough context to coordinate across surfaces without hiding the work. You can see what is running, reuse the pattern, or step in before it acts.",
    contexts: ["work", "home", "devices", "feeds", "research", "people"],
  },
  demo: {
    title: "See every voice request become a supervised workflow.",
    description:
      "Sirius shows what was asked, which tools are running, where approval is needed, and what evidence is already complete.",
    points: [
      "Request captured",
      "Plan generated",
      "Tools running",
      "Approval waiting",
      "Evidence recorded",
    ],
    summary: [
      { label: "ETA", value: "4 min" },
      { label: "Gate", value: "Deploy approval" },
      { label: "Surfaces", value: "Repo · CI · Slack" },
    ],
    executionLog: [
      "Checked branch and release diff",
      "Security review completed",
      "CI is running on 18 jobs",
      "Reviewer notification queued after green build",
    ],
  },
  workflowSteps: [
    { title: "Pull diff and verify branch", detail: "Release diff checked against main.", state: "done", stateLabel: "Done" },
    { title: "Run security review", detail: "No critical findings returned.", state: "done", stateLabel: "Done" },
    { title: "Wait on CI · build and tests", detail: "18 jobs running; reviewer ping queued.", state: "active", stateLabel: "In progress" },
    { title: "Request deploy approval", detail: "External deploy is locked until the operator approves.", state: "blocked", stateLabel: "Needs approval" },
    { title: "Tag and deploy", detail: "Queued after approval and green build.", state: "next", stateLabel: "Up next" },
  ],
  useCases: [
    {
      kicker: "Software delivery",
      title: "Run a release workflow and notify me when CI is green.",
      description:
        "Coordinate code review, security checks, CI status, and reviewer comms from one voice request.",
      trigger: "Voice release request",
      output: "Verified release path",
      friction: "No manual status polling",
    },
    {
      kicker: "Document handling",
      title: "Print the document Sirius just created.",
      description:
        "Move from draft generation to actual output without forcing the user to switch context and finish the job manually.",
      trigger: "Generated document",
      output: "Confirmed print job",
      friction: "No app-to-printer handoff",
    },
    {
      kicker: "Physical fabrication",
      title: "Upload this model and start the 3D print.",
      description:
        "Bridge design generation and hardware execution so the system can take work all the way to material output.",
      trigger: "Finished model",
      output: "Ready-to-run device job",
      friction: "No repeated slicer setup",
    },
    {
      kicker: "Ambient coordination",
      title: "Prep my evening routine before I get home.",
      description:
        "Combine messages, context, schedules, and smart-home actions into a single composable instruction.",
      trigger: "Arrival context",
      output: "Coordinated routine",
      friction: "No fragmented app switching",
    },
  ],
  useCasesHeading: "One request can cross the surfaces where work actually finishes.",
  whyVoice: {
    title: "Voice removes friction where declarative systems usually slow down.",
    lead:
      "Voice is not decoration here. It is the fastest way to declare intent while the execution layer carries the operational burden.",
    points: [
      {
        title: "Faster capture",
        description:
          "When the bottleneck is describing the desired outcome, speaking is often the highest-throughput interface.",
        context: "hands-busy work",
      },
      {
        title: "Ambient by default",
        description:
          "Voice works while the user is walking, building, cooking, commuting, or doing other work with their hands occupied.",
        context: "home and field contexts",
      },
      {
        title: "Natural orchestration",
        description:
          "A voice-first interface fits a system whose value comes from composition and follow-through rather than manual navigation.",
        context: "multi-step workflows",
      },
    ],
  },
  cta: {
    title: "Meet Sirius.",
    description:
      "Speak the outcome once. Sirius turns it into visible, approval-gated follow-through across software, feeds, and devices.",
    buttonLabel: "Request Early Access",
    note: "Currently in private beta · limited early access",
    helper: "Tell us where to send your invite. No spam, no public launch list.",
    trust: [
      "Human review before external actions",
      "Approval-gated device and deploy steps",
      "Private beta list only",
    ],
  },
} as const;
