export const state = () => ({
  meta: {
    title: null,
    text: null,
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
        .$get('classes/News', {
          params: queryParams,
        })
        .then((response) => {
          resolve(response)
        })
        .catch((error) => reject(error))
    })
  },
  get(ctx, { id, params }) {
    return new Promise((resolve, reject) => {
      this.$axios
        .$get(`classes/News/${id}`, {
          params,
        })
        .then((response) => {
          ctx.commit('SET_META_TITLE', response.title)
          ctx.commit('SET_META_TEXT', response.text)
          resolve(response)
        })
        .catch((error) => reject(error))
    })
  },
}
