const router = require('express').Router();
const userRoutes = require('./userRoutes');

// every route in here has "/api" prepended to it
// the line below will prepend "/api/users" to every route declared in userRoutes index.js
router.use('/users', userRoutes);

module.exports = router;


