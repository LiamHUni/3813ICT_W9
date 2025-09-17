exports.read = async function(collection){
    return await collection.find({})
    .toArray();
    
    // .toArray(function(err, docs){
    //     console.log("Products:")
    //     console.log(docs);
    // });
}