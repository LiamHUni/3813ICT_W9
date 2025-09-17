exports.remove = async function(collection, req, res){
    const {productID} = req.body
    await collection.deleteOne({_id:productID});
}