const {MongoClient,ObjectID}  = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to mongodb server')
    }
    console.log('connected to mongodb server');
    const db = client.db('TodoApp');

    db.collection('Todos').insertOne({
        text: 'hello',
        no: 'yes'
    }, (err, result) => {
        if (err) {
            return console.log('unable to insert', err)
        }
        console.log(JSON.stringify(result.ops))
    });


    db.collection('Users').insertOne({name:'Reza',age:23},(err,result)=>{
        if (err) {
            return console.log(err)
        }
        console.log(result.ops)
    });

    client.close();
});