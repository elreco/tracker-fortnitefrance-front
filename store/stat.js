export const state = () => ({
  meta: {
    title: null,
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
  fetch(ctx, queryParams) {
    return new Promise((resolve, reject) => {
      this.$axios
        .$get('classes/Stat', {
          params: queryParams,
        })
        .then((response) => {
          resolve(response)
        })
        .catch((error) => reject(error))
    })
  },
  get(ctx, { name, params = {} }) {
    if (params.where) {
      params.where.push({
        name,
      })
    } else {
      params.where = {
        name,
      }
    }

    return new Promise((resolve, reject) => {
      this.$axios
        .$get(`classes/Stat`, {
          params,
        })
        .then((response) => {
          if (!response.results || response.results.length === 0) {
            reject(response)
          } else {
            ctx.commit('SET_META_TITLE', response.results[0].name)
            resolve(response.results[0])
          }
        })
        .catch((error) => reject(error))
    })
  },
}
