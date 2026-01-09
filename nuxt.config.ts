// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  runtimeConfig: {
    public: {
      apiUrl: process.env.NUXT_PUBLIC_API_URL,
      apiKey: process.env.NUXT_PUBLIC_API_KEY,
    },
  },
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/icon"],
});
