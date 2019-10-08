const Professor = require('../models/Professor.js');

const professorController = {
	index: (req, res) => {
		Professor.find()
			.then((professors) => {
				console.log(professors);
				res.json(professors);
			})
			.catch((err) => {
				console.log(err);
			});
	},
	create: async (req, res) => {
		try {
			const newProfessor = req.body;
			const savedProfessor = await Professor.create(newProfessor);
			res.json(savedProfessor);
		} catch (err) {
			console.log(err);
			res.status(500).json(err);
		}
	},
	show: async (req, res) => {
		try {
			const professorId = req.params.professorId;
			const professor = await Professor.findById(professorId);
			res.json(professor);
		} catch (err) {
			console.log(err);
			res.json(err);
		}
	},
	update: async (req, res) => {
		try {
			const professorId = req.params.professorId;
			const updatedProfessor = req.body;
			const savedProfessor = await Professor.findByIdAndUpdate(professorId, updatedProfessor);
			res.json(savedProfessor);
		} catch (err) {
			console.log(err);
			res.status(500).json(err);
		}
	},
	delete: async (req, res) => {
		try {
			const professorId = req.params.professorId;
			await Professor.findByIdAndRemove(professorId);
			res.json({
				msg: `Successfully Deleted ${professorId}`
			});
		} catch (err) {
			console.log(err);
			res.status(500).json(err);
		}
	}
};

module.exports = professorController;