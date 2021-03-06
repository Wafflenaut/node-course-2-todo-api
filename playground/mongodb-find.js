//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err){
		return console.log('Unable to connect to the database server');
	}
	console.log('Connected to MongoDB server');
	/*
	db.collection('Todos').find().count().then((count) => {
		console.log('Todos count:' + count);
		//console.log(JSON.stringify(docs, undefined, 2));
	}, (err) => {
		console.log('Unable to fetch todos', err);
	});
	*/
	//db.collection('Users').find({name: "John Moyer"}).count().then((count) => {
	db.collection('Users').find({name: "John Moyer"}).toArray().then((users) => {
		console.log('Users');
		console.log(JSON.stringify(users, undefined, 2));
	}, (err) => {
		console.log('Unable to fetch Users', err);
	});
	
	//db.close();

});