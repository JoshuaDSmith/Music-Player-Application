var sampleRecipes = require("../sampleRecipes")
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = "FoodDB";

console.log(sampleRecipes.name)

// uncomment out lines 15 - 20 to re post to the database

//const insertDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('documents');
  // Insert some documents
  collection.insertOne(sampleRecipes)
    console.log("Food is now in the database");
   
 // }

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server
client.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  insertDocuments(db, function() {
  client.close();
});
})