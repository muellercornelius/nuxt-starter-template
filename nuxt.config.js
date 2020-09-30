export default {
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
    '@nuxtjs/toast',
    '@nuxtjs/strapi'
  ],

  toast: {
    position: 'bottom-right',
    theme: 'outline',
    duration: 3000,

  },

  strapi: {
    entities: [
      { name: 'notices', type: 'collection' }
    ]
  },

  build: {},
}
