const { Schema, model } = require('mongoose');

//
const todoSchema = new Schema({
	task: {
		type: String,
		required: true,
	},
	completed: {
		type: Boolean,
		default: false,
	},
	userId: {
		type: Schema.Types.ObjectId,
		ref: 'User',
	}
}, {
	timestamps: true,
});

module.exports = model('Todo', todoSchema);
