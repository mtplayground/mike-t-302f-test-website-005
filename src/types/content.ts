export type SectionId = "hero" | "how-it-works" | "features" | "benefits" | "faq";

export type SectionLink = `#${SectionId}`;

export type NavItem = {
  readonly label: string;
  readonly href: SectionLink;
};

export type CtaContent = {
  readonly label: string;
  readonly ariaLabel: string;
};

export type HeroContent = {
  readonly id: Extract<SectionId, "hero">;
  readonly eyebrow: string;
  readonly headline: string;
  readonly subhead: string;
  readonly body: string;
  readonly primaryCta: CtaContent;
};

export type StepItem = {
  readonly title: string;
  readonly description: string;
};

export type StepsSectionContent = {
  readonly id: Extract<SectionId, "how-it-works">;
  readonly eyebrow: string;
  readonly heading: string;
  readonly description: string;
  readonly items: readonly StepItem[];
};

export type FeatureItem = {
  readonly title: string;
  readonly description: string;
};

export type FeaturesSectionContent = {
  readonly id: Extract<SectionId, "features">;
  readonly eyebrow: string;
  readonly heading: string;
  readonly description: string;
  readonly items: readonly FeatureItem[];
};

export type BenefitItem = {
  readonly title: string;
  readonly description: string;
};

export type BenefitsSectionContent = {
  readonly id: Extract<SectionId, "benefits">;
  readonly eyebrow: string;
  readonly heading: string;
  readonly description: string;
  readonly items: readonly BenefitItem[];
};

export type FaqItem = {
  readonly question: string;
  readonly answer: string;
};

export type FaqSectionContent = {
  readonly id: Extract<SectionId, "faq">;
  readonly eyebrow: string;
  readonly heading: string;
  readonly description: string;
  readonly items: readonly FaqItem[];
};

export type FooterContent = {
  readonly eyebrow: string;
  readonly heading: string;
  readonly description: string;
  readonly cta: CtaContent;
  readonly copyright: string;
};

export type SiteContent = {
  readonly siteName: string;
  readonly navItems: readonly NavItem[];
  readonly hero: HeroContent;
  readonly steps: StepsSectionContent;
  readonly features: FeaturesSectionContent;
  readonly benefits: BenefitsSectionContent;
  readonly faq: FaqSectionContent;
  readonly footer: FooterContent;
};
