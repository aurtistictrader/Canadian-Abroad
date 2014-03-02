var express = require("express"), http = require('http');
var logfmt = require("logfmt");
var request = require("request");
//var index = require("./index.html");
//var csv = require("fast-csv");
var app = express();

var server = http.createServer(app);

app.use(logfmt.requestLogger());
app.set('web', __dirname + '/web');
app.engine('html', require('ejs').renderFile);

app.use( express.static(__dirname + "/web"));
app.get('/', function (req, res)
{
    res.render('index.html');
});
app.listen(process.env.PORT || 3000);
/*
app.listen(8080, function() { 
    console.log('listening')
});*/
/*
app.get('/datat', function(req, res) {
	var url = "http://data.international.gc.ca/travel-voyage/embassies-consulates-list.json";

	request({
	    url: url,
	    json: true
	}, function (error, response, body) {

	    if (!error && response.statusCode === 200) {
	        //console.log(body) // Print the json response
	    	res.send(body);
	    }
	})
});*/
/*
	var port = Number(process.env.PORT || 5000);
	app.listen(port, function() {
	  console.log("Listening on " + port);
	});*/

//go to PaaS -> Heroku -> Applications

//Try this (Later):
// Git -> remote -> fetch (if you need to get prev)
  //This leads to Git -> Merge 
    // Git -> remote -> Commit
      // Git -> remote -> push

//Try Now:
// Git -> Commit
  // Git -> remote -> push

