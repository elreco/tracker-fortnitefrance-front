<template>
  <div>
    <form
      :class="isHomePage ? 'w-100 body-search-form' : 'search-form'"
      @submit.prevent="search"
    >
      <template v-if="isHomePage">
        <div class="input-group">
          <input
            ref="searchInput"
            v-model="searchInput"
            type="text"
            class="form-control header-mobile__search-control"
            required
            :placeholder="placeholder"
          />

          <span class="input-group-append"
            ><button class="btn btn-primary" type="submit">
              <i class="d-block d-sm-none fa fa-search"></i>
              <span class="d-none d-sm-block">Rechercher</span>
            </button>
          </span>
        </div>
      </template>
      <template v-else>
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
      </template>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    isHomePage: {
      type: Boolean,
      required: false,
      default: false,
    },
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
