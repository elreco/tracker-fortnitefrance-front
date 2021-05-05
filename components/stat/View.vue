<template>
  <div>{{ stat }}</div>
</template>

<script>
export default {
  data() {
    return {
      stat: {},
    }
  },
  async fetch() {
    this.stat = await this.getStat()
  },
  methods: {
    async getStat() {
      /* const params = {
        include: 'author',
      } */
      const stat = await this.$store.dispatch('stat/get', {
        name: this.$route.params.name,
      })
      return stat
    },
  },
}
</script>
