const Professor = require('../models/Professor.js');

const professorController = {
	index: (req, res) => {
		Professor.find()
			.then((professors) => {   // Find all of the professors from the database
				console.log(professors);
				res.json(professors);
			})
			.catch((err) => {
				console.log(err); // If there is any error, tell the client something went wrong on the server
			});
	},
	create: async (req, res) => {
		try {
			const newProfessor = req.body;
			const savedProfessor = await Professor.create(newProfessor); // create a new professor, let Mongoose give the default values
			res.json(savedProfessor);
		} catch (err) {
			console.log(err);
			res.status(500).json(err); // If there is any error, tell the client something went wrong on the server
		}
	},
	show: async (req, res) => {
		try {
			const professorId = req.params.professorId;
			const professor = await Professor.findById(professorId);  // Show the information requested
			res.json(professor);
		} catch (err) {
			console.log(err);
			res.json(err); // If there is any error, tell the client something went wrong on the server
		}
	},
	update: async (req, res) => {
		try {
			const professorId = req.params.professorId;
			const updatedProfessor = req.body;
			const savedProfessor = await Professor.findByIdAndUpdate(professorId, updatedProfessor);
			res.json(savedProfessor);  // Send the updated information back to the client
		} catch (err) {
			console.log(err);
			res.status(500).json(err); // If there is any error, tell the client something went wrong on the server
		}
	},
	delete: async (req, res) => {
		try {
			const professorId = req.params.professorId;
			await Professor.findByIdAndRemove(professorId);  // Delete the information from the database
			res.json({
				msg: `Successfully Deleted ${professorId}`
			});
		} catch (err) {
			console.log(err);
			res.status(500).json(err); // If there is any error, tell the client something went wrong on the server
		}
	}
};

module.exports = professorController;