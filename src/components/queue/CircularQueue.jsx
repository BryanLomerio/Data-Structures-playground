import React, { useState } from 'react';

function CircularQueue() {
    const size = 5;
    const [queue, setQueue] = useState(new Array(size).fill(null));
    const [front, setFront] = useState(-1);
    const [rear, setRear] = useState(-1);
    const [notification, setNotification] = useState('');
    const [inputValue, setInputValue] = useState('');

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
            <h2 className="text-xl font-semibold mb-4">Circular Queue</h2>

            <div className="flex justify-center gap-4 mb-4">
                {queue.map((item, index) => (
                    <div
                        key={index}
                        className={`w-16 h-16 flex items-center justify-center border-2 ${item ? 'bg-blue-300' : 'bg-gray-300'
                            } rounded-full text-white`}
                    >
                        {item ? item : '-'}
                    </div>
                ))}
            </div>

            <div className="flex gap-4 mb-4">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="px-4 py-2 border-2 rounded-md"
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
                    className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                >
                    Enqueue
                </button>
                <button
                    onClick={dequeue}
                    className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
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
