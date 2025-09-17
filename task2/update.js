exports.update = async function(collection){
    await collection.updateOne({id:1}, {$set:{price:4.99}});

    
    // await collection.updateOne({id:1}, {$set:{price:4.99}}, function(err,result){
    //     console.log("Updated");
    //     console.log(result);
    // });
}