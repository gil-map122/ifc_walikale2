ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([3101076.786680, -213145.132558, 3182197.171532, -150660.511794]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_IFCWALIKALE_1 = new ol.format.GeoJSON();
var features_IFCWALIKALE_1 = format_IFCWALIKALE_1.readFeatures(json_IFCWALIKALE_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IFCWALIKALE_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IFCWALIKALE_1.addFeatures(features_IFCWALIKALE_1);
var lyr_IFCWALIKALE_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IFCWALIKALE_1, 
                style: style_IFCWALIKALE_1,
                popuplayertitle: 'IFC - WALIKALE',
                interactive: true,
                title: '<img src="styles/legend/IFCWALIKALE_1.png" /> IFC - WALIKALE'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_IFCWALIKALE_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_IFCWALIKALE_1];
lyr_IFCWALIKALE_1.set('fieldAliases', {'fid': 'fid', 'area_ha': 'area_ha', 'perimeter': 'perimeter', 'name': 'name', 'id': 'id', 'organisation': 'organisation', });
lyr_IFCWALIKALE_1.set('fieldImages', {'fid': 'TextEdit', 'area_ha': 'TextEdit', 'perimeter': 'TextEdit', 'name': 'TextEdit', 'id': 'TextEdit', 'organisation': 'TextEdit', });
lyr_IFCWALIKALE_1.set('fieldLabels', {'fid': 'hidden field', 'area_ha': 'inline label - always visible', 'perimeter': 'hidden field', 'name': 'inline label - always visible', 'id': 'hidden field', 'organisation': 'hidden field', });
lyr_IFCWALIKALE_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});