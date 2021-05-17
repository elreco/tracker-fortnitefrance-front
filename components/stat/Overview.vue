<template>
  <div>
    <loader-stat-overview v-if="$fetchState.pending" />
    <template v-else-if="!$fetchState.pending && !$fetchState.error">
      <div class="team-roster team-roster--card mb-0 pb-0">
        <stat-general-card :stat="stat" />
        <div class="row">
          <div class="col-sm-12 col-lg-4">
            <stat-playlist-widget
              v-if="stat.global_stats && stat.global_stats.solo"
              :playlist="stat.global_stats.solo"
              title="Solo"
            />
          </div>
          <div class="col-sm-12 col-lg-4">
            <stat-playlist-widget
              v-if="stat.global_stats && stat.global_stats.duo"
              :playlist="stat.global_stats.duo"
              title="Duo"
            />
          </div>
          <div class="col-sm-12 col-lg-4">
            <stat-playlist-widget
              v-if="stat.global_stats && stat.global_stats.squad"
              :playlist="stat.global_stats.squad"
              title="Squad"
            />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <adsense
            data-ad-client="pub-9253579683768027"
            data-ad-slot="2059506107"
            class="my-3"
            data-ad-format="horizontal"
          >
          </adsense>
        </div>
      </div>
      <stat-match-table :matches="matches" title="Matchs récents" />
      <adsense data-ad-client="pub-9253579683768027" data-ad-slot="4645662062">
      </adsense>
    </template>
  </div>
</template>

<script>
import StatGeneralCard from './partial/GeneralCard'
import StatMatchTable from './partial/MatchTable'
import StatPlaylistWidget from './partial/PlaylistWidget'
import LoaderStatOverview from './loader/Overview'

export default {
  components: {
    StatGeneralCard,
    LoaderStatOverview,
    StatPlaylistWidget,
    StatMatchTable,
  },
  data() {
    return {
      stat: {},
      matches: [],
    }
  },
  async fetch() {
    this.stat = await this.getStat()
    this.matches = await this.getMatches()
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
      const stat = await this.$store.dispatch('stat/getByName', {
        name: this.$route.params.name,
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
