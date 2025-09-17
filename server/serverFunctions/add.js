exports.add = async function(collection, req, res){
    const {product} = req.body;
    const items = await collection.find({id:product.id})
    if(items.length>0){
        res.json({err:"duiplicate id"});
    }else{
        await collection.insertOne(itemInfo);
        res.json({mess:"Item added"});
    }
}