var path = require("path")

module.exports = function(results) {

results.get('/', function(req, res){
    res.sendFile(path.join(__dirname + "/../public/", "home.html"));
});
results.get('/survey', function(req, res){
    res.sendFile(path.join(__dirname + "/../public/", "survey.html"))
});

}