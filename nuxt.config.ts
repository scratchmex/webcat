import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Nuxt App Config: https://v3.nuxtjs.org/api/configuration/nuxt.config#app
  app: {
    // Global page headers: https://v3.nuxtjs.org/api/configuration/nuxt.config#head
    head: {
      title: 'ivan',
      meta: [],
      link: [],
    },
  },

  components: ['~/components', '~/components/shared'],

  // Modules: https://v3.nuxtjs.org/api/configuration/nuxt.config#modules
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss', // https://tailwindcss.nuxtjs.org/
  ],

  // Content module configuration: // https://content.nuxtjs.org/api/configuration
  content: {},

  // Build Configuration: https://v3.nuxtjs.org/api/configuration/nuxt.config#build
  build: {
    extractCSS: true, // CSS will be extracted into separate files
  },
})
