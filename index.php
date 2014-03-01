<html>
    <head>
    	<script>
			<?php header('Access-Control-Allow-Origin: *'); ?>
			</script>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        <title>EZ APP</title>

        <link rel="stylesheet" href="../EZApp/ammap/ammap.css" type="text/css">
        <link rel="stylesheet" href="../EZApp/app.css" type="text/css">
        <link rel="stylesheet" href="../EZApp/select2-3.4.5/select2.css" type="text/css">
        <script>
		</script>
		<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>
        <script src="../EZApp/select2-3.4.5/select2.js"></script>
        <script src="../EZApp/ammap/ammap.js" type="text/javascript"></script>
        <!-- check ammap/maps/js/ folder to see all available countries -->
        <!-- map file should be included after ammap.js -->

        
		<script src="../EZApp/ammap/maps/js/worldLow.js" type="text/javascript"></script>
		<script src="../EZApp/index.js" type="text/javascript"></script>
		<script src="../EZApp/infocards.js" type="text/javascript"></script>
		<script>

		(function( $ ) {
				$(document).ready(function() {
					$.ajax({
			            url: 'http://data.international.gc.ca/travel-voyage/embassies-consulates-list.json',
			            dataType: 'jsonp',
			            headers: { 
			                'Accept'    : 'application/jsonp', 
			                'X-Request' :'JSONP'
			            },
			            crossDomain: true,
			            type: 'GET',
			            success: function(json) {                        
			                $('#long').append(json.metadata.request.name.en + '<br />');
			                $.each(json.latest, function(idx, item) {
			                    $('#long').append(idx + ' -> ' + item + '<br />');
			                });
			                return;
			            }
		        });
	        });
		})( jQuery );
		</script>

	</head>
<body>

	<div class=container>
        <div  id="mapdiv"></div>
        <div class="panel">
        	<div id="long"></div>
        <input type='hidden' id="e1">
    </div>
	</div>
</body>

</html>