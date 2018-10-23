const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true});

module.exports = {mongoose};


// mongoose.connect('mongodb://rezamajidizavie:eldreza6620548@ds137643.mlab.com:37643/todo-api', {useNewUrlParser: true});
// mongoose.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true});
