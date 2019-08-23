const Pops = require('../controllers/pops');

module.exports = app => {
	app.get("/pops", Pops.getAll);
	app.post("/pops", Pops.create);
	app.get("/pops/:_id", Pops.getOne);
	app.delete("/pops/:_id", Pops.delete);
	app.put("/pops/:_id", Pops.update);
}