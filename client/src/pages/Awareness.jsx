import React from 'react';
// import './Awareness.css'; // Import the CSS file for animations

const disasterData = [
  {
    type: 'Earthquake',
    dos: [
      'Drop to your knees and cover your head and neck.',
      'Stay indoors away from windows and heavy objects.',
      'If outside, move away from buildings, trees, and streetlights.'
    ],
    donts: [
      'Do not use elevators.',
      'Avoid standing in doorways.',
      'Do not run outside during shaking.'
    ],
    image: 'https://firebasestorage.googleapis.com/v0/b/altertify1.appspot.com/o/earthquake.png?alt=media&token=302b804b-e07d-4029-9325-dbbcf853cfec'
  },
  {
    type: 'Flood',
    dos: [
      'Move to higher ground immediately.',
      'Avoid walking or driving through floodwater.',
      'Follow evacuation orders from authorities.'
    ],
    donts: [
      'Do not attempt to cross flooded areas.',
      'Avoid using electrical appliances near water.',
      'Do not return to your home until it is declared safe.'
    ],
    image: 'https://firebasestorage.googleapis.com/v0/b/altertify1.appspot.com/o/flooded-house.png?alt=media&token=f5a808b2-7a7f-4870-9eb4-1dff63a2a7d4'
  },
  {
    type: 'Fire',
    dos: [
      'Leave the building as quickly as possible.',
      'Use stairs instead of elevators.',
      'Close doors behind you to slow the spread of fire.'
    ],
    donts: [
      'Do not hide in closets or under beds.',
      'Avoid opening windows to escape smoke.',
      'Do not use elevators during a fire.'
    ],
    image: 'https://firebasestorage.googleapis.com/v0/b/altertify1.appspot.com/o/fire.png?alt=media&token=43166a77-6c45-4d47-afd2-d6425480c5ef'
  }
];

function Awareness() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800 animate__animated animate__fadeIn">Disaster Awareness</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {disasterData.map((disaster, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 duration-300 animate__animated animate__fadeIn animate__delay-1s"
          >
            <div className="w-full h-48 flex items-center justify-center bg-gray-200">
              <img
                src={disaster.image}
                alt={`${disaster.type} graphic`}
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">{disaster.type}</h2>
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2 text-green-600">Dos</h3>
                <ul className="list-disc list-inside pl-5 space-y-2">
                  {disaster.dos.map((item, i) => (
                    <li key={i} className="text-gray-700">{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-red-600">Don'ts</h3>
                <ul className="list-disc list-inside pl-5 space-y-2">
                  {disaster.donts.map((item, i) => (
                    <li key={i} className="text-gray-700">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Awareness;
