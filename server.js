// for deploytment
const express = require('express')
const path = require('path')
const serveStatic = require('serve-static')

app = express()
// vue biulds the website in the dist folder
app.use(serveStatic(__dirname + '/dist'))

let port  = process.env.PORT || 5000
app.listen(port)

console.log('server running on '+port)
