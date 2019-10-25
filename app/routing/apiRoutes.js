// The apiRoutes.js file includes two basic routes for app.get function and app.post function which used for displaying a 
//JSON data and incoming survey results of all possible friends:
// The app.post(in the apiRoutes.js) used to handle the compatibility logic.

var friends = require("../data/friends.js");

// Routing the apiRoutes with the app.get and app.post functions

module.exports = function(app){

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });
    // The app.post request handles when a user submits a form and thus submits data to the surver

  app.post("/api/friends", function(req, res) {
 // loop through all of the possible options

        // To take the result of the user's survey POST and parse it

        // To take the results of the user's name and photo, other than the survey questions, to post and parse it

        // The variable used to calculate the difference b/n the user's socres and the scores of each user

        //loop through the friends data array of objects to get each friends scores

        //loop through that friends score and the users score and calculate the absolute difference between the two and push that to the total difference variable set above

        // We calculate the difference between the scores and sum them into the totalDifference

        // If the sum of differences is less then the differences of the current "best match"

        // Reset the bestMatch to be the new friend. 

        // The push method use to save user's data to the database

        //The res.json method will return a JSON data with the user's match which was looped through frieds data array. 


  });
};





