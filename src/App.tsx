import { AppShell } from "./components/layout";
import {
  BenefitsSection,
  FeaturesSection,
  HeroSection,
  HowItWorksSection,
} from "./components/sections";
import { getAppEnv } from "./config/env";
import { siteContent } from "./content/siteContent";

export function App() {
  const appEnv = getAppEnv();

  return (
    <AppShell
      content={siteContent}
      ctaUrl={appEnv.ctaUrl}
      renderedSectionIds={[
        siteContent.hero.id,
        siteContent.steps.id,
        siteContent.features.id,
        siteContent.benefits.id,
      ]}
    >
      <HeroSection content={siteContent.hero} ctaUrl={appEnv.ctaUrl} />
      <HowItWorksSection content={siteContent.steps} />
      <FeaturesSection content={siteContent.features} />
      <BenefitsSection content={siteContent.benefits} />
    </AppShell>
  );
}
