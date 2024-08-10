import React, { useRef } from 'react';
import Home from './Home';
import WhatWeDo from './WhatWeDo'; // Make sure the path is correct
import { Button } from '@/components/ui/button';

function Landing() {
    const homeRef = useRef(null);

    const handleVolunteerClick = () => {
        if (homeRef.current) {
            homeRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            {/* Full-Screen Image */}
            <section className="relative flex-grow">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: 'url(/src/assets/firemen.jpeg)' }}
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                </div>
                <div className="relative flex items-center justify-center min-h-screen text-center text-white px-6">
                    <div className="z-10">
                        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
                            CRISIS CLEAN-UP!
                        </h1>
                        <p className="text-lg md:text-xl mb-8">
                            Join us as a volunteer and make a real difference in people's lives!
                        </p>
                        <Button
                            className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
                            onClick={handleVolunteerClick}
                        >
                            Volunteer
                        </Button>
                    </div>
                </div>
            </section>

            {/* What We Do Section */}
            <section className="bg-white py-16 px-6 md:px-12">
                <WhatWeDo />
            </section>

            {/* Home Section */}
            <section ref={homeRef} className="bg-white py-16 px-6 md:px-12">
                <Home />
            </section>
        </div>
    );
}

export default Landing;
