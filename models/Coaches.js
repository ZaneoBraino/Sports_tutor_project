const mongoose = require("mongoose");
const Schema = mongoose.Schema; // Create Schema
const CoachesSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	date: {
		type: Date,
		default: Date.now,
	},
	img: {
		type: String,
		required: false,
	},
	location: {
		type: String,
		required: false,
	},
	sports: {
		type: String,
		required: false,
	},
	instagram: {
		type: String,
		required: false,
	},
	twitter: {
		type: String,
		required: false,
	},
});
module.exports = User = mongoose.model("coaches", CoachesSchema);
