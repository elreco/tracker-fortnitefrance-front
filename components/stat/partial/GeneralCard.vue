<template>
  <div class="team-roster__item card card--no-paddings">
    <div class="card__content">
      <div class="team-roster__content-wrapper">
        <figure class="team-roster__player-img" style="max-height: 400px">
          <div
            class="team-roster__player-shape effect-duotone effect-duotone--blue team-roster__player-shape--bg2"
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
        <div class="team-roster__content w-50">
          <div class="team-roster__player-details">
            <div class="team-roster__player-info">
              <h5 class="team-roster__player-realname">#156</h5>
              <h3 class="team-roster__player-nickname">
                {{ stat.name }}
              </h3>
            </div>
          </div>
          <div class="team-roster__player-details-common">
            <ul class="team-roster__player-social social-links">
              <social-buttons />
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
                      {{ stat.account && stat.account.level }}
                    </span>
                  </div>
                </div>
              </div>
              <div class="team-roster__player-stats-circular-bar">
                <div class="circular circular--size-80">
                  <div class="circular__bar" :data-percent="winrate()">
                    <span class="circular__percents">
                      {{ this.$numeral(winrate()).format('0') }}
                      <small>%</small>
                      <span class="circular__label">Win Rate</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div class="team-roster__player-stats-progress-bars">
              <table class="progress-table progress-table--simple">
                <tbody>
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
                      class="progress-table__progress-label progress-table__progress-label--highlight"
                    >
                      {{ this.$numeral(kills()).format('0a') }}
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
                      class="progress-table__progress-label progress-table__progress-label--highlight"
                    >
                      {{ this.$numeral(deaths()).format('(0a)') }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {{ stat }}
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
      const solo = this.stat.global_stats.solo.winrate
      const duo = this.stat.global_stats.duo.winrate
      const squad = this.stat.global_stats.squad.winrate
      return ((solo + duo + squad) * 100) / 3
    },
    kills() {
      const solo = this.stat.global_stats.solo.kills
      const duo = this.stat.global_stats.duo.kills
      const squad = this.stat.global_stats.squad.kills
      return solo + duo + squad
    },
    deaths() {
      const solo = this.stat.global_stats.solo.matchesplayed
      const duo = this.stat.global_stats.duo.matchesplayed
      const squad = this.stat.global_stats.squad.matchesplayed
      return Math.abs(solo + duo + squad - this.kills())
    },
    killsPct() {
      return (this.kills() * 100) / this.deaths()
    },
    deathsPct() {
      return (this.deaths() * 100) / this.kills()
    },
  },
}
</script>
