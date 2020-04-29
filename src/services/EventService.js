import axios from 'axios'
import NProgress from 'nprogress'

const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

// Axios Interceptors allow us to intercept our requests and responses
// Axios interceptors act like middlemen (or middleware) allowing you to
// run some code when a request is made, or when a response is received

// called on request
apiClient.interceptors.request.use(config => {
  NProgress.start()
  return config
})

// called on response
apiClient.interceptors.response.use(response => {
  NProgress.done()
  return response
})

export default {
  getEvents(perPage, page) {
    // For JSON server API see https://github.com/typicode/json-server#paginate
    return apiClient.get('/events?_limit=' + perPage + '&_page=' + page)
  },
  getEvent(id) {
    return apiClient.get('/events/' + id)
  },
  postEvent(event) {
    //TODO: data checking/error handling
    return apiClient.post('/events', event)
  }
}
