import { AppShell } from "./components/layout";
import { getAppEnv } from "./config/env";
import { siteContent } from "./content/siteContent";

export function App() {
  const appEnv = getAppEnv();

  return <AppShell content={siteContent} ctaUrl={appEnv.ctaUrl} />;
}
