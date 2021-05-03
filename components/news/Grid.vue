<template>
  <div>
    <div class="posts posts--cards post-grid post-grid--2cols row">
      <div
        v-for="n in newsFirst"
        :key="n.objectId"
        class="post-grid__item col-sm-6"
      >
        <news-card :news="n" />
      </div>
    </div>
    <template v-for="n in bigNews">
      <news-big-card :key="n.objectId" :news="n" />
    </template>
    <div class="posts posts--cards post-grid post-grid--2cols row">
      <div
        v-for="n in newsSecond"
        :key="n.objectId"
        class="post-grid__item col-sm-6"
      >
        <news-card :news="n" />
      </div>
    </div>
  </div>
</template>

<script>
import NewsCard from './partial/Card'
import NewsBigCard from './partial/BigCard'

export default {
  components: {
    NewsCard,
    NewsBigCard,
  },
  data() {
    return {
      newsFirst: [],
      newsSecond: [],
      bigNews: [],
    }
  },
  async mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
    })
    this.newsFirst = await this.getNews('normal', 3, 6)
    this.newsSecond = await this.getNews('normal', 10, 6)
    this.bigNews = await this.getNews('big', 0, 1)
    this.$nextTick(() => {
      this.$nuxt.$loading.finish()
    })
  },
  methods: {
    getNews(type, skip, limit) {
      const params = {
        skip,
        limit,
        order: 'date',
        include: 'author',
        where: {
          type,
        },
      }
      return this.$store.dispatch('news/fetch', params).then((news) => {
        const { results } = news
        return results
      })
    },
  },
}
</script>
