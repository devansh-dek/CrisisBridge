import React, { useState, useEffect } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { FiCheckCircle, FiAlertCircle } from 'react-icons/fi';
import { FaFirstAid, FaLightbulb, FaUtensils, FaBatteryFull, FaPuzzlePiece } from 'react-icons/fa';
import { GiBatteries } from 'react-icons/gi';

const ItemTypes = {
    ITEM: 'item',
};

const items = [
    { id: 1, name: 'First Aid Kit', isEssential: true, icon: <FaFirstAid /> },
    { id: 2, name: 'Flashlight', isEssential: true, icon: <FaLightbulb /> },
    { id: 3, name: 'Stuffed Toy', isEssential: false, icon: <FaPuzzlePiece /> },
    { id: 4, name: 'Canned Food', isEssential: true, icon: <FaUtensils /> },
    { id: 5, name: 'Board Games', isEssential: false, icon: <FaPuzzlePiece /> },
    { id: 6, name: 'Batteries', isEssential: true, icon: <FaBatteryFull /> },
];


const DraggableItem = ({ item }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemTypes.ITEM,
        item: { id: item.id },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    }));

    return (
        <div
            ref={drag}
            className={`p-2 my-2 border rounded-md cursor-pointer flex items-center ${isDragging ? 'opacity-50' : 'opacity-100'
                } bg-white shadow-md`}
        >
            <span className="mr-2 text-xl">{item.icon}</span>
            {item.name}
        </div>
    );
};

const DropZone = ({ onDrop, acceptedItems, message, isFull }) => {
    const [{ isOver }, drop] = useDrop(() => ({
        accept: ItemTypes.ITEM,
        drop: (item) => onDrop(item.id),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
        }),
    }));

    return (
        <div
            ref={drop}
            className={`p-4 border-dashed border-4 rounded-md h-32 flex justify-center items-center ${isOver ? 'bg-green-100' : 'bg-gray-100'
                } ${isFull ? 'bg-red-100' : ''}`}
        >
            <div className="text-center">
                {acceptedItems.length === 0 ? (
                    <p className="text-gray-600">Drop items here</p>
                ) : (
                    <ul>
                        {acceptedItems.map((item) => (
                            <li key={item.id} className="text-gray-800 flex items-center">
                                <span className="mr-2">{item.icon}</span> {item.name}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

function InteractiveGame() {
    const [acceptedItems, setAcceptedItems] = useState([]);
    const [message, setMessage] = useState('');
    const [points, setPoints] = useState(0);

    const handleDrop = (id) => {
        const droppedItem = items.find((item) => item.id === id);
        if (acceptedItems.length >= 4) {
            setMessage('Your backpack is full!');
        } else if (droppedItem && droppedItem.isEssential) {
            setAcceptedItems((prevItems) => [...prevItems, droppedItem]);
            setPoints((prevPoints) => prevPoints + 10);
            setMessage('Great! Keep going!');
        } else {
            setPoints((prevPoints) => prevPoints - 5);
            setMessage('Oops! That item is not essential.');
        }
    };

    useEffect(() => {
        if (acceptedItems.length === 4) {
            setMessage('Success! You have completed your kit.');
        }
    }, [acceptedItems]);

    return (
        <DndProvider backend={HTML5Backend}>
            <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-400 to-purple-600 text-white">
                <h1 className="text-4xl font-bold mb-6">Disaster Preparedness Kit</h1>
                <div className="text-2xl mb-4">Points: {points}</div>
                <div className="flex flex-col md:flex-row md:space-x-6">
                    <div className="bg-white text-gray-800 p-6 rounded-md shadow-md w-full md:w-1/2">
                        <h2 className="text-xl font-semibold mb-4">Items</h2>
                        {items.map((item) => (
                            <DraggableItem key={item.id} item={item} />
                        ))}
                    </div>
                    <div className="bg-white text-gray-800 p-6 rounded-md shadow-md w-full md:w-1/2 mt-6 md:mt-0">
                        <h2 className="text-xl font-semibold mb-4">Your Kit</h2>
                        <DropZone
                            onDrop={handleDrop}
                            acceptedItems={acceptedItems}
                            isFull={acceptedItems.length >= 4}
                        />
                    </div>
                </div>
                {message && (
                    <div className="mt-4 p-4 rounded-md bg-yellow-500 text-gray-800">
                        {message}
                    </div>
                )}
            </div>
        </DndProvider>
    );
}

export default InteractiveGame;