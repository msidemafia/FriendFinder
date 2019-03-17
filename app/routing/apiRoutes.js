let friends = require('./../data/friends');

module.exports = function (app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function (req, res) {
    res.json(friendsData);
  });
  app.post("/api/friends", function (req, res) {

    let user = req.body;
    let userScores = user.scores
    res.json(finalMatch);
  });



};

let diffArray = [];

for (i = 0; i < friends.length; i++) {
  let difference = 0;

  for (n = 0; n < userScores.length; n++) {
    let value = userScores[n] - friends[i].scores[n]
    value = Math.abs(value);
    difference += value;
  }
  diffArray.push(difference);
}

let match = friends.indexOf(Math.min(diffArray));

finalMatch = friends.match;


