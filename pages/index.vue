<template>
  <div>
    <news-slider />
    <div class="site-content">
      <div class="container">
        <news-grid />
      </div>
    </div>
  </div>
</template>

<script>
import NewsSlider from '@/components/news/Slider'
import NewsGrid from '@/components/news/Grid'

export default {
  components: {
    NewsSlider,
    NewsGrid,
  },
}
</script>
