export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'server',
  ssr: 'false',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'NISPLAN',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'NISPLAN',
      },
      { hid: 'og:site_name', property: 'og:site_name', content: 'NISPLAN' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: '' },
      { hid: 'og:title', property: 'og:title', content: 'NISPLAN' },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'NISPLAN',
      },
      // {
      //   hid: 'og:image',
      //   property: 'og:image',
      //   content: '/static/twitter-card.png',
      // },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
    ],
    bodyAttrs: {
      class: 'overscroll-none bg-gray-300',
    },
    link: [
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/static/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        sizes: '16x16',
        type: 'image/png',
        href: '/static/favicon-16x16.png',
      },
      {
        rel: 'icon',
        sizes: '32x32',
        type: 'image/png',
        href: '/static/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/static/favicon.ico',
      },
    ],
    // pwa splash screens
    // Doc: https://appsco.pe/developer/splash-screens
    //     {
    //       href: splashscreens + 'iphone5_splash.png',
    //       media:
    //         '(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)',
    //       rel: 'apple-touch-startup-image',
    //     },
    //     {
    //       href: splashscreens + 'iphone6_splash.png',
    //       media:
    //         '(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)',
    //       rel: 'apple-touch-startup-image',
    //     },
    //     {
    //       href: splashscreens + 'iphoneplus_splash.png',
    //       media:
    //         '(device-width: 621px) and (device-height: 1104px) and (-webkit-device-pixel-ratio: 3)',
    //       rel: 'apple-touch-startup-image',
    //     },
    //     {
    //       href: splashscreens + 'iphonex_splash.png',
    //       media:
    //         '(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)',
    //       rel: 'apple-touch-startup-image',
    //     },
    //     {
    //       href: splashscreens + 'iphonexr_splash.png',
    //       media:
    //         '(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)',
    //       rel: 'apple-touch-startup-image',
    //     },
    //     {
    //       href: splashscreens + 'iphonexsmax_splash.png',
    //       media:
    //         '(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)',
    //       rel: 'apple-touch-startup-image',
    //     },
    //     {
    //       href: splashscreens + 'ipad_splash.png',
    //       media:
    //         '(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)',
    //       rel: 'apple-touch-startup-image',
    //     },
    //     {
    //       href: splashscreens + 'ipadpro1_splash.png',
    //       media:
    //         '(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)',
    //       rel: 'apple-touch-startup-image',
    //     },
    //     {
    //       href: splashscreens + 'ipadpro2_splash.png',
    //       media:
    //         '(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)',
    //       rel: 'apple-touch-startup-image',
    //     },
    //     {
    //       href: splashscreens + 'ipadpro3_splash.png',
    //       media:
    //         '(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)',
    //       rel: 'apple-touch-startup-image',
    //     },
    //   ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [{ src: '~/assets/css/tailwind.css' }],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '~/plugins/vue-scrollto.ts' }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/moment
    '@nuxtjs/moment',
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://google-analytics.nuxtjs.org
    '@nuxtjs/google-analytics',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'ja',
      name: 'NISPLAN',
      short_name: 'NISPLAN',
      description: 'NISPLAN',
      background_color: '#ffffff',
      theme_color: '#e2844a',
      display: 'standalone',
      orientation: 'portrait',
    },
  },

  icon: {
    iconFileName: '/static/manifestIcon.png',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  moment: {},
  loading: '~/components/Loading.vue',

  publicRuntimeConfig: {
    apiUrl: process.env.NUXT_ENV_API_URL,
    apiKey: process.env.NUXT_ENV_API_KEY,
    weather_apiUrl: process.env.NUXT_ENV_WEATHER_URL,
    weather_apiKey: process.env.NUXT_ENV_WEATHER_KEY,
    googleAnalytics: {
      id: process.env.NUXT_ENV_GOOGLE_ANALYTICS_ID,
    },
  },
}
