const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();

const PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

if (process.env.NODE_ENV === "production") {
	app.use(express.static('client/build'));
}

app.use(routes);

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://gabe:a123456@ds133601.mlab.com:33601/heroku_nf0ztkqg" 


mongoose.Promise = global.Promise;

mongoose.connect(MONGODB_URI,{ useNewUrlParser: true });

app.listen(PORT, function() {
	console.log(`App running on port ${PORT}`);
});
