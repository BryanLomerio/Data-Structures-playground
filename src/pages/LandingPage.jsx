import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import Array from "../assets/array.png";
import LinkedList from "../assets/LinkedList.png";
import Stacks from "../assets/stacks.png";
import Queues from "../assets/Queues.png";
import Hash from "../assets/hash.png";
import Soon from "../assets/soon.avif";



const LandingPage = () => {
    const navigate = useNavigate();

    const handleCardClick = (visualizerType) => {
        if (visualizerType === "array") {
            navigate("/array-visualizer");
        } else if (visualizerType === "linked-list") {
            navigate("/linked-list-visualizer");
        } else if (visualizerType === "stacks") {
            navigate("/stacks");
        } else if (visualizerType === "queues") {
            navigate("/queues");
        } else if (visualizerType === "hash-tables") {
            navigate("/hash-tables");
        } else if (visualizerType === "trees") {
            navigate("/trees");
        } else if (visualizerType === "graphs") {
            navigate("/graphs");
        } else if (visualizerType === "heaps") {
            navigate("/heaps");
        } else if (visualizerType === "sets") {
            navigate("/sets");
        } else if (visualizerType === "tries") {
            navigate("/tries");
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
                    image={Array} 
                />
                <Card
                    title="Linked List Visualizer"
                    description="Click to explore Linked List visualization"
                    onClick={() => handleCardClick("linked-list")}
                    image={LinkedList} 
                />
                <Card
                    title="Stacks Visualizer"
                    description="Click to explore Stacks visualization"
                    onClick={() => handleCardClick("stacks")}
                    image={Soon}
                />
                <Card
                    title="Queues Visualizer"
                    description="Click to explore Queues visualization"
                    onClick={() => handleCardClick("queues")}
                    image={Soon}
                />
                <Card
                    title="Hash Tables Visualizer"
                    description="Click to explore Hash Tables visualization"
                    onClick={() => handleCardClick("hash-tables")}
                    image={Soon}
                />
                <Card
                    title="Trees Visualizer"
                    description="Click to explore Trees visualization"
                    onClick={() => handleCardClick("trees")}
                    image={Soon}
                />
                <Card
                    title="Graphs Visualizer"
                    description="Click to explore Graphs visualization"
                    onClick={() => handleCardClick("graphs")}
                    image={Soon}
                />
                <Card
                    title="Heaps Visualizer"
                    description="Click to explore Heaps visualization"
                    onClick={() => handleCardClick("heaps")}
                    image={Soon}
                />
                <Card
                    title="Sets Visualizer"
                    description="Click to explore Sets visualization"
                    onClick={() => handleCardClick("sets")}
                    image={Soon}
                />
                <Card
                    title="Tries Visualizer"
                    description="Click to explore Tries visualization"
                    onClick={() => handleCardClick("tries")}
                    image={Soon}
                />
            </div>
        </div>
    );
};

export default LandingPage;
