/**
 * This router will serve as the cars application url router.
 * All HTTP requests/methods concerning the cars url will be housed here.
 */

// Importing configurations
const config = require('../config')
// Importing express router
const router = require('express').Router()
// Importing cars controller
const carsController = require('../controllers/Cars')

// Enabling colors
config.colors.enable()

/**
 * @method GET
 * 
 * This method will use the express router to retrieve the cars data from the
 * application database through the cars controller's getAll method.
 */
router.get('/cars', carsController.getAll)

// Exporting router
module.exports = router