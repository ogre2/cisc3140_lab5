/**
 * This controller will serve as the application cars url/view contrller.
 * All methods pertaining to the cars view will be housed here.
 */

// Importing configurations
const config = require('../config')
// Importing database
const db = require('../db')

// Enabling colors
config.colors.enable()

/**
 * @param {*} req 
 * @param {*} res 
 * 
 * This GET method will retrieve all of the cars data from the database and display
 * it to the user in the /cars application url.
 */
exports.getAll = (req, res) => {
    // TODO GET all cars
    try {
        // SQL Query command
        let sql = 'SELECT * FROM cars'
        // Request paramaters
        let params = []

        // Get all cars from the database
        db.all(sql, params, (err, row) => {
            // If we encounter an error retrieving the cars data
            if(err) {
                // Set the response status to 500 and show error as message
                res.status(400).json({
                    message: err.message
                })
            }
            // If we are successful in retrieving cars information
            else {
                // Set response status to 200 and show the cars data
                res.status(200).json({
                    message: 'success',
                    data: row
                })
            }
        })
    }
    // Catch error when attempting to get data
    catch(error) {
        // Log the error message to the console
        console.log(error.message.red)

        // Set the response status to 500 and show error as message
        res.status(500).json({
            message: error.message
        })
    }
}