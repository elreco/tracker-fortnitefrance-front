<template>
  <div class="col-lg-12">
    <adsense
      data-ad-client="pub-9253579683768027"
      data-ad-format="horizontal"
      data-ad-slot="5577404864"
      class="mb-3"
    >
    </adsense>
    <loader-ladder-full-list
      v-if="$fetchState.pending && loaded"
      :numer="perPage"
    />
    <div
      v-else-if="!$fetchState.pending && loaded"
      class="card card--has-table"
    >
      <div class="card__header"><h4>Classement par victoires</h4></div>
      <div class="card__content">
        <div class="table-responsive">
          <table
            class="
              table table-hover table-standings table-standings--full
              text-nowrap
            "
          >
            <thead>
              <tr>
                <th class="team-standings__pos">Classement</th>
                <th class="team-standings__team">Joueur</th>
                <th class="team-standings">Total Tops 1</th>
                <th class="team-standings">Tops 1 Solo</th>
                <th class="team-standings">Tops 1 Duo</th>
                <th class="team-standings">Tops 1 Squad</th>
                <th class="team-standings">Ratio Kills / Morts</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="s in stats"
                :key="s.objectId"
                @click="
                  $router.push({ name: 'stat.view', params: { name: s.name } })
                "
              >
                <td class="team-standings__pos">
                  {{ $numeral(s.rank).format() }}
                </td>
                <td class="team-standings__team">
                  <div class="team-meta">
                    <figure class="team-meta__logo">
                      <img :src="s.character && s.character.url" alt="" />
                    </figure>
                    <div class="team-meta__info">
                      <h6 class="team-meta__name">{{ s.name }}</h6>
                      <span
                        v-if="s.account && s.account.level"
                        class="team-meta__place"
                        >Lvl. {{ s.account.level }}</span
                      >
                    </div>
                  </div>
                </td>
                <td class="team-standings__win">
                  <div class="team-meta__info">
                    <h6 class="team-meta__name">
                      {{ $numeral(totalWins(s)).format() }}
                    </h6>
                    <span class="team-meta__place">{{ totalWinsPct(s) }}%</span>
                  </div>
                </td>
                <td class="team-standings">
                  <div class="team-meta__info">
                    <h6 class="team-meta__name">
                      {{ $numeral(soloWins(s)).format() }}
                    </h6>
                  </div>
                </td>
                <td class="team-standings">
                  <div class="team-meta__info">
                    <h6 class="team-meta__name">
                      {{ $numeral(duoWins(s)).format() }}
                    </h6>
                  </div>
                </td>
                <td class="team-standings">
                  <div class="team-meta__info">
                    <h6 class="team-meta__name">
                      {{ $numeral(squadWins(s)).format() }}
                    </h6>
                  </div>
                </td>
                <td class="team-standings">
                  {{ $numeral(totalKd(s)).format('0.00') }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <pagination
      v-if="total && perPage"
      :total="total"
      :per-page="perPage"
      :current-page="currentPage()"
      class="post-pagination"
    />
  </div>
</template>

<script>
import Pagination from '@/components/global/Pagination'
import LoaderLadderFullList from './loader/FullList'

export default {
  components: {
    Pagination,
    LoaderLadderFullList,
  },
  data() {
    return {
      stats: [],
      perPage: 100,
      total: 0,
      loaded: false,
    }
  },
  async fetch() {
    const { results, count } = await this.getStats()
    if (this.$route.query.page && (!results || results.length === 0)) {
      this.$nuxt.error({
        statusCode: 404,
        message: "Cette page du classement n'existe pas.",
      })
    }
    this.stats = results
    this.total = count
  },
  watch: {
    '$route.query'() {
      this.$fetch()
    },
  },
  mounted() {
    setTimeout(() => (this.loaded = true), 250)
  },
  methods: {
    currentPage() {
      return this.$route.query.page
        ? parseInt(this.$route.query.page)
        : parseInt(1)
    },
    async getStats() {
      const params = {
        skip: (this.currentPage() - 1) * this.perPage,
        limit: this.perPage,
        count: true,
        order: 'rank',
        where: {
          rank: {
            $gt: 0,
          },
        },
      }
      return await this.$store.dispatch('stat/fetch', params)
    },
    deaths(stat) {
      const solo =
        stat.global_stats.solo && stat.global_stats.solo.matchesplayed
          ? stat.global_stats.solo.matchesplayed
          : 0
      const duo =
        stat.global_stats.duo && stat.global_stats.duo.matchesplayed
          ? stat.global_stats.duo.matchesplayed
          : 0
      const squad =
        stat.global_stats.squad && stat.global_stats.squad.matchesplayed
          ? stat.global_stats.squad.matchesplayed
          : 0
      return Math.abs(solo + duo + squad - this.totalWins(stat))
    },
    totalWins(stat) {
      const totalWins = stat.totalWins ? stat.totalWins : 0
      return totalWins
    },
    totalKd(stat) {
      const totalKd = stat.totalKd ? stat.totalKd : 0
      return totalKd
    },
    totalWinsPct(stat) {
      return Math.round((this.totalWins(stat) * 100) / this.deaths(stat))
    },
    soloWins(stat) {
      let wins = 0
      if (stat.global_stats.solo && stat.global_stats.solo.placetop1) {
        wins = stat.global_stats.solo.placetop1
      }
      return wins
    },
    duoWins(stat) {
      let wins = 0
      if (
        stat.global_stats &&
        stat.global_stats.duo &&
        stat.global_stats.duo.placetop1
      ) {
        wins = stat.global_stats.duo.placetop1
      }
      return wins
    },
    squadWins(stat) {
      let wins = 0
      if (
        stat.global_stats &&
        stat.global_stats.squad &&
        stat.global_stats.squad.placetop1
      ) {
        wins = stat.global_stats.squad.placetop1
      }
      return wins
    },
  },
}
</script>

<style scoped>
tr {
  cursor: pointer;
}
</style>
