// 6260bda52f2c4f29ef3ce2ea
const {
	Todo
} = require('../models');

module.exports = {
	createTodo: async (req, res) => {
		const { task } = req.body;
		try {
			const createdTodo = await Todo.create({
				task,
				userId: '6260bda52f2c4f29ef3ce2ea',
			});
			res.json(createdTodo);
		} catch (e) {
			res.json(e);
		}
	},
	getTodos: async (req, res) => {
		try {
			// const todos = await Todo.find().where('userId').equals('6260bda52f2c4f29ef3ce2ea');
			const todos = await Todo.find({
				userId: '6260bda52f2c4f29ef3ce2ea',
			}).populate({
				path: 'userId',
				select: '-password -weapons',
			});
			res.json(todos);
		} catch (e) {
			res.json(e);
		}
	},
}
