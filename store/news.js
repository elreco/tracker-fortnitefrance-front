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
          resolve(response)
        })
        .catch((error) => reject(error))
    })
  },
}
