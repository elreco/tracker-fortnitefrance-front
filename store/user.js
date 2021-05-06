export const actions = {
  register(ctx, data) {
    return new Promise((resolve, reject) => {
      this.$axios
        .post('users', data)
        .then((response) => {
          resolve(response)
        })
        .catch((error) => reject(error))
    })
  },
  update(ctx, { id, data }) {
    return new Promise((resolve, reject) => {
      this.$axios
        .put(`users/${id}`, data)
        .then((response) => {
          resolve(response)
        })
        .catch((error) => reject(error))
    })
  },
}
