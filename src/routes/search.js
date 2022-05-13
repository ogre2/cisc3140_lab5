// Importing configurations
const config = require('../config')
// Importing path
const path = require('path')
// Importing express router
const router = require('express').Router()
// Importing cars controller
const searchController = require(path.resolve(__dirname, '../controllers/Search.js'))

// Enabling colors
config.colors.enable()

/**
 * @method GET
 * 
 * This method will use the express router to retrieve the search result from
 * application database using the controller's getSearch method.
 */
router.get('/', searchController.getSearch)

// Exporting router
module.exports = router