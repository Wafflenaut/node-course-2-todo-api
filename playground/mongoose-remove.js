const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
/*
Todo.remove({}).then((result) => {
	console.log(result);
});*/

Todo.findOneAndRemove(_id: "59d992fbdcdaf18d8a743297").then((result) => {
	return result;
});
/*
Todo.findByIdAndRemove('59d992fbdcdaf18d8a743297').then((todo) => {
	return todo;
});*/



