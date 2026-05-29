import { AppShell } from "./components/layout";
import { HeroSection } from "./components/sections";
import { getAppEnv } from "./config/env";
import { siteContent } from "./content/siteContent";

export function App() {
  const appEnv = getAppEnv();

  return (
    <AppShell content={siteContent} ctaUrl={appEnv.ctaUrl}>
      <HeroSection content={siteContent.hero} ctaUrl={appEnv.ctaUrl} />
    </AppShell>
  );
}
