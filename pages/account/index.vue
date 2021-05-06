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
              Mon <span class="highlight">compte</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
    <div class="site-content">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <account-edit-form />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AccountEditForm from '@/components/account/EditForm'

export default {
  components: {
    AccountEditForm,
  },
  middleware: 'auth-user',
}
</script>
