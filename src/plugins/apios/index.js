import Axios from 'axios'
import store from '@/plugins/vuex/'

const CancelToken = Axios.CancelToken
const source = CancelToken.source()
const pendingCalls = {}

const apios = Axios.create({
  baseURL: process.env.VUE_APP_API_URL + '/' + process.env.VUE_APP_API_VERSION + '/',
  withCredentials: true,
  cancelToken: source.token
})

apios.interceptors.request.use(config => {
  /*
  if (pendingCalls[config.baseURL + config.url] === true) {
    return {
      ...config,
      cancelToken: new CancelToken(cancel => {
        console.log('canceling', config.url)
        cancel(config.url)
        pendingCalls[config.baseURL + config.url] = null
      })
    }
  }
  */
  store.dispatch('app/loading', true)
  pendingCalls[config.baseURL + config.url] = true
  return config
}, err => {
  return Promise.reject(err)
})

apios.interceptors.response.use(res => {
  store.dispatch('app/loading', false)
  // pendingCalls[res.config.baseURL + res.config.url] = null
  return res.data
}, err => {
  store.dispatch('app/loading', false)
  if (err.constructor.name === 'Cancel') return Promise.reject(err)
  // pendingCalls[err.response.config.url] = null
  if (!err.response || !err.response.data) return Promise.reject(err)
  if (err.response.data.error_code === 1188) store.dispatch('auth/logout')
  var error = new Error()
  error.message = err.response.data.message ? err.response.data.message : 'no message'
  error.code = err.response.data.error_code ? err.response.data.error_code : 'no code'
  return Promise.reject(error)
})

export default apios
