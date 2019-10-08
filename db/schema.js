const mongoose = require('../db/connection.js');
const Schema = mongoose.Schema;


const ProfessorSchema = new Schema({
	name: String,
	course: String,
	image: String,
	school: String,
	description: String
});

const UserSchema = new Schema({
	userName: String,
	password: String
});

module.exports = {
	ProfessorSchema: ProfessorSchema,
	UserSchema: UserSchema,

};
