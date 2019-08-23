const express = require('express'),
		 port = 8000,
		   bp = require('body-parser'),
		  app = express(),
		   db = "pops_db";

app.use(express.static(__dirname + '/client/dist/client'));
app.use(bp.json());

require('./server/config/mongoose')(db);
require('./server/config/routes')(app);

app.all('*', (req, res, next) => {
	res.sendFile(__dirname + "/client/dist/client/index.html");
});

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});