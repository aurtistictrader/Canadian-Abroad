var express = require("express");
var logfmt = require("logfmt");
var request = require("request");
//var csv = require("fast-csv");
var app = express();

app.use(logfmt.requestLogger());

app.get('/', function(req, res) {

	var url = "http://data.international.gc.ca/travel-voyage/embassies-consulates-list.json";

	request({
	    url: url,
	    json: true
	}, function (error, response, body) {

	    if (!error && response.statusCode === 200) {
	        //console.log(body) // Print the json response
	    	res.send(body);
	    	res.send("wokrs?");
	    }
	})
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

