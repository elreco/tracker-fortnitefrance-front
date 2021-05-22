export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Fortnite France Tracker - Stats et Classements Fortnite',
    htmlAttrs: {
      lang: 'fr',
    },
    meta: [
      {
        charset: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, maximum-scale=1',
      },
      {
        hid: 'description',
        name: 'description',
        content:
          'Tracker, statistiques détaillées, nombre de tops 1 et classement pour Fortnite Battle Royale.',
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: '/images/seo-image.png',
      },
      {
        hid: 'og:image',
        name: 'og:image',
        content: '/images/seo-image.png',
      },
      {
        hid: 'og:image:secure_url',
        name: 'og:image:secure_url',
        content: '/images/seo-image.png',
      },
      {
        name: 'msapplication-TileColor',
        content: '#2d89ef',
      },
      {
        name: 'theme-color',
        content: '#ffffff',
      },
    ],
    link: [
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/images/favicons/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/images/favicons/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/images/favicons/favicon-16x16.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/images/favicons/favicon-16x16.png',
      },
      {
        rel: 'manifest',
        href: '/images/favicons/site.webmanifest',
      },
      {
        rel: 'mask-icon',
        color: '#5bbad5',
        href: '/images/favicons/safari-pinned-tab.svg',
      },
      {
        rel: 'mask-icon',
        color: '#5bbad5',
        href: '/images/favicons/safari-pinned-tab.svg',
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: '//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/css/bootstrap.min.css',
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: '//cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css',
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: '//cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.5.5/css/simple-line-icons.min.css',
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: '//cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css',
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: '/plugins/revolution/css/settings.css',
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: '/plugins/revolution/css/layers.css',
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: '/plugins/revolution/css/navigation.css',
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: '/plugins/revolution-addons/reveal/css/revolution.addon.revealer.css',
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: '/plugins/revolution-addons/reveal/css/revolution.addon.revealer.preloaders.css',
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: '/plugins/magnific-popup/dist/magnific-popup.css',
      },
    ],
    script: [
      {
        src: '//cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js',
        body: true,
      },
      {
        src: '//cdnjs.cloudflare.com/ajax/libs/popper.js/2.9.2/umd/popper.min.js',
        body: true,
      },
      {
        src: '//cdnjs.cloudflare.com/ajax/libs/jquery-migrate/3.3.2/jquery-migrate.min.js',
        body: true,
      },
      {
        src: '//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/js/bootstrap.min.js',
        body: true,
      },
      {
        src: '//cdnjs.cloudflare.com/ajax/libs/svg4everybody/2.1.9/svg4everybody.min.js',
        body: true,
      },
      {
        src: '//cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js',
        body: true,
      },
      {
        src: '//cdnjs.cloudflare.com/ajax/libs/jquery.countdown/2.2.0/jquery.countdown.min.js',
        body: true,
      },
      {
        src: '//cdnjs.cloudflare.com/ajax/libs/easy-pie-chart/2.1.6/jquery.easypiechart.min.js',
        body: true,
      },
      {
        src: '//cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/jquery.magnific-popup.min.js',
        body: true,
      },
      {
        src: '/plugins/custom-select/classie.js',
        body: true,
      },
      {
        src: '/plugins/custom-select/selectFx.js',
        body: true,
      },
      {
        src: '//cdnjs.cloudflare.com/ajax/libs/jquery.imagesloaded/4.1.4/imagesloaded.pkgd.min.js',
        body: true,
      },
      {
        src: '//cdnjs.cloudflare.com/ajax/libs/jquery.isotope/3.0.6/isotope.pkgd.min.js',
        body: true,
      },
      {
        src: '//cdnjs.cloudflare.com/ajax/libs/Chart.js/3.1.1/chart.min.js',
        body: true,
      },
      {
        src: '//cdnjs.cloudflare.com/ajax/libs/noUiSlider/14.7.0/nouislider.min.js',
        body: true,
      },
      {
        src: '//cdnjs.cloudflare.com/ajax/libs/jQuery.Marquee/1.6.0/jquery.marquee.min.js',
        body: true,
      },
      {
        src: '/plugins/magnific-popup/dist/jquery.magnific-popup.min.js',
        body: true,
      },
      {
        src: '/plugins/revolution-addons/reveal/js/revolution.addon.revealer.min.js?ver=1.0.0',
        body: true,
      },
      {
        src: '/plugins/revolution-addons/typewriter/js/revolution.addon.typewriter.min.js',
        body: true,
      },
      {
        src: '/plugins/revolution/js/jquery.themepunch.tools.min.js',
        body: true,
      },
      {
        src: '/plugins/revolution/js/jquery.themepunch.revolution.min.js',
        body: true,
      },
      {
        src: '/plugins/revolution/js/extensions/revolution.extension.layeranimation.min.js',
        body: true,
      },
      {
        src: '/plugins/revolution/js/extensions/revolution.extension.migration.min.js',
        body: true,
      },
      {
        src: '/plugins/revolution/js/extensions/revolution.extension.parallax.min.js',
        body: true,
      },
      {
        src: '/plugins/revolution/js/extensions/revolution.extension.slideanims.min.js',
        body: true,
      },
      {
        src: '/js/custom.js',
        body: true,
      },
      {
        src: '/js/init.js',
        body: true,
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/scss/style-esports.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: '~/plugins/client/revslider.js',
      mode: 'client',
    },
    {
      src: '~/plugins/client/circular-bar.js',
      mode: 'client',
    },
    {
      src: '~/plugins/client/mp-iframe.js',
      mode: 'client',
    },
    {
      src: '~/plugins/client/global-theme.js',
      mode: 'client',
    },
    {
      src: '~/plugins/client/vue-google-adsense',
      mode: 'client',
    },
    {
      src: '~/plugins/jsonld.js',
    },
    {
      src: '~/plugins/axios.js',
    },
    {
      src: '~/plugins/voca.js',
    },
    {
      src: '~/plugins/numeral.js',
    },
    {
      src: '~/plugins/v-tooltip.js',
    },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  loading: {
    color: '#2575DC',
  },
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    [
      '@nuxtjs/eslint-module',
      {
        fix: true,
      },
    ],
    '@nuxtjs/moment',
    '@nuxtjs/dotenv',
    '@nuxtjs/google-analytics',
  ],

  googleAnalytics: {
    id: 'UA-97058805-4', // Use as fallback if no runtime config is provided
  },

  moment: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    'vue-social-sharing/nuxt',
    'vue-toastification/nuxt',
    'cookie-universal-nuxt',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      plugins: [
        [
          '@babel/plugin-proposal-private-methods',
          {
            loose: true,
          },
        ],
      ],
    },
  },
  env: {
    appName: process.env.APP_NAME || 'Fortnite France Tracker',
    baseUrl: process.env.VUE_BASE_URL_TRACKER || 'http://localhost:3000',
  },
  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'news.view',
        path: '/news/:id/:slug?',
        component: resolve(__dirname, 'pages/news/view.vue'),
      })
      routes.push({
        name: 'stat.view',
        path: '/stats/:name/:view?',
        component: resolve(__dirname, 'pages/stat/view.vue'),
      })
    },
  },

  // Plugins config
  axios: {
    baseURL: process.env.VUE_APP_API_URL,
    timeout: 1000,
    headers: {
      'X-Parse-REST-API-Key': process.env.VUE_APP_REST_API_KEY,
      'X-Parse-Application-Id': process.env.VUE_APP_APP_ID,
      'Content-Type': 'application/json',
    },
  },
  toast: {
    timeout: 3000,
    icon: false,
    closeButton: false,
  },

  auth: {
    localStorage: false,
    redirect: {
      login: '/login',
      logout: '/login',
      home: '/',
    },
    strategies: {
      local: {
        token: {
          property: 'sessionToken',
          name: 'X-Parse-Session-Token',
          type: false,
        },
        user: {
          property: false,
        },
        endpoints: {
          login: {
            url: 'login',
            method: 'get',
          },
          user: {
            url: 'users/me',
            method: 'get',
          },
          logout: false,
        },
      },
    },
    cookie: {
      prefix: 'auth.',
      options: {
        path: '/',
      },
    },
  },
}
