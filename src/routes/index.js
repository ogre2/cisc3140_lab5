/**
 * This router will serve as the index application url router.
 * All HTTP requests/methods concerning the index url will be housed here.
 */

// Importing configurations
const config = require('../config')
// Importing path
const path = require('path')
// Importing express router
const router = require('express').Router()
// Importing index controller
const indexController = require(path.resolve(__dirname, '../controllers/Index.js'))

// Enabling colors
config.colors.enable()

// Using the index controller
router.get('/', indexController.getIndex)

// Exporting router
module.exports = router