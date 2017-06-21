"use strict";

let express = require('express');
let app = express();
let mongoUtil = require('./mongoUtil');

mongoUtil.connect();
app.use( express.static(__dirname + "/../client"));

app.get("/accounts", (request, response) => {
  let accounts = mongoUtil.accounts();
  accounts.find().toArray((err,docs) => {
    if(err) {
      console.log("Error invoking Mongo database");
      console.log(JSON.stringify(docs));
    }else{
      let accountNames = docs.map((Account) => Account.accountName);
      //response.json(accountNames);
      response.json(docs);
    }
  });
  //response.json(["CapitalOne M/C","CapitalOne QuickSilver","City-Bank","First Savings Bank","Wayfair"]);
});
app.listen(8181, () => console.log("Listening on 8181"));
