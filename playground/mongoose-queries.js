const {ObjectId} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

let id = "5bcc97fa4f4f1024bc2fcd0411";

if (!ObjectId.isValid(id)){
    console.log('Id not valid')
}
//
// Todo.find({
//     _id: id
// }).then((todos) => {
//     if (!todos){
//         return console.log('not found')
//     }
//     console.log(todos)
// });
//
//
// Todo.findOne({
//     _id: id
// }).then(todo => {
//     if (!todo){
//         return console.log('not found')
//     }
//     console.log(todo)
// });

Todo.findById(id).then(todo => {
    if (!todo){
        return console.log('not found')
    }
    console.log(todo)
}).catch(e=>{
    console.log(e.message)
});
