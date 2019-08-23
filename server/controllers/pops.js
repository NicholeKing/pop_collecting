const Fpop = require('mongoose').model("Fpop");
const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);

class PopController {
	getAll(req, res) {
		Fpop.find({}).sort({name: 1})
		    .then(pops => res.json(pops))
		    .catch(err => res.json(err));
	}
	getOne(req, res) {
		Fpop.findOne({_id: req.params._id})
			.then(fpop => res.json(fpop))
			.catch(err => res.json(err));
	}
	create(req, res) {
		let fpop = new Fpop(req.body);
		fpop.save()
			.then(() => res.json(fpop))
			.catch(err => res.json(err));
	}
	delete(req, res) {
		Fpop.findOneAndDelete({_id: req.params._id})
			.then(() => res.json({status: "OK"}))
			.catch(err => res.json(err));
	}
	update(req, res) {
		Fpop.findOneAndUpdate({_id: req.params._id}, req.body, {runValidators: true})
			.then(() => res.json({status: "OK"}))
			.catch(err => res.json(err));
	}
}

module.exports = new PopController();