/*
*   Server setup
*/
const express = require('express');
const app = express();
const http = require('http').Server(app);

const cors = require('cors');
app.use(cors());

app.use(express.json());

let server = http.listen(3000, function() {
    let host = server.address().address;
    let port = server.address().port;
    console.log(host, port);
});



/*
*   Mongodb setup/connection
*/
const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

//Server functions
const { read } = require('./serverFunctions/read');
const { add } = require('./serverFunctions/add');
const { remove } = require('./serverFunctions/remove');
const { update } = require('./serverFunctions/update');


const dbName = 'task3';
let collection;

async function connectMongo(){
    await client.connect();
    console.log('Connected');
    const db = client.db(dbName);
    collection = db.collection('products');
}

//Server Routes
app.get('/read', async function(req,res){
    await connectMongo();
    await read(collection, req, res);
    client.close();
});

app.post('/add', async function(req,res){
    await connectMongo();
    await add(collection, req, res);
    client.close();
});

app.post('/update', async function(req,res){
    await connectMongo();
    await update(collection, req, res);
    client.close();
});

app.post('/remove', async function(req,res){
    await connectMongo();
    console.log("removing");
    await remove(collection, req, res);
    client.close();
});