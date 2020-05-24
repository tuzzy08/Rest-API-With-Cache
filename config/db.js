const mongoose = require('mongoose');
const chalk = require('chalk');

const connected = chalk.bold.cyan;
const error = chalk.bold.yellow;
const disconnected = chalk.bold.red;

// MongoDb atlas connection
const dbConnectionUrl = process.env.ATLAS_URL;

// Set up connection to mlab
// const mLabConnectionUrl = `mongodb://${process.env.MLAB_USR}:${process.env.MLAB_PASS}@ds241968.mlab.com:41968/${process.env.MLAB_DB}`;

const options = {
	useUnifiedTopology: true,
	useNewUrlParser: true,
	connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
	socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
};

const connect = (next) => {
	try {
		mongoose.connect(dbConnectionUrl, options);
		mongoose.Promise = global.Promise;

		mongoose.connection.on('connected', () => {
			console.log(connected('Mongoose default connection is succesfull '));
		});

		mongoose.connection.on('error', (err) => {
			console.log(error(`Mongoose default connection error ${err}`));
		});

		mongoose.connection.on('disconnected', () => {
			console.log(disconnected('Mongoose default connection is disconnected'));
		});
	} catch (err) {
		next(err);
	}
};

connect();