// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@pinia/nuxt'],
  pinia: {
    autoImports: ['defineStore', ['defineStore', 'definePiniaStore']],
  },
  css: ['vuetify/lib/styles/main.sass', '@mdi/font/css/materialdesignicons.min.css'],
  build: {
    transpile: ['vuetify'],
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
  runtimeConfig: {
    public: {
      baseUrl: process.env.BASE_URL || '/',
    },
  },

  ssr: false,

  app: {
    baseURL: '/Nuxt3ToVuetify3/',
  },

  nitro: {
    prerender: {
      routes: ['/', '/anl', '/dsn', '/dev', '/imp', '/sec', '/prf', '/ml', '/trn', '/ops', '/products'],
      crawlLinks: true,
      failOnError: false,
    },
  },
});
