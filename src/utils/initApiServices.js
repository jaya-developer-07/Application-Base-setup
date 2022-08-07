import request from 'utils/request'
export let ReduxStore = {}

const initApiServices = store => {
  ReduxStore = store
  console.log(store, 'store')
  try {
    request.interceptors.response.use(
      response => {
        return response
      },
      error => {
        if (error?.response?.statusText === 'Unauthorized') {
          localStorage.clear()
          location.reload()
          return new Promise(() => {})
        } else {
          return Promise.reject(error)
        }
      }
    )
  } catch (e) {
    console.error('Error occurred while logout : in InitApiService', e)
  }
}

export default initApiServices
