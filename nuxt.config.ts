// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/ui', '@nuxt/content'],
  css: ["~/assets/css/main.css"],
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  // app: {
  //   buildAssetsDir: 'assets', // for static deployment uncomment this line
  // }
  ssr: false,
})
