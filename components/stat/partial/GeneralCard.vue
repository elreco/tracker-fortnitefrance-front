<template>
  <div class="team-roster__item card card--no-paddings">
    <div class="card__content">
      <div class="team-roster__content-wrapper">
        <figure class="team-roster__player-img" style="max-height: 400px">
          <div
            class="
              team-roster__player-shape
              effect-duotone effect-duotone--blue
              team-roster__player-shape--bg2
            "
          >
            <div class="effect-duotone__layer">
              <div class="effect-duotone__layer-inner"></div>
            </div>
          </div>
          <img
            :src="stat.character && stat.character.url"
            class="h-100"
            alt=""
          />
        </figure>
        <div class="team-roster__content w-100">
          <div class="team-roster__player-details">
            <div class="team-roster__player-info">
              <h5 v-if="stat.rank" class="team-roster__player-realname">
                #{{ stat.rank }}
              </h5>
              <h3 class="team-roster__player-nickname">
                {{ stat.name }}
              </h3>
            </div>
          </div>
          <div class="team-roster__player-details-common">
            <ul class="team-roster__player-social social-links">
              <social-buttons class="social-buttons-stat" />
            </ul>
          </div>
          <div class="team-roster__player-stats">
            <div class="team-roster__player-stats-circular-bars">
              <div class="team-roster__player-stats-circular-bar">
                <div class="circular circular--size-80">
                  <div
                    class="circular__bar"
                    :data-percent="stat.account && stat.account.progress_pct"
                  >
                    <span class="circular__percents">
                      <span class="circular__label">Niveau</span>
                      {{
                        stat.account && stat.account.level
                          ? stat.account.level
                          : 0
                      }}
                    </span>
                  </div>
                </div>
              </div>
              <div
                v-if="stat && stat.global_stats"
                class="team-roster__player-stats-circular-bar"
              >
                <div class="circular circular--size-80">
                  <div class="circular__bar" :data-percent="winrate()">
                    <span class="circular__percents">
                      {{ $numeral(winrate()).format('0') }}
                      <small>%</small>
                      <span class="circular__label">Win Rate</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div class="team-roster__player-stats-progress-bars">
              <table
                v-if="stat && stat.global_stats"
                class="progress-table progress-table--simple"
              >
                <tbody>
                  <tr>
                    <td class="progress-table__title">Tops 1</td>
                    <td class="progress-table__progress-bar">
                      <div class="progress progress--lines">
                        <div
                          class="progress__bar"
                          :style="`width: ${totalWinsPct()}%`"
                          role="progressbar"
                        ></div>
                      </div>
                    </td>
                    <td
                      class="
                        progress-table__progress-label
                        progress-table__progress-label--highlight
                      "
                    >
                      {{ $numeral(totalWins()).format('(0a)') }}
                    </td>
                  </tr>
                  <tr>
                    <td class="progress-table__title">Kills</td>
                    <td class="progress-table__progress-bar">
                      <div class="progress progress--lines">
                        <div
                          class="progress__bar"
                          :style="`width: ${killsPct()}%`"
                          role="progressbar"
                        ></div>
                      </div>
                    </td>
                    <td
                      class="
                        progress-table__progress-label
                        progress-table__progress-label--highlight
                      "
                    >
                      {{ $numeral(kills()).format('0a') }}
                    </td>
                  </tr>
                  <tr>
                    <td class="progress-table__title">Morts</td>
                    <td class="progress-table__progress-bar">
                      <div class="progress progress--lines">
                        <div
                          class="progress__bar"
                          :style="`width: ${deathsPct()}%`"
                          role="progressbar"
                        ></div>
                      </div>
                    </td>
                    <td
                      class="
                        progress-table__progress-label
                        progress-table__progress-label--highlight
                      "
                    >
                      {{ $numeral(deaths()).format('(0a)') }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SocialButtons from '@/components/global/SocialButtons'

export default {
  components: {
    SocialButtons,
  },
  props: {
    stat: {
      type: Object,
      required: true,
    },
  },
  methods: {
    winrate() {
      const solo =
        this.stat.global_stats.solo && this.stat.global_stats.solo.winrate
          ? this.stat.global_stats.solo.winrate
          : 0
      const duo =
        this.stat.global_stats.duo && this.stat.global_stats.duo.winrate
          ? this.stat.global_stats.duo.winrate
          : 0
      const squad =
        this.stat.global_stats.squad && this.stat.global_stats.squad.winrate
          ? this.stat.global_stats.squad.winrate
          : 0
      return ((solo + duo + squad) * 100) / 3
    },
    kills() {
      const solo =
        this.stat.global_stats.solo && this.stat.global_stats.solo.kills
          ? this.stat.global_stats.solo.kills
          : 0
      const duo =
        this.stat.global_stats.duo && this.stat.global_stats.duo.kills
          ? this.stat.global_stats.duo.kills
          : 0
      const squad =
        this.stat.global_stats.squad && this.stat.global_stats.squad.kills
          ? this.stat.global_stats.squad.kills
          : 0
      return solo + duo + squad
    },
    deaths() {
      const solo =
        this.stat.global_stats.solo && this.stat.global_stats.solo.matchesplayed
          ? this.stat.global_stats.solo.matchesplayed
          : 0
      const duo =
        this.stat.global_stats.duo && this.stat.global_stats.duo.matchesplayed
          ? this.stat.global_stats.duo.matchesplayed
          : 0
      const squad =
        this.stat.global_stats.squad &&
        this.stat.global_stats.squad.matchesplayed
          ? this.stat.global_stats.squad.matchesplayed
          : 0
      return Math.abs(solo + duo + squad - this.totalWins())
    },
    totalWins() {
      const totalWins = this.stat.totalWins ? this.stat.totalWins : 0
      return totalWins
    },
    killsPct() {
      return Math.round((this.kills() * 100) / this.deaths())
    },
    deathsPct() {
      return Math.round((this.deaths() * 100) / this.kills())
    },
    totalWinsPct() {
      return Math.round((this.totalWins() * 100) / this.deaths())
    },
  },
}
</script>
