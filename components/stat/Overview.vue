<template>
  <div>
    <loader-stat-view v-if="$fetchState.pending" />
    <div
      v-else-if="stat && !$fetchState.pending"
      class="team-roster team-roster--card mb-0 pb-0"
    >
      <stat-general-card :stat="stat" />
      <div class="row">
        <div class="col-sm-12 col-lg-4">
          <stat-playlist-card :playlist="stat.solo" title="Solo" />
        </div>
        <div class="col-sm-12 col-lg-4">
          <stat-playlist-card :playlist="stat.duo" title="Duo" />
        </div>
        <div class="col-sm-12 col-lg-4">
          <stat-playlist-card :playlist="stat.squad" title="Squad" />
        </div>
      </div>
    </div>
    <div v-if="matches" class="row">
      <div class="col-lg-12">
        <stat-match-table :matches="matches" />
      </div>
    </div>
  </div>
</template>

<script>
import StatGeneralCard from './partial/GeneralCard'
import StatMatchTable from './partial/MatchTable'
import StatPlaylistCard from './partial/PlaylistCard'
import LoaderStatView from './loader/View'

export default {
  components: {
    StatGeneralCard,
    LoaderStatView,
    StatPlaylistCard,
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
  watch: {
    '$fetchState.pending'() {
      if (!this.$fetchState.pending) {
        this.$nextTick(() => this.$initCircularBar())
      }
    },
  },
  methods: {
    async getStat() {
      const stat = await this.$store
        .dispatch('stat/get', {
          name: this.$route.params.name,
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
        limit: 10,
      })

      return results
    },
  },
}
</script>
