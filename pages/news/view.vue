<template>
  <news-view />
</template>

<script>
import NewsView from '@/components/news/View'

export default {
  components: {
    NewsView,
  },
  validate({ params, query }) {
    if (query.length) {
      return false
    }
    if (!Object.prototype.toString.call(params.id) === '[object String]')
      return false
    if (!Object.prototype.toString.call(params.slug) === '[object String]')
      return false
    return true
  },
  head() {
    return {
      title: `${this.$store.state.news.meta.title} - Fortnite France Tracker`,
      meta: [
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: `${this.$store.state.news.meta.title} - Fortnite France Tracker`,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.$voca.truncate(
            this.$voca.stripTags(this.$store.state.news.meta.text),
            150
          ),
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `${this.$store.state.news.meta.title} - Fortnite France Tracker`,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.$voca.truncate(
            this.$voca.stripTags(this.$store.state.news.meta.text),
            150
          ),
        },
        {
          hid: 'description',
          name: 'description',
          content: this.$voca.truncate(
            this.$voca.stripTags(this.$store.state.news.meta.text),
            150
          ),
        },
      ],
    }
  },
}
</script>
