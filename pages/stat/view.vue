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
              Les statistiques <span class="highlight">{{ appName }}</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
    <stat-nav />
    <div class="site-content">
      <div class="container">
        <stat-match v-if="$route.params.type" />
        <stat-view />
      </div>
    </div>
  </div>
</template>

<script>
import StatView from '@/components/stat/View'
import StatMatch from '@/components/stat/Match'
import StatNav from '@/components/stat/partial/Nav'

export default {
  components: {
    StatView,
    StatNav,
  },
  validate({ params, query }) {
    if (query.length) {
      return false
    }
    if (
      params.platform &&
      !Object.prototype.toString.call(params.platform) === '[object String]'
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
      title: `${this.$store.state.stat.meta.title} - Fortnite France`,
      meta: [
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: `${this.$store.state.stat.meta.title} - Fortnite France`,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.description(),
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `${this.$store.state.stat.meta.title} - Fortnite France`,
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
    description() {
      return `Consultez les statistiques de ${this.$voca.truncate(
        this.$voca.stripTags(this.$store.state.stat.meta.title),
        150
      )} sur pc sur Fortnite Battle Royale. Analysez ses performances de jeu grâce aux graphiques et comparez-le aux autres joueurs.`
    },
  },
}
</script>
