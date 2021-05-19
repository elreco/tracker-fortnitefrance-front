<template>
  <div>
    <div class="posts posts--cards post-grid post-grid--2cols row">
      <div class="post-grid__item col-sm-6">
        <div class="card__content">
          <adsense
            data-ad-client="pub-9253579683768027"
            data-ad-slot="4645662062"
          >
          </adsense>
        </div>
      </div>
      <template v-if="$fetchState.pending && loaded">
        <loader-news-full-grid v-for="i in perPage" :key="i" />
      </template>
      <template v-elseif="!$fetchState.pending && loaded">
        <div
          v-for="n in news"
          :key="n.objectId"
          class="post-grid__item col-sm-6"
        >
          <news-card :news="n" />
        </div>
      </template>
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
import LoaderNewsFullGrid from './loader/FullGrid'

export default {
  components: {
    NewsCard,
    Pagination,
    LoaderNewsFullGrid,
  },
  data() {
    return {
      news: [],
      perPage: 9,
      total: 0,
      loaded: false,
    }
  },
  async fetch() {
    const { results, count } = await this.getNews()
    if (!results || results.length === 0) {
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
    },
  },
  mounted() {
    setTimeout(() => (this.loaded = true), 250)
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
