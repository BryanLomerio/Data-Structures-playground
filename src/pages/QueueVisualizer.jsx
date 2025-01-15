import React from "react";
import { useNavigate } from "react-router-dom";

function QueueVisualizer() {
    const navigate = useNavigate();

    const handleQueueSelection = (queueType) => {
        if (queueType === "array") {
            navigate("/array-queue");
        } else if (queueType === "linked-list") {
            navigate("/circular-queue");
        } else {
            navigate("/other-queue");
        }
    };

    return (
        <div className="max-w-xl mx-auto p-6 flex flex-col items-center justify-center min-h-screen">
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
