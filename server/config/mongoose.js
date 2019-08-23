const mongoose = require('mongoose');

module.exports = db => {
	mongoose.connect(`mongodb://localhost/${db}`, 
		{useNewUrlParser: true});
	require('../models/fpop');
}