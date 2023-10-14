export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/content'],
  ssr: false,
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css',
  ],
  plugins: [
    '~/plugins/fontawesome',
  ],
})
