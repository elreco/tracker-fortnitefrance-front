<template>
  <button
    v-if="canDisplayButton() && loaded"
    v-tooltip="tooltipText()"
    type="button"
    :disabled="isDisabled()"
    class="btn btn-sm font-weight-bold my-2 my-sm-auto"
    :class="favorite ? 'btn-danger' : 'btn-warning'"
    @click="toggleFavorite()"
  >
    {{ getButtonText() }}
  </button>
</template>

<script>
import Toast from '~/components/global/Toast.vue'

export default {
  data() {
    return {
      favorite: false,
      favoritesCount: 0,
      loaded: false,
    }
  },
  async fetch() {
    this.favorite = await this.getFavorite()
    this.favoritesCount = await this.getFavoritesCount()
  },
  watch: {
    '$store.state.stat.stat'() {
      if (
        this.$store.state.stat.stat &&
        this.$route.params.name &&
        this.$store.state.stat.stat.name.toLowerCase() ===
          this.$route.params.name.toLowerCase()
      ) {
        this.$fetch()
      }
    },
  },
  mounted() {
    setTimeout(() => (this.loaded = true), 250)
  },
  methods: {
    async toggleFavorite() {
      if (!this.$cookies.get('auth._token.local')) {
        this.$toast({
          component: Toast,
          props: {
            text: 'Vous devez être connecté pour ajouter aux favoris !',
            type: 'warning',
          },
        })
        return this.$router.push({ name: 'login' })
      }

      if (this.favoritesCount < 5) {
        if (this.favorite) {
          await this.$store
            .dispatch('favorite/delete', this.favorite.objectId)
            .then(() =>
              this.$toast({
                component: Toast,
                props: {
                  text: `Vous avez supprimé  ${this.$store.state.stat.stat.name} de vos favoris !`,
                  type: 'success',
                },
              })
            )
        } else {
          const data = {
            user: {
              __type: 'Pointer',
              className: '_User',
              objectId: this.$auth.user.objectId,
            },
            stat: {
              __type: 'Pointer',
              className: 'Stat',
              objectId: this.$store.state.stat.stat.objectId,
            },
          }

          await this.$store.dispatch('favorite/create', data).then(() =>
            this.$toast({
              component: Toast,
              props: {
                text: `Vous avez ajouté  ${this.$store.state.stat.stat.name} à vos favoris !`,
                type: 'success',
              },
            })
          )
        }
        this.$fetch()
      }
    },
    async getFavorite() {
      if (this.$auth && this.$auth.user) {
        const favorite = await this.$store.dispatch('favorite/fetch', {
          where: {
            user: {
              __type: 'Pointer',
              className: '_User',
              objectId: this.$auth.user.objectId,
            },
            stat: {
              __type: 'Pointer',
              className: 'Stat',
              objectId: this.$store.state.stat.stat.objectId,
            },
          },
        })
        return favorite.results && favorite.results[0]
          ? favorite.results[0]
          : false
      }
    },
    async getFavoritesCount() {
      if (this.$auth && this.$auth.user) {
        const favorites = await this.$store.dispatch('favorite/me')
        return favorites.count
      }
    },
    canDisplayButton() {
      if (
        !this.$store.state.stat.stat.name ||
        !this.$route.params.name ||
        this.$store.state.stat.stat.name.toLowerCase() !==
          this.$route.params.name.toLowerCase()
      ) {
        return false
      } else {
        return true
      }
    },
    getButtonText() {
      return this.favorite
        ? `Retirer ${this.$store.state.stat.stat.name} des favoris`
        : `Ajouter ${this.$store.state.stat.stat.name} aux favoris`
    },
    isDisabled() {
      return this.favoritesCount >= 5 || this.$fetchState.pending
    },
    tooltipText() {
      return this.favoritesCount >= 5
        ? 'Vous ne pouvez pas avoir plus de 5 favoris'
        : ''
    },
  },
}
</script>
