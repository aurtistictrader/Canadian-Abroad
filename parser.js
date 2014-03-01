
$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "../EZAPP/CSV/wildlife.csv",
        dataType: "text/csv",
        success: function(data) {processData(data);}
     });
});

function processData(allText) {
    var record_num = 5;  // or however many elements there are in each row
    var allTextLines = allText.split(/\r\n|\n/);
    var entries = allTextLines[0].split(',');
    var lines = [];

    var headings = entries.splice(0,record_num);
    while (entries.length>0) {
        var tarr = [];
        for (var j=0; j<record_num; j++) {
            tarr.push(headings[j]+":"+entries.shift());
        }
        lines.push(tarr);
    }
	alert(lines);
}