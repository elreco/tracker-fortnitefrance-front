<template>
  <li class="nav-account__item has-children">
    <span class="main-nav__toggle"></span><a href="#">Mes favoris</a>
    <ul class="main-nav__sub">
      <template v-if="$store.state.favorite && $store.state.favorite.me.length">
        <li
          v-for="favorite in $store.state.favorite.me"
          :key="favorite.objectId"
        >
          <router-link
            v-if="favorite.stat"
            :to="{ name: 'stat.view', params: { name: favorite.stat.name } }"
            >{{ favorite.stat.name }}</router-link
          >
        </li>
      </template>
      <li v-else>
        <a href="#">Aucun favoris</a>
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  async fetch() {
    await this.getFavorites()
  },
  methods: {
    async getFavorites() {
      if (this.$auth && this.$auth.user) {
        await this.$store.dispatch('favorite/me')
      }
    },
  },
}
</script>
