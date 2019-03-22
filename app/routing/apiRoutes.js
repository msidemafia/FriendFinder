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
    let diffArray = [];

    for (i = 0; i < friends.length; i++) {
      let difference = 0;
      let currentFriend = friends[i];

      for (n = 0; n < userScores.length; n++) {
        let value = userScores[n] - currentFriend.scores[n]
        value = Math.abs(value);
        difference += value;
      }
      diffArray.push(difference);
    }
console.log(diffArray);
    let match = diffArray.indexOf(Math.min(...diffArray));

    finalMatch = friends[match];
    res.send(finalMatch);
  });
};
