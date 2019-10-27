var path = require('path');

module.exports = function (app){

//   * A GET Route to `/survey` which should display the survey page.
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "./survey.html"));
  });

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./index.html"));
  });

};