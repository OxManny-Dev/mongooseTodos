const {Schema, model} = require('mongoose');

/*
Terminology differences
* SQL                                     NoSQL
* Database                                Database
* Tables                                  Collections
* Columns                                 Fields
* Rows                                    Documents
* */
const userSchema = new Schema({
	firstName: {
		type: String,
		trim: true,
		required: 'First Name is required',
		// lowercase: true,
		// uppercase: true,
	},
	lastName: {
		type: String,
		trim: true,
		required: 'Last Name is required',
	},
	password: {
		type: String,
		trim: true,
		required: 'Password is required',
		//	our own custom validator
		//	password must at least be 6 in length
		//	1st element in the array for validate must be a function
		//	that returns a boolean, if it's true it means that data is valid,
		//	if it returns false, it means data is invalid
		//	the 2nd element in the array is a custom error message in case
		//	user gives us invalid data
		validate: [
			(password) => {
				return password.length >= 6;
			},
			'Password must be at least 6 characters long',
		],
	},
	age: {
		type: Number,
		default: 0,
	},
	isCool: {
		type: Boolean,
		default: false,
	},
	birthday: Date,
	hobbies: [
		{
			type: String,
		}
	],
	weapons: {
		primaryWeapon: {
			type: String,
			default: 'Ak-47',
		},
		secondaryWeapon: {
			type: String,
			default: 'Nunchucks',
		},
	},
}, {
	timestamps: true,
});

module.exports = model('User', userSchema);





