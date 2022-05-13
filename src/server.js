// Importing express
const express = require('express')
// Importing http
const http = require('http')
// Importing path
const path = require('path')
// Importing body-parser
const bodyParser = require('body-parser')
// Importing layouts
const layouts = require('express-ejs-layouts')
// Importing cors
const cors = require('cors')
// Importing helmet
const helmet = require('helmet')
// Importing config
const config = require('./config')
// Creating express instance
const app = express()
// Creating app server
const server = http.createServer(app)

// Importing index router
const indexRouter = require('./routes/index')
// Importing cars router
const carsRouter = require('./routes/cars')
// Importing search router
const searchRouter = require('./routes/search.js')

// Enabling colors
config.colors.enable()

// Setting the view engine to ejs
app.set('view engine', 'ejs')
// Setting directory for all app views
app.set('views', path.resolve(__dirname, '../client/views'))
// Setting location of main layout file
app.set('layout', 'layouts/layout')
// Setting case sensitive routing
app.set('case sensitive routing', true)
// Setting json formatting
app.set('json spaces', 2)

// Using layouts
app.use(layouts)
// Using body-parser for urlencode
app.use(bodyParser.urlencoded({ extended: true }))
// Using body-parser for parsing json data
app.use(bodyParser.json())
// Using cors
app.use(cors())
// Using helmet
app.use(helmet())
// Linking jQuery
app.use('/jquery', express.static(path.resolve(__dirname, '../node_modules/jquery/dist/')))
// Linking Popper
app.use('/popper', express.static(path.resolve(__dirname, '../node_modules/@popperjs/core/dist/umd/')))
// Linking animate.css
app.use('/animate', express.static(path.resolve(__dirname, '../node_modules/animate.css/')))
// Linking feather-icons
app.use('/feathers', express.static(path.resolve(__dirname, '../node_modules/feather-icons/dist/')))
// Linking AOS
app.use('/aos', express.static(path.resolve(__dirname, '../node_modules/aos/dist/')))
// Linking Bootstrap
app.use(express.static(path.resolve(__dirname, '../node_modules/bootstrap/dist/')))
// Linking public files
app.use(express.static(path.resolve(__dirname, '../client/public')))

// Using the index router
app.use('/', indexRouter)
// Using the cars router
app.use('/cars', carsRouter)
// Using search router
app.use('/results', searchRouter)

/**
 * @param NONE
 * @method LISTEN 
 * 
 * Launching the API server on port 5000
 */
server.listen(config.port, () => {
    console.log(`[nodemon] server is running on port:${config.port}`.green)
})