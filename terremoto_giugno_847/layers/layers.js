var wms_layers = [];


        var lyr_ESRIShadedRelief_0 = new ol.layer.Tile({
            'title': 'ESRI Shaded Relief',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Shaded_Relief/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_847_centri_colpiti_molise_lazio_merid_1 = new ol.format.GeoJSON();
var features_847_centri_colpiti_molise_lazio_merid_1 = format_847_centri_colpiti_molise_lazio_merid_1.readFeatures(json_847_centri_colpiti_molise_lazio_merid_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_847_centri_colpiti_molise_lazio_merid_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_847_centri_colpiti_molise_lazio_merid_1.addFeatures(features_847_centri_colpiti_molise_lazio_merid_1);
var lyr_847_centri_colpiti_molise_lazio_merid_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_847_centri_colpiti_molise_lazio_merid_1, 
                style: style_847_centri_colpiti_molise_lazio_merid_1,
                interactive: true,
                title: '<img src="styles/legend/847_centri_colpiti_molise_lazio_merid_1.png" /> 847_centri_colpiti_molise_lazio_merid'
            });
var format_847_epicentro_molise_lazio_merid_2 = new ol.format.GeoJSON();
var features_847_epicentro_molise_lazio_merid_2 = format_847_epicentro_molise_lazio_merid_2.readFeatures(json_847_epicentro_molise_lazio_merid_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_847_epicentro_molise_lazio_merid_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_847_epicentro_molise_lazio_merid_2.addFeatures(features_847_epicentro_molise_lazio_merid_2);
var lyr_847_epicentro_molise_lazio_merid_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_847_epicentro_molise_lazio_merid_2, 
                style: style_847_epicentro_molise_lazio_merid_2,
                interactive: true,
                title: '<img src="styles/legend/847_epicentro_molise_lazio_merid_2.png" /> 847_epicentro_molise_lazio_merid'
            });

lyr_ESRIShadedRelief_0.setVisible(true);lyr_847_centri_colpiti_molise_lazio_merid_1.setVisible(true);lyr_847_epicentro_molise_lazio_merid_2.setVisible(true);
var layersList = [lyr_ESRIShadedRelief_0,lyr_847_centri_colpiti_molise_lazio_merid_1,lyr_847_epicentro_molise_lazio_merid_2];
lyr_847_centri_colpiti_molise_lazio_merid_1.set('fieldAliases', {'Toponimo': 'Toponimo', 'Descrizion': 'Descrizion', });
lyr_847_epicentro_molise_lazio_merid_2.set('fieldAliases', {'Toponimo': 'Toponimo', 'Localizzaz': 'Localizzaz', 'Descrizion': 'Descrizion', });
lyr_847_centri_colpiti_molise_lazio_merid_1.set('fieldImages', {'Toponimo': '', 'Descrizion': '', });
lyr_847_epicentro_molise_lazio_merid_2.set('fieldImages', {'Toponimo': '', 'Localizzaz': '', 'Descrizion': '', });
lyr_847_centri_colpiti_molise_lazio_merid_1.set('fieldLabels', {'Toponimo': 'no label', 'Descrizion': 'no label', });
lyr_847_epicentro_molise_lazio_merid_2.set('fieldLabels', {'Toponimo': 'no label', 'Localizzaz': 'no label', 'Descrizion': 'no label', });
lyr_847_epicentro_molise_lazio_merid_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});