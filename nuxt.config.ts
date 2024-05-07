const devInfo = require('./devInfo.js');

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        pageTransition: { name: 'page', mode: 'out-in' }
    },
    devtools: {enabled: true},
    experimental: {
        viewTransition: true,
    },
    modules: ['@nuxtjs/tailwindcss', 'nuxt-primevue', '@formkit/auto-animate/nuxt'],
    // css: ['~/assets/primevue.css'],
    css: [
        'primevue/resources/themes/aura-light-green/theme.css',
        'primeicons/primeicons.css'
    ],
    /**
     * * Tailwind CSS Config
     * Options: https://tailwindcss.nuxt.dev/getting-started/options/
     * Docs: https://tailwindcss.nuxt.dev
     */
    tailwindcss: {
        cssPath: ['~/assets/tailwind.css', {injectPosition: "first"}],
        configPath: 'tailwind.config',
        exposeConfig: {
            level: 2
        },
        config: {},
        viewer: true,
    },

    /**
     * * Runtime Config (Environment Variables)
     * Usage: https://nuxt.com/docs/guide/going-further/runtime-config
     */
    runtimeConfig: {
        // The private keys which are only available server-side
        apiSecret: '123',
        // Keys within public are also exposed client-side
        public: {
            apiBase: '/api',
            dev: devInfo
        }
    }
})
