export default {
  ssr: false,
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  router: {
    base: '/spe/'
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Indicadores SPE',
    htmlAttrs: {
      lang: 'es'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Indicadores SPE - MMGYD' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/spe/favicon.png' },
      { href: 'https://fonts.googleapis.com/css2?family=Encode+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap', rel: 'stylesheet' },
      { href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css', rel: 'stylesheet', integrity: 'sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==', crossorigin: 'anonymous', referrerpolicy: 'no-referrer' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    { src: '@/assets/scss/main.scss', lang: 'sass' }
  ],

  env: {
    googleSheetId: process.env.GOOGLE_SHEET_ID || '',
    googleApiKey: process.env.GOOGLE_API_KEY || '',
    googleAnalyticsId: process.env.GOOGLE_ANALYTICS_ID || ''
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue-echart.js', mode: 'client' },
    { src: '~/plugins/vue-gtag.js', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://github.com/nuxt-community/style-resources-module
    '@nuxtjs/style-resources',
    // https://github.com/ecomfe/vue-echarts
    '@nuxtjs/composition-api/module',
  ],
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/buefy
    'nuxt-buefy',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios'
  ],
  styleResources: {
    // your settings here
    scss: ['~assets/scss/_variables.scss'],
    hoistUseStatements: true
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/echarts/, /zrender/]
  }
}
