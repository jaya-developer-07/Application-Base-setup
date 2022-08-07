import request from 'utils/request'

const initializeApp = token => {
  request.defaults.headers.common['Authorization'] = token
}

export default initializeApp
