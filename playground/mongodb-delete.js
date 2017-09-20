//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err){
		return console.log('Unable to connect to the database server');
	}
	console.log('Connected to MongoDB server');

	//deletemany
	//db.collection('Todos').deleteMany({text: 'Feed Pancake'}).then((result) => {
	//	console.log(result);
	//});
	
	//deleteOne
	//db.collection('Todos').deleteOne({text: 'Feed Pancake'}).then((result) => {
	//	console.log(result);
	//})
	
	//db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
	//	console.log(result);
	//})
	
	//delete duplicate users
	db.collection('Users').deleteMany({name: 'John Moyer'}).then((result) => {
		console.log(result);
	});
	
	db.collection('Users').findOneAndDelete({_id: new ObjectID("59bf3381fe33d11b60eca7d4")}).then((result) => {
		console.log(result);
	});
	
	
	
	//delete another document by id
	
	//
	
	//db.close();

});