<template>
  <div class="card">
    <div class="card__header">
      <h4>Connexion à {{ appName }}</h4>
    </div>
    <div class="card__content">
      <form @submit.prevent="login()">
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
        <div class="form-group">
          <label for="password">Votre mot de passe</label>
          <input
            id="password"
            v-model="form.password"
            type="password"
            class="form-control"
            required
            placeholder="Entrez votre mot de passe..."
          />
        </div>
        <div class="form-group form-group--password-forgot">
          <!-- <label class="checkbox checkbox-inline"
            ><input
              id="inlineCheckbox1"
              type="checkbox"
              value="option1"
              checked="checked" />
            Remember Me <span class="checkbox-indicator"></span
          ></label> -->
          <span class="password-reminder text-right w-100"
            >Mot de passe oublié ?
            <nuxt-link :to="{ name: 'user-auth-forgot-password' }"
              >Cliquez ici</nuxt-link
            ></span
          >
        </div>
        <div class="form-group form-group--sm">
          <button
            type="submit"
            class="btn btn-primary-inverse btn-lg btn-block"
            :disabled="loading"
          >
            Connexion à votre compte
          </button>
        </div>
        <!-- <div class="row">
          <div class="col-md-6">
            <button class="btn btn-facebook btn-icon btn-block">
              <i class="fab fa-facebook"></i> Sign In via Facebook
            </button>
          </div>
          <div class="col-md-6">
            <button class="btn btn-twitter btn-icon btn-block">
              <i class="fab fa-twitter"></i> Sign in via Twitter
            </button>
          </div>
        </div> -->
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
        password: '',
      },
      loading: false,
    }
  },
  methods: {
    async login() {
      this.loading = true
      this.form.email = this.form.email.toLowerCase()
      await this.$auth
        .loginWith('local', {
          params: this.form,
        })
        .then(() => {
          this.$toast({
            component: Toast,
            props: {
              text: 'Vous êtes connecté !',
              type: 'success',
            },
          })
          this.$router.back()
        })
        .catch(() => {
          this.reset()
        })
        .finally(() => (this.loading = false))
      /*  */
    },
    reset() {
      this.form = {
        email: '',
        password: '',
      }
    },
  },
}
</script>
