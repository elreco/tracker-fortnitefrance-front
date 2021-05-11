<template>
  <div class="widget card widget--sidebar widget-player widget-player--alt">
    <div class="widget__title card__header">
      <h4>{{ title }}</h4>
    </div>
    <div class="widget__content-secondary">
      <div class="widget-player__details">
        <div class="widget-player__details__item">
          <div class="widget-player__details-desc-wrapper">
            <span class="widget-player__details-holder">
              <span class="widget-player__details-label">Matches Played</span>
              <span class="widget-player__details-desc">in his career</span>
            </span>
            <span class="widget-player__details-value">19</span>
          </div>
        </div>
        <div class="widget-player__details__item">
          <div class="widget-player__details-desc-wrapper">
            <span class="widget-player__details-holder">
              <span class="widget-player__details-label"
                >Tournaments Played</span
              >
              <span class="widget-player__details-desc">in his career</span>
            </span>
            <span class="widget-player__details-value">2</span>
          </div>
        </div>
        <div class="widget-player__details__item">
          <div class="widget-player__details-desc-wrapper">
            <span class="widget-player__details-holder">
              <span class="widget-player__details-label">Total Kills</span>
              <span class="widget-player__details-desc">in his career</span>
            </span>
            <span class="widget-player__details-value">3640</span>
          </div>
        </div>
        <div class="widget-player__details__item">
          <div class="widget-player__details-desc-wrapper">
            <span class="widget-player__details-holder">
              <span class="widget-player__details-label">Total Deaths</span>
              <span class="widget-player__details-desc">in his career</span>
            </span>
            <span class="widget-player__details-value">908</span>
          </div>
        </div>
        <div class="widget-player__details__item">
          <div class="widget-player__details-desc-wrapper">
            <span class="widget-player__details-holder">
              <span class="widget-player__details-label">Total Assists</span>
              <span class="widget-player__details-desc">in his career</span>
            </span>
            <span class="widget-player__details-value">1953</span>
          </div>
        </div>
        <div class="widget-player__details__item">
          <div class="widget-player__details-desc-wrapper">
            <span class="widget-player__details-holder">
              <span class="widget-player__details-label">Total Pentakills</span>
              <span class="widget-player__details-desc">in his career</span>
            </span>
            <span class="widget-player__details-value">307</span>
          </div>
        </div>
        <div class="widget-player__details__item">
          <div class="widget-player__details-desc-wrapper">
            <span class="widget-player__details-holder">
              <span class="widget-player__details-label">Total Gold</span>
              <span class="widget-player__details-desc">in his career</span>
            </span>
            <span class="widget-player__details-value">28</span>
          </div>
        </div>
        <div class="widget-player__details__item">
          <div class="widget-player__details-desc-wrapper">
            <span class="widget-player__details-holder">
              <span class="widget-player__details-label">First Blood</span>
              <span class="widget-player__details-desc">in his career</span>
            </span>
            <span class="widget-player__details-value">19</span>
          </div>
        </div>
        <div class="widget-player__details__item">
          <div class="widget-player__details-desc-wrapper">
            <span class="widget-player__details-holder">
              <span class="widget-player__details-label">Damage Made</span>
              <span class="widget-player__details-desc">in his career</span>
            </span>
            <span class="widget-player__details-value">963K</span>
          </div>
        </div>
        <div class="widget-player__details__item">
          <div class="widget-player__details-desc-wrapper">
            <span class="widget-player__details-holder">
              <span class="widget-player__details-label">Damage Received</span>
              <span class="widget-player__details-desc">in his career</span>
            </span>
            <span class="widget-player__details-value">637K</span>
          </div>
        </div>
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
              7960
            </div>
            <div class="widget-player__stat-inner">
              <div class="widget-player__stat--label">Total Minutes Played</div>
              <div class="widget-player__stat--desc">in his career</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
}
</script>
