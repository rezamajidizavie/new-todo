const {ObjectId} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

let id = "5bcc97fa4f4f1024bc2fcd0411";

Todo.findByIdAndRemove("5bccc8567398b727fc144803")
    .then(todo => {
        console.log(todo)
    });