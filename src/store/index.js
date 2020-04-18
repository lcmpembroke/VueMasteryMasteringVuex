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
    events: [
      { id: 1, title: '...', organizer: '...' },
      { id: 2, title: '...', organizer: '...' },
      { id: 3, title: '...', organizer: '...' },
      { id: 4, title: '...', organizer: '...' }
    ],
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
    }
  },
  actions: {
    createEvent({ commit }, event) {
      // update database
      return EventService.postEvent(event).then(() => {
        // commit to state as post to database was successful
        commit('ADD_EVENT', event)
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