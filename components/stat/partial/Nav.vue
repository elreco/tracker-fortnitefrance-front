<template>
  <nav
    class="
      content-filter
      content-filter--boxed
      content-filter--highlight-side
      content-filter--label-left
    "
  >
    <div class="container">
      <div class="content-filter__inner">
        <a
          href="#"
          class="content-filter__toggle"
          :class="displayFilter && 'content-filter__toggle--active'"
          @click="triggerFilter()"
        ></a>
        <ul
          class="content-filter__list"
          :class="displayFilter && 'content-filter__list--expanded'"
        >
          <li
            class="content-filter__item"
            :class="!$route.params.view ? 'content-filter__item--active' : ''"
          >
            <router-link
              :to="{ name: 'stat.view' }"
              class="content-filter__link"
              ><small>Les stats</small>Vue d'ensemble</router-link
            >
          </li>
          <li
            class="content-filter__item"
            :class="
              $route.params.view && $route.params.view === 'matches'
                ? 'content-filter__item--active'
                : ''
            "
          >
            <router-link
              :to="{ name: 'stat.view', params: { view: 'matches' } }"
              class="content-filter__link"
              ><small>Tous les matchs</small>Matchs</router-link
            >
          </li>
          <li class="content-filter__item">
            <a href="#" class="content-filter__link"
              ><small>Bientôt</small>Graphiques</a
            >
          </li>
          <li class="content-filter__item">
            <a href="#" class="content-filter__link"
              ><small>Bientôt</small>Chaîne Twitch</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      displayFilter: false,
    }
  },
  methods: {
    triggerFilter() {
      this.displayFilter
        ? (this.displayFilter = false)
        : (this.displayFilter = true)
    },
  },
}
</script>
