var wms_layers = [];

var lyr_Imagearienne2019_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "Image aérienne 2019",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Imagearienne2019_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-243140.646424, 5925947.222806, -241097.366120, 5927251.624468]
                            })
                        });
var format_Hutresen2009_1 = new ol.format.GeoJSON();
var features_Hutresen2009_1 = format_Hutresen2009_1.readFeatures(json_Hutresen2009_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hutresen2009_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hutresen2009_1.addFeatures(features_Hutresen2009_1);
var lyr_Hutresen2009_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Hutresen2009_1, 
                style: style_Hutresen2009_1,
                interactive: false,
                title: '<img src="styles/legend/Hutresen2009_1.png" /> Huîtres en 2009'
            });
var format_Hutresen2011_2 = new ol.format.GeoJSON();
var features_Hutresen2011_2 = format_Hutresen2011_2.readFeatures(json_Hutresen2011_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hutresen2011_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hutresen2011_2.addFeatures(features_Hutresen2011_2);
var lyr_Hutresen2011_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Hutresen2011_2, 
                style: style_Hutresen2011_2,
                interactive: false,
                title: '<img src="styles/legend/Hutresen2011_2.png" /> Huîtres en 2011'
            });
var format_Rcifen2009_3 = new ol.format.GeoJSON();
var features_Rcifen2009_3 = format_Rcifen2009_3.readFeatures(json_Rcifen2009_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rcifen2009_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rcifen2009_3.addFeatures(features_Rcifen2009_3);
var lyr_Rcifen2009_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rcifen2009_3, 
                style: style_Rcifen2009_3,
                interactive: false,
                title: '<img src="styles/legend/Rcifen2009_3.png" /> Récif en 2009'
            });
var format_Rcifen2011_4 = new ol.format.GeoJSON();
var features_Rcifen2011_4 = format_Rcifen2011_4.readFeatures(json_Rcifen2011_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rcifen2011_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rcifen2011_4.addFeatures(features_Rcifen2011_4);
var lyr_Rcifen2011_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rcifen2011_4, 
                style: style_Rcifen2011_4,
                interactive: false,
                title: '<img src="styles/legend/Rcifen2011_4.png" /> Récif en 2011'
            });
var format_Rcifen2013_5 = new ol.format.GeoJSON();
var features_Rcifen2013_5 = format_Rcifen2013_5.readFeatures(json_Rcifen2013_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rcifen2013_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rcifen2013_5.addFeatures(features_Rcifen2013_5);
var lyr_Rcifen2013_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rcifen2013_5, 
                style: style_Rcifen2013_5,
                interactive: false,
                title: '<img src="styles/legend/Rcifen2013_5.png" /> Récif en 2013'
            });
var format_Rcifen2014_6 = new ol.format.GeoJSON();
var features_Rcifen2014_6 = format_Rcifen2014_6.readFeatures(json_Rcifen2014_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rcifen2014_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rcifen2014_6.addFeatures(features_Rcifen2014_6);
var lyr_Rcifen2014_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rcifen2014_6, 
                style: style_Rcifen2014_6,
                interactive: false,
                title: '<img src="styles/legend/Rcifen2014_6.png" /> Récif en 2014'
            });
var format_Rcifen2017_7 = new ol.format.GeoJSON();
var features_Rcifen2017_7 = format_Rcifen2017_7.readFeatures(json_Rcifen2017_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rcifen2017_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rcifen2017_7.addFeatures(features_Rcifen2017_7);
var lyr_Rcifen2017_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rcifen2017_7, 
                style: style_Rcifen2017_7,
                interactive: false,
                title: '<img src="styles/legend/Rcifen2017_7.png" /> Récif en 2017'
            });
var format_Rcifen2019_8 = new ol.format.GeoJSON();
var features_Rcifen2019_8 = format_Rcifen2019_8.readFeatures(json_Rcifen2019_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rcifen2019_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rcifen2019_8.addFeatures(features_Rcifen2019_8);
var lyr_Rcifen2019_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rcifen2019_8, 
                style: style_Rcifen2019_8,
                interactive: false,
                title: '<img src="styles/legend/Rcifen2019_8.png" /> Récif en 2019'
            });

lyr_Imagearienne2019_0.setVisible(true);lyr_Hutresen2009_1.setVisible(true);lyr_Hutresen2011_2.setVisible(true);lyr_Rcifen2009_3.setVisible(true);lyr_Rcifen2011_4.setVisible(true);lyr_Rcifen2013_5.setVisible(true);lyr_Rcifen2014_6.setVisible(true);lyr_Rcifen2017_7.setVisible(true);lyr_Rcifen2019_8.setVisible(true);
var layersList = [lyr_Imagearienne2019_0,lyr_Hutresen2009_1,lyr_Hutresen2011_2,lyr_Rcifen2009_3,lyr_Rcifen2011_4,lyr_Rcifen2013_5,lyr_Rcifen2014_6,lyr_Rcifen2017_7,lyr_Rcifen2019_8];
lyr_Hutresen2009_1.set('fieldAliases', {'id': 'id', });
lyr_Hutresen2011_2.set('fieldAliases', {'id': 'id', });
lyr_Rcifen2009_3.set('fieldAliases', {'FID': 'FID', });
lyr_Rcifen2011_4.set('fieldAliases', {'id': 'id', 'Surface': 'Surface', });
lyr_Rcifen2013_5.set('fieldAliases', {'id': 'id', 'Surface': 'Surface', });
lyr_Rcifen2014_6.set('fieldAliases', {'id': 'id', 'Surface': 'Surface', });
lyr_Rcifen2017_7.set('fieldAliases', {'id': 'id', 'Surface': 'Surface', });
lyr_Rcifen2019_8.set('fieldAliases', {'id': 'id', 'Surface': 'Surface', });
lyr_Hutresen2009_1.set('fieldImages', {'id': 'TextEdit', });
lyr_Hutresen2011_2.set('fieldImages', {'id': 'TextEdit', });
lyr_Rcifen2009_3.set('fieldImages', {'FID': '', });
lyr_Rcifen2011_4.set('fieldImages', {'id': 'TextEdit', 'Surface': 'TextEdit', });
lyr_Rcifen2013_5.set('fieldImages', {'id': '', 'Surface': '', });
lyr_Rcifen2014_6.set('fieldImages', {'id': '', 'Surface': '', });
lyr_Rcifen2017_7.set('fieldImages', {'id': '', 'Surface': '', });
lyr_Rcifen2019_8.set('fieldImages', {'id': 'TextEdit', 'Surface': 'TextEdit', });
lyr_Hutresen2009_1.set('fieldLabels', {'id': 'no label', });
lyr_Hutresen2011_2.set('fieldLabels', {'id': 'no label', });
lyr_Rcifen2009_3.set('fieldLabels', {'FID': 'no label', });
lyr_Rcifen2011_4.set('fieldLabels', {'id': 'no label', 'Surface': 'no label', });
lyr_Rcifen2013_5.set('fieldLabels', {'id': 'no label', 'Surface': 'no label', });
lyr_Rcifen2014_6.set('fieldLabels', {'id': 'no label', 'Surface': 'no label', });
lyr_Rcifen2017_7.set('fieldLabels', {'id': 'no label', 'Surface': 'no label', });
lyr_Rcifen2019_8.set('fieldLabels', {'id': 'no label', 'Surface': 'no label', });
lyr_Rcifen2019_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});