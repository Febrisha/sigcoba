var wms_layers = [];

var format_DAS_Temenggung_Vektor_0 = new ol.format.GeoJSON();
var features_DAS_Temenggung_Vektor_0 = format_DAS_Temenggung_Vektor_0.readFeatures(json_DAS_Temenggung_Vektor_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DAS_Temenggung_Vektor_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DAS_Temenggung_Vektor_0.addFeatures(features_DAS_Temenggung_Vektor_0);
var lyr_DAS_Temenggung_Vektor_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DAS_Temenggung_Vektor_0, 
                style: style_DAS_Temenggung_Vektor_0,
                interactive: true,
                title: '<img src="styles/legend/DAS_Temenggung_Vektor_0.png" /> DAS_Temenggung_Vektor'
            });
var lyr_Clip_DAS_Temanggung_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Clip_DAS_Temanggung",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Clip_DAS_Temanggung_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12217403.275966, -834356.893152, 12253202.859001, -809172.954253]
                            })
                        });
var lyr_DAS_Clip_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "DAS_Clip",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/DAS_Clip_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12217403.275970, -834356.893149, 12253202.859003, -809172.954253]
                            })
                        });

lyr_DAS_Temenggung_Vektor_0.setVisible(true);lyr_Clip_DAS_Temanggung_1.setVisible(true);lyr_DAS_Clip_2.setVisible(true);
var layersList = [lyr_DAS_Temenggung_Vektor_0,lyr_Clip_DAS_Temanggung_1,lyr_DAS_Clip_2];
lyr_DAS_Temenggung_Vektor_0.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_DAS_Temenggung_Vektor_0.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', });
lyr_DAS_Temenggung_Vektor_0.set('fieldLabels', {'fid': 'no label', 'DN': 'no label', });
lyr_DAS_Temenggung_Vektor_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});