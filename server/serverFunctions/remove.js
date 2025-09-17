const {ObjectId} = require('mongodb');

exports.remove = async function(collection, req, res){
    const {productID} = req.body

    const id = new ObjectId(productID);
    console.log(id);
    await collection.deleteOne({_id:id});
    res.json({mess:"deleted"});
}