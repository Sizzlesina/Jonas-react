/** @format */

import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";
import Button from "./Button";

function Map() {
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  return (
    <div className={styles.mapContainer} onClick={() => navigate("form")}>
      <h1>Map</h1>
      <h1>
        Position: {lat}, {lng}
      </h1>
      <Button
        type='position'
        onClick={() => {
          setSearchParams({ lat: 23, lng: 15 });
        }}>
        Change pos
      </Button>
    </div>
  );
}

export default Map;
