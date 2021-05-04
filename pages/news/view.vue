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
}
</script>
