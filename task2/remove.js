exports.remove = async function(collection){
    await collection.deleteOne({id:2});


    // await collection.updateOne({id:2}, function(err,result){
    //     console.log("Removed");
    //     console.log(result);
    // });
}