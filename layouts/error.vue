<template>
  <div>
    <div
      class="
        page-heading page-heading--horizontal
        effect-duotone effect-duotone--primary
      "
    >
      <div class="effect-duotone__layer">
        <div class="effect-duotone__layer-inner"></div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col align-self-start">
            <h1 class="page-heading__title">
              Aucun résultat <span class="highlight">trouvé</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
    <div class="site-content">
      <div class="container">
        <div class="error-404">
          <div class="row">
            <div v-if="error.playerNotFound" class="col-md-12">
              <error-stat-not-found />
            </div>
            <div v-else class="col-md-8 offset-md-2">
              <figure class="error-404__figure">
                <img src="/images/icon-ghost.svg" class="w-75" alt="" />
              </figure>
              <header class="error__header mb-2">
                <h2 class="error__title">OUPS! Il y a une erreur</h2>
                <h3 class="error__subtitle">
                  Nous avons une erreur
                  <span class="highlight">{{ error.statusCode }}</span> !
                </h3>
                <div class="error__description mb-0">
                  {{ error.message }}
                </div>
              </header>
              <stat-search class="header-search-form" />
              <footer class="error__cta">
                <nuxt-link :to="{ name: 'index' }" class="btn btn-primary"
                  >Retourner à l'accueil</nuxt-link
                >
              </footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StatSearch from '@/components/stat/partial/Search'
import ErrorStatNotFound from '@/components/error/StatNotFound'

export default {
  components: {
    StatSearch,
    ErrorStatNotFound,
  },
  props: {
    error: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      title: `Aucun résultat - ${process.env.appName}`,
      description: `Erreur ${process.env.appName}`,
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.title,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.description,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.title,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.description,
        },
        {
          hid: 'description',
          name: 'description',
          content: this.description,
        },
      ],
    }
  },
  mounted() {
    this.$nextTick(() => this.$initGlobalTheme())
  },
}
</script>
