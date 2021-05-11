import Toast from '~/components/global/Toast.vue'

export default function ({
  $axios,
  $toast,
  error: nuxtError
}) {
  $axios.onResponseError(error => {
    if (error && error.response && error.response.data && error.response.data.code) {
      const { code } = error.response.data

      switch (code) {
        case 101:
          $toast({
            component: Toast,
            props: {
              text: 'Email ou mot de passe invalide.',
              type: 'danger',
            },
          })
          break
        case 205:
          $toast({
            component: Toast,
            props: {
              text: "Votre adresse email n'est pas vérifiée. Veuillez consulter votre boîte mail.",
              type: 'danger',
            },
          })
          break
        case 202:
          $toast({
            component: Toast,
            props: {
              text: 'Le compte existe déjà.',
              type: 'danger',
            },
          })
          break
        case 142:
          $toast({
            component: Toast,
            props: {
              text: error.response.data.error,
              type: 'danger',
            },
          })
          break
        case 141:
          if (error.response && error.response.config && error.response.config.url === 'classes/Stat' && error.response.config.method === 'get') {
            nuxtError({
              statusCode: 404,
              playerNotFound: true,
              message: error.response.data.error,
            });
          }
            break
        default:
          $toast({
            component: Toast,
            props: {
              text: 'Un problème est survenu. Veuillez réessayer svp.',
              type: 'danger',
            },
          })
          break
      }
      return Promise.resolve(false);
    }
  })
}
