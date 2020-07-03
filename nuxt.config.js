export default {
  mode: 'universal',
  head: {
    htmlAttrs: {
      lang: 'de'
    },
    title: "Seiten Name",
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: "Seiten Beschreibung"
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },
  css: [],
  plugins: [],
  components: true,
  buildModules: [
    '@nuxtjs/tailwindcss',
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxtjs/toast',
  ],

  toast: {
    position: 'bottom-right',
    theme: 'outline',
    duration: 3000,

  },

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: '/auth/local',
            method: 'post',
            propertyName: 'jwt'
          },
          user: false,
          logout: false,
        },
        autoFetchUser: false
      }
    },
    redirect: {
      login: '/login',
      logout: '/login',
      home: '/'
    }
  },
  axios: {
    baseURL: 'strapiUrl'
  },
  build: {},
  router: {
    middleware: ['auth']
  }
}
