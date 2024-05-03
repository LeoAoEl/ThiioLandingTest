import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
    routing: { prefixDefaultLocale: false },
    fallback: { es: "en" },
  },

  integrations: [tailwind()],
  output: "server",
  adapter: vercel({ webAnalytics: { enabled: true } }),
});
