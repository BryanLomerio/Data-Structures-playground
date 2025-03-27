import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/DataStructureCard";
import Array from "../assets/array.png";
import LinkedList from "../assets/LinkedList.png";
import Stacks from "../assets/stacks.png";
import Queues from "../assets/Queues.png";
import Hash from "../assets/hash.png";
import Soon from "../assets/soon.avif";
import Tree from "../assets/tree.png";
import Github from "../components/Github";
import { Search } from "react-feather";

const LandingPage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleCardClick = (visualizerType) => {
    const routes = {
      array: "/array-visualizer",
      "linked-list": "/linked-list-visualizer",
      stacks: "/stacks",
      queues: "/queues",
      "hash-tables": "/hash-tables",
      trees: "/trees",
      graphs: "/graphs",
      heaps: "/heaps",
      sets: "/sets",
      tries: "/tries",
    };

    navigate(routes[visualizerType]);
  };

  const visualizers = [
    { id: "array", title: "Array Visualizer", image: Array, available: true },
    { id: "linked-list", title: "Linked List Visualizer", image: LinkedList, available: true },
    { id: "stacks", title: "Stacks Visualizer", image: Stacks, available: true },
    { id: "queues", title: "Queues Visualizer", image: Queues, available: true },
    { id: "hash-tables", title: "Hash Tables Visualizer", image: Hash, available: true },
    { id: "trees", title: "Trees Visualizer", image: Tree, available: true },
    { id: "graphs", title: "Graphs Visualizer", image: Soon, available: false },
    { id: "heaps", title: "Heaps Visualizer", image: Soon, available: false },
    { id: "sets", title: "Sets Visualizer", image: Soon, available: false },
    { id: "tries", title: "Tries Visualizer", image: Soon, available: false },
  ];

  const filteredVisualizers = visualizers.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Github />

      {/* Header with Search */}
      <header className="sticky top-0 bg-white shadow-sm z-10 transition-all duration-300">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <h1 className="text-xl font-bold text-black">Data Structure Visualization</h1>

            <div className="relative w-full sm:w-64 md:w-72">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search visualizers..."
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        {filteredVisualizers.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 animate-fadeIn">
            {filteredVisualizers.map((item) => (
              <div
                key={item.id}
                className={`transition-all duration-300 transform hover:-translate-y-1 ${!item.available && "opacity-75"}`}
              >
                <Card
                  title={item.title}
                  description={
                    item.available
                      ? `Click to explore ${item.title.split(' ')[0]}`
                      : "Coming soon"
                  }
                  onClick={() => item.available && handleCardClick(item.id)}
                  image={item.image}
                  className={`h-full ${item.available ? "cursor-pointer" : "cursor-default"}`}
                  available={item.available}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500">No visualizers found matching "{searchQuery}"</p>
            <button
              onClick={() => setSearchQuery("")}
              className="mt-3 px-4 py-2 bg-gray-200 rounded-md text-sm hover:bg-gray-300 transition-colors"
            >
              Clear Search
            </button>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-4 mt-auto">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Data Structure Visualizer</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
