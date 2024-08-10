import React from 'react';
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

function Home() {
    const shelters = useRecoilValueLoadable(sheltersAtom);
    const setCurrentShelter = useSetRecoilState(currentShelterAtom);
    const navigate = useNavigate();

    function handleClick(shelter) {
        setCurrentShelter(shelter);
        navigate('/shelter');
    }

    return (
        <div className="bg-gray-100 min-h-screen py-10">
            <div className="text-4xl font-bold text-center mb-10">Active Relief Sites</div>
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-center gap-6">
                    {shelters.state === 'loading' ? (
                        <div className="w-full text-center text-xl">Loading...</div>
                    ) : (
                        shelters.contents.map((shelter, i) => (
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
