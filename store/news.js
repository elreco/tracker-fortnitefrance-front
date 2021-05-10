export const state = () => ({
  meta: {
    title: '',
    text: '',
  },
})

export const mutations = {
  SET_META_TITLE(state, title) {
    state.meta.title = title
  },
  SET_META_TEXT(state, text) {
    state.meta.text = text
  },
}

export const actions = {
  async fetch(ctx, params) {
    return await this.$axios.get('classes/News', {
      params,
    })
  },
  async get(ctx, { id, params }) {
    return await this.$axios
      .$get(`classes/News/${id}`, {
        params,
      })
      .then((response) => {
        ctx.commit('SET_META_TITLE', response.title)
        ctx.commit('SET_META_TEXT', response.text)
        return response
      })
  },
  async addView(ctx, id) {
    return await this.$axios.post(`functions/newsAddView`, { id })
  },
}
