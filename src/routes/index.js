/**
 * This router will server as the index application url router.
 * All HTTP requests/methods concerning the index url will be housed here.
 */

// Importing configurations
const config = require('../config')
// Importing express router
const router = require('express').Router()
// Importing index controller
const indexController = require('../controllers')

// Enabling colors
config.colors.enable()

// Using the index controller
router.get('/', indexController.getIndex)

// Exporting router
module.exports = router