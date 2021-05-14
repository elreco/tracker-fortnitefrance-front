<template>
  <div>
    <div class="posts posts--cards post-grid post-grid--3cols row">
      <div
        v-for="n in newsFirst"
        :key="n.objectId"
        class="post-grid__item col-md-6 col-lg-4"
      >
        <news-card :news="n" />
      </div>
    </div>
    <template v-for="n in bigNews">
      <news-big-card :key="n.objectId" :news="n" />
    </template>
    <div class="posts posts--cards post-grid post-grid--3cols row">
      <div
        v-for="n in newsSecond"
        :key="n.objectId"
        class="post-grid__item col-md-6 col-lg-4"
      >
        <news-card :news="n" />
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12 text-center">
        <nuxt-link :to="{ name: 'news' }" class="btn btn-primary btn-lg my-2">
          Voir toutes les news
        </nuxt-link>
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
  async fetch() {
    this.newsFirst = await this.getNews('normal', 3, 6)
    this.newsSecond = await this.getNews('normal', 10, 6)
    this.bigNews = await this.getNews('big', 0, 1)
  },
  methods: {
    async getNews(type, skip, limit) {
      const params = {
        skip,
        limit,
        order: '-date',
        include: 'author',
        where: {
          type,
        },
      }
      const { results } = await this.$store.dispatch('news/fetch', params)
      return results
    },
  },
}
</script>
