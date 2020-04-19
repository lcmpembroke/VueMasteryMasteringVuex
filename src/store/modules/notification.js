export const namespaced = true

export const state = {
  notifications: []
}

// MUTATIONS: ability to add/remove from notifications array in state

let nextId = 1
export const mutations = {
  PUSH(state, notification) {
    state.notifications.push({
      // using object destructuring here so when we push a new
      // notification, we can add an id to it.
      ...notification,
      id: nextId++
    })
  },
  DELETE(state, notificationToRemove) {
    state.notifications = state.notifications.filter(
      notification => notification.id !== notificationToRemove.id
    )
  }
}

export const actions = {
  add({ commit }, notification) {
    commit('PUSH', notification)
  },
  remove({ commit }, notificationToRemove) {
    commit('DELETE', notificationToRemove)
  }
}
