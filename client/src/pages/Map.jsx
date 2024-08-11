import {
  GoogleMap,
  MarkerF,
  useLoadScript,
  Circle,
} from "@react-google-maps/api";
import { useEffect, useMemo, useState } from "react";
import red from "../assets/red.png";
import green from "../assets/green.png";
import axios from "axios";
// import { API_KEY } from "googleapi";

function MapComponent() {
  const [map, setMap] = useState(null);
  const [data, setData] = useState([]);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyAPaxWzHdEchDySEbDuhlwlW4KcoorTevY',
  });

  useEffect(() => {
    axios({
      method: "get",
      url: "https://codefuryhackathonproject.onrender.com/api/v1/shelter",
    }).then((response) => {
      setData(response.data.data)
    });
  }, []);

  const center = useMemo(() => ({ lat: 20.59, lng: 78.96 }), [20.59, 78.96]);

  return (
    <div>
      {!isLoaded ? (
        <h1>loading..</h1>
      ) : (
        <div className=" flex justify-center gap-10 h-full w-full items-center mt-10">
          <div className="flex flex-col pl-5">
            <div className="text-3xl font-bold">
              Visualise the Disaster in Real Time
            </div>
            <div className="">powered by Google Maps</div>
            <div className="pt-10 pl-10">
              <div className="flex gap-2 items-center">
                <img className="h-[10px] w-[10px]" src={red} />
                <div>Unclaimed by orgs</div>
              </div>
              <div className="flex gap-2 items-center">
                <img className="h-[10px] w-[10px]" src={green} />
                <div>Claimed by orgs</div>
              </div>
            </div>
          </div>
          <GoogleMap
            mapContainerStyle={{ height: "600px", width: "60%" }}
            center={center}
            zoom={4}
            onLoad={(map) => setMap(map)}
          >
            {data.map(
              ({ name, description, latitude, longitude, progress }) => {
                return (
                  <MarkerF
                    icon={progress == "Unclaimed" ? red : green}
                    title={`${name} ${description}`}
                    position={{ lat: latitude, lng: longitude }}
                  />
                );
              }
            )}
          </GoogleMap>
        </div>
      )}
    </div>
  );
}

export default MapComponent;
