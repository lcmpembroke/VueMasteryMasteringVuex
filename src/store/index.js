import Vue from 'vue'
import Vuex from 'vuex'
// * means all public items will be imported into user namespace
import * as user from '@/store/modules/user.js'
import * as event from '@/store/modules/event.js'

Vue.use(Vuex)

// NOTE TERMINOLOGY:
// Mutations:  super simple functions to make changes to the state
// Actions:   call one or more mutations, perform additional logic, call APIs
// we don't 'call' mutations or actions.
//  --> we commit mutations
//  --> we dispatch actions
export default new Vuex.Store({
  modules: {
    user,
    event
  },
  state: {
    categories: [
      'sustainability',
      'nature',
      'animal welfare',
      'housing',
      'education',
      'food',
      'community'
    ]
  }
})
