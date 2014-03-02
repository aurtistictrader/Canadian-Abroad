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
});

//app.use( express.static(__dirname + "/"));
app.get('/', function (req, res)
{
    res.render("index");
});
app.listen(process.env.PORT || 3000);
