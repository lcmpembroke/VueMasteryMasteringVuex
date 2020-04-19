import EventService from '@/services/EventService.js'

export const state = {
  events: [],
  event: {},
  eventsTotal: 0,
  todos: [
    { id: 1, text: '...', done: true },
    { id: 2, text: '...', done: false },
    { id: 3, text: '...', done: true },
    { id: 4, text: '...', done: false }
  ]
}

export const mutations = {
  ADD_EVENT(state, event) {
    state.events.push(event)
  },
  SET_EVENTS(state, events) {
    state.events = events
  },
  SET_EVENTS_TOTAL(state, eventsTotal) {
    state.eventsTotal = eventsTotal
  },
  SET_EVENT(state, event) {
    state.event = event
  }
}

export const actions = {
  createEvent({ commit }, event) {
    // update database
    return EventService.postEvent(event).then(() => {
      commit('ADD_EVENT', event) // commit to state as post to database was successful
    })
  },
  fetchEvents({ commit }, { perPage, page }) {
    EventService.getEvents(perPage, page)
      .then(response => {
        commit('SET_EVENTS', response.data)
        commit('SET_EVENTS_TOTAL', parseInt(response.headers['x-total-count']))
      })
      .catch(error => {
        console.log('Error is: ' + error.response)
      })
  },
  fetchEvent({ commit, getters }, id) {
    let event = getters.getEventById(id)

    if (event) {
      commit('SET_EVENT', event)
    } else {
      EventService.getEvent(id)
        .then(response => {
          commit('SET_EVENT', response.data)
        })
        .catch(error => {
          console.log('Error is: ' + error.response)
        })
    }
  }
}

export const getters = {
  categoriesLength: state => {
    return state.categories.length
  },
  doneTodos: state => {
    return state.todos.filter(todo => todo.done)
  },
  //
  // METHOD 1 without passing in getters
  // activeTodosCount: state => {
  //   return state.todos.filter(todo => !todo.done).length
  // },
  //
  // METHOD 2 passing in getters
  activeTodosCount: (state, getters) => {
    return state.todos.length - getters.doneTodos.length
  },
  // BELOW getter takes in state, then return another function
  // which takes in the id
  getEventById: state => id => {
    return state.events.find(event => event.id === id)
  }
}
