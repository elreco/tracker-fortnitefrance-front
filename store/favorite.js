export const actions = {
  async fetch(ctx, params) {
    return await this.$axios.$get('classes/Favorite', {
      params,
    })
  },
  async create(ctx, data) {
    return await this.$axios.$post('classes/Favorite', data)
  },
  async delete(ctx, id) {
    return await this.$axios.$delete(`classes/Favorite/${id}`)
  },
}
