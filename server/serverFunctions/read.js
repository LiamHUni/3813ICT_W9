exports.read = async function(collection, req, res){
    const items = await collection.find({}).toArray();
    console.log(items);
    res.json(items);
}