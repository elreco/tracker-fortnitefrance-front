<template>
  <stat-view />
</template>

<script>
import StatView from '@/components/stat/View'

export default {
  components: {
    StatView,
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
      title: `${this.$store.state.stat.meta.title} - Fortnite France`,
      description: `Consultez les statistiques de ${this.$voca.truncate(
        this.$voca.stripTags(this.$store.state.stat.meta.title),
        150
      )} sur pc sur Fortnite Battle Royale. Analysez ses performances de jeu grâce aux graphiques et comparez-le aux autres joueurs.`,
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.title,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.description,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.title,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.description,
        },
        {
          hid: 'description',
          name: 'description',
          content: this.title,
        },
      ],
    }
  },
}
</script>
