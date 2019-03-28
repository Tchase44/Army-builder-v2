# vue-simple

> A Vue.js project

## Dev Setup
```bash
# Backend server
nodemon index.js
# => :8000

# Front-End server
npm run dev # OR
yarn run dev
# => :8080
```
## Seeding
```bash
node /db/setupDb.js
```


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).


## Assess Mongo on Windows through WSL

`/c/Program\ Files/MongoDB/Server/4.0/bin/mongo.exe`
`/c/Program\ Files/MongoDB/Server/4.0/bin/mongod.exe`

npm run dev
node index.js


```js
props: {
    // Basic type check (`null` and `undefined` values will pass any type validation)
    propA: Number,
    // Multiple possible types
    propB: [String, Number],
    // Required string
    propC: {
      type: String,
      required: true
    },
    // Number with a default value
    propD: {
      type: Number,
      default: 100
    },
    // Object with a default value
    propE: {
      type: Object,
      // Object or array defaults must be returned from
      // a factory function
      default: function () {
        return { message: 'hello' }
      }
    },
    // Custom validator function
    propF: {
      validator: function (value) {
        // The value must match one of these strings
        return ['success', 'warning', 'danger'].indexOf(value) !== -1
      }
    }
  }

```