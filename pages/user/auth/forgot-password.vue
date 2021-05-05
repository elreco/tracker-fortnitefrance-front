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
              Réinitialisez votre
              <span class="highlight">mot de passe</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
    <div class="site-content">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-6">
            <forgot-password />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ForgotPassword from '@/components/user/ForgotPassword'

export default {
  components: {
    ForgotPassword,
  },
  middleware: 'auth',
  auth: 'guest',
}
</script>
