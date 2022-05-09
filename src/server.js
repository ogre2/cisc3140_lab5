// Importing express
const express = require('express')
// Importing http
const http = require('http')
// Importing body-parser
const bodyParser = require('body-parser')
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

// Enabling colors
config.colors.enable()

// Setting case sensitive routing
app.set('case sensitive routing', true)
// Setting json formatting
app.set('json spaces', 2)

// Using body-parser for urlencode
app.use(bodyParser.urlencoded({ extended: true }))
// Using body-parser for parsing json data
app.use(bodyParser.json())
// Using cors
app.use(cors())
// Using helmet
app.use(helmet())

/**
 * @param NONE
 * @method GET
 * 
 * This is a test GET request for the root directory of the API
 */
app.get('/', (req, res) => {
    // TODO GET root
    try {
        // Successful request response
        res.status(200).json({
            message: 'Hello world'
        })
    }
    // Catch error
    catch(error) {
        // Unsuccessful request response
        res.status(500).json({
            message: error.message
        })
    }
})

/**
 * @param NONE
 * @method LISTEN 
 * 
 * Launching the API server on port 5000
 */
server.listen(config.port, () => {
    console.log(`[nodemon] server is running on port:${config.port}`.green)
})