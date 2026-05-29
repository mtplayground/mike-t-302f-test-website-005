type PublicEnvKey = "VITE_CTA_URL";

export type AppEnv = {
  ctaUrl: string;
};

const envKeys = {
  ctaUrl: "VITE_CTA_URL",
} as const satisfies Record<keyof AppEnv, PublicEnvKey>;

function readRequiredEnv(name: PublicEnvKey): string {
  const value = import.meta.env[name];

  if (typeof value !== "string" || value.trim().length === 0) {
    throw new Error(`Missing required build-time environment variable: ${name}`);
  }

  return value.trim();
}

function readRequiredUrl(name: PublicEnvKey): string {
  const value = readRequiredEnv(name);

  try {
    return new URL(value).toString();
  } catch {
    throw new Error(`Invalid URL in build-time environment variable: ${name}`);
  }
}

export function getAppEnv(): AppEnv {
  return {
    ctaUrl: readRequiredUrl(envKeys.ctaUrl),
  };
}
