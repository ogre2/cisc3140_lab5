/**
 * This controller will serve as the application index view contrller.
 * All methods pertaining to the index view will be housed here.
 */

// Importing config
const config = require('../config')

// Enabling colors
config.colors.enable()

/**
 * @param {*} req 
 * @param {*} res 
 * 
 * This GET method will return the root application url. If successful
 * the user will be able to view information located in the root view,
 * if unsuccessful, the user will be prompted with an error.
 */
exports.getIndex = (req, res) => {
    // TODO GET root url
    try {
        // Rendering the index view with test view content
        res.status(200).render('index', { message: 'Hello World' })
    }
    // Catch error
    catch(error) {
        // Log the error
        console.log(error.message.red)

        // Unsuccessful request response
        res.status(500).json({
            message: error.message
        })
    }
}