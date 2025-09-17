exports.update = async function(collection, req, res){
    const {product} = req.body
    await collection.updateOne({_id:product._id}, {$set:product});
}