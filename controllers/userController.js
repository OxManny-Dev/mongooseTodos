const { User } = require('../models');

/*
* 6260c41c2775cd1c33535918 - Alex Holden
* 6260c449ddf060f6ebf7dc88 - Tri Nguyen
* 6260c4681387fea948b2783a - Levi Jones
* */

module.exports = {
	createUser: async (req, res) => {
		const {
			firstName,
			lastName,
			password,
			age,
			isCool,
			birthDay,
			primaryWeapon,
			secondaryWeapon,
		} = req.body;
		/* Async and await only works with promises*/
	//	 when you declare a function as async, it returns a promise by default
	// 	User.create({
	// 		firstName,
	// 		lastName,
	// 		password,
	// 		age,
	// 		isCool,
	// 		birthDay,
	// 		weapons: {
	// 			primaryWeapon,
	// 			secondaryWeapon,
	// 		}
	// 	}).then((newUser) => {
	// 		res.json(newUser);
	// 	}).catch(err => {
	// 		res.json(err);
	// 	});
	//	try catch
	//	JS will do its best to run every code in the try block
	//	the moment a line of code throws an error within the try block
	//	it will automatically exit out of the try block and go into the "catch" block
	//	with the error that happened as an argument
		try {
			const newUser = await User.create({
				firstName,
				lastName,
				password,
				age,
				isCool,
				birthDay,
				weapons: {
					primaryWeapon,
					secondaryWeapon,
				}
			});
			res.json(newUser);
		} catch (e) {
			res.json(e);
		}
	},
	getAllUsers: async (req, res) => {
		try {
			const users = await User.find();
			res.json(users);
		} catch (e) {
			res.json(e);
		}
	},
	updateUserById: async (req, res) => {
		const {
			firstName,
			lastName,
			password,
			age,
			isCool,
			birthDay,
			primaryWeapon,
			secondaryWeapon,
		} = req.body;
		try {
			const updatedUser = await User.findByIdAndUpdate(
				req.params.id,
				{
					firstName,
					lastName,
					password,
					age,
					isCool,
					birthDay,
					weapons: {
						primaryWeapon,
						secondaryWeapon,
					}
				},
				{
					new: true,
				}
			);
			res.json(updatedUser);
		} catch (e) {
			res.json(e);
		}
	},
	deleteUserById: async (req, res) => {
		try {
			const deletedUser = await User.findByIdAndDelete(req.params.id);
			res.json(deletedUser);
		} catch (e) {
			res.json(e);
		}
	},
	addFriend: async (req, res) => {
		const { userId } = req.params;
		try {
			const updatedUser = await User.findByIdAndUpdate(
				userId,
				{
					$addToSet: {
						friendIds: '6260c41c2775cd1c33535918',
					}
				},
				{
					new: true,
				}
			).populate('friendIds');

			res.json(updatedUser);
		} catch (e) {
			res.json(e);
		}
	},
	deleteFriend: async (req, res) => {
		const { userId } = req.params;
		try {
			const updatedUser = await User.findByIdAndUpdate(
				userId,
				{
					$pull: {
						friendIds: '6260c41c2775cd1c33535918',
					}
				},
				{
					new: true,
				}
			).populate('friendIds');
			res.json(updatedUser);
		} catch (e) {
			res.json(e);
		}
	}
};
