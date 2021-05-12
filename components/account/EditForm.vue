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
                  class="img-avatar"
                  :src="
                    url ? url : '/images/esports/avatar-placeholder-80x80.jpg'
                  "
                  alt=""
                />
              </figure>
              <div class="form-group__label">
                <h6>Avatar</h6>
                <span>Taille minimum conseillée 80x80px</span>
              </div>
              <input
                type="file"
                accept="image/*"
                style="display: none"
                @change="onFileChange"
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
              <em class="small"
                >Si vous modifiez votre adresse email, vous recevrez un email
                pour la vérifier</em
              >
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
                class="form-control"
                placeholder="*********"
              />
              <em class="small"
                >Ne renseignez pas ce champ si vous ne voulez pas changer votre
                mot de passe</em
              >
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label for="repeat-password">Répétez le mot de passe</label>
              <input
                id="repeat-password"
                v-model="form.confirmPassword"
                type="password"
                :required="form.password ? true : false"
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
      url: '',
      form: {
        avatar: null,
        pseudo: '',
        email: '',
        password: '',
        confirmPassword: '',
      },
      loading: false,
    }
  },
  mounted() {
    this.form.email = this.$auth.user.email
    this.form.pseudo = this.$auth.user.pseudo
    if (this.$auth.user.avatar) {
      this.url = this.$auth.user.avatar.url
    }
  },
  methods: {
    onFileChange(e) {
      const files = e.target.files || e.dataTransfer.files
      if (!files.length) return
      if (files[0].type.split('/')[0] !== 'image') return
      this.createImage(files[0])
    },
    createImage(image) {
      this.form.avatar = image
      this.url = URL.createObjectURL(image)
    },
    update() {
      this.loading = true
      if (
        this.form.password &&
        this.form.password !== this.form.confirmPassword
      ) {
        this.$toast({
          component: Toast,
          props: {
            text: "La confirmation du mot de passe n'est pas bonne.",
            type: 'danger',
          },
        })
        this.loading = true
        return
      }
      const params = {
        id: this.$auth.user.objectId,
        data: this.form,
      }
      this.$store
        .dispatch('user/update', params)
        .then(() => {
          this.$toast({
            component: Toast,
            props: {
              text: 'Votre compte a été mis à jour !',
              type: 'success',
            },
          })
        })
        .finally(() => (this.loading = false))
    },
  },
}
</script>
