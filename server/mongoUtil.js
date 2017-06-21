"use strict";

let mongo = require('mongodb');
let client = mongo.MongoClient();
let _db;
module.exports = {
  connect() {
    client.connect('mongodb://localhost:27017/homeAccount',(err,db) => {
      if(err)  {
        console.log("Error connecting to mongodb");
        process.exit(1);
      }
      _db = db;
      console.log("Connected to mongodb");
    });
  },
  accounts() {
    return _db.collection('Account');
  }
}
