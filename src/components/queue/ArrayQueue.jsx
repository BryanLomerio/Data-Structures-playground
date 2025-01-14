import React, { useState } from "react";

function ArrayQueue() {

    const [queue, setQueue] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const enqueue = () => {
        if (inputValue !== "") {
            setQueue([...queue, inputValue]);
            setInputValue("");
        }
    };

    const dequeue = () => {
        if (queue.length > 0) {
            const newQueue = [...queue];
            newQueue.shift();
            setQueue(newQueue);
        }
    };

    const peek = () => {
        if (queue.length > 0) {
            alert(`Front element: ${queue[0]}`);
        }
    };

    const isEmpty = () => {
        alert(queue.length === 0 ? "Queue is empty" : "Queue is not empty");
    };

    const size = () => {
        alert(`Queue size: ${queue.length}`);
    };

    const clear = () => {
        setQueue([]);
    };

    return (
        <div className="max-w-xl mx-auto p-6">
            <h1 className="text-2xl font-bold text-center mb-4">Array Queue Visualizer (FIFO)</h1>

            {/* Queue Display */}
            <div className="flex justify-center mb-4">
                {queue.length > 0 ? (
                    <div className="flex space-x-2">
                        {queue.map((element, index) => (
                            <div
                                key={index}
                                className={`p-4 rounded-lg text-white w-24 text-center transition-all duration-300 ${index === 0 ? "bg-yellow-500" : "bg-teal-500"
                                    }`}
                            >
                                {element}
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-gray-400 italic">Queue is empty</div>
                )}
            </div>

            {/* Input and buttons */}
            <div className="flex justify-between items-center space-x-4 mb-4">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Enter element"
                    className="px-4 py-2 border border-gray-300 rounded-lg w-1/3 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
                <div className="flex space-x-4">
                    <button
                        onClick={enqueue}
                        className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Enqueue
                    </button>
                    <button
                        onClick={dequeue}
                        className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                    >
                        Dequeue
                    </button>
                    <button
                        onClick={peek}
                        className="px-6 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    >
                        Peek
                    </button>
                </div>
            </div>

            <div className="flex justify-between space-x-4 mb-4">
                <button
                    onClick={isEmpty}
                    className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
                >
                    Is Empty
                </button>
                <button
                    onClick={size}
                    className="px-6 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
                >
                    Size
                </button>
                <button
                    onClick={clear}
                    className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600"
                >
                    Clear
                </button>
            </div>
        </div>
    );
}

export default ArrayQueue;
