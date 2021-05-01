<template>
  <div :class="`alert alert-${type} alert--rounded bg-${type}`">
    <button
      type="button"
      class="btn btn-xs btn-default alert-btn-right"
      @click="$emit('close-toast')"
    >
      Fermer
    </button>
    <div class="text-white" v-html="text"></div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: 'primary',
    },
  },
}
</script>
