import Toast from '~/components/global/Toast.vue'

export default function ({
  $axios,
  $toast,
  error: nuxtError
}) {
  $axios.onResponseError(error => {
    if (error && error.response) {
      if (error.response.config.url === 'classes/Stat' && error.response.config.method === 'get') {
        nuxtError({
          statusCode: 404,
          playerNotFound: true,
          message: error.response.data.error,
        });
      } else {
        $toast({
          component: Toast,
          props: getMessage(error.response)
        })
      }
      //return Promise.reject(error);
    }

    //return Promise.resolve(false);
  })
}

function getMessage(error) {
  var text = 'Un problème est survenu. Veuillez réessayer svp.'
  var type = 'danger'

  if ((error.config.url === 'login' && error.config.method === 'get') || (error.config.url === 'users' && error.config.method === 'post')) {
    switch (error.data.code) {
      case 101:
          text = 'Email ou mot de passe invalide.'
        break
      case 142:
          text = error.data.error
        break
      case 205:
        text = "Votre adresse email n'est pas vérifiée. Veuillez consulter votre boîte mail."
        break
      case 202:
        text = "Le compte existe déjà."
        break
    }
  }
  return {
    text: text,
    type: type
  }
}
