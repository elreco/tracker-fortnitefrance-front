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
            <div class="col-md-8 offset-md-2">
              <figure class="error-404__figure">
                <img src="/images/icon-ghost.svg" class="w-75" alt="" />
              </figure>
              <header class="error__header">
                <template v-if="error.playerNotFound">
                  <h2 class="error__title">OUPS! Aucun joueur trouvé</h2>
                  <h3 class="error__subtitle">
                    Nous ne trouvons pas
                    {{ $route.params && $route.params.name }} !
                  </h3>
                </template>
                <template v-else>
                  <h2 class="error__title">OUPS! Il y a une erreur</h2>
                  <h3 class="error__subtitle">
                    Nous avons une erreur
                    <span class="highlight">{{ error.statusCode }}</span> !
                  </h3>
                </template>
              </header>
              <stat-search class="body-search-form" />
              <div v-if="!error.playerNotFound" class="error__description">
                {{ error.message }}
              </div>

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

export default {
  components: {
    StatSearch,
  },
  props: {
    error: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      title: 'Aucun résultat - Fortnite France',
      description: 'Erreur Fortnite France',
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
