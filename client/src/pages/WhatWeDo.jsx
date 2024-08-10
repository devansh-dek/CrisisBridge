import React from 'react';
import { Button } from '@/components/ui/button'; // Adjust import path as needed
// import VolunteerImage from '../assets/volunteer.png'; // Placeholder image
// import QuizImage from '../assets/quiz.png'; // Placeholder image
// import GameImage from '../assets/game.png'; // Placeholder image

const WhatWeDo = () => {
    const features = [
        {
            title: 'Connect Organizations and Volunteers',
            description: 'We provide a platform that helps organizations and volunteers connect to assist individuals affected by natural calamities.',
            image: 'src/assets/contribute.jpg',
        },
        {
            title: 'Avoid Hassle ,Volunteer',
            description: 'Avoid all hassle of joining an organization , just locate your nearest shelter and contribute to it',
            image: 'src/assets/volunteers.jpg',
        },
        {
            title: 'Interactive Game & Educational Quiz',
            description: 'Engage with our interactive game made for kids simulates disaster preparedness, also take our quiz to know you readness for emergency.',
            image: 'src/assets/quiz.jpg',
        },
    ];

    return (
        <section className="bg-white py-16">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4">What We Do</h2>
                    <p className="text-lg text-gray-700">
                        We’ve created a comprehensive platform to support disaster relief efforts and provide educational resources to prepare and respond effectively.
                    </p>
                </div>
                <div className="flex flex-wrap justify-center gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="w-full max-w-xs bg-gray-100 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
                        >
                            <img
                                src={feature.image}
                                alt={feature.title}
                                className="w-full h-40 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
                                <p className="text-gray-700 mb-4">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhatWeDo;