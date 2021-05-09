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
  async fetch() {
    const { results, count } = await this.getNews()
    if (results.length === 0) {
      this.$nuxt.error({
        statusCode: 404,
        message: "Il n'y a pas de news pour cette page.",
      })
    }
    this.news = results
    this.total = count
  },
  watch: {
    '$route.query'() {
      this.$fetch()
      window.scrollTo(0, 0)
    },
  },
  methods: {
    currentPage() {
      return this.$route.query.page
        ? parseInt(this.$route.query.page)
        : parseInt(1)
    },
    async getNews() {
      const params = {
        skip: (this.currentPage() - 1) * this.perPage,
        limit: this.perPage,
        count: true,
        order: '-date',
        include: 'author',
      }
      return await this.$store.dispatch('news/fetch', params)
    },
  },
}
</script>
