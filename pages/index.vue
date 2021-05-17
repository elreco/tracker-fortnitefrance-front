<template>
  <div>
    <div
      class="
        page-heading page-heading--horizontal
        effect-duotone effect-duotone--primary
      "
      style="background-image: url(/images/esports/home_bg.jpg)"
    >
      <div class="effect-duotone__layer">
        <div class="effect-duotone__layer-inner"></div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col">
            <h1 class="page-heading__title text-center">
              Recherchez vos
              <span class="highlight">statistiques</span> Fortnite Battle Royale
            </h1>
            <stat-search
              placeholder="Entrez le nom d'un joueur (ex. zRotation, Ship...)"
              class="w-100 search-home body-search-form"
            />
          </div>
        </div>
      </div>
    </div>
    <news-slider />
    <div class="site-content">
      <div class="container">
        <adsense
          data-ad-client="pub-9253579683768027"
          data-ad-slot="8984007104"
          class="mb-5"
        >
        </adsense>
        <about-box />
        <div class="spacer-xlg"></div>
        <div class="card card--clean">
          <div class="card__header"><h4>Dernières news</h4></div>
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
import StatSearch from '~/components/stat/partial/Search.vue'

export default {
  components: {
    NewsSlider,
    NewsGrid,
    Faq,
    AboutBox,
    StatSearch,
  },
  beforeRouteLeave(to, from, next) {
    this.$killRevSlider()
    return next()
  },
}
</script>
