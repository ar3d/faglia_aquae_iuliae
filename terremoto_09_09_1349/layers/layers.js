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
var format_1349_centri_colpiti_viterbese_umbria_1 = new ol.format.GeoJSON();
var features_1349_centri_colpiti_viterbese_umbria_1 = format_1349_centri_colpiti_viterbese_umbria_1.readFeatures(json_1349_centri_colpiti_viterbese_umbria_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1349_centri_colpiti_viterbese_umbria_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1349_centri_colpiti_viterbese_umbria_1.addFeatures(features_1349_centri_colpiti_viterbese_umbria_1);
var lyr_1349_centri_colpiti_viterbese_umbria_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_1349_centri_colpiti_viterbese_umbria_1, 
                style: style_1349_centri_colpiti_viterbese_umbria_1,
                interactive: true,
                title: '<img src="styles/legend/1349_centri_colpiti_viterbese_umbria_1.png" /> 1349_centri_colpiti_viterbese_umbria'
            });
var format_1349_centri_colpiti_abruzzo_sulmona_2 = new ol.format.GeoJSON();
var features_1349_centri_colpiti_abruzzo_sulmona_2 = format_1349_centri_colpiti_abruzzo_sulmona_2.readFeatures(json_1349_centri_colpiti_abruzzo_sulmona_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1349_centri_colpiti_abruzzo_sulmona_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1349_centri_colpiti_abruzzo_sulmona_2.addFeatures(features_1349_centri_colpiti_abruzzo_sulmona_2);
var lyr_1349_centri_colpiti_abruzzo_sulmona_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_1349_centri_colpiti_abruzzo_sulmona_2, 
                style: style_1349_centri_colpiti_abruzzo_sulmona_2,
                interactive: true,
                title: '<img src="styles/legend/1349_centri_colpiti_abruzzo_sulmona_2.png" /> 1349_centri_colpiti_abruzzo_sulmona'
            });
var format_1349_centri_colpiti_abruzzo_aquilano_3 = new ol.format.GeoJSON();
var features_1349_centri_colpiti_abruzzo_aquilano_3 = format_1349_centri_colpiti_abruzzo_aquilano_3.readFeatures(json_1349_centri_colpiti_abruzzo_aquilano_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1349_centri_colpiti_abruzzo_aquilano_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1349_centri_colpiti_abruzzo_aquilano_3.addFeatures(features_1349_centri_colpiti_abruzzo_aquilano_3);
var lyr_1349_centri_colpiti_abruzzo_aquilano_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_1349_centri_colpiti_abruzzo_aquilano_3, 
                style: style_1349_centri_colpiti_abruzzo_aquilano_3,
                interactive: true,
                title: '<img src="styles/legend/1349_centri_colpiti_abruzzo_aquilano_3.png" /> 1349_centri_colpiti_abruzzo_aquilano'
            });
var format_1349_centri_colpiti_molise_lazio_merid_4 = new ol.format.GeoJSON();
var features_1349_centri_colpiti_molise_lazio_merid_4 = format_1349_centri_colpiti_molise_lazio_merid_4.readFeatures(json_1349_centri_colpiti_molise_lazio_merid_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1349_centri_colpiti_molise_lazio_merid_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1349_centri_colpiti_molise_lazio_merid_4.addFeatures(features_1349_centri_colpiti_molise_lazio_merid_4);
var lyr_1349_centri_colpiti_molise_lazio_merid_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_1349_centri_colpiti_molise_lazio_merid_4, 
                style: style_1349_centri_colpiti_molise_lazio_merid_4,
                interactive: true,
                title: '<img src="styles/legend/1349_centri_colpiti_molise_lazio_merid_4.png" /> 1349_centri_colpiti_molise_lazio_merid'
            });
var format_epicentri_terremoto_del_1349_5 = new ol.format.GeoJSON();
var features_epicentri_terremoto_del_1349_5 = format_epicentri_terremoto_del_1349_5.readFeatures(json_epicentri_terremoto_del_1349_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_epicentri_terremoto_del_1349_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_epicentri_terremoto_del_1349_5.addFeatures(features_epicentri_terremoto_del_1349_5);
var lyr_epicentri_terremoto_del_1349_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_epicentri_terremoto_del_1349_5, 
                style: style_epicentri_terremoto_del_1349_5,
                interactive: true,
                title: '<img src="styles/legend/epicentri_terremoto_del_1349_5.png" /> epicentri_terremoto_del_1349'
            });

lyr_ESRIShadedRelief_0.setVisible(true);lyr_1349_centri_colpiti_viterbese_umbria_1.setVisible(true);lyr_1349_centri_colpiti_abruzzo_sulmona_2.setVisible(true);lyr_1349_centri_colpiti_abruzzo_aquilano_3.setVisible(true);lyr_1349_centri_colpiti_molise_lazio_merid_4.setVisible(true);lyr_epicentri_terremoto_del_1349_5.setVisible(true);
var layersList = [lyr_ESRIShadedRelief_0,lyr_1349_centri_colpiti_viterbese_umbria_1,lyr_1349_centri_colpiti_abruzzo_sulmona_2,lyr_1349_centri_colpiti_abruzzo_aquilano_3,lyr_1349_centri_colpiti_molise_lazio_merid_4,lyr_epicentri_terremoto_del_1349_5];
lyr_1349_centri_colpiti_viterbese_umbria_1.set('fieldAliases', {'Toponimo': 'Toponimo', 'Descrizione': 'Descrizione', });
lyr_1349_centri_colpiti_abruzzo_sulmona_2.set('fieldAliases', {'Toponimo': 'Toponimo', 'Descrizion': 'Descrizion', });
lyr_1349_centri_colpiti_abruzzo_aquilano_3.set('fieldAliases', {'Toponimo': 'Toponimo', 'Descrizion': 'Descrizion', });
lyr_1349_centri_colpiti_molise_lazio_merid_4.set('fieldAliases', {'Toponimo': 'Toponimo', 'Descrizion': 'Descrizion', });
lyr_epicentri_terremoto_del_1349_5.set('fieldAliases', {'Toponimo': 'Toponimo', 'Localizzaz': 'Localizzaz', 'Descrizion': 'Descrizion', });
lyr_1349_centri_colpiti_viterbese_umbria_1.set('fieldImages', {'Toponimo': '', 'Descrizione': '', });
lyr_1349_centri_colpiti_abruzzo_sulmona_2.set('fieldImages', {'Toponimo': '', 'Descrizion': '', });
lyr_1349_centri_colpiti_abruzzo_aquilano_3.set('fieldImages', {'Toponimo': '', 'Descrizion': '', });
lyr_1349_centri_colpiti_molise_lazio_merid_4.set('fieldImages', {'Toponimo': '', 'Descrizion': '', });
lyr_epicentri_terremoto_del_1349_5.set('fieldImages', {'Toponimo': '', 'Localizzaz': '', 'Descrizion': '', });
lyr_1349_centri_colpiti_viterbese_umbria_1.set('fieldLabels', {'Toponimo': 'no label', 'Descrizione': 'no label', });
lyr_1349_centri_colpiti_abruzzo_sulmona_2.set('fieldLabels', {'Toponimo': 'no label', 'Descrizion': 'no label', });
lyr_1349_centri_colpiti_abruzzo_aquilano_3.set('fieldLabels', {'Toponimo': 'no label', 'Descrizion': 'no label', });
lyr_1349_centri_colpiti_molise_lazio_merid_4.set('fieldLabels', {'Toponimo': 'no label', 'Descrizion': 'no label', });
lyr_epicentri_terremoto_del_1349_5.set('fieldLabels', {'Toponimo': 'no label', 'Localizzaz': 'no label', 'Descrizion': 'no label', });
lyr_epicentri_terremoto_del_1349_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});