/** @format */

import NeshanMap from "@neshan-maps-platform/react-openlayers";
import "@neshan-maps-platform/react-openlayers/dist/style.css";
const API_KEY = "web.4c1347be6db84a938a9ce7d1383785d9";
function Map() {
  return (
    <NeshanMap
      mapKey={API_KEY}
      defaultType='neshan'
      poi={true}
      center={{ latitude: 35.7665394, longitude: 51.4749824 }}
      zoom={14}
      ></NeshanMap>
  );
}

export default Map;
