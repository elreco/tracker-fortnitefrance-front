<template>
  <div>
    <loader-stat-match v-if="$fetchState.pending" />
    <template v-else>
      <stat-match-table
        :matches="matches"
        :title="`Tous les matchs de <span class='text-primary'>${stat.name}</span>`"
      />
      <pagination
        v-if="total && perPage"
        :total="total"
        :per-page="perPage"
        :current-page="currentPage()"
        class="post-pagination"
      />
      <adsense data-ad-client="pub-9253579683768027" data-ad-slot="4645662062">
      </adsense>
    </template>
  </div>
</template>

<script>
import Pagination from '@/components/global/Pagination'
import StatMatchTable from './partial/MatchTable'
import LoaderStatMatch from './loader/Match'

export default {
  components: {
    LoaderStatMatch,
    StatMatchTable,
    Pagination,
  },
  data() {
    return {
      stat: {},
      matches: [],
      perPage: 20,
      total: 0,
    }
  },
  async fetch() {
    this.stat = await this.getStat()
    const { results, count } = await this.getMatches()
    if (this.$route.query.page && (!results || results.length === 0)) {
      this.$nuxt.error({
        statusCode: 404,
        message: "Il n'y a pas de match pour cette page.",
      })
    }
    this.matches = results
    this.total = count
  },
  watch: {
    async '$route.query'() {
      await this.$fetch()
      window.scrollTo(0, 0)
    },
  },
  methods: {
    currentPage() {
      return this.$route.query.page
        ? parseInt(this.$route.query.page)
        : parseInt(1)
    },
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
      const params = {
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
        skip: (this.currentPage() - 1) * this.perPage,
        limit: this.perPage,
        count: true,
        order: '-date',
      }
      return await this.$store.dispatch('match/fetch', params)
    },
  },
}
</script>
