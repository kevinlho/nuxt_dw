import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxt/image',
    '@vueuse/motion/nuxt'
  ],
  ssr: false,
  devtools: {
    enabled: true
  },
  // Static site generation
  app: {
    baseURL: '/nuxt_dw/', // e.g. '/my-nuxt-app/'
    buildAssetsDir: 'assets'
  },

  css: ['~/assets/css/main.css'],

  routeRules: {
    '/': { ssr: true }
  },

  compatibilityDate: '2025-01-15',
  // Ensure the build output directory is configured correctly
  nitro: {
    preset: 'github-pages'
  },

  vite: {
    server: {
      allowedHosts: ['.trycloudflare.com'],
      hmr: {
        protocol: 'wss',
        clientPort: 443
      }
    },
    plugins: [
      tailwindcss()
    ]
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  image: {
    provider: 'ipx'
  }
})
