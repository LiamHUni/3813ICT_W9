exports.add = async function(collection){
    products = [
        {
            id:0,
            name:'shirt',
            description: 'basic white shirt',
            price: 8.99,
            units: 5
        },
        {
            id:1,
            name:'pants',
            description: 'long blue cotton pants',
            price: 9.50,
            units: 2
        },
        {
            id:2,
            name:'jacket',
            description: 'thick winter jacket',
            price: 16.24,
            units: 8
        }
    ];

    await collection.insertMany(products);


    // await collection.insertMany(products, function(err, result){
    //     console.log("Added");
    //     console.log(result);
    // });
}