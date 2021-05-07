<template>
  <div>
    <div
      class="page-heading page-heading--horizontal effect-duotone effect-duotone--primary"
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
                <h2 class="error__title">OUPS! Il y a une erreur</h2>
                <h3 class="error__subtitle">
                  Nous avons une erreur {{ error.statusCode }}!
                </h3>
              </header>
              <div class="header-search-form">
                <stat-search />
              </div>
              <div class="error__description">
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
}
</script>
