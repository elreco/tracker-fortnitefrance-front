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
              Connexion ou <span class="highlight">Inscription</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
    <div class="site-content">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <login />
          </div>
          <div class="col-lg-6">
            <register />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Login from '@/components/user/Login'
import Register from '@/components/user/Register'

export default {
  components: {
    Login,
    Register,
  },
  middleware: 'auth-guest',
  data() {
    return {
      title: 'Connexion - Fortnite France',
      description:
        'Créez un coompte Fortnite France ou connectez-vous pour gérer votre compte et vos favoris.',
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
}
</script>
