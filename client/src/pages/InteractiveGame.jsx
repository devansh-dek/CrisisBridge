import React, { useState, useEffect } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const ItemTypes = {
    ITEM: 'item',
};
const myMap = new Map();

const items = [
    { id: 1, name: 'First Aid Kit', isEssential: true, image: 'https://firebasestorage.googleapis.com/v0/b/altertify1.appspot.com/o/first-aid-kid.png?alt=media&token=f1f0209a-8691-4954-a7ae-e66d3945e823', mode: 'normal' },
    { id: 2, name: 'Flashlight', isEssential: true, image: 'https://firebasestorage.googleapis.com/v0/b/altertify1.appspot.com/o/flashlight.png?alt=media&token=cdc0409a-172a-498e-af36-c319409d148b', mode: 'normal' },
    { id: 3, name: 'Stuffed Toy', isEssential: false, image: 'https://firebasestorage.googleapis.com/v0/b/altertify1.appspot.com/o/board-game.png?alt=media&token=ac29eb17-b0d3-4a00-bfca-0ce525edcd9c', mode: 'normal' },
    { id: 4, name: 'Canned Food', isEssential: true, image: 'https://firebasestorage.googleapis.com/v0/b/altertify1.appspot.com/o/canned-food.png?alt=media&token=f6e9a965-4fca-4c31-b04e-77dc796df6ce', mode: 'normal' },
    { id: 5, name: 'Board Games', isEssential: false, image: 'https://firebasestorage.googleapis.com/v0/b/altertify1.appspot.com/o/board-game.png?alt=media&token=ac29eb17-b0d3-4a00-bfca-0ce525edcd9c', mode: 'normal' },
    { id: 6, name: 'Batteries', isEssential: true, image: 'https://firebasestorage.googleapis.com/v0/b/altertify1.appspot.com/o/battery.png?alt=media&token=a0566810-bd79-470a-817d-30bc1f827ae4', mode: 'normal' },
    { id: 7, name: 'Earthquake Kit', isEssential: true, image: 'https://firebasestorage.googleapis.com/v0/b/altertify1.appspot.com/o/first-aid-kid.png?alt=media&token=f1f0209a-8691-4954-a7ae-e66d3945e823', mode: 'earthquake' },
    { id: 8, name: 'Helmet', isEssential: true, image: 'https://firebasestorage.googleapis.com/v0/b/altertify1.appspot.com/o/helmet.png?alt=media&token=cb221ecd-c077-4b6a-ac73-2505a26a4778', mode: 'earthquake' },
    { id: 14, name: 'Use Lift', isEssential: true, image: 'https://firebasestorage.googleapis.com/v0/b/altertify1.appspot.com/o/elevator.png?alt=media&token=d46a8643-6d50-4ee0-8bf4-7857c00243cd', mode: 'earthquake' },
    { id: 15, name: 'Toys', isEssential: false, image: 'https://firebasestorage.googleapis.com/v0/b/altertify1.appspot.com/o/board-game.png?alt=media&token=ac29eb17-b0d3-4a00-bfca-0ce525edcd9c', mode: 'earthquake' },
    { id: 16, name: 'OpenGround', isEssential: true, image: 'https://firebasestorage.googleapis.com/v0/b/altertify1.appspot.com/o/earthquake.png?alt=media&token=302b804b-e07d-4029-9325-dbbcf853cfec', mode: 'earthquake' },


    { id: 9, name: 'Life Jacket', isEssential: true, image: 'https://firebasestorage.googleapis.com/v0/b/altertify1.appspot.com/o/life-jacket.png?alt=media&token=86016633-8182-4c9e-af4f-a52cde092b0d', mode: 'flood' },
    { id: 10, name: 'Toys', isEssential: false, image: 'https://firebasestorage.googleapis.com/v0/b/altertify1.appspot.com/o/board-game.png?alt=media&token=ac29eb17-b0d3-4a00-bfca-0ce525edcd9c', mode: 'flood' },
    { id: 11, name: 'Food', isEssential: true, image: 'https://firebasestorage.googleapis.com/v0/b/altertify1.appspot.com/o/canned-food.png?alt=media&token=f6e9a965-4fca-4c31-b04e-77dc796df6ce', mode: 'flood' },
    { id: 12, name: 'rope', isEssential: true, image: 'https://firebasestorage.googleapis.com/v0/b/altertify1.appspot.com/o/rope.png?alt=media&token=bc4af7c7-4f76-40d0-8507-de3d6b632522', mode: 'flood' },

    { id: 13, name: 'Waterproof Bag', isEssential: true, image: 'https://firebasestorage.googleapis.com/v0/b/altertify1.appspot.com/o/dry-bag.png?alt=media&token=d50d0891-b97f-42f6-956d-13a2b7ad972e', mode: 'flood' },
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
            className={`p-4 border rounded-lg cursor-pointer flex flex-col items-center justify-center ${isDragging ? 'opacity-50' : 'opacity-100'} bg-white shadow-lg`}
            style={{ width: '120px', height: '120px' }}
        >
            <img src={item.image} alt={item.name} className="w-16 h-16 mb-2" />
            <span className="text-sm font-semibold text-center">{item.name}</span>
        </div>
    );
};

const DropZone = ({ onDrop, acceptedItems, isFull, message, gameMode }) => {
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
            className={`relative p-4 border-dashed border-4 rounded-lg flex flex-col justify-start items-center ${isOver ? 'bg-green-100' : 'bg-gray-100'} ${isFull ? 'bg-red-100' : ''}`}
            style={{ width: '360px', height: '360px' }}
        >
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('/src/assets/school-bag.png]')` }}></div>
            <div className="relative text-center z-10 flex flex-col items-center justify-center">
                {acceptedItems.length === 0 ? (
                    <p className="text-gray-600 text-xs">Drop items here</p>
                ) : (
                    <ul className="list-disc list-inside text-xs">
                        {acceptedItems.map((item) => (
                            <li key={item.id} className="text-gray-800 flex items-center mb-2">
                                <img src={item.image} alt={item.name} className="w-16 h-16 mr-2" />
                                <span className="text-sm font-semibold">{item.name}</span>
                            </li>
                        ))}
                    </ul>
                )}
                {message && <p className="text-red-600 mt-2 text-xs">{message}</p>}
            </div>
        </div>
    );
};

function InteractiveGame() {
    const [acceptedItems, setAcceptedItems] = useState([]);
    const [message, setMessage] = useState('');
    const [points, setPoints] = useState(0);
    const [isCompleted, setIsCompleted] = useState(false);
    const [gameMode, setGameMode] = useState('normal');

    const handleDrop = (id) => {
        const droppedItem = items.find((item) => item.id === id);
        console.log("dropped item is ", droppedItem);
        if (!droppedItem) {
            setMessage('Invalid item for this mode.');
            return;
        }
        if (myMap.has(droppedItem.id)) {
            setMessage('Cannot add the same item more than once.');
            return;
        }
        if (!droppedItem.isEssential) {
            setPoints(points - 5);
            setMessage('Only essential items can be added to the kit.');
            return;
        }
        myMap.set(droppedItem.id, 1);

        const existingItem = acceptedItems.find((item) => item.id === id);

        if (existingItem) {
            setMessage('This item is already in your kit.');
            return;
        }

        if (acceptedItems.length >= 4) {
            setMessage('Your backpack is full!');
        } else {
            setAcceptedItems((prevItems) => [...prevItems, droppedItem]);
            setPoints((prevPoints) => prevPoints + 10);
            setMessage('Great! Keep going!');
        }
    };
    useEffect(() => {
        resetGame();
    }, [gameMode])
    useEffect(() => {
        if (acceptedItems.length === 4) {
            setMessage('Success! You have completed your kit.');
            setIsCompleted(true);
        }
    }, [acceptedItems]);

    const resetGame = () => {
        console.log("Mymap is ", myMap);
        myMap.clear();

        setAcceptedItems([]);
        setMessage('');
        setPoints(0);
        setIsCompleted(false);
    };

    const filteredItems = items.filter(item => item.mode === gameMode);

    return (
        <DndProvider backend={HTML5Backend}>
            <div
                className="min-h-screen flex flex-col items-center justify-center text-white p-4"
                style={{ backgroundImage: `url('/src/assets/gameback.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
                <h1 className="text-3xl font-bold mb-4 text-gray-950">Disaster Preparedness Kit</h1>
                <div className="text-lg mb-2 text-gray-950">Drag and drop all that will be helpful for us at times of Disaster</div>

                <div className="text-lg mb-2 text-gray-950">Points: {points}</div>

                {/* Mode Selector */}
                <div className="mb-4">
                    <button onClick={() => setGameMode('normal')} className="bg-gray-700 text-white p-2 rounded">Normal Mode</button>
                    <button onClick={() => setGameMode('earthquake')} className="bg-gray-700 text-white p-2 rounded ml-2">Earthquake Mode</button>
                    <button onClick={() => setGameMode('flood')} className="bg-gray-700 text-white p-2 rounded ml-2">Flood Mode</button>
                </div>

                <div className="flex flex-col md:flex-row md:space-x-4 w-full justify-center items-center">
                    <div className="bg-white text-gray-800 p-4 rounded-md shadow-lg flex flex-col justify-center items-center mb-4">
                        <h2 className="text-lg font-semibold mb-4">Items</h2>
                        <div className="flex flex-wrap justify-center items-center w-[20rem]">
                            {filteredItems.map((item) => (
                                <DraggableItem key={item.id} item={item} />
                            ))}
                        </div>
                    </div>
                    <div className="bg-white text-gray-800 p-4 rounded-md shadow-lg flex flex-col justify-center items-center">
                        <h2 className="text-lg font-semibold mb-4">Your Kit</h2>
                        <DropZone
                            onDrop={handleDrop}
                            acceptedItems={acceptedItems}
                            isFull={acceptedItems.length >= 4}
                            message={message}
                            gameMode={gameMode}
                        />
                    </div>
                </div>

                {isCompleted && (
                    <div className="bg-green-200 text-green-800 p-4 rounded-md shadow-lg">
                        <p className="text-lg font-semibold">Congratulations! You've completed the kit for {gameMode} mode.</p>
                        <button onClick={resetGame} className="bg-gray-700 text-white p-2 rounded mt-2">Play Again</button>
                    </div>
                )}
            </div>
        </DndProvider>
    );
}

export default InteractiveGame;
