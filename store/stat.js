export const state = () => ({
  meta: {
    title: '',
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
  async fetch(ctx, queryParams) {
    return await this.$axios.$get('classes/Stat', {
      params: queryParams,
    })
  },
  async get(ctx, { name, params = {} }) {
    if (params.where) {
      params.where.push({
        name,
      })
    } else {
      params.where = {
        name,
      }
    }
    return await this.$axios
      .get(`classes/Stat`, {
        params,
      })
      .then((response) => {
        if (
          !response.data ||
          !response.data.results ||
          response.data.results.length === 0
        ) {
          throw response
        } else {
          ctx.commit('SET_META_TITLE', response.data.results[0].name)
          return response.data.results[0]
        }
      })
  },
}
