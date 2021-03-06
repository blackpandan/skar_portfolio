export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,


  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'skar',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'I`m skar a professional artist who makes use of digital and tradition medium' },
      { name: 'format-detection', content: 'telephone=no' }, {
        hid: 'canonical',
        rel: 'canonical',
        href: 'https://skarstrokes.com',
      }, {
        hid: 'og:title',
        property: 'og:title',
        content: 'Skar | Professional Artist',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'I`m skar a professional artist who makes use of digital and tradition medium',
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: '/pics/5.jpg',
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://skarstrokes.com/'
      },
      {
        hid: 'og:locale',
        property: 'og:locale',
        content: 'en_NG',
      },
      { hid: 'twitter:card', name: "twitter:card", content: "summary_large_image" },
      { hid: 'twitter:domain', property: "twitter:domain", content: "skarstrokes.com" },
      { hid: 'twitter:url', property: "twitter:url", content: "https://skarstrokes.com/" },
      { hid: 'twitter:title', name: "twitter:title", content: "Skar | Professional Artist" },
      { hid: 'twitter:description', name: "twitter:description", content: "I`m skar a professional artist who makes use of digital and tradition medium" },
      { hid: 'twitter:image', name: "twitter:image", content: "/pics/5.jpg" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
      },
      {
        rel: 'mask-icon',
        href: '/safari-pinned-tab.svg',
        color: '#581bdf',
      },
      {
        rel: 'manifest',
        href: '/site.webmanifest',
      },
    ],
    script: [
      { hid: "fontawesome", src: "https://kit.fontawesome.com/4c4a079b95.js", crossorigin: "anonymous", defer: true }
    ]
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~assets/scss/global.scss',
    '~assets/scss/colors.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/style-resources',
    '@nuxt/image',
    '@nuxtjs/device',
    'nuxt-gsap-module',
    '@nuxtjs/sitemap',
  ],
  pageTransition: {
    name: 'page',
    mode: 'out-in',
    css: false,

    beforeEnter(el) {
      this.$gsap.set(el, {
        opacity: 0.5
      })
    },

    enter(el, done) {
      this.$gsap.to(el, {
        opacity: 1,
        duration: 0.5,
        ease: 'power2.inOut',
        onComplete: done
      })
    },

    leave(el, done) {
      this.$gsap.to(el, {
        opacity: 0.5,
        duration: 0.5,
        ease: 'power2.inOut',
        onComplete: done
      })
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@blokwise/dynamic',
    '@nuxtjs/axios'
    // '@nuxtjs/sitemap'
  ],

  sitemap: {
    hostname: "https://skarstrokes.com",
    gzip: true
  },

  styleResources: {
    scss: ['./assets/scss/*.scss']
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
}
