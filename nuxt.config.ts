export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/content'],
  ssr: false,
  generate: {
    routes: ['/lore', '/history', ],
  },
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
