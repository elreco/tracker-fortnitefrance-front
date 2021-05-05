<template>
  <div class="card">
    <div class="card__header">
      <h4>Choisissez votre nouveau mot de passe</h4>
    </div>
    <div class="card__content">
      <form @submit.prevent="choosePassword()">
        <div class="form-group">
          <label for="password">Votre nouveau mot de passe</label>
          <input
            id="password"
            v-model="form.password"
            type="password"
            class="form-control"
            required
            placeholder="Entrez votre nouveau mot de passe..."
          />
        </div>
        <div class="form-group">
          <label for="repeat-password"
            >Répétez votre nouveau mot de passe</label
          >
          <input
            id="repeat-password"
            v-model="form.confirmPassword"
            type="password"
            required
            class="form-control"
            placeholder="Répétez votre nouveau mot de passe..."
          />
        </div>
        <div class="form-group form-group--sm">
          <button
            :disabled="loading"
            type="submit"
            class="btn btn-primary-inverse btn-lg btn-block"
          >
            Enregistrer mon mot de passe
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
      form: {
        password: null,
        confirmPassword: null,
      },
      loading: false,
    }
  },
  methods: {
    choosePassword() {
      this.loading = true
      if (this.form.password !== this.form.confirmPassword) {
        this.$toast({
          component: Toast,
          props: {
            text: "La confirmation du mot de passe n'est pas bonne.",
            type: 'danger',
          },
        })
        return
      }
      // obligé de passer ca en body car aucun endpoint de dispo via Parse
      const params = new URLSearchParams()
      params.append('username', this.$route.query.username)
      params.append('token', this.$route.query.token)
      params.append('new_password', this.form.password)
      params.append('confirm_new_password', this.form.confirmPassword)
      this.$axios
        .post(`apps/${this.$route.query.id}/request_password_reset`, params, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'X-Requested-With': 'XMLHttpRequest',
          },
        })
        .then(() => {
          this.$router.push({ path: '/login' })
          this.$toast({
            component: Toast,
            props: {
              text:
                'Votre mot de passe a été modifié ! Vous pouvez vous connecter avec votre nouveau mot de passe.',
              type: 'success',
            },
          })
        })
        .finally(() => (this.loading = false))
    },
  },
}
</script>

<style></style>
