const router = require('express').Router();
const apiRoutes = require('./apiRoutes');
// any request that goes to /api
// will be using the "apiRoutes" index.js file
// will prepend "/api" to every route declared in apiRoutes
router.use('/api', apiRoutes);

module.exports = router;


