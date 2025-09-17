exports.add = async function(collection, req, res){
    const {product} = req.body;
    console.log(product);
    const items = await collection.countDocuments({id:product.id});
    console.log(items);
    if(items>0){
        res.json({err:"Duplicate ID: Please use different ID"});
    }else{
        await collection.insertOne(product);
        res.json({mess:"Item added"});
    }
}