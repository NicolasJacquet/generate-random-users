const repoName = '/generate-random-users/'

const routerBase =
  process.env.DEPLOY_ENV === 'GH_PAGES'
    ? {
        router: {
          base: repoName
        }
      }
    : {}

export default {
  ...routerBase,
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Random User Generator',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Generate users with data and download them as json file'
      },
      {
        property: 'og:title',
        content: 'Random User Generator',
        hid: 'og:title'
      },
      {
        property: 'og:description',
        content: 'Generate users with data and download them as json file',
        hid: 'og:description'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content:
          process.env.DEPLOY_ENV === 'GH_PAGES'
            ? repoName + 'images/social-media.jpg'
            : '/images/social-media.jpg'
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href:
          process.env.DEPLOY_ENV === 'GH_PAGES'
            ? repoName + 'favicon.ico'
            : '/favicon.ico'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    [
      'nuxt-lazy-load',
      {
        defaultImage:
          process.env.DEPLOY_ENV === 'GH_PAGES'
            ? repoName + 'images/default-image.png'
            : '/images/default-image.png'
      }
    ]
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
