import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
    const navigate = useNavigate();

    const handleCardClick = (visualizerType) => {
        if (visualizerType === "array") {
            navigate("/array-visualizer");
        }
    };

    return (
        <div className="container mx-auto p-8">
            <h1 className="text-3xl font-bold mb-6">Data Structures Playground</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Card*/}
                <div
                    className="card p-4 border border-gray-300 rounded-lg shadow-lg cursor-pointer hover:bg-gray-200"
                    onClick={() => handleCardClick("array")}
                >
                    <h3 className="text-xl font-semibold">Array Visualizer</h3>
                    <p className="mt-2 text-sm text-gray-500">Click to explore Array visualization</p>
                </div>

            </div>
        </div>
    );
};

export default LandingPage;
