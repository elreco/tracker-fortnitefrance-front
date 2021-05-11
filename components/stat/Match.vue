<template>
  <div>
    <loader-stat-match v-if="$fetchState.pending" />
    <template v-else-if="matches && !$fetchState.pending">
      <div class="row">
        <div class="col-lg-12">
          <stat-match-table :matches="matches" title="Tous les matchs" />
        </div>
      </div>
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
      loading: true,
      stat: {},
      matches: [],
    }
  },
  async fetch() {
    this.loading = true
    this.stat = await this.getStat()
    this.matches = await this.getMatches()
    this.loading = false
  },
  methods: {
    async getStat() {
      const stat = await this.$store
        .dispatch('stat/get', {
          name: this.$route.params.name,
          params: {
            keys: 'objectId,name',
          },
        })
        .catch((error) => {
          if (error) {
            this.$nuxt.error({
              statusCode: 404,
              message: "Nous n'avons pas trouvé de joueur portant ce pseudo",
            })
          }
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
