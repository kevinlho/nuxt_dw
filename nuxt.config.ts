import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  ssr: false, // Static site generation
  app: {
    baseURL: '/nuxt_dw/', // e.g. '/my-nuxt-app/'
    buildAssetsDir: 'assets',
  },
  // Ensure the build output directory is configured correctly
  nitro: {
    preset: 'static'
  },
  
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxt/image',
    '@vueuse/motion/nuxt'
  ],

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  vite:{
    plugins: [
      tailwindcss(),
    ]
  },

  image: {
    provider: 'ipx'
  },

  routeRules: {
    '/': { ssr: true }
  },

  compatibilityDate: '2025-01-15',

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  }
})
