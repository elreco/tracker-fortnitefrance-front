<template>
  <div class="card">
    <div class="card__header">
      <h4>Actualiser les informations de mon compte</h4>
    </div>
    <div class="card__content">
      <form class="df-personal-info" @submit.prevent="update()">
        <div class="form-group form-group--upload">
          <div class="form-group__avatar form-group__avatar--center">
            <label class="form-group__avatar-wrapper"
              ><figure class="form-group__avatar-img">
                <img
                  src="/images/esports/avatar-placeholder-80x80.jpg"
                  alt=""
                />
              </figure>
              <div class="form-group__label">
                <h6>Avatar</h6>
                <span>Taille minimum conseillée 80x80px</span>
              </div>
              <input type="file" style="display: none"
            /></label>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label for="account-email"
                >Adresse Email
                <abbr class="required" title="required">*</abbr></label
              >
              <input
                id="register-email"
                v-model="form.email"
                type="email"
                required
                class="form-control"
                placeholder="Entrez votre adresse email..."
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label for="register-pseudo"
                >Pseudo Fortnite
                <abbr class="required" title="required">*</abbr></label
              >
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
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label for="register-password">Changez votre mot de passe</label>
              <input
                id="register-password"
                v-model="form.password"
                type="password"
                required
                class="form-control"
                placeholder="*********"
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label for="repeat-password">Répétez le mot de passe</label>
              <input
                id="repeat-password"
                v-model="form.confirmPassword"
                type="password"
                required
                class="form-control"
                placeholder="*********"
              />
            </div>
          </div>
        </div>
        <div class="form-group--submit text-center">
          <button
            type="submit"
            :disabled="loading"
            class="btn btn-primary-inverse"
          >
            Sauvegarder les changements
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
        pseudo: null,
        email: null,
        password: null,
        confirmPassword: null,
      },
      loading: false,
    }
  },
  mounted() {
    this.form.email = this.$auth.user.email
    this.form.pseudo = this.$auth.user.pseudo
  },
  methods: {
    register() {
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
      this.$store
        .dispatch(`user/update/${this.$auth.user.objectId}`, this.form)
        .then(() => {
          this.$toast({
            component: Toast,
            props: {
              text: 'Votre compte a été mis à jour !',
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
      }
    },
  },
}
</script>
