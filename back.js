var express = require("express");
var logfmt = require("logfmt");
var csv = require("fast-csv");
var app = express();

app.use(logfmt.requestLogger());

app.get('/', function(req, res) {
	var stream = fs.createReadStream("../EZApp/CSV/wildlife.csv");

	csv(stream, {
				headers : ["Common name", "Scientific name", "Population","Taxon","Range", "COSEWIC status", "Schedule", "SARA status"], 
							ignoreEmpty: true})
				 .on("data", function(data){
				     console.log(data):
				 })
				 .on("end", function(){
				     console.log("done");
				 })
	 			.parse();
	 
});

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});

//go to PaaS -> Heroku -> Applications

//Try this (Later):
// Git -> remote -> fetch (if you need to get prev)
  //This leads to Git -> Merge 
    // Git -> remote -> Commit
      // Git -> remote -> push

//Try Now:
// Git -> Commit
  // Git -> remote -> push

