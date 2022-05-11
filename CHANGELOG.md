# **Changelog**
<!-- Shields -->
![GitHub project](https://img.shields.io/static/v1?label=project&message=cisc3140%20lab4&color=blue)
![GitHub contributors](https://img.shields.io/github/contributors/ogre2/cisc3140_lab4)
![License](https://img.shields.io/static/v1?label=license&message=Apache%20v2.0&color=blue)

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.4.2] &mdash; (2022/05/11)
### Updates
- Added favicon to application.
- Added Google fonts to application.

### Changes
- Cleaned up the main layout file, added comments.
- Enabled imported/linked frontend assets to load.
- Passed title in index view render (`<src/controllers/Index.js>`).

## [1.4.1] &mdash; (2022/05/11)
### Updates
- Linked frontend assets in `<src/server.js>`
  - Bootstrap, jQuery, PopperJS, Feather-Icons, animate.css.

### Changes
- Modified path to frontend assets.

## [1.4.0] &mdash; (2022/05/11)
### Updates
- Created `<client>` directory to house all the frontend code.
- Created the `<client/views>` subdirectory inside to house all application views.
- Created the `<client/views/layout>` subdirectory inside to house the main app layout configuration.
- Imported `<path>` and `<express-ejs-layouts>` in server file.
- Configured `<EJS>` as view engine for application.
- Enabled `<express-ejs-layouts>` as app layout solution.

### Changes
- Linked app to views layout in `<src/server.js>`.
- Linked app to views directory and configured the layout file.
- Modified getIndex function in `<src/controllers/Index.js>` to render the `<index>` EJS view.

## [1.3.0] &mdash; (2022/05/10)
### Updates
- Added `<GET>` by ID function in the cars controller.
  - Used function in the cars router.
- Added `<GET>` by make function in the cars controller.
  - Used functon in the cars router.
- Added `<POST>` function in cars controller to allow creating new car entries.
  - Used function in the cars router.
- Added `<PATCH>` function in cars controller to allow updating/editing car entries.

### Changes
- Modified comments in `<src/controllers/Cars.js>` and `<src/routes/cars.js>`.
- Relaunched database.

## [1.2.1] &mdash; (2022/05/09)
### Updates
- Updated sql query in `<src/controllers/Cars>` to return specific keys from database.

### Changes
- Modified database configuration command to fix `table cars already exists` error.

## [1.2.0] &mdash; (2022/05/09)
### Updates
- Created `<Cars.js>` controller file with getAll cars function.
- Created `<cars.js>` router file.
- Imported cars router to `<src/server.js>`.
- Created `<src/db>` subdirectory to house all database configurations.
- Created application database file with cars table `<src/db/db.sqlite3>`.
  - Populated cars table with data from the csv file inside the data submodule.
- [SQLITE table cars already exists issue](https://github.com/ogre2/cisc3140_lab5/issues/1) noted.

### Changes
- Fixed comment typo in `<src/controllers/Index.js>`.
- Fixed comment typo in `<src/server.js>`.

## [1.1.1] &mdash; (2022/05/09)
### Updates
- Added cars sample data as submodule.

## [1.1.0] &mdash; (2022/05/09)
### Updates
- Created `<src/controllers>` subdirectory to house application controllers.
  - Created `<Index.js>` controller file with retrieve index url function.
- Created `<src/routes>` subdirectory to house application routers.
  - Created `<index.js>` router file.
- Imported index router to `<src/server.js>`.

### Changes
- Moved index GET method from `<src/server.js>` dedicated index controller within `<src/controllers>`.
- Added descriptive comments.

## [1.0.1] &mdash;; (2022/05/09)
### Updates
- Created `<src/config>` subdirectory to house app configurations.
- Created dedicated environment variable file.

### Changes
- Imported configurations into `<src/server.js>`.
- Used configured port for server.

## [1.0.0] &mdash; (2022/05/09)
### Updates
- Installed dependencies:
  - `<Express>` as our NodeJS framework.
  - `<sqlite3>` as our database solution.
  - `<ejs>` as our view engine.
  - `<express-ejs-layouts>` for view templating and app layout.
  - `<Bootstrap>` for CSS styling.
  - `<jquery>` and `<popperjs>` to work with Bootstrap.
  - `<animate.css>` for css animations.
  - `<feather-icons>` for iconography.
  - `<csvtojson>` for seeding our database with data from CSV file.
  - `<helmet>` middleware to auto setting HTTP headers.
  - `<cors>` as express middleware for resource sharing.
  - `<dotenv>` for environment variables.
  - `<nodemon>` to monitor our files for changes and autorelaunch the dev server.

### Changes
- Added dev server start script in `<package.json>`.
- Ignored environment variables file in `<.gitignore>`.
- Placed `<server.js>` file inside `<src>` subdirectory.
- Created test GET request for API inside `<src/server.js>`.

## [0.0.1] &mdash; (2022/05/08)
### Updates
- Added [CHANGELOG.md](https://github.com/ogre2/cisc3140_lab5/CHANGELOG.md).

### Changes
- Added project description and prerequisites to [README.md](https://github.com/ogre2/cisc3140_lab5/README.md).

[Unreleased]: https://github.com/ogre2/cisc3140_lab5/compare/v0.0.1...HEAD
[1.4.2]: https://github.com/ogre2/cisc3140_lab5/compare/v1.4.1...v1.4.2
[1.4.1]: https://github.com/ogre2/cisc3140_lab5/compare/v1.4.0...v1.4.1
[1.4.0]: https://github.com/ogre2/cisc3140_lab5/compare/v1.3.0...v1.4.0
[1.3.0]: https://github.com/ogre2/cisc3140_lab5/compare/v1.2.1...v1.3.0
[1.2.1]: https://github.com/ogre2/cisc3140_lab5/compare/v1.2.0...v1.2.1
[1.2.0]: https://github.com/ogre2/cisc3140_lab5/compare/v1.1.1...v1.2.0
[1.1.1]: https://github.com/ogre2/cisc3140_lab5/compare/v1.1.0...v1.1.1
[1.1.0]: https://github.com/ogre2/cisc3140_lab5/compare/v1.0.1...v1.1.0
[1.0.1]: https://github.com/ogre2/cisc3140_lab5/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/ogre2/cisc3140_lab5/compare/v0.0.1...v1.0.0
[0.0.1]: https://github.com/ogre2/cisc3140_lab5/releases/tag/v0.0.1