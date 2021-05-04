<template>
  <div>
    <div
      class="page-heading page-heading--horizontal effect-duotone effect-duotone--primary"
    >
      <div class="effect-duotone__layer">
        <div class="effect-duotone__layer-inner"></div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col align-self-start">
            <h1 class="page-heading__title">
              Toutes les <span class="highlight">News</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
    <div class="site-content">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <news-full-grid />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NewsFullGrid from '@/components/news/FullGrid'

export default {
  components: {
    NewsFullGrid,
  },
  validate({ query }) {
    if (query && Object.keys(query).length !== 0) {
      let isAccepted = true
      Object.keys(query).forEach((key) => {
        if (key !== 'page') isAccepted = false
      })
      if (isAccepted === false) {
        return false
      }
      if (query.page && !Number.isInteger(parseInt(query.page))) return false
    }
    return true
  },
  head() {
    return {
      title: 'News - Fortnite France',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            "Ne manquez rien de l'actualité du jeu Fortnite : Battle royale ! Découvrez toutes les news officielles.",
        },
      ],
    }
  },
}
</script>
