<template>
  <div>
    <div class="posts posts--cards post-grid post-grid--2cols row">
      <div v-for="n in news" :key="n.objectId" class="post-grid__item col-sm-6">
        <news-card :news="n" />
      </div>
    </div>
    <pagination
      v-if="total && perPage"
      :total="total"
      :per-page="perPage"
      :current-page="currentPage()"
      class="post-pagination"
    />
  </div>
</template>

<script>
import Pagination from '@/components/global/Pagination'
import NewsCard from './partial/Card'

export default {
  components: {
    NewsCard,
    Pagination,
  },
  data() {
    return {
      news: [],
      perPage: 8,
      total: 0,
    }
  },
  watch: {
    $route(to, from) {
      if (to.query.page !== from.query.page) {
        this.getNews()
        window.scrollTo(0, 0)
      }
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
    })
    this.getNews()
  },
  methods: {
    currentPage() {
      return this.$route.query.page ? parseInt(this.$route.query.page) : 1
    },
    getNews() {
      const params = {
        skip: this.currentPage() * this.perPage,
        limit: this.perPage,
        count: true,
        order: 'date',
        include: 'author',
      }
      return this.$store.dispatch('news/fetch', params).then((news) => {
        const { results, count } = news
        this.news = results
        this.total = count
        this.$nextTick(() => {
          this.$nuxt.$loading.finish()
        })
      })
    },
  },
}
</script>
