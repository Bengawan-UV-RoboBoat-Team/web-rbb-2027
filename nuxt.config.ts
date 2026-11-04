import legacyData from "./assets/data/legacy.json";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },

  modules: ["@nuxtjs/tailwindcss", "@nuxt/content", "@nuxt/icon"],

  nitro: {
    prerender: {
      routes: legacyData.map((season) => `/legacy/${season.year}`),
    },
  },

  content: {
    build: {
      markdown: {
        highlight: {
          theme: "github-light",
        },
      },
    },
  },

  app: {
    head: {
      title: "Bengawan UV Roboboat Team UNS",
      meta: [
        {
          name: "description",
          content:
            "Official website of Bengawan UV RoboBoat Team, Universitas Sebelas Maret. Developing the future of maritime autonomy.",
        },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { charset: "utf-8" },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      ],
      script: [
        {
          innerHTML: `
            window.MathJax = {
              tex: {
                inlineMath: [['$', '$'], ['\\\\(', '\\\\)']]
              }
            };
          `,
          type: "text/javascript",
        },
        {
          src: "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js",
          defer: true,
        },
      ],
    },
  },

  tailwindcss: {
    cssPath: "~/assets/css/main.css",
    configPath: "tailwind.config.ts",
  },
});
