import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getEvents() {
    console.log('getEvents in EventService')
    return apiClient.get('/events')
  },
  getEvent(id) {
    console.log('getEvent in EventService', id)
    if (isNaN(id)) {
      console.log('eventId is NOT a number!!!! error')
    }
    return apiClient.get('/events/' + id)
  },
  postEvent(event) {
    //TODO: data checking/error handling
    return apiClient.post('/events', event)
  }
}
