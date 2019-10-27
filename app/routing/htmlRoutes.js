var path = require('path');

module.exports = function (app){

//   * A GET Route to `/survey` which should display the survey page.
  app.get("/survey", function(req, res) {
      console.log("A" + res);
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  app.get("/", function(req, res) {
      console.log("B" + res);
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
  // A default, catch-all route that leads to `home.html` which displays the home page.

};