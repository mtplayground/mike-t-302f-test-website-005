import type { SiteContent } from "../types/content";

export const siteContent = {
  siteName: "mike-t-302f-test-website-005",
  navItems: [
    { label: "How it works", href: "#how-it-works" },
    { label: "Features", href: "#features" },
    { label: "Benefits", href: "#benefits" },
    { label: "FAQ", href: "#faq" },
  ],
  hero: {
    id: "hero",
    eyebrow: "Autonomous software delivery",
    headline: "Agent Team for Founders",
    subhead: "You just talk, we handle the rest",
    body: "Move from product intent to planned, built, deployed, and operated software with an autonomous team that works through the SDLC while you keep full ownership of the code.",
    primaryCta: {
      label: "Start a conversation",
      ariaLabel:
        "Start a conversation about building with mike-t-302f-test-website-005",
    },
  },
  steps: {
    id: "how-it-works",
    eyebrow: "How it works",
    heading: "A full SDLC flow, driven by conversation",
    description:
      "The workflow turns founder direction into structured software work, from initial planning through production operation.",
    items: [
      {
        title: "Plan",
        description:
          "Translate goals into architecture, issue scope, implementation order, and acceptance criteria.",
      },
      {
        title: "Build",
        description:
          "Implement focused changes with typed code, reusable patterns, and validation built into each step.",
      },
      {
        title: "Deploy",
        description:
          "Prepare production-ready changes through GitHub-native review, merge, and release workflows.",
      },
      {
        title: "Operate",
        description:
          "Keep improving the product with fixes, follow-on features, and codebase stewardship after launch.",
      },
    ],
  },
  features: {
    id: "features",
    eyebrow: "Features",
    heading: "The software team workflow without the hiring delay",
    description:
      "Each capability is designed around getting real product code into your repository while keeping the work inspectable.",
    items: [
      {
        title: "Autonomous full-SDLC execution",
        description:
          "Plan, implement, validate, and iterate on product work without requiring a standing engineering team.",
      },
      {
        title: "GitHub-native workflow",
        description:
          "Work lands in branches and pull requests so scope, code changes, and history stay visible.",
      },
      {
        title: "Security and production readiness",
        description:
          "Changes are designed around environment-based configuration, validation, and deployable defaults.",
      },
      {
        title: "Full code ownership",
        description:
          "The deliverable is your codebase, in your repository, ready for your team or future contributors.",
      },
    ],
  },
  benefits: {
    id: "benefits",
    eyebrow: "Why founders love it",
    heading: "Founder-friendly outcomes without giving up control",
    description:
      "The value is practical: faster product movement, less hiring overhead, and software assets you own.",
    items: [
      {
        title: "Speed to production",
        description:
          "Compress the time between product direction and deployed software by removing coordination drag.",
      },
      {
        title: "No engineering team needed",
        description:
          "Start building before you have recruited, onboarded, and managed a full technical team.",
      },
      {
        title: "You stay in control",
        description:
          "You direct priorities, review the work, and retain ownership of the repository and decisions.",
      },
    ],
  },
  faq: {
    id: "faq",
    eyebrow: "FAQ",
    heading: "Common questions",
    description:
      "Straight answers about ownership, security, and what conversation-driven software delivery means.",
    items: [
      {
        question: "Who owns the code?",
        answer:
          "You do. Work is delivered into your repository so the code, history, and future maintenance path remain under your control.",
      },
      {
        question: "How is security handled?",
        answer:
          "Implementation should use environment-based configuration, avoid hardcoded secrets, and keep changes reviewable through normal GitHub workflows.",
      },
      {
        question: "What does 'you just talk' mean?",
        answer:
          "You describe goals, constraints, and feedback in plain language while the implementation work is translated into scoped software changes.",
      },
    ],
  },
  footer: {
    eyebrow: "Ready when you are",
    heading: "Start building with an autonomous software team",
    description:
      "Bring mike-t-302f-test-website-005 your product direction and turn it into planned, built, and deployable software you own.",
    cta: {
      label: "Start a conversation",
      ariaLabel:
        "Start a conversation about building with mike-t-302f-test-website-005",
    },
    copyright: "mike-t-302f-test-website-005",
  },
} as const satisfies SiteContent;
