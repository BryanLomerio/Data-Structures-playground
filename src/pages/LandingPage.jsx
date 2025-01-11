import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";

const LandingPage = () => {
    const navigate = useNavigate();

    const handleCardClick = (visualizerType) => {
        if (visualizerType === "array") {
            navigate("/array-visualizer");
        } else if (visualizerType === "linked-list") {
            navigate("/linked-list-visualizer");
        }
    };

    return (
        <div className="container mx-auto p-8">
            <h1 className="text-3xl font-bold mb-6 text-center">DS Play</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card
                    title="Array Visualizer"
                    description="Click to explore Array visualization"
                    onClick={() => handleCardClick("array")}
                />
                <Card
                    title="Linked List Visualizer"
                    description="Click to explore Linked List visualization"
                    onClick={() => handleCardClick("linked-list")}
                />
            </div>
        </div>
    );
};

export default LandingPage;
