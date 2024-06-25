import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://jeremiahsecrist.github.io",
  path: "koushinryou-astro",
  integrations: [mdx(), sitemap(), tailwind()],
});
