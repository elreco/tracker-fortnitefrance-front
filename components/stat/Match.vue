<template>
  <div>
    <loader-stat-match v-if="$fetchState.pending && loaded" />
    <template v-else-if="!$fetchState.pending && loaded">
      <stat-match-table
        :matches="matches"
        :title="`Tous les matchs de <span class='text-primary'>${stat.name}</span>`"
      />
      <adsense data-ad-client="pub-9253579683768027" data-ad-slot="4645662062">
      </adsense>
    </template>
  </div>
</template>

<script>
import StatMatchTable from './partial/MatchTable'
import LoaderStatMatch from './loader/Match'

export default {
  components: {
    LoaderStatMatch,
    StatMatchTable,
  },
  data() {
    return {
      stat: {},
      matches: [],
      loaded: false,
    }
  },
  async fetch() {
    this.stat = await this.getStat()
    this.matches = await this.getMatches()
  },
  mounted() {
    setTimeout(() => (this.loaded = true), 250)
  },
  methods: {
    async getStat() {
      const stat = await this.$store.dispatch('stat/getByName', {
        name: this.$route.params.name,
        params: {
          keys: 'objectId,name',
        },
      })
      return stat
    },
    async getMatches() {
      const { results } = await this.$store.dispatch('match/fetch', {
        where: {
          $relatedTo: {
            object: {
              __type: 'Relation',
              className: 'Stat',
              objectId: this.stat.objectId,
            },
            key: 'matches',
          },
        },
        order: '-date',
        limit: 50,
      })

      return results
    },
  },
}
</script>
