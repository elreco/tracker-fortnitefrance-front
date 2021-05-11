<template>
  <div class="widget card widget--sidebar widget-player widget-player--alt">
    <div class="widget__title card__header">
      <h4>{{ title }}</h4>
    </div>
    <div class="widget__content-secondary">
      <div class="widget-player__details">
        <stat-playlist-item
          v-if="playlist.placetop1"
          :value="$numeral(playlist.placetop1).format()"
          title="Victoires"
        />
        <stat-playlist-item
          v-if="playlist.kd"
          :value="$numeral(playlist.kd).format('0.00')"
          title="Ratio K/D"
        />
        <stat-playlist-item
          v-if="playlist.kills"
          :value="$numeral(playlist.kills).format()"
          title="Kills"
        />
        <stat-playlist-item
          v-if="playlist.kills && playlist.matchesplayed"
          :value="
            $numeral(Math.abs(playlist.kills - playlist.matchesplayed)).format()
          "
          title="Morts"
        />
        <stat-playlist-item
          v-if="playlist.placetop10"
          :value="$numeral(playlist.placetop10).format()"
          title="Top 10"
        />
        <stat-playlist-item
          v-if="playlist.placetop25"
          :value="$numeral(playlist.placetop25).format()"
          title="Top 25"
        />
        <stat-playlist-item
          v-if="playlist.placetop5"
          :value="$numeral(playlist.placetop5).format()"
          title="Top 5"
        />
        <stat-playlist-item
          v-if="playlist.placetop12"
          :value="$numeral(playlist.placetop12).format()"
          title="Top 12"
        />
        <stat-playlist-item
          v-if="playlist.placetop3"
          :value="$numeral(playlist.placetop3).format()"
          title="Top 3"
        />
        <stat-playlist-item
          v-if="playlist.placetop6"
          :value="$numeral(playlist.placetop6).format()"
          title="Top 6"
        />
        <stat-playlist-item
          v-if="playlist.minutesplayed"
          :value="formatMinutesPlayed(playlist.minutesplayed)"
          title="Tps de jeu"
        />
        <stat-playlist-item
          v-if="playlist.kills && playlist.matchesplayed"
          :value="killsPerMatches(playlist.kills, playlist.matchesplayed)"
          title="Kills / match"
        />
        <stat-playlist-item
          v-if="playlist.kills && playlist.minutesplayed"
          :value="killsPerMinutes(playlist.kills, playlist.minutesplayed)"
          title="Kills / min."
        />
        <stat-playlist-item
          v-if="playlist.score && playlist.minutesplayed"
          :value="scorePerMinutes(playlist.score, playlist.minutesplayed)"
          title="Score / min."
        />
      </div>
    </div>

    <div class="widget__content-tertiary widget__content--bottom-decor">
      <div class="widget__content-inner">
        <div class="widget-player__stats widget-player__stats--center">
          <div
            class="widget-player__stat-item widget-player__stat-item--number-side"
          >
            <div
              class="widget-player__stat--value widget-player__stat--value-primary"
            >
              {{ $numeral(playlist.placetop1).format() }}
            </div>
            <div class="widget-player__stat-inner">
              <div class="widget-player__stat--label">Victoires</div>
              <div class="widget-player__stat--desc"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StatPlaylistItem from './PlaylistItem'
export default {
  components: {
    StatPlaylistItem,
  },
  props: {
    playlist: {
      type: Object,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  methods: {
    formatMinutesPlayed(minutes) {
      const milliseconds = this.$moment
        .duration(minutes, 'minutes')
        .asMilliseconds()
      return this.$moment.utc(milliseconds).format('D[J]hh[H]mm[M]')
    },
    killsPerMatches(kills, matches) {
      return this.$numeral(kills / matches).format('0.00')
    },
    killsPerMinutes(kills, minutes) {
      return this.$numeral(kills / minutes).format('0.00')
    },
    scorePerMinutes(score, minutes) {
      return this.$numeral(score / minutes).format('0.00')
    },
  },
}
</script>
