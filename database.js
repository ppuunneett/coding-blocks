const mongo =require('mongodb').MongoClient;
const url='mongodb://localhost:27017';

const dbName = 'shopping';
let shopping;
function Connection(){
    mongo.connect(url,function (err,client) {
         shopping =client.db(dbName);

    })
}

function Insertdocs(cb){
    const collection = shopping.collection('documents')
    collection.insertMany([
        {a : 1}, {a : 2}, {a : 3}
    ], function(err, result){
        findDocs(function (data) {
            cb(data)
        })
    })
}

function findDocs(cb){
    const collection = shopping.collection('documents');
    collection.find({}).toArray(function (err,result) {
        cb(result);
    })
}

function delDocs(cb){
    const collection = shopping.collection('documents');
    collection.deleteMany([{ a : 1 },{ a : 2 },{ a : 3 }], function(err, result){
        console.log("Removed the document with the field a equal to 3");
        callback(result);})
}

module.exports ={
    Connection,
    Insertdocs
};