import 'ol/ol.css';
import Map from 'ol/Map';
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';
import TileWMS from 'ol/source/TileWMS';
import View from 'ol/View';


// IDENA:cartografia_topografica_200000
// IDENA:cartografia_topografica_100000
// IDENA:ortofoto_maxima_actualidad
const activeLayers = ['IDENA:ortofoto_maxima_actualidad', 
                      'IDENA:CATAST_Pol_Municipio',
                    //  'IDENA:BIODIV_Pol_ZPProtec',
                      'IDENA:BIODIV_Pol_ZEPA',
                    //  'IDENA:BIODIV_Pol_RN2000',
                    //  'IDENA:BIODIV_Pol_ZPProtec',
                    //  'IDENA:BIODIV_Pol_PaisajesPro'
                    ]

const layers = [
  new TileLayer({
    source: new OSM(),
  }),
  new TileLayer({
    source: new TileWMS({
      url: 'http://idena.navarra.es/ogc/ows?service=WMS',
      params: {'LAYERS':  activeLayers, 'TILED': true},
      serverType: 'geoserver',
      transition: 0
    }),
  }),
];
const map = new Map({
  layers: layers,
  target: 'map',
  view: new View({
    projection: 'EPSG:4326', // todo: reproject coordinates instead the entire map
    center: [-1.633689, 42.527379],
    zoom: 9,
  }),
});

// import OLCesium from 'olcs/OLCesium.js';  // todo: olcs import error
// const amap = map
// const ol3d = new OLCesium({map: amap}); // ol2dMap is the ol.Map instance
// ol3d.setEnabled(true);