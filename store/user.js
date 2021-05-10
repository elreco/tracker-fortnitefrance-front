export const actions = {
  async register(ctx, data) {
    if ('confirmPassword' in data) {
      delete data.confirmPassword
    }
    return await this.$axios.post('users', data)
  },
  async logout(ctx) {
    return await this.$axios.post('logout')
  },
  async update(ctx, { id, data }) {
    const updateData = {}
    Object.assign(updateData, data)
    if ('confirmPassword' in updateData) {
      delete updateData.confirmPassword
    }
    if (!updateData.password && 'password' in updateData) {
      delete updateData.password
    }
    if (updateData.email === ctx.rootState.auth.user.email) {
      delete updateData.email
    }
    if (updateData.avatar) {
      const avatar = await this.$axios.post(
        `files/${updateData.avatar.name}`,
        updateData.avatar,
        {
          headers: {
            'Content-Type': updateData.avatar.type,
          },
        }
      )
      updateData.avatar = {
        name: avatar.name,
        url: avatar.url,
        __type: 'File',
      }
    } else {
      delete updateData.avatar
    }
    return await this.$axios.put(`users/${id}`, updateData)
  },
}
