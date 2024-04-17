ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:3005").setExtent([903347.135817, 420506.153956, 1110669.028541, 532866.653956]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_ClayoquotSoundLandcover2019_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Clayoquot Sound Landcover 2019",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/ClayoquotSoundLandcover2019_1.png",
    attributions: ' ',
                                projection: 'EPSG:3005',
                                alwaysInRange: true,
                                imageExtent: [955789.769739, 439086.799054, 1053649.769739, 510426.799054]
                            })
                        });

lyr_OSMStandard_0.setVisible(true);lyr_ClayoquotSoundLandcover2019_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_ClayoquotSoundLandcover2019_1];
