<template>
  <div class="ph-item">
    <div class="ph-col-12">
      <div v-for="n in number" :key="n" class="ph-row">
        <div class="ph-col-12 big my-2"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    number: {
      type: Number,
      required: false,
      default: 100,
    },
  },
}
</script>
