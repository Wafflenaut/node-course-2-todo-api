const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var userId = '59c1c8088390b3d416ad4227';

if(!ObjectID.isValid(userId)){
	console.log('User ID Not Valid');
}

User.findById(userId).then((user) => {
	if(!user){
		return console.log('User Not Found');
	}
	console.log('User', user)
}, (e) => {
	console.log(e);
});

//added 11 to end
/*
var id = '59c846d123a96fc431a3064f11';

if(!ObjectID.isValid(id)) {
	console.log('ID not valid');
}*/
/*
Todo.find({
	_id: id
}).then((todos) => {
	console.log('Todos', todos);
});

Todo.findOne({
	_id: id
}).then((todo) => {
	console.log('Todo', todo);
});
*/
/*
Todo.findById(id).then((todo) => {
	if(!todo){
		return console.log('Id not found');
	}
	console.log('Todo By Id', todo);
}).catch((e) => console.log(e));
*/