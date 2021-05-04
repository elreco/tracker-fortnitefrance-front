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
              Erreur <span class="highlight">{{ error.statusCode }}</span>
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
                <img src="/images/icon-ghost.svg" alt="" />
              </figure>
              <header class="error__header">
                <h2 class="error__title">OUPS! Il y a une erreur</h2>
                <h3 class="error__subtitle">
                  Nous avons une erreur {{ error.statusCode }}!
                </h3>
              </header>
              <div class="error__description">
                {{ error.message }}
              </div>
              <footer class="error__cta">
                <nuxt-link to="/" class="btn btn-primary"
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
export default {
  props: {
    error: {
      type: Object,
      required: true,
    },
  },
}
</script>
