/**
 * This router will serve as the cars application url router.
 * All HTTP requests/methods concerning the cars url will be housed here.
 */

// Importing configurations
const config = require('../config')
// Importing path
const path = require('path')
// Importing express router
const router = require('express').Router()
// Importing cars controller
const carsController = require(path.resolve(__dirname, '../controllers/Cars.js'))

// Enabling colors
config.colors.enable()

/**
 * @method GET
 * 
 * This method will use the express router to retrieve all of the cars data from the
 * application database using the controller's getAll method.
 */
router.get('/', carsController.getAll)

/**
 * @method GET
 * 
 * This method will use the express router to retrieve a single car's data by its ID
 * from the application database using the controller's getID method.
 */
router.get('/:id', carsController.getID)

/**
 * @method GET
 * 
 * This method will use the express router to retrieve all car data with the same make
 * from the application database using the controller's getMake method.
 */
router.get('/make/:make', carsController.getMake)

/**
 * @method GET
 * 
 * This method will use the express router to get the create new car form
 * database using the controller's getAdd function.
 */
router.get('/new/car', carsController.getAdd)

/**
 * @method POST
 * 
 * This method will use the express router to post a new car to the database
 * using the controller's addCar function.
 */
router.post('/new/submit-car', carsController.addCar)

router.get('/entry/edit', carsController.getEdit)
/**
 * @method PATCH
 * 
 * This method will use the express router to edit an existing car in the application 
 * database using the controller's updateCar function.
 */
router.patch('/:id', carsController.editCar)

// Exporting router
module.exports = router