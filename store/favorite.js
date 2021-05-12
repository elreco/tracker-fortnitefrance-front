export const state = () => ({
  me: [],
})

export const mutations = {
  SET_MY_FAVORITES(state, favorites) {
    state.me = favorites
  },
}

export const actions = {
  async fetch(ctx, params) {
    return await this.$axios.$get('classes/Favorite', {
      params,
    })
  },
  async me(ctx) {
    const favorites = await this.$axios.$get('classes/Favorite', {
      params: {
        where: {
          user: {
            __type: 'Pointer',
            className: '_User',
            objectId: this.$auth.user.objectId,
          },
        },
        limit: 5,
        count: 1,
      },
    })

    await Promise.all(
      favorites.results.map(async (favorite) => {
        favorite.stat = await this.$axios.$get(
          `classes/Stat/${favorite.stat.objectId}`
        )
      })
    )
    ctx.commit('SET_MY_FAVORITES', favorites.results)
    return favorites
  },
  async create(ctx, data) {
    return await this.$axios.$post('classes/Favorite', data)
  },
  async delete(ctx, id) {
    return await this.$axios.$delete(`classes/Favorite/${id}`)
  },
}
