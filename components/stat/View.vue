<template>
  <div>
    <div
      v-if="stat && !$fetchState.pending"
      class="team-roster team-roster--card mb-0 pb-0"
    >
      <stat-general-card :stat="stat" />
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
  </div>
</template>

<script>
import StatGeneralCard from './partial/GeneralCard'

export default {
  components: {
    StatGeneralCard,
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
        this.$nextTick(() => this.$initCircularBar())
      }
    },
  },
  methods: {
    async getStat() {
      this.loading = true
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
