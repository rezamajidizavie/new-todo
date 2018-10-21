let express = require('express');
let bodyParser = require('body-parser');
let {ObjectId} = require('mongodb');

let {mongoose} = require('./db/mongoose');
let {Todo} = require('./models/todo');
let {User} = require('./models/user');

let app = express();
let server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
let server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';


app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    let todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc)
    }).catch(err => {
        res.status(400).send(err.errors.text.message)
    })
});


app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos})
    }).catch((err) => {
        res.status(400).send(err.errors.text.message)
    })
});


app.get('/todos/:id', (req, res) => {
    let id = req.params.id;
    if (!ObjectId.isValid(id)) {
        return res.status(404).send()
    }
    Todo.findById(id).then((todo) => {
        res.send({todo})
    }).catch(e => {
        res.send(e)
    })
});


app.listen(server_port,server_ip_address, () => {
    console.log(`Server is up on port ${port}`)
});