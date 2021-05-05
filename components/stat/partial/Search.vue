<template>
  <form class="search-form" @submit.prevent="search">
    <input
      v-model="searchInput"
      type="text"
      class="form-control header-mobile__search-control"
      required
      placeholder="Recherchez les statistiques d'un joueur"
    />
    <button type="submit" class="header-mobile__search-submit">
      <i class="fas fa-search"></i>
    </button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      searchInput: null,
    }
  },
  methods: {
    search() {
      return this.$router.push({
        name: 'stat.view',
        params: {
          name: this.searchInput,
        },
      })
    },
  },
}
</script>

<style></style>
