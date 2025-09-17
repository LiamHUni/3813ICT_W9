exports.update = async function(collection, req, res){
    const {productID, product} = req.body
    await collection.updateOne({_id:productID}, {$set:product});
}