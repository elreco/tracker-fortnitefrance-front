<template>
  <button
    v-if="!$fetchState.error && stat"
    type="button"
    :disabled="favoritesCount >= 5 || $fetchState.pending || loading"
    class="btn btn-sm font-weight-bold"
    :class="favorite ? 'btn-danger' : 'btn-warning'"
    @click="toggleFavorite"
  >
    {{ favorite ? 'Retirer des favoris' : 'Ajouter aux favoris' }}
  </button>
</template>

<script>
import Toast from '~/components/global/Toast.vue'

export default {
  data() {
    return {
      stat: this.$store.state.stat.stat,
      favorite: false,
      favoritesCount: 0,
      loading: false,
    }
  },
  async fetch() {
    this.favorite = await this.getFavorite()
    this.favoritesCount = await this.getFavoritesCount()
  },
  methods: {
    async toggleFavorite() {
      this.loading = true
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
                  text: `Vous avez supprimé  ${this.stat.name} de vos favoris !`,
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
              objectId: this.stat.objectId,
            },
          }
          await this.$store.dispatch('favorite/create', data).then(() =>
            this.$toast({
              component: Toast,
              props: {
                text: `Vous avez ajouté  ${this.stat.name} à vos favoris !`,
                type: 'success',
              },
            })
          )
        }
        this.loading = false
        this.$fetch()
      }
    },
    async getFavorite() {
      if (this.$auth && this.$auth.user && this.stat) {
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
              objectId: this.stat.objectId,
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
        const favorites = await this.$store.dispatch('favorite/fetch', {
          where: {
            user: {
              __type: 'Pointer',
              className: '_User',
              objectId: this.$auth.user.objectId,
            },
          },
          count: 1,
        })
        return favorites.count
      }
    },
  },
}
</script>
