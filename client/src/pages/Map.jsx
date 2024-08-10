import {
  GoogleMap,
  MarkerF,
  useLoadScript,
  Circle,
} from "@react-google-maps/api";
import { useEffect, useMemo, useState } from "react";
import red from "../assets/red.png"

function MapComponent() {
  const [map, setMap] = useState(null);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAPaxWzHdEchDySEbDuhlwlW4KcoorTevY",
  });

  const center = useMemo(() => ({ lat: 20.59, lng: 78.96 }), [20.59, 78.96]);

  return (
    <div>
      {!isLoaded ? (
        <h1>loading..</h1>
      ) : (
        <GoogleMap
          mapContainerStyle={{ height: "300px", width: "300px" }}
          center={center}
          zoom={4}
          onLoad={(map) => setMap(map)}
        >
          <MarkerF icon={red} position={{ lat: 20.59, lng: 78.96 }} />
        </GoogleMap>
      )}
    </div>
  );
}

export default MapComponent;
