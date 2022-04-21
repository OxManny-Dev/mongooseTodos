const router = require('express').Router();
const {
	createTodo,
	getTodos,
} = require('../../../controllers/todoController');

// Every route we declare here has /api/todos
// prepended
// router.post('/', createTodo);

router.route('/')
	.post(createTodo)
	.get(getTodos);


module.exports = router;
