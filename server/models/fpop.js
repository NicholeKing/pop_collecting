const mongoose = require('mongoose');
const PopSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Name is required"]
	},
	series: {
		type: String,
		required: [true, "Series is required"]
	},
	num: {
		type: Number,
		required: [true, "Number is required"]
	},
	chase: {
		type: String
	},
	img: {
		type: String,
		required: [true, "Picture is required"]
	}
}, {timestamps: true});

mongoose.model("Fpop", PopSchema);