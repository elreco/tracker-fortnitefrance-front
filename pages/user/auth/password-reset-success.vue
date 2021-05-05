<template>
  <div>
    <div
      class="page-heading page-heading--horizontal effect-duotone effect-duotone--primary"
    >
      <div class="container">
        <div class="row">
          <div class="col align-self-start">
            <h1 class="page-heading__title">
              Vérification de votre
              <span class="highlight">Adresse Email</span>
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
              <div class="icobox icobox--center">
                <div
                  class="icobox__icon icobox__icon--border icobox__icon--lg icobox__icon--circle"
                >
                  <i class="icon-like"></i>
                </div>
              </div>
              <header class="error__header">
                <h2 class="error__title">Mot de passe réinitialisé</h2>
                <h3 class="error__subtitle">
                  Votre mot de passe a bien été changé !
                </h3>
              </header>
              <div class="error__description">
                Vous pouvez vous connecter avec votre nouveau mot de passe.
              </div>
              <footer class="error__cta">
                <nuxt-link :to="{ name: 'login' }" class="btn btn-primary"
                  >Connexion</nuxt-link
                >
                <nuxt-link
                  :to="{ name: 'index' }"
                  class="btn btn-primary-inverse"
                  >Retour à l'accueil</nuxt-link
                >
              </footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
