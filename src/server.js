// Importing express
const express = require('express')
// Importing http
const http = require('http')
// Importing config
const config = require('./config')
// Creating express instance
const app = express()
// Creating app server
const server = http.createServer(app)

// Enabling colors
config.colors.enable()

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