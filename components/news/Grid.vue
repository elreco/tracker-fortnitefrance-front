<template>
  <div>
    <div class="posts posts--cards post-grid post-grid--2cols row">
      <div
        v-for="n in newsFirst"
        :key="n.objectId"
        class="post-grid__item col-sm-6"
      >
        <news-partial-card :news="n" />
      </div>
    </div>
    <template v-for="n in bigNews">
      <news-partial-big-card :key="n.objectId" :news="n" />
    </template>
    <div class="posts posts--cards post-grid post-grid--2cols row">
      <div
        v-for="n in newsSecond"
        :key="n.objectId"
        class="post-grid__item col-sm-6"
      >
        <news-partial-card :news="n" />
      </div>
    </div>
  </div>
</template>

<script>
import NewsPartialCard from './partial/Card'
import NewsPartialBigCard from './partial/BigCard'

export default {
  components: {
    NewsPartialCard,
    NewsPartialBigCard,
  },
  data() {
    return {
      newsFirst: [],
      newsSecond: [],
      bigNews: [],
      loading: true,
    }
  },
  async mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
    })
    this.newsFirst = await this.getNews('normal', 3, 6)
    this.newsSecond = await this.getNews('normal', 10, 6)
    this.bigNews = await this.getNews('big', 0, 1)
  },
  methods: {
    getNews(type, skip, limit) {
      const params = {
        skip,
        limit,
        order: 'date',
        where: {
          type,
        },
      }
      return this.$store.dispatch('news/fetch', params).then((news) => {
        const { results } = news
        this.loading = false
        this.$nextTick(() => {
          this.$nuxt.$loading.finish()
        })
        return results
      })
    },
  },
}
</script>
