/**
 * This file will serve as the sqlite3 database build/configuration.
 * The database and table will be created and maintained here, 
 * as well as seeding the table with data..
 */

// Importing configurations
const config = require('../config')
// Importing path
const path = require('path')
// Importing sqlite3
const sqlite3 = require('sqlite3')
// Importing csvtojson
const csv = require('csvtojson')
// CSV data file
const DATA = path.join(__dirname, '../data/data.csv')

// Enabling colors
config.colors.enable()

// Enabling sqlite3 verbose mode for detailed console messages
sqlite3.verbose()

/**
 * Creating the appliaction database, using the configuration files database config.
 * The database will have a cars table with all of the cars data from the data submodule.
 * The table will have various columns pertaining to each car entry corresponding to the CSV file.
 */
let db = new sqlite3.Database(config.database_name, (err) => {
    // Check for error while connecting to the database
    if(err) {
        // Log the error message to the console
        console.log(err.message.red)

        // Throw the error
        throw err
    }
    // Otherwise continue with connecting to the database
    else {
        // Log successful database connection to the console
        console.log('Connected to the database...'.blue)

        // Creating the database cars table
        db.run(`CREATE TABLE cars(
            car_id INT PRIMARY KEY,
            email TEXT UNIQUE,
            name TEXT,
            year INT,
            make TEXT,
            model TEXT,
            judge_id TEXT,
            judge_name TEXT,
            racer_turbo INT,
            racer_supercharged INT,
            racer_performance INT,
            racer_horsepower INT,
            car_overall INT,
            engine_modifications INT,
            engine_performance INT,
            engine_chrome INT,
            engine_detailing INT,
            engine_cleanliness INT,
            body_frame_undercarriage INT,
            body_frame_suspension INT,
            body_frame_chrome INT,
            body_frame_detailing INT,
            body_frame_cleanliness INT,
            mods_paint INT,
            mods_body INT,
            mods_wrap INT,
            mods_rims INT,
            mods_interior INT,
            mods_other INT,
            mods_ice INT,
            mods_aftermarket INT,
            mods_wip INT,
            mods_overall INT,
            score INT AS (racer_turbo + racer_supercharged + racer_performance + racer_horsepower + car_overall + engine_modifications + engine_performance + engine_chrome + engine_detailing + engine_cleanliness + body_frame_undercarriage + body_frame_suspension + body_frame_chrome + body_frame_detailing + body_frame_cleanliness + mods_paint + mods_body + mods_wrap + mods_rims + mods_interior + mods_other + mods_ice + mods_aftermarket + mods_wip + mods_overall)
        )`,
        // Incase of an error while creating the table
        (err) => {
            // If we detect the error
            if(err) {
                // Log the error message to the console
                console.log(err.message.red)
            }
            // Otherwise start seeding the cars table with data from our csv file
            else {
                csv().fromFile(DATA)
                    .then(data => {
                        // SQL insert command to get data from the csv file into the cars table
                        let insert = 'INSERT INTO cars (Car_ID, Email, Name, Year, Make, Model, Judge_ID, Judge_Name, Racer_Turbo, Racer_Supercharged, Racer_Performance, Racer_Horsepower, Car_Overall, Engine_Modifications, Engine_Performance, Engine_Chrome, Engine_Detailing, Engine_Cleanliness, Body_Frame_Undercarriage, Body_Frame_Suspension, Body_Frame_Chrome, Body_Frame_Detailing, Body_Frame_Cleanliness, Mods_Paint, Mods_Body, Mods_Wrap, Mods_Rims, Mods_Interior, Mods_Other, Mods_ICE, Mods_Aftermarket, Mods_WIP, Mods_Overall) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)'
                        
                        // Loop through each entry in the cars data csv
                        for(entry of data) {
                            // Insert the values from the csv file and calculated score into the database
                            db.run(insert, [
                                entry.Car_ID,
                                entry.Email,
                                entry.Name,
                                entry.Year,
                                entry.Make,
                                entry.Model,
                                entry.Judge_ID,
                                entry.Judge_Name,
                                entry.Racer_Turbo,
                                entry.Racer_Supercharged,
                                entry.Racer_Performance,
                                entry.Racer_Horsepower,
                                entry.Car_Overall,
                                entry.Engine_Modifications,
                                entry.Engine_Performance,
                                entry.Engine_Chrome,
                                entry.Engine_Detailing,
                                entry.Engine_Cleanliness,
                                entry.Body_Frame_Undercarriage,
                                entry.Body_Frame_Suspension,
                                entry.Body_Frame_Chrome,
                                entry.Body_Frame_Detailing,
                                entry.Body_Frame_Cleanliness,
                                entry.Mods_Paint,
                                entry.Mods_Body,
                                entry.Mods_Wrap,
                                entry.Mods_Rims,
                                entry.Mods_Interior,
                                entry.Mods_Other,
                                entry.Mods_ICE,
                                entry.Mods_Aftermarket,
                                entry.Mods_WIP,
                                entry.Mods_Overall
                                // score
                            ])
                        }
                    }).catch(err => {
                        console.log(err.message.red)
                    })
            }
        })
    }
})

module.exports = db