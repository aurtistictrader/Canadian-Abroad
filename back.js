var express = require("express"), http = require('http');
var logfmt = require("logfmt");
var request = require("request");
var path = require("path");
//var index = require("./index.html");
//var csv = require("fast-csv");
var app = express();

var server = http.createServer(app);

app.use(logfmt.requestLogger());
app.set('view engine', 'hbs');
app.set('/views', path.join(__dirname, '/views'));

app.configure(function() {
    app.use(express.logger('dev'));  'default', 'short', 'tiny', 'dev' 
    app.use(express.bodyParser());
    app.use(express.cookieParser());
    app.use(express.static('static'));
    //var temp = "/Users/chengpeng123/Documents/EZApp";
    var temp = __dirname;
    app.use("/EZApp/", express.static(temp));
    app.use("/EZApp/ammap", express.static(temp+"/ammap/ammap.css"));
    app.use("/EZApp/ammap", express.static(temp+"/ammap/ammap.js"));
    app.use(express.static(temp+"/app.css"));
    app.use("/EZApp/select2-3.4.5", express.static(temp+"/select2-3.4.5/select2.css"));
    app.use("/EZApp/select2-3.4.5", express.static(temp+"/select2-3.4.5/select2.js"));
    app.use(express.static(temp+"/index.js"));
    app.use(express.static(temp+"/embassies-consulates-list.json"));
    app.use("/EZApp/ammap/maps/js", express.static(temp+"/ammap/maps/js/worldLow.js"));
    app.use("/EZApp/ammap/images", express.static(temp+"/EZApp/ammap/images/plus.gif"));

    app.use("/EZApp/ammap/images", express.static(temp+"/EZApp/ammap/images/minus.gif"));
    app.use("/EZApp/ammap/images", express.static(temp+"/EZApp/ammap/images/panLeft.gif"));
    app.use("/EZApp/ammap/images", express.static(temp+"/EZApp/ammap/images/panRight.gif"));
    app.use("/EZApp/ammap/images", express.static(temp+"/EZApp/ammap/images/panUp.gif"));
    app.use("/EZApp/ammap/images", express.static(temp+"/EZApp/ammap/images/panDown.gif"));
    app.use("/EZApp/ammap/images", express.static(temp+"/EZApp/ammap/images/homeIcon.gif"));
    app.use("/EZApp/ammap/images", express.static(temp+"/EZApp/ammap/images/arrowDown.gif"));
    app.use("/EZApp/ammap/images", express.static(temp+"/EZApp/ammap/images/arrowUp.gif"));
});

/*
    var temp = "/Users/chengpeng123/Documents/EZApp";
    app.use(express.static(temp+"/ammap/ammap.css"));
    app.use(express.static(temp+"/ammap/ammap.js"));
    app.use(express.static(temp+"/app.css"));
    app.use(express.static(temp+"/select2-3.4.5/select2.css"));
    app.use(express.static(temp+"/select2-3.4.5/select2.js"));
    app.use(express.static(temp+"/index.js"));
    app.use(express.static(temp+"/ammap/maps/js/worldLow.js"));*/
//app.set('', __dirname + '/');
//app.engine('html', require('ejs').renderFile);

//app.use( express.static(__dirname + "/"));
app.get('/', function (req, res)
{
    res.render("index");
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

