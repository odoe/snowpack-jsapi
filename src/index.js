import ArcGISMap from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import Search from '@arcgis/core/widgets/Search';

const map = new ArcGISMap({
  basemap: 'topo-vector'
});

const view = new MapView({
  container: 'viewDiv',
  map: map,
  zoom: 10,
  center: [-118, 34]
});

const search = new Search({ view });

view.ui.add(search, 'top-right');
