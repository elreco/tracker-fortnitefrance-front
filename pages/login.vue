<template>
  <div>
    <div
      class="page-heading page-heading--horizontal effect-duotone effect-duotone--primary"
    >
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
  middleware: 'auth',
  auth: 'guest',
}
</script>
