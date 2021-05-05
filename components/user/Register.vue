<template>
  <div class="card">
    <div class="card__header">
      <h4>Inscrivez-vous gratuitement</h4>
    </div>
    <div class="card__content">
      <form @submit.prevent="register()">
        <div class="form-group">
          <label for="register-pseudo">Pseudo</label>
          <input
            id="register-pseudo"
            v-model="form.pseudo"
            required
            maxlength="30"
            type="text"
            class="form-control"
            placeholder="Entrez votre pseudo..."
          />
        </div>
        <div class="form-group">
          <label for="register-email">Adresse Email</label>
          <input
            id="register-email"
            v-model="form.email"
            type="email"
            required
            class="form-control"
            placeholder="Entrez votre adresse email..."
          />
        </div>
        <div class="form-group">
          <label for="register-password">Mot de passe</label>
          <input
            id="register-password"
            v-model="form.password"
            type="password"
            required
            class="form-control"
            placeholder="Entrez votre mot de passe..."
          />
        </div>
        <div class="form-group">
          <label for="repeat-password">Répétez votre mot de passe</label>
          <input
            id="repeat-password"
            v-model="form.confirmPassword"
            type="password"
            required
            class="form-control"
            placeholder="Répétez votre mot de passe..."
          />
        </div>
        <div class="form-group">
          <button
            :disabled="loading"
            type="submit"
            class="btn btn-default btn-lg btn-block"
          >
            Créer mon compte
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
        pseudo: null,
        email: null,
        password: null,
        confirmPassword: null,
        username: null,
      },
      loading: false,
    }
  },
  methods: {
    register() {
      this.loading = true
      this.form.username = this.form.email
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
      this.$axios
        .post('users', this.form)
        .then(() => {
          this.$toast({
            component: Toast,
            props: {
              text:
                'Votre compte est créé ! Nous vous avons envoyé un mail pour activer votre compte (vérifiez vos spams)',
              type: 'success',
            },
          })
          this.reset()
        })
        .finally(() => (this.loading = false))
    },
    reset() {
      this.form = {
        pseudo: null,
        email: null,
        password: null,
        confirmPassword: null,
        username: null,
      }
    },
  },
}
</script>
