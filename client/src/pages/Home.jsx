import React, { useState, useEffect } from 'react';
import Hurricane from '../assets/hurricane.png';
import Wildfire from '../assets/wildfire.png';
import Flood from '../assets/flood.png';
import Earthquake from '../assets/earthquake.png';
import Tornado from '../assets/tornado.png';
import Other from '../assets/other.png';
import { useRecoilValueLoadable, useSetRecoilState } from 'recoil';
import { sheltersAtom } from '@/store/shelters';
import { ArrowRight } from 'lucide-react';
import { currentShelterAtom } from '@/store/currentShelter';
import { useNavigate } from 'react-router-dom';

const disasterTypes = ['Hurricane', 'Earthquake', 'Flood', 'Wildfire', 'Tornado', 'Other'];
const disasterImages = [Hurricane, Earthquake, Flood, Wildfire, Tornado, Other];

function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of the Earth in km
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}

function Home() {
    const shelters = useRecoilValueLoadable(sheltersAtom);
    const setCurrentShelter = useSetRecoilState(currentShelterAtom);
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [nearMe, setNearMe] = useState(false);
    const [userLocation, setUserLocation] = useState(null);

    useEffect(() => {
        if (nearMe) {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(position => {
                    const { latitude, longitude } = position.coords;
                    setUserLocation({ latitude, longitude });
                }, () => {
                    alert('Geolocation permission denied.');
                });
            } else {
                alert('Geolocation is not supported by this browser.');
            }
        }
    }, [nearMe]);

    const handleSearch = () => {
        setNearMe(false); // Reset Near Me state if user is searching by location
    };

    const handleNearMe = () => {
        setNearMe(true);
    };

    const filteredShelters = shelters.state === 'loading'
        ? []
        : shelters.contents.filter(shelter => {
            // Search by location
            if (searchTerm) {
                return shelter.name.toLowerCase().includes(searchTerm.toLowerCase());
            }

            // Filter by proximity if near me
            if (nearMe && userLocation) {
                const distance = calculateDistance(
                    userLocation.latitude,
                    userLocation.longitude,
                    shelter.latitude,
                    shelter.longitude
                );
                return distance <= 10; // 10 km radius
            }

            return true;
        });

    function handleClick(shelter) {
        setCurrentShelter(shelter);
        navigate('/shelter');
    }

    return (
        <div className="bg-gray-100 min-h-screen py-10">
            <div className="container mx-auto px-4">
                <div className="text-center mb-10">
                    <input
                        type="text"
                        placeholder="Search by location..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="border border-gray-300 rounded-lg p-2 w-full max-w-md"
                    />
                    <button
                        onClick={handleSearch}
                        className="bg-blue-600 text-white py-2 px-4 rounded-lg mt-4"
                    >
                        Search
                    </button>
                    <button
                        onClick={handleNearMe}
                        className="bg-green-600 text-white py-2 px-4 rounded-lg mt-4 ml-4"
                    >
                        Near Me
                    </button>
                </div>
                <div className="text-4xl font-bold text-center mb-10">Active Shelter Zones</div>
                <div className="flex flex-wrap justify-center gap-6">
                    {shelters.state === 'loading' ? (
                        <div className="w-full text-center text-xl">Loading...</div>
                    ) : (
                        filteredShelters.map((shelter, i) => (
                            <div
                                key={i}
                                onClick={() => handleClick(shelter)}
                                className="relative group w-full max-w-md bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 cursor-pointer"
                            >
                                <img
                                    src={disasterImages[disasterTypes.indexOf(shelter.disasterType)]}
                                    alt={shelter.disasterType}
                                    className="w-full h-40 object-cover"
                                />
                                <div className="p-6 flex flex-col">
                                    <div className="text-xl font-semibold mb-2">{shelter.name}</div>
                                    <p className="text-gray-700 mb-4">{shelter.description}</p>
                                    <div className="absolute bottom-6 right-6 flex items-center">
                                        <ArrowRight className="text-gray-600 group-hover:translate-x-2 transition-transform" />
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}

export default Home;
