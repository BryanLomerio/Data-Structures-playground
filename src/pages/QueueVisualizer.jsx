import React from "react";
import { useNavigate } from "react-router-dom";
import { IoArrowBackSharp } from "react-icons/io5";

function QueueVisualizer() {
    const navigate = useNavigate();

    const goBack = () => {
        navigate('/');
    };


    const handleQueueSelection = (queueType) => {
        if (queueType === "array") {
            navigate("/array-queue");
        } else if (queueType === "linked-list") {
            navigate("/circular-queue");
        } else {
            navigate("/queue-linear");
        }
    };

    return (
        <div className="max-w-xl mx-auto p-6 flex flex-col items-center justify-center min-h-screen">
            <button
                className="flex items-center gap-2 text-black-600 flex-start hover:text-gray-800 mb-10 mr-[450px] absolute top-20"
                onClick={goBack}
            >
                <IoArrowBackSharp />
                Back
            </button>

            <h1 className="text-2xl font-bold text-center mb-4">Queue Visualizer</h1>

            {/* Queue Type Selection */}
            <div className="flex justify-center space-x-4 mb-6">
                <div
                    onClick={() => handleQueueSelection("array")}
                    className="p-4 border-2 cursor-pointer rounded-lg hover:bg-gray-100"
                >
                    <h2 className="text-lg font-semibold whitespace-nowrap text-center">Array Queue</h2>
                </div>
                <div
                    onClick={() => handleQueueSelection("linked-list")}
                    className="p-4 border-2 cursor-pointer rounded-lg hover:bg-gray-100"
                >
                    <h2 className="text-lg font-semibold whitespace-nowrap">Circular Queue (FIFO)</h2>
                </div>
                <div
                    onClick={() => handleQueueSelection("other")}
                    className="p-4 border-2 cursor-pointer rounded-lg hover:bg-gray-100"
                >
                    <h2 className="text-lg font-semibold whitespace-nowrap">Queue (Linear)</h2>
                </div>
            </div>
        </div>
    );
}

export default QueueVisualizer;
