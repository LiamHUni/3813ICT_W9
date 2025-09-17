const {MongoClient} = require('mongodb');
const { add } = require('./add');
const { read } = require('./read');
const { update } = require('./update');
const { remove } = require('./remove');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const dbName = 'mydb';

async function main(){
    await client.connect();
    console.log('Connected');
    const db = client.db(dbName);
    const collection = db.collection('products');

    await add(collection);
    console.log(await read(collection));
    await update(collection);
    await remove(collection);

    return 'done.';
}

main()
.then(console.log('Main...'))
.catch(console.error)
.finally(()=>client.close());