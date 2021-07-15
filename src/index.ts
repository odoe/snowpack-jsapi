import ArcGISMap from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import Search from '@arcgis/core/widgets/Search';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';

const layer = new FeatureLayer({
    portalItem: {
        id: '359bc19d9bbb4f2ba1b2baec7e13e757'
    }
});

const map = new ArcGISMap({
  basemap: 'topo-vector',
  layers: [layer]
});

const view = new MapView({
  container: 'viewDiv',
  map: map,
  zoom: 10,
  center: [-118, 34]
});

const search = new Search({ view });

view.ui.add(search, 'top-right');
