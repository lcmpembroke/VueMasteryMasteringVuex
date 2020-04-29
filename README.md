# Next Level Vue
VueMatery course with prerequisites that include knowledge of:
Vue CLI
Vue Router
Single File .vue Components
API Calls with Axios
Vuex  

A a progress bar (npm install nprogress) is added for a better user experience  
Solution one - Progress Bar using Axios Interceptors (like middleware to run code when a request is made or response received)
 - but not optimal for multiple API calls at same time  
 - templates get rendered before the API call is returned, see empty page with no data initially

 Solution two -  in-component route guards, not final solution  
 This ensures the template is only rendered once fetching the data is done

 Solution three - 

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

use  
json-server -d 1500 db.json to add a 1.5 second delay betfore returning data
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
