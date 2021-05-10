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
  async fetch(ctx, params) {
    return await this.$axios.get('classes/Stat', {
      params,
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
    const stat = await this.$axios
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

    const { results } = await this.$axios.get('classes/Match', {
      params: {
        where: {
          $relatedTo: {
            object: {
              __type: 'Relation',
              className: 'Stat',
              objectId: stat.objectId,
            },
            key: 'matches',
          },
        },
      },
    })

    stat.matches = results

    return stat
  },
}
