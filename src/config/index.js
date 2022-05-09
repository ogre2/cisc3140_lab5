// Importing path
const path = require('path')
// Importing dotenv
const dotenv = require('dotenv')
// Importing colors
const colors = require('colors')

// Configuring dotenv
dotenv.config({ path: path.join(__dirname, './.env') })

// Exporting configurations
module.exports = {
    'database_name': 'cars',
    'port': process.env.PORT || 5000,
    colors
}