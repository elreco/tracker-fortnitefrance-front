<template>
  <div>
    <stat-view-loader v-if="loading" />
    <div
      v-else-if="!loading && stat"
      class="team-roster team-roster--card mb-0 pb-0"
    >
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
            <div class="team-roster__content">
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
                      <div class="circular__bar" data-percent="68">
                        <span class="circular__percents">
                          19
                          <span class="circular__label">Played</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="team-roster__player-stats-circular-bar">
                    <div class="circular circular--size-80">
                      <div class="circular__bar" data-percent="89.2">
                        <span class="circular__percents">
                          89.2<small>%</small>
                          <span class="circular__label">Win Rate</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="team-roster__player-stats-progress-bars">
                  <!-- Progress Stats Table -->
                  <table class="progress-table progress-table--simple">
                    <tbody>
                      <tr>
                        <td class="progress-table__title">Total Kills</td>
                        <td class="progress-table__progress-bar">
                          <div class="progress progress--lines">
                            <div
                              class="progress__bar"
                              style="width: 90%"
                              role="progressbar"
                              aria-valuenow="90"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </td>
                        <td
                          class="progress-table__progress-label progress-table__progress-label--highlight"
                        >
                          602
                        </td>
                      </tr>
                      <tr>
                        <td class="progress-table__title">Total Deaths</td>
                        <td class="progress-table__progress-bar">
                          <div class="progress progress--lines">
                            <div
                              class="progress__bar"
                              style="width: 40%"
                              role="progressbar"
                              aria-valuenow="40"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </td>
                        <td
                          class="progress-table__progress-label progress-table__progress-label--highlight"
                        >
                          349
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <!-- Progress Stats Table / End -->
                </div>
              </div>
            </div>
            <aside class="team-roster__meta">
              <div class="team-roster__meta-item">
                <div class="team-roster__meta-icon">
                  <svg role="img" class="df-icon df-icon--fire">
                    <use
                      xlink:href="assets/images/esports/icons-esports.svg#fire"
                    ></use>
                  </svg>
                </div>
                <div class="team-roster__meta-label">Offensive</div>
              </div>
              <div class="team-roster__meta-item">
                <a href="_esports_team-roster.html"
                  ><div
                    class="team-roster__meta-icon team-roster__meta-icon--more"
                  >
                    <i class="fas fa-long-arrow-left"></i>
                  </div>
                  <div class="team-roster__meta-label">Go Back</div></a
                >
              </div>
            </aside>
          </div>
        </div>
      </div>
      <div class="player-general-stats row">
        <div class="player-general-stats__item col-sm-6 col-lg-3">
          <div class="player-general-stats__card card">
            <div class="player-general-stats__card-content card__content">
              <div
                class="player-general-stats__icon alc-icon alc-icon--circle alc-icon--sm alc-icon--outline alc-icon--outline-md"
              >
                <svg role="img" class="df-icon df-icon--crosshair">
                  <use
                    xlink:href="/images/esports/icons-esports.svg#crosshair"
                  ></use>
                </svg>
              </div>
              <div class="player-general-stats__body">
                <h5 class="player-general-stats__value">12.7</h5>
                <div class="player-general-stats__meta">
                  <h6 class="player-general-stats__label">Average Kills</h6>
                  <div class="player-general-stats__sublabel">in all time</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="player-general-stats__item col-sm-6 col-lg-3">
          <div class="player-general-stats__card card">
            <div class="player-general-stats__card-content card__content">
              <div
                class="player-general-stats__icon alc-icon alc-icon--circle alc-icon--sm alc-icon--outline alc-icon--outline-md"
              >
                <svg role="img" class="df-icon df-icon--dead-face">
                  <use
                    xlink:href="/images/esports/icons-esports.svg#dead-face"
                  ></use>
                </svg>
              </div>
              <div class="player-general-stats__body">
                <h5 class="player-general-stats__value">9.8</h5>
                <div class="player-general-stats__meta">
                  <h6 class="player-general-stats__label">Average Deaths</h6>
                  <div class="player-general-stats__sublabel">in all time</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="player-general-stats__item col-sm-6 col-lg-3">
          <div class="player-general-stats__card card">
            <div class="player-general-stats__card-content card__content">
              <div
                class="player-general-stats__icon alc-icon alc-icon--circle alc-icon--sm alc-icon--outline alc-icon--outline-md"
              >
                <svg role="img" class="df-icon df-icon--thumbs-up">
                  <use
                    xlink:href="/images/esports/icons-esports.svg#thumbs-up"
                  ></use>
                </svg>
              </div>
              <div class="player-general-stats__body">
                <h5 class="player-general-stats__value">63.1</h5>
                <div class="player-general-stats__meta">
                  <h6 class="player-general-stats__label">Average Assists</h6>
                  <div class="player-general-stats__sublabel">in all time</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="player-general-stats__item col-sm-6 col-lg-3">
          <div class="player-general-stats__card card">
            <div class="player-general-stats__card-content card__content">
              <div
                class="player-general-stats__icon alc-icon alc-icon--circle alc-icon--sm alc-icon--outline alc-icon--outline-md"
              >
                <svg role="img" class="df-icon df-icon--gamepad">
                  <use
                    xlink:href="/images/esports/icons-esports.svg#gamepad"
                  ></use>
                </svg>
              </div>
              <div class="player-general-stats__body">
                <h5 class="player-general-stats__value">2.7</h5>
                <div class="player-general-stats__meta">
                  <h6 class="player-general-stats__label">
                    Average Pentakills
                  </h6>
                  <div class="player-general-stats__sublabel">in all time</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {{ stat }}
  </div>
</template>

<script>
import SocialButtons from '@/components/global/SocialButtons'
import StatViewLoader from './partial/ViewLoader'

export default {
  components: {
    SocialButtons,
    StatViewLoader,
  },
  data() {
    return {
      loading: true,
      stat: {},
    }
  },
  async fetch() {
    this.stat = await this.getStat()
  },
  watch: {
    '$fetchState.pending'() {
      if (!this.$fetchState.pending) {
        this.$initCircularBar()
      }
    },
  },
  methods: {
    async getStat() {
      /* const params = {
        include: 'matches',
      } */
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
        .finally(() => (this.loading = false))
      return stat
    },
  },
}
</script>
