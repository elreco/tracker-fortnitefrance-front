<template>
  <div class="widget-player__details__item">
    <div class="widget-player__details-desc-wrapper">
      <span class="widget-player__details-holder">
        <span class="widget-player__details-label">{{ title }}</span>
        <span class="widget-player__details-desc"></span>
      </span>
      <span class="widget-player__details-value font-weight-bolder">{{
        value
      }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: [String, Number],
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
}
</script>
