/**
 * This controller will serve as the application cars url/view contrller.
 * All functions pertaining to the cars view will be housed here.
 */

// Importing configurations
const { json } = require('express/lib/response')
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
exports.getAll = (req, res) => {
    // TODO GET all cars
    try {
        // SQL Query command
        let sql = 'SELECT car_id,email,name,year,make,model,score FROM Cars ORDER BY score DESC'
        // Request paramaters
        let params = []

        // Retrieve all the car data from the database
        db.all(sql, params, (err, rows) => {
            // If we encounter an error retrieving the cars data
            if(err) {
                // Set the response status to 400 and show error as message
                res.status(400).json({
                    message: err.message
                })
            }
            // If we are successful in retrieving cars information
            else {
                // Set response status to 200 and show the cars data
                let data = JSON.stringify(rows)
                let cars = JSON.parse(data)

                res.status(200).render('api', {
                    title: 'Cars',
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

/**
 * @param {*} req 
 * @param {*} res
 * 
 * This function will retrieve data for a single car data from the database 
 * based on the car_id and display it to the user.
 */
exports.getID = (req, res) => {
    // TODO GET cars by ID
    try {
        // SQL Query command
        let sql = 'SELECT car_id,email,name,year,make,model,score FROM cars WHERE car_id = ?'
        // Request parameters
        let params = [req.params.id]

        // Retrieve the car data from the database
        db.get(sql, params, (err, row) => {
            // If we encounter an error retrieving the car data
            if(err) {
                // Set the response status to 400 and show error as message
                res.status(400).json({
                    message: err.message
                })
            }
            // If we successfully retrieve the car data
            else {
                // Set the reponsse status to 200 and display the data
                res.status(200).json({
                    message: 'success',
                    data: row
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

/**
 * @param {*} req 
 * @param {*} res
 * 
 * This function will retrieve data on all cars from the database with
 * the same make and display them to the user.
 */
exports.getMake = (req, res) => {
    // TODO GET cars by make
    try {
        // SQL Query command
        let sql = 'SELECT car_id,email,name,year,make,model,score FROM cars WHERE make = ?'
        // Request paramaters
        let params = [req.params.make]

        // Retrieve all of the cars data from the database with same make
        db.all(sql, params, (err, row) => {
            // If we encounter an error retrieving the car data
            if(err) {
                // Set the response status to 400 and show the error as message
                res.status(400).json({
                    message: err.message
                })
            }
            // If we successfully retrieve all the car data 
            else {
                // Set the response status to 200 and display the data
                res.status(200).json({
                    message: 'success',
                    data: row
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

/**
 * @param {*} req 
 * @param {*} res
 * 
 * This function will take information about a car and create a new car 
 * entry in the database. 
 */
exports.addCar = (req, res) => {
    // TODO POST new car to database
    try {
        // SQL Query command
        let sql = 'INSERT INTO cars (car_id, email, name, year, make, model, judge_id, judge_name, racer_turbo, racer_supercharged, racer_performance, racer_horsepower, car_overall, engine_modifications, engine_performance, engine_chrome, engine_detailing, engine_cleanliness, body_frame_undercarriage, body_frame_suspension, body_frame_chrome, body_frame_detailing, body_frame_cleanliness, mods_paint, mods_body, mods_wrap, mods_rims, mods_interior, mods_other, mods_ice, mods_aftermarket, mods_wip, mods_overall) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)'
        // Query paramaters
        let params = [req.body.car_id, req.body.email, req.body.name, req.body.year, req.body.make, req.body.model, req.body.judge_id, req.body.judge_name, req.body.racer_turbo, req.body.racer_supercharged, req.body.racer_performance, req.body.racer_horsepower, req.body.car_overall, req.body.engine_modifications, req.body.engine_performance, req.body.engine_chrome, req.body.engine_detailing, req.body.engine_cleanliness, req.body.body_frame_undercarriage, req.body.body_frame_suspension, req.body.body_frame_chrome, req.body.body_frame_detailing, req.body.body_frame_cleanliness, req.body.mods_paint, req.body.mods_body, req.body.mods_wrap, req.body.mods_rims, req.body.mods_interior, req.body.mods_other, req.body.mods_ice, req.body.mods_aftermarket, req.body.mods_wip, req.body.mods_overall]
    
        // Creating new car database entry
        db.run(sql, params, err => {
            // If we encounter an error while posting the new car entry
            if(err) {
                // Log the error message to the console
                console.log(err.message.red)

                // Set the response status to 400 and show the error as message
                res.status(400).json({
                    message: err.message
                })
            }
            // If we successfully create a new car entry
            else {
                // Set the response status to 200 and show the data posted
                res.status(200).json({
                    message: 'success',
                    dat: req.body
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

/**
 * @param {*} req 
 * @param {*} res
 * 
 * This function will will edit/update information on an existing car entry in the database. 
 * The user can update a singular key for the entry or multiple keys at once.
 */
exports.updateCar = (req, res) => {
    // TODO patch car data
    try {
        // SQL Query command
        let sql = `UPDATE cars SET
        email = COALESCE(?,email), name = COALESCE(?,name), year = COALESCE(?,year), make = COALESCE(?,make), model = COALESCE(?,model), judge_id = COALESCE(?,judge_id), judge_name = COALESCE(?,judge_name), racer_turbo = COALESCE(?,racer_turbo), racer_supercharged = COALESCE(?,racer_supercharged), racer_performance = COALESCE(?,racer_performance), racer_horsepower = COALESCE(?,racer_horsepower), car_overall = COALESCE(?,car_overall), engine_modifications = COALESCE(?,engine_modifications), engine_performance = COALESCE(?,engine_performance), engine_chrome = COALESCE(?,engine_chrome), engine_detailing = COALESCE(?,engine_detailing), engine_cleanliness = COALESCE(?,engine_cleanliness), body_frame_undercarriage = COALESCE(?,body_frame_undercarriage), body_frame_suspension = COALESCE(?,body_frame_suspension), body_frame_chrome = COALESCE(?,body_frame_chrome), body_frame_detailing = COALESCE(?,body_frame_detailing), body_frame_cleanliness = COALESCE(?,body_frame_cleanliness), mods_paint = COALESCE(?,mods_paint), mods_body = COALESCE(?,mods_body), mods_wrap = COALESCE(?,mods_wrap), mods_rims = COALESCE(?,mods_rims), mods_interior = COALESCE(?,mods_interior), mods_other = COALESCE(?,mods_other), mods_ice = COALESCE(?,mods_ice), mods_aftermarket = COALESCE(?,mods_aftermarket), mods_wip = COALESCE(?,mods_wip), mods_overall = COALESCE(?,mods_overall) WHERE car_id = ?`
        // Query parameters
        let params = [req.body.email, req.body.name, req.body.year, req.body.make, req.body.model, req.body.judge_id, req.body.judge_name, req.body.racer_turbo, req.body.racer_supercharged, req.body.racer_performance, req.body.racer_horsepower, req.body.car_overall, req.body.engine_modifications, req.body.engine_performance, req.body.engine_chrome, req.body.engine_detailing, req.body.engine_cleanliness, req.body.body_frame_undercarriage, req.body.body_frame_suspension, req.body.body_frame_chrome, req.body.body_frame_detailing, req.body.body_frame_cleanliness, req.body.mods_paint, req.body.mods_body, req.body.mods_wrap, req.body.mods_rims, req.body.mods_interior, req.body.mods_other, req.body.mods_ice, req.body.mods_aftermarket, req.body.mods_wip, req.body.mods_overall, req.params.id]

        // Updating car entry
        db.run(sql, params, err => {
            // If we encounter an error while patching the car entry
            if(err) {
                // Log the error message to the console
                console.log(err.message.red)

                // Set the response status to 400 and show the error as message
                res.status(400).json({
                    message: err.message
                })
            }
            // If we successfully update the car car entry
            else {
                // Set the response status to 200 and show the data modified
                res.status(200).json({
                    message: 'success',
                    dat: {
                        car_id: req.params.id,
                        updates: req.body
                    }
                })
            }
        })
    }
    // Catch any errors/exceptions
    catch(error) {
        // Log the error message to the console
        console.log(error.message)

        // Set the response status to 500 and show the error as message
        res.status(500).json({
            message: error.message
        })
    }
}