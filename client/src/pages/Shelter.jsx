import { currentShelterAtom } from "@/store/currentShelter";
import {
    GoogleMap,
    MarkerF,
    useLoadScript,
} from "@react-google-maps/api";
import red from "../assets/red.png";
import { useState, useMemo, useEffect } from "react";
import { useRecoilValue } from "recoil";
import axios from "axios";

function Shelter() {
    const currentShelter = useRecoilValue(currentShelterAtom);
    let orgs = [];
    let users = [];
    
        if (currentShelter.organizations.length>0){
            orgs = currentShelter.organizations.map((org) => {
                return (org.orgId);
            });
        }
        if (currentShelter.users.length>0){
            users = currentShelter.users.map((user) => {
                return (user);
            });
        }


    const [map, setMap] = useState(null);
  
    const { isLoaded } = useLoadScript({
      googleMapsApiKey: "AIzaSyAPaxWzHdEchDySEbDuhlwlW4KcoorTevY",
    });

    const center = useMemo(() => ({ lat: currentShelter.latitude, lng: currentShelter.longitude }), [currentShelter.latitude, currentShelter.longitude]);

    return (
        <div className="p-20 flex">
            <div>
                <div className="text-3xl mb-5 font-semibold">{currentShelter.name}</div>
                <div className="text-lg mb-5">{currentShelter.description}</div>
                {!isLoaded ? (<div>Loading ....</div>) : 
                    (<GoogleMap
                        mapContainerStyle={{ height: "300px", width: "300px" }}
                        center={center}
                        zoom={8}
                        onLoad={(map) => setMap(map)}
                    >
                        <MarkerF
                            title={`${currentShelter.name} ${currentShelter.description}`}
                            position={{ lat: currentShelter.latitude, lng: currentShelter.longitude }}
                        />
                    </GoogleMap>)
                }
            </div>
            <div className="mx-10">
                <div className="text-3xl font-semibold">Volunteers</div>
                <div>
                    <div>Organizations</div>
                    <div>
                        {orgs.length==0 ? <div>Currently no organizations involved</div> : orgs.map((org) => {
                            return (
                                <div>{org}</div>
                            )
                        })}
                    </div>
                </div>
                <div>
                    <div>Individuals</div>
                    <div>
                        {users.length==0 ? <div>Currently no individial volunteers</div> : users.map((user) => {
                            return (
                                <div>{user}</div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shelter