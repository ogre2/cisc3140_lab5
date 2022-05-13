/**
 * This controller will serve as the application search url/view contrller.
 * All functions pertaining to the search functionality view will be housed here.
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
 * This function will retrieve data for all of the cars from the database 
 * and display them to the user.
 */
exports.getSearch = (req, res) => {
    // TODO GET all cars
    try {
        // SQL Query command
        let sql = `SELECT car_id,email,name,year,make,model,score FROM Cars WHERE car_id LIKE '%${req.query.car_id}%' AND make LIKE '%${req.query.make}%' ORDER BY score DESC`

        // Retrieve all the car data from the database
        db.all(sql, (err, rows) => {
            // If we encounter an error retrieving the cars data
            if(err) {
                // Set the response status to 400 and show error as message
                res.status(400).json({
                    message: err.message
                })
            }
            // If we are successful in retrieving cars information
            else {
                // Parse the JSON response data
                let data = JSON.stringify(rows)
                let cars = JSON.parse(data)

                // Set the response status to 200 and show the cars data
                res.status(200).render('results', {
                    title: 'Results',
                    cars
                })
            }
        })
    }
    // Catch any errors/exceptions
    catch(error) {
        // Log the error message to the console
        console.log(error.message.red)

        // Set the response status to 500 and show the error as message
        res.status(500).json({
            message: error.message
        })
    }
}
