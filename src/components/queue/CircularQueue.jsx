import React, { useState, useEffect } from 'react';
import { IoArrowBackSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function CircularQueue() {
    const size = 5;
    const [queue, setQueue] = useState(new Array(size).fill(null));
    const [front, setFront] = useState(-1);
    const [rear, setRear] = useState(-1);
    const [notification, setNotification] = useState('');
    const [inputValue, setInputValue] = useState('');

    // Navigation
    const navigate = useNavigate();
    const goBack = () => {
        navigate('/queues');
    };

    useEffect(() => {
        setNotification('Welcome! You can now add items to the queue.');
    }, []);

    const enqueue = (item) => {
        if ((rear + 1) % size === front) {
            setNotification('Queue is full! Cannot enqueue.');
            return;
        }
        if (front === -1) {
            setFront(0);
        }
        const newRear = (rear + 1) % size;
        const newQueue = [...queue];
        newQueue[newRear] = item;
        setQueue(newQueue);
        setRear(newRear);
        setNotification(`Enqueued: '${item}'. Next action: Dequeue or Enqueue another item.`);
    };

    // Dequeue operation (with circular wrap)
    const dequeue = () => {
        if (front === -1) {
            setNotification('Queue is empty! Cannot dequeue.');
            return;
        }
        const dequeuedItem = queue[front];
        const newQueue = [...queue];
        newQueue[front] = null;

        if (front === rear) {
            setFront(-1);
            setRear(-1);
        } else {
            setFront((front + 1) % size);
        }
        setQueue(newQueue);
        setNotification(`Dequeued: '${dequeuedItem}'. Next action: Enqueue an item or dequeue again.`);
    };

    return (
        <div className="flex flex-col items-center p-4">
            <h2 className="text-xl font-semibold mb-4">Circular Queue (FIFO)</h2>
            <button
                className="flex items-center gap-2 text-black-600 flex-start hover:text-gray-800 mb-10 mr-[400px] relative mt-10"
                onClick={goBack}
            >
                <IoArrowBackSharp />
                Back
            </button>

            <div className="flex justify-center gap-4 w-[450px] mb-4 bg-transparent p-5 border-2">
                {queue.map((item, index) => (
                    <div
                        key={index}
                        className={`w-16 h-16 flex items-center justify-center border-2 
                        ${item ? 'bg-green-600' : 'bg-gray-300'} 
                        rounded-full text-white 
                        ${index === front ? 'border-red-500' : ''} 
                        ${index === rear ? 'border-blue-500' : ''}
                        ${front === -1 ? '' : (front === index ? 'border-red-500' : '')}`}
                    >
                        {item ? item : '-'}
                    </div>
                ))}
            </div>

            <div className="flex gap-2 mb-4">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="px-2 border-2 rounded-md"
                    placeholder="Enter item"
                />

                <button
                    onClick={() => {
                        if (inputValue) {
                            enqueue(inputValue);
                            setInputValue('');
                        } else {
                            setNotification('Please enter an item.');
                        }
                    }}
                    className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-800"
                    disabled={(rear + 1) % size === front}
                >
                    Enqueue
                </button>
                <button
                    onClick={dequeue}
                    className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-800"
                    disabled={front === -1}
                >
                    Dequeue
                </button>
            </div>

            <div className="mt-4 p-2 bg-yellow-200 rounded-md text-center">
                {notification}
            </div>
        </div>
    );
}

export default CircularQueue;
