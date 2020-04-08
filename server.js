const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();

const PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var databaseToUse = ""

if (process.env.NODE_ENV === "production") {
	app.use(express.static('client/build'));
	databaseToUse = "mongodb://gabe:a123456@ds133601.mlab.com:33601/heroku_nf0ztkqg";
}
else {
	databaseToUse = 'mongodb://localhost/reactBoilerplate';
	console.log("DEVELOPMENT")
}


app.use(routes);

const MONGODB_URI = process.env.MONGODB_URI || databaseToUse


mongoose.Promise = global.Promise;

mongoose.connect(MONGODB_URI,{ useNewUrlParser: true });

app.listen(PORT, function() {
	console.log(`App running on port ${PORT}`);
});
