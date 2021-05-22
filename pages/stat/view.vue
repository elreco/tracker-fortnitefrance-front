<template>
  <div>
    <div
      class="
        page-heading page-heading--horizontal
        effect-duotone effect-duotone--primary
      "
    >
      <div class="effect-duotone__layer">
        <div class="effect-duotone__layer-inner"></div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 align-self-start">
            <h1 class="page-heading__title">
              Les statistiques
              <span class="highlight">{{ appName }}</span>
            </h1>
          </div>
          <div class="col-md-4 text-center text-md-right my-2 my-md-auto">
            <stat-add-to-favorite />
          </div>
        </div>
      </div>
    </div>
    <stat-nav />
    <div class="site-content">
      <div class="container">
        <stat-match
          v-if="$route.params.view && $route.params.view === 'matches'"
        />
        <stat-overview v-else />
      </div>
    </div>
  </div>
</template>

<script>
import StatOverview from '@/components/stat/Overview'
import StatMatch from '@/components/stat/Match'
import StatNav from '@/components/stat/partial/Nav'
import StatAddToFavorite from '@/components/stat/partial/AddToFavorite'

export default {
  components: {
    StatOverview,
    StatNav,
    StatMatch,
    StatAddToFavorite,
  },
  validate({ params, query }) {
    if (query.length) {
      return false
    }
    if (params.view && !['matches', 'twitch'].includes(params.view)) {
      return false
    }
    if (
      params.view &&
      params.view === 'matches' &&
      query.page &&
      !Number.isInteger(parseInt(query.page))
    )
      return false
    if (!Object.prototype.toString.call(params.name) === '[object String]')
      return false
    return true
  },
  data() {
    return {
      appName: process.env.appName,
    }
  },
  head() {
    return {
      title: this.title(),
      meta: [
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.title(),
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.description(),
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.title(),
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.description(),
        },
        {
          hid: 'description',
          name: 'description',
          content: this.description(),
        },
      ],
    }
  },
  methods: {
    title() {
      if (this.$route.params && this.$route.params.view) {
        switch (this.$route.params.view) {
          case 'matches':
            return `${this.$route.params.name} - Tous les matchs - ${this.appName}`
          default:
            return `${this.$route.params.name} - ${this.appName}`
        }
      } else {
        return `${this.$route.params.name} - ${this.appName}`
      }
    },
    description() {
      return `Consultez les statistiques de ${this.$voca.truncate(
        this.$voca.stripTags(this.$store.state.stat.meta.title),
        150
      )} sur pc sur Fortnite Battle Royale. Analysez ses performances de jeu grâce aux graphiques et comparez-le aux autres joueurs.`
    },
  },
}
</script>
