function initialize() {
    var mapOptions = {
            zoom: 5,
            center: new google.maps.LatLng(47.46,2.19),
            mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    //var marker = new Array();
    var adressesSalleDeSport = $('#map-adresses').val().split('|');
    var NomSalleDeSport = $('#map-nom').val().split('|');
    var UrlSalleDeSport = $('#map-url').val().split('|');
    var BaseUrl = $('#BaseUrl').val();
    // var z;
    var z = 0;
    var u = new Array();
    var icone_base = {
        url: 'images/logo_32x32.png', 
        size: new google.maps.Size(32, 32),
        origin: new google.maps.Point(0,0),
        anchor: new google.maps.Point(16, 16)
    };

    function codeAddress(address, nom, url) {
        //Latlng contient est un array à 2 dim
        var latlng = address.split(',');
        var marker = new google.maps.Marker({
            map: map,
            position: new google.maps.LatLng(latlng[0], latlng[1]),
            title: nom,
            icon: icone_base
        });
        google.maps.event.addListener(marker, 'click', function() {
            location.href = BaseUrl+'/salles-sport-fitness/salle-sport-'+url+'.htm';
        });
    }
    codeAddress(adressesSalleDeSport[0], NomSalleDeSport[0], UrlSalleDeSport[0]);
    for ( var i in adressesSalleDeSport) {
        codeAddress(adressesSalleDeSport[i], NomSalleDeSport[i], UrlSalleDeSport[i]);
    }
}