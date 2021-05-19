<template>
  <div class="card">
    <div class="card__header">
      <h4>Envoi d'un mail de réinitialisation</h4>
    </div>
    <div class="card__content">
      <form @submit.prevent="resetPassword()">
        <div class="form-group">
          <label for="email">Votre adresse email</label>
          <input
            id="email"
            v-model="form.email"
            type="email"
            required
            class="form-control"
            placeholder="Entrez votre adresse email..."
          />
        </div>
        <div class="form-group form-group--sm">
          <button
            type="submit"
            class="btn btn-primary-inverse btn-lg btn-block"
          >
            Réinitialiser mon mot de passe
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Toast from '~/components/global/Toast.vue'

export default {
  data() {
    return {
      appName: process.env.appName,
      form: {
        email: '',
      },
      loading: false,
    }
  },
  methods: {
    resetPassword() {
      this.$axios.post('requestPasswordReset', this.form).then(() => {
        this.$router.push({ path: '/login' })
        this.$toast(
          {
            component: Toast,
            props: {
              text: 'Si votre adresse email existe dans notre base de données, un email pour réinitialisation de votre mot de passe vous a été envoyé par email !',
              type: 'success',
            },
          },
          { timeout: 5000 }
        )
      })
    },
  },
}
</script>
