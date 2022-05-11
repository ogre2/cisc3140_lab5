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
 * This method will use the express router to retrieve all of the cars data from the
 * application database using the controller's getAll method.
 */
router.get('/cars', carsController.getAll)

/**
 * @method GET
 * 
 * This method will use the express router to retrieve a single car's data by its ID
 * from the application database using the controller's getID method.
 */
router.get('/cars/:id', carsController.getID)

/**
 * @method GET
 * 
 * This method will use the express router to retrieve all car data with the same make
 * from the application database using the controller's getMake method.
 */
router.get('/cars/make/:make', carsController.getMake)

/**
 * @method POST
 * 
 * This method will use the express router to post a new car to the application 
 * database using the controller's addCar function.
 */
router.post('/cars', carsController.addCar)

/**
 * @method PATCH
 * 
 * This method will use the express router to edit an existing car in the application 
 * database using the controller's updateCar function.
 */
router.patch('/cars/:id', carsController.updateCar)

// Exporting router
module.exports = router