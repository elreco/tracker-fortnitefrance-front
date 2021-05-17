<template>
  <div>
    <form class="search-form" @submit.prevent="search">
      <input
        ref="searchInput"
        v-model="searchInput"
        type="text"
        class="form-control header-mobile__search-control"
        required
        :placeholder="placeholder"
      />
      <button type="submit" class="header-mobile__search-submit">
        <i class="fas fa-search"></i>
      </button>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      required: false,
      default: "Recherchez les statistiques d'un joueur",
    },
  },
  data() {
    return {
      searchInput: null,
    }
  },
  methods: {
    search() {
      this.$router.push({
        name: 'stat.view',
        params: {
          name: this.searchInput,
        },
      })
      this.searchInput = null
      this.$refs.searchInput.blur()
    },
  },
}
</script>

<style></style>
