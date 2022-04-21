const router = require('express').Router();
const {
	createUser,
	getAllUsers,
	updateUserById,
	deleteUserById,
	addFriend,
	deleteFriend,
} = require('../../../controllers/userController');
// every route declared in here has /api/users prepended to it already

// /api/users
// router.get('/', getAllUsers);
// router.post('/', createUser);
router.route('/')
	.get(getAllUsers)
	.post(createUser);
//
router.put('/addFriend/:userId', addFriend);
router.put('/deleteFriend/:userId', deleteFriend);
// router.delete('/:id')
// router.get('/:id')
router.route('/:id')
	.put(updateUserById)
	.delete(deleteUserById);

module.exports = router;



