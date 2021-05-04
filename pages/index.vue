<template>
  <div>
    <news-slider />
    <div class="site-content">
      <div class="container">
        <about-box />
        <div class="spacer-xlg"></div>
        <div class="card card--clean">
          <div class="card__header"><h4>Dernière news</h4></div>
        </div>
        <div class="card__content p-0">
          <news-grid />
        </div>
        <div class="spacer-lg"></div>
        <div class="card card--clean">
          <div class="card__header"><h4>Foire aux questions</h4></div>
        </div>
        <div class="card__content p-0">
          <faq />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NewsSlider from '@/components/news/Slider'
import NewsGrid from '@/components/news/Grid'
import Faq from '@/components/global/Faq'
import AboutBox from '@/components/global/AboutBox'

export default {
  components: {
    NewsSlider,
    NewsGrid,
    Faq,
    AboutBox,
  },
}
</script>
