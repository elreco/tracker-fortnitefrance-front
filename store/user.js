export const actions = {
  update(ctx, { id, data }) {
    return new Promise((resolve, reject) => {
      this.$axios
        .$put(`classes/_User/${id}`, data)
        .then((response) => {
          resolve(response)
        })
        .catch((error) => reject(error))
    })
  },
}
