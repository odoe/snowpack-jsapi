import ArcGISMap from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import Search from '@arcgis/core/widgets/Search';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import Legend from '@arcgis/core/widgets/Legend';

const map = new ArcGISMap({
  basemap: 'topo-vector'
});

const view = new MapView({
  container: "viewDiv",
  map: map,
  zoom: 8,
  extent: {
    // autocasts as new Extent()
    xmin: -9177811,
    ymin: 4247000,
    xmax: -9176791,
    ymax: 4247784,
    spatialReference: 102100,
  },
});

const search = new Search({ view });
view.ui.add(search, 'top-right');

const legend = new Legend({ view });
view.ui.add(legend, 'bottom-right');
 
const featureLayer = new FeatureLayer({
  url: "https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/Landscape_Trees/FeatureServer/0",
});
map.add(featureLayer);
