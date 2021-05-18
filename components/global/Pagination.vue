<template>
  <nav>
    <ul class="pagination pagination--circle justify-content-center">
      <li class="page-item" :class="isInFirstPage && 'disabled'">
        <nuxt-link class="page-link" :to="getRoute(1)">
          <i class="fas fa-angle-double-left"></i>
        </nuxt-link>
      </li>
      <li class="page-item" :class="isInFirstPage && 'disabled'">
        <nuxt-link
          :to="getRoute(currentPage - 1)"
          :disabled="isInFirstPage"
          class="page-link"
          @click.native="scrollToTop"
        >
          <i class="fas fa-angle-left"></i>
        </nuxt-link>
      </li>
      <li
        v-for="page in pages"
        :key="page.name"
        class="page-item"
        :class="{ active: isPageActive(page.name) }"
      >
        <nuxt-link
          :disabled="page.isDisabled"
          class="page-link"
          :to="getRoute(page.name)"
          @click.native="scrollToTop"
          >{{ page.name }}</nuxt-link
        >
      </li>
      <li class="page-item" :class="isInLastPage && 'disabled'">
        <nuxt-link
          class="page-link"
          :to="getRoute(currentPage + 1)"
          @click.native="scrollToTop"
        >
          <i class="fas fa-angle-right"></i>
        </nuxt-link>
      </li>
      <li class="page-item" :class="isInLastPage && 'disabled'">
        <nuxt-link
          class="page-link"
          :to="getRoute(totalPages)"
          @click.native="scrollToTop"
        >
          <i class="fas fa-angle-double-right"></i>
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    maxVisibleButtons: {
      type: Number,
      required: false,
      default: 3,
    },
    total: {
      type: Number,
      required: true,
    },
    perPage: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      totalPages: Math.ceil(this.total / this.perPage),
    }
  },
  computed: {
    startPage() {
      if (this.currentPage === 1) {
        return 1
      }

      if (this.currentPage === this.totalPages) {
        const calculatePage = this.totalPages - this.maxVisibleButtons + 1
        if (calculatePage === 0) {
          return 1
        } else {
          return calculatePage
        }
      }

      return this.currentPage - 1
    },
    endPage() {
      return Math.min(
        this.startPage + this.maxVisibleButtons - 1,
        this.totalPages
      )
    },
    pages() {
      const range = []
      for (let i = this.startPage; i <= this.endPage; i += 1) {
        range.push({
          name: i,
          isDisabled: i === this.currentPage,
        })
      }

      return range
    },
    isInFirstPage() {
      return this.currentPage === 1
    },
    isInLastPage() {
      return this.currentPage === this.totalPages
    },
  },
  methods: {
    isPageActive(page) {
      return this.currentPage === page
    },
    getRoute(num) {
      if (num === 0) {
        num = 1
      }
      const query = {}
      Object.assign(query, this.$route.query)
      query.page = num
      return {
        query,
      }
    },
    scrollToTop() {
      this.$nextTick(() => window.scrollTo(0, 0))
    },
  },
}
</script>
