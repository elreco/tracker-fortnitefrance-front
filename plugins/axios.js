export default function ({ $axios, error: nuxtError }) {
  $axios.onError(error => {
    nuxtError({
      statusCode: error.response.status,
      message: error.message,
    });
    return Promise.resolve(false);
  })
  $axios.onResponse(response => {
    if (!response.data) {
      nuxtError({
        statusCode: 404,
        message: "La page que vous demandez est introuvable",
      });
      return Promise.resolve(false);
    } else {
      return response
    }
  })
}
