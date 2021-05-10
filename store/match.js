export const actions = {
  async fetch(ctx, params) {
    return await this.$axios.get('classes/Match', {
      params,
    })
  },
}
