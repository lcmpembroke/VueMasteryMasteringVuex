import Vue from 'vue'
import Vuex from 'vuex'
import EventService from '@/services/EventService.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      id: 'abc123',
      name: 'Adam Jahr'
    },
    categories: [
      'sustainability',
      'nature',
      'animal welfare',
      'housing',
      'education',
      'food',
      'community'
    ],
    events: [],
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false },
      { id: 3, text: '...', done: true },
      { id: 4, text: '...', done: false }
    ]
  },
  mutations: {
    ADD_EVENT(state, event) {
      state.events.push(event)
    },
    SET_EVENTS(state, events) {
      state.events = events
    }
  },
  actions: {
    //  { commit  } is the context object, event is the payload
    createEvent({ commit }, event) {
      // update database
      return EventService.postEvent(event).then(() => {
        // commit to state as post to database was successful
        commit('ADD_EVENT', event)
      })
    },
    // { commit  } is the context object
    fetchEvents({ commit }) {
      EventService.getEvents()
        .then(response => {
          // response.data is the payload (payload = actual data interested in )
          commit('SET_EVENTS', response.data)
        })
        .catch(error => {
          console.log('error from EventList')
          console.log(this)
          console.log('Error is: ' + error.response)
        })
    }
  },
  getters: {
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
  },
  modules: {}
})
