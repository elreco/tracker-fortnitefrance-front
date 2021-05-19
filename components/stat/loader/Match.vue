<template>
  <div class="ph-item">
    <div class="ph-col-12">
      <div class="ph-picture my-2"></div>
      <div class="ph-row">
        <div class="ph-col-12 big my-2"></div>
      </div>
      <div class="ph-row">
        <div class="ph-col-6 big my-2"></div>
      </div>
      <div class="ph-row">
        <div class="ph-col-8 big my-2"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    loading: false,
  }),
  methods: {
    start() {
      this.loading = true
    },
    finish() {
      this.loading = false
    },
  },
}
</script>
