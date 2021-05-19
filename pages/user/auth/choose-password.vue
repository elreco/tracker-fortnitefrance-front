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
              Choisissez votre nouveau
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
            <choose-password />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ChoosePassword from '@/components/user/ChoosePassword'

export default {
  components: {
    ChoosePassword,
  },
  middleware: 'auth-guest',
}
</script>
