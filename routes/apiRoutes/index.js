const router = require('express').Router();
const userRoutes = require('./userRoutes');
const todoRoutes = require('./todoRoutes');
// every route in here has "/api" prepended to it
// the line below will prepend "/api/users" to every route declared in userRoutes index.js
router.use('/users', userRoutes);
// line below prepends /api/todos to every route
router.use('/todos', todoRoutes);

module.exports = router;


