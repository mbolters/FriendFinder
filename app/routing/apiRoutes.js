var express = require('express');
var path = require('path');

var friends = require("../data/friends");
//   * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
module.exports = funtion(app){
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(tableData);
  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a survey... this data is then sent to the server...
  // Then the server saves the data to the friends array)
  // ---------------------------------------------------------------------------

  // * A POST routes `/api/friends`. This will be used to handle incoming survey results. 
  // This route will also be used to handle the compatibility logic.

  app.post("/api/friends", function(req, res) {
    if (friends.length < 5) {
      friends.push(req.body);
      res.json(true);
    }
    else {
    res.json(false);
    }
  });
};






