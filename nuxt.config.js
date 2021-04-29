export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'fortnitefrance',
    htmlAttrs: {
      lang: 'fr',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href:
          '//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/css/bootstrap.min.css',
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href:
          '//cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css',
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href:
          '//cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.5.5/css/simple-line-icons.min.css',
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href:
          '//cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css',
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
        href:
          '/plugins/revolution-addons/reveal/css/revolution.addon.revealer.css',
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href:
          '/plugins/revolution-addons/reveal/css/revolution.addon.revealer.preloaders.css',
      },
    ],
    script: [
      {
        src: '//cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js',
        body: true,
      },
      {
        src:
          '//cdnjs.cloudflare.com/ajax/libs/popper.js/2.9.2/umd/popper.min.js',
        body: true,
      },
      {
        src:
          '//cdnjs.cloudflare.com/ajax/libs/jquery-migrate/3.3.2/jquery-migrate.min.js',
        body: true,
      },
      {
        src:
          '//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/js/bootstrap.min.js',
        body: true,
      },
      { src: '/plugins/jpreloader2/js/jpreloader.js', body: true },
      {
        src:
          '//cdnjs.cloudflare.com/ajax/libs/svg4everybody/2.1.9/svg4everybody.min.js',
        body: true,
      },
      {
        src:
          '//cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js',
        body: true,
      },
      {
        src:
          '//cdnjs.cloudflare.com/ajax/libs/jquery.countdown/2.2.0/jquery.countdown.min.js',
        body: true,
      },
      {
        src:
          '//cdnjs.cloudflare.com/ajax/libs/easy-pie-chart/2.1.6/jquery.easypiechart.min.js',
        body: true,
      },
      {
        src:
          '//cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/jquery.magnific-popup.min.js',
        body: true,
      },
      { src: '/plugins/custom-select/classie.js', body: true },
      { src: '/plugins/custom-select/selectFx.js', body: true },
      {
        src:
          '//cdnjs.cloudflare.com/ajax/libs/jquery.imagesloaded/4.1.4/imagesloaded.pkgd.min.js',
        body: true,
      },
      {
        src:
          '//cdnjs.cloudflare.com/ajax/libs/jquery.isotope/3.0.6/isotope.pkgd.min.js',
        body: true,
      },
      {
        src: '//cdnjs.cloudflare.com/ajax/libs/Chart.js/3.1.1/chart.min.js',
        body: true,
      },
      {
        src:
          '//cdnjs.cloudflare.com/ajax/libs/noUiSlider/14.7.0/nouislider.min.js',
        body: true,
      },
      { src: '/plugins/easyembed/jquery.easyembed.js', body: true },
      {
        src:
          '//cdnjs.cloudflare.com/ajax/libs/jQuery.Marquee/1.6.0/jquery.marquee.min.js',
        body: true,
      },
      {
        src:
          '/plugins/revolution-addons/reveal/js/revolution.addon.revealer.min.js?ver=1.0.0',
        body: true,
      },
      {
        src:
          '/plugins/revolution-addons/typewriter/js/revolution.addon.typewriter.min.js',
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
        src:
          '/plugins/revolution/js/extensions/revolution.extension.layeranimation.min.js',
        body: true,
      },
      {
        src:
          '/plugins/revolution/js/extensions/revolution.extension.migration.min.js',
        body: true,
      },
      {
        src:
          '/plugins/revolution/js/extensions/revolution.extension.parallax.min.js',
        body: true,
      },
      {
        src:
          '/plugins/revolution/js/extensions/revolution.extension.slideanims.min.js',
        body: true,
      },
      { src: '/js/init.js', body: true },
      { src: '/js/custom.js', body: true },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/scss/style-esports.scss', '~/assets/scss/custom.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/revslider.js', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  loading: {
    color: '#2575DC'
  },
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    ['@nuxtjs/eslint-module', {
      fix: true
    }],
    '@nuxtjs/dotenv',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios', '@nuxtjs/axios', '@nuxtjs/auth-next'],

  axios: {
    baseURL: process.env.VUE_APP_API_URL,
    timeout: 1000,
    headers: {
      'X-Parse-REST-API-Key': process.env.VUE_APP_REST_API_KEY,
      'X-Parse-Application-Id': process.env.VUE_APP_APP_ID,
      'Content-Type': 'application/json',
    },
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
