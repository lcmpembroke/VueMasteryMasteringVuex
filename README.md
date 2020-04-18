# Mastering Vuex (State Management)
This follows on from the Vue Mastery Real World Vue course.

Managing state in an application full of components by emitting events from child to parent components, and passing down props from parent to children components means that state management would quickly become very complicated.

Vuex is Vue’s own state management pattern and library.
A Single Source of Truth is what Vuex provides, and every component has direct access to this global State.

Just like the Vue instance’s data, this State is reactive. When one component updates the State, other components that are using that data get notified, automatically receiving the new value.

const app = new Vue({
	data: {},    --> reactive
	methods: {},
	computed: {}
})

const store = new Vuex.Store({
    state: {},     --> reactive
    mutations: {}, --> makes and tracks state changes
    actions: {},   --> like methods, use to commit Mutations to update state
    getters: {}    --> like computed,accesses filtered/derived state
})

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Start json server to mock up the API server
```
json-server --watch db.json
```
### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
