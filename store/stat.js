export const state = () => ({
  meta: {
    title: '',
  },
  stat: {},
})

export const mutations = {
  SET_META_TITLE(state, title) {
    state.meta.title = title
  },
  SET_META_TEXT(state, text) {
    state.meta.text = text
  },
  SET_STAT(state, stat) {
    state.stat = stat
  },
}

export const actions = {
  async fetch(ctx, params) {
    return await this.$axios.$get('classes/Stat', {
      params,
    })
  },
  async getByName(ctx, { name, params = {} }) {
    if (params.where) {
      params.where.push({
        name_lowercase: name.toLowerCase(),
      })
    } else {
      params.where = {
        name_lowercase: name.toLowerCase(),
      }
    }
    return await this.$axios
      .$get(`classes/Stat`, {
        params,
      })
      .then((response) => {
        if (!response.results || response.results.length === 0) {
          throw response
        } else {
          ctx.commit('SET_META_TITLE', response.results[0].name)
          ctx.commit('SET_STAT', response.results[0])
          return response.results[0]
        }
      })
  },
}
