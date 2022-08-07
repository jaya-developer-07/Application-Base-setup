import axios from 'axios'
const { API_URL } = process.env

const request = axios.create({
  baseURL: API_URL || 'https://example.com/', // API server url
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },
})

export default request
