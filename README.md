# real-world-vue
This follows on from the Vue Mastery Introduction and covers Vue Router, Single File Components and API calls.

The app takes data from a db.json file (in root directory of project) and, using a little JSON server to mock up the API server.
JSON Server will take a JSON file from your main project folder and turn it into a RESTful database with all the right routes; it can even do things like search queries.
You will need it installed on your machine:
npm install -g json-server

To spin up this little API server, run: json-server --watch db.json

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
