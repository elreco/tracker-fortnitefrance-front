<template>
  <div class="card card--has-table">
    <div class="card__header"><h4>Matchs récents</h4></div>
    <div class="card__content">
      <div class="table-responsive">
        <table class="table table-hover game-player-result">
          <thead>
            <tr>
              <th class="game-player-result__date text-left">Date</th>
              <th class="game-player-result__vs text-left">Plateforme</th>
              <th class="game-player-result__character text-left">
                Mode de jeu
              </th>
              <th class="game-player-result">Nombre de matchs</th>
              <th class="game-player-result">Temps de jeu</th>
              <th class="game-player-result">Kills</th>
              <th class="game-player-result">Victoires</th>
              <th class="game-player-result"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="match in matches" :key="match.objectId">
              <td class="game-player-result__date">
                {{ $moment(match.match_data.date).calendar() }}
              </td>
              <td class="game-player-result__vs">
                <div class="team-meta">
                  <div class="team-meta__info">
                    <h6 class="team-meta__name">
                      {{ getPlatform(match.match_data.platform) }}
                    </h6>
                    <span class="team-meta__place">{{
                      match.match_data.platform
                    }}</span>
                  </div>
                </div>
              </td>
              <td
                class="game-player-result__character highlight text-left text-capitalize"
              >
                {{ formatModeName(match.match_data.readable_name) }}
              </td>
              <td class="game-player-result highlight">
                {{ $numeral(match.match_data.matchesplayed).format('0') }}
              </td>
              <td class="game-player-result highlight">
                {{ formatMinutesPlayed(match.match_data.minutesplayed) }}
              </td>
              <td class="game-player-result highlight">
                {{ $numeral(match.match_data.kills).format('0') }}
              </td>
              <td class="game-player-result highlight">
                {{ $numeral(match.match_data.placetop1).format('0') }}
              </td>

              <td class="game-player-result__mvp">
                <div
                  :class="
                    match.match_data.placetop1 > 0
                      ? `alc-icon`
                      : `alc-icon--disabled`
                  "
                  class="alc-icon alc-icon--circle alc-icon--xs alc-icon--outline alc-icon--outline-md"
                >
                  <i class="fas fa-star"></i>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import platforms from '@/static/json/platforms.json'

export default {
  props: {
    matches: {
      type: Array,
      required: true,
    },
  },
  methods: {
    getPlatform(platform) {
      return platforms[platform] ? platforms[platform] : ''
    },
    formatModeName(modeName) {
      return modeName.replace('_', ' ')
    },
    formatMinutesPlayed(minutes) {
      const milliseconds = this.$moment
        .duration(minutes, 'minutes')
        .asMilliseconds()
      return this.$moment(milliseconds).format('h[h]mm')
    },
  },
}
</script>
