export default async function ({ app, redirect }) {
  const user = await app.$cookies.get('auth._token.local')
  if (user) {
    redirect('/')
  }
}
