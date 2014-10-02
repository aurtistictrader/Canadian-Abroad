var express = require("express"), http = require('http');
var logfmt = require("logfmt");
var request = require("request");
var path = require("path");
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
    app.use("/EZApp/", express.static(__dirname));
    app.use("/EZApp/resources/ammap", express.static(__dirname+"/resources/ammap/ammap.css"));
    app.use("/EZApp/resources/ammap", express.static(__dirname+"/resources/ammap/ammap.js"));
    app.use(express.static(__dirname+"/app.css"));
    app.use("/EZApp/resources/select2", express.static(__dirname+"/resources/select2/select2.css"));
    app.use("/EZApp/resources/select2", express.static(__dirname+"/resources/select2/select2.js"));
    app.use(express.static(__dirname+"/index.js"));
    app.use(express.static(__dirname+"/JSON/embassies-consulates-list.json"));
    app.use(express.static(__dirname+"/JSON/index-alpha-eng.json"));
    app.use("/EZApp/resources/ammap/maps/js", express.static(__dirname+"/resources/ammap/maps/js/worldLow.js"));

});

app.get('/', function (req, res)
{
    res.render("index");
});
app.listen(process.env.PORT || 3000);
