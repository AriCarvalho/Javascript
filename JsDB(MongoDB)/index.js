var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

const serverUrl = "mongodb://192.168.5.13:27017/mydb";

MongoDBConnect();
//MongoDBCreate();
//MongoDBRead();
//MongoDBUpdate();
//MongoDBDelete();

function MongoDBConnect() {
  MongoClient.connect(serverUrl, function (err, db) {
    if (err)  {
      console.log(err);
    }
    else{
      console.log("MongoDB:Connected");
    } 
    db.close();
  });

  console.log("ok");
}

function MongoDBCreate() {
  MongoClient.connect(serverUrl, function (err, db) {
    var document = { name: "Nome",
                     title: "Titulo",
                     year:2010,
                     money:10.20 };
    db.collection("mycollect")
      .insertOne(document, { w: 1 }, function (err, records) {
         console.log("MongoDB:Inserted");
         console.log(records);
      db.close();
    });
  })
};

function MongoDBRead() {
  MongoClient.connect(serverUrl, function (err, db) {
    db.collection("mycollect")
      .find({})
      .toArray(function (err, docs) {
      console.log("MongoDB:Found");
      console.log(docs);
      db.close();
    });
  })
};

function MongoDBUpdate() {
  MongoClient.connect(serverUrl, function (err, db) {
    db.collection("mycollect")
      .updateOne({_id:new ObjectID("5ab7f1af79f21b1f8cf0d4fa")}
      , { $set: { title : "Novo title" } }, function(err, result) {
        console.log("MongoDB:Updated");
        console.log(result);
        db.close();
    });  
  })
};

function MongoDBDelete() {
  MongoClient.connect(serverUrl, function (err, db) {
    db.collection("mycollect")
      .deleteOne({ _id:new ObjectID("5ab7f15342cbf72ff01b847d")},function(err, result) {
         console.log("MongoDB:Deleted")
         console.log(result);
         db.close();
    });
  })
};
