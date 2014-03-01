var map;

AmCharts.ready(function() {
    map = new AmCharts.AmMap();
    map.pathToImages = "ammap/images/";
    //map.panEventsEnabled = true; // this line enables pinch-zooming and dragging on touch devices
    map.balloon.color = "#000000";
    map.panEventsEnabled = true;
    var canadaDataProvider = {
        mapVar: AmCharts.maps.canadaLow,
        getAreasFromMap: true
    };

    map.dataProvider = canadaDataProvider;

    map.areasSettings = {
        autoZoom: true,
        selectedColor: "#CC0000"
    };

    map.smallMap = new AmCharts.SmallMap();
    
    map.addListener("clickMapObject", function (event) {
        switch (event.mapObject.id) {
            case "CA-AB":
                
                break;
            case "CA-BC":
    
                break;
            case "CA-MB":
                
                break;
            case "CA-NB":
                
                break;
            case "CA-NL":
                
                break;
            case "CA-NS":
                
                break;
            case "CA-NT":
                
                break;
            case "CA-NU":
                
                break;
            case "CA-ON":
                
                break;
            case "CA-PE":
                
                break;
            case "CA-QC":
                
                break;
            case "CA-SK":
                
                break;
            case "CA-YT":
                
                break;
        }
    });

    map.write("mapdiv");

});

function loadNewMap (url, mapName) {
    if (AmCharts.maps[mapName] != undefined) {
        // the map was already loaded
        setNewMap(mapName);
    }
    else {
        // let's load the map
        jQuery.getScript(url, function () {
            setNewMap(mapName);
        });
    }
}

function setNewMap (mapName) {
    var dataProvider = {
        mapVar: AmCharts.maps[mapName],
        getAreasFromMap: true
    };
    map.dataProvider = dataProvider;
    map.validateData();
}
