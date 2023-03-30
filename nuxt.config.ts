// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@pinia/nuxt',
        '@nuxtjs/i18n',
        'nuxt-icon',
        '@nuxtjs/supabase',
    ],

    i18n: {
        locales: [
            {
                code: 'ru',
                file: 'ru-RU.json'
            },
            {
                code: 'en',
                file: 'en-US.json'
            },
        ],
        langDir: 'src/i18n',
        defaultLocale: 'ru',
        vueI18n: {
            fallbackLocale: 'ru'
        },
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: 'i18n_redirected'
        },
        customRoutes: 'config',
        pages: {
            index: {
                ru: '/', // -> accessible at /about (no prefix since it's the default locale)
                en: '/',
            },
            cards: {
                ru: '/cards',
                en: '/cards',
            },
            dictionary: {
                ru: '/dictionary',
                en: '/dictionary',
            },
            profile: {
                ru: '/profile',
                en: '/profile',
            }
        }
    },



    pinia: {
        autoImports: [
            // automatically imports `defineStore`
            'defineStore', // import { defineStore } from 'pinia'
            ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
        ],
    },
    experimental: {
        reactivityTransform: true
    },
    css: ['@/assets/styles/base.scss'],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@import "@/assets/styles/variables.scss";'
                }
            }
        }
    }
})
