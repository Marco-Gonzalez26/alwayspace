import { defineConfig } from 'astro/config';

// https://astro.build/config
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
import image from "@astrojs/image";

// https://astro.build/config

import react from '@astrojs/react';

export default defineConfig({
  output: "server",
  adapter: vercel(),
  integrations: [image(), react()]
});