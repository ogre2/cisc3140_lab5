// Importing express
const express = require('express')
// Importing http
const http = require('http')
// Creating express instance
const app = express()
// Creating app server
const server = http.createServer(app)

/**
 * @param NONE
 * @method GET
 * 
 * This is a test GET request for the root directory of the API
 */
app.get('/', (req, res) => {
    try {
        res.status(200).json({
            message: 'Hello world'
        })
    }
    catch(error) {
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
server.listen(5000, () => {
    console.log(`[nodemon] server is running on port:${5000}`)
})