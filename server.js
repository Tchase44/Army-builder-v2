// for deployment
const express = require('express')
const path = require('path')
const serveStatic = require('serve-static')

app = express()
// vue builds the website in the dist folder
app.use(serveStatic(__dirname + '/dist'))

let port  = process.env.PORT || 5000
app.listen(port)

console.log('server running on '+port)
