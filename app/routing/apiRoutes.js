// The apiRoutes.js file includes two basic routes for app.get function and app.post function which used for displaying a 
//JSON data and incoming survey results of all possible friends:
// The app.post(in the apiRoutes.js) used to handle the compatibility logic.

var friendList = require("../data/friends.js");

// Routing the apiRoutes with the app.get and app.post functions

module.exports = function(app){

  app.get("/api/friends", function(req, res) {
    res.json(newFriend);
  });
    // The app.post request handles when a user submits a form and thus submits data to the surver

  app.post("/api/friends", function(req, res) {
    //grabs the new friend's scores to compare with friends in friendList array
    var newFriendScores = req.body.scores;
    var scoresArray = [];
    var friendCount = 0;
    var bestMatch = 0;

    //runs through all current friends in list
    for(var i=0; i<friendList.length; i++){
      var scoresDiff = 0;
      //run through scores to compare friends
      for(var j=0; j<newFriendScores.length; j++){
        scoresDiff += (Math.abs(parseInt(friendList[i].scores[j]) - parseInt(newFriendScores[j])));
      }

      //push results into scoresArray
      scoresArray.push(scoresDiff);
    }

    //after all friends are compared, find best match
    for(var i=0; i<scoresArray.length; i++){
      if(scoresArray[i] <= scoresArray[bestMatch]){
        bestMatch = i;
      }
    }

    //return bestMatch data
    var bff = friendList[bestMatch];
    res.json(bff);

    //pushes new submission into the friendsList array
    friendList.push(req.body);
  });
};