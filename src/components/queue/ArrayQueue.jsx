import React, { useState } from "react";
import { IoArrowBackSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function ArrayQueue() {
    const [queue, setQueue] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const maxSize = 5;

    // Nav
    const navigate = useNavigate();
    const goBack = () => {
        navigate('/queues');
    };

    const enqueue = () => {
        if (inputValue !== "") {

            if (queue.length >= maxSize) {

                const newQueue = [...queue.slice(1), inputValue];
                setQueue(newQueue);
            } else {
                setQueue([...queue, inputValue]);
            }
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
        alert(`Queue size: ${queue.length} / ${maxSize}`);
    };

    const clear = () => {
        setQueue([]);
    };

    return (
        <div className="max-w-3xl mx-auto p-6">
            <h1 className="text-2xl font-bold text-center mb-4">Array Queue Visualizer (FIFO)</h1>
            <button
                className="flex items-center gap-2 text-black-600 flex-start hover:text-gray-800 mb-10 mr-[400px] relative mt-10"
                onClick={goBack}
            >
                <IoArrowBackSharp />
                Back
            </button>

            {/* Queue Container */}
            <div className="border border-gray-300 p-4 bg-white bg-opacity-50 shadow-md">
                <div className="flex justify-center items-center h-32 overflow-x-auto max-w-full">
                    {queue.length > 0 ? (
                        <div className="flex space-x-2">
                            {queue.map((element, index) => (
                                <div
                                    key={index}
                                    className={`p-4 text-white w-24 text-center transition-all duration-300 ${index === 0 ? "bg-yellow-500" : "bg-teal-500"
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
            </div>

            {/* Queue Size Indication */}
            <div className="flex justify-center mt-4">
                <span className={`text-lg font-semibold ${queue.length === maxSize ? "text-red-600" : "text-teal-600"}`}>
                    {queue.length === maxSize ? "Queue is Full" : `Queue size: ${queue.length} / ${maxSize}`}
                </span>
            </div>

            {/* Input and Buttons */}
            <div className="flex flex-col items-center mt-6 space-y-4">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Enter element"
                    className="px-4 py-2 border border-gray-300 rounded-lg w-full md:w-1/3 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
                <div className="flex flex-wrap justify-center gap-4">
                    <button
                        onClick={enqueue}
                        className="px-6 py-2 bg-gray-600 text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        disabled={queue.length >= maxSize}
                    >
                        Enqueue
                    </button>
                    <button
                        onClick={dequeue}
                        className="px-6 py-2 bg-gray-600 text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                    >
                        Dequeue
                    </button>
                    <button
                        onClick={peek}
                        className="px-6 py-2 bg-gray-600 text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    >
                        Peek
                    </button>
                    <button
                        onClick={isEmpty}
                        className="px-6 py-2 bg-gray-600 text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
                    >
                        Is Empty
                    </button>
                    <button
                        onClick={size}
                        className="px-6 py-2 bg-gray-600 text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    >
                        Size
                    </button>
                    <button
                        onClick={clear}
                        className="px-6 py-2 bg-gray-600 text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-red-600"
                    >
                        Clear
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ArrayQueue;
