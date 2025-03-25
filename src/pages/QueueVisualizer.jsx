import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Circle, LayoutGrid, LineChart } from 'lucide-react';

function QueueVisualizer() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate('/');
  };

  const handleQueueSelection = (queueType) => {
    if (queueType === "array") {
      navigate("/array-queue");
    } else if (queueType === "circular") {
      navigate("/circular-queue");
    } else {
      navigate("/queue-linear");
    }
  };

  const queueTypes = [
    {
      id: "array",
      title: "Array Queue",
      description: "Implementation using JavaScript arrays with dynamic resizing",
      icon: <LayoutGrid className="w-10 h-10 text-blue-500" />,
      color: "border-blue-200 hover:border-blue-500 hover:bg-blue-50"
    },
    {
      id: "circular",
      title: "Circular Queue",
      description: "Fixed-size implementation with wrap-around behavior (FIFO)",
      icon: <Circle className="w-10 h-10 text-green-500" />,
      color: "border-green-200 hover:border-green-500 hover:bg-green-50"
    },
    {
      id: "linear",
      title: "Linear Queue",
      description: "Fixed-size implementation without wrap-around (FIFO)",
      icon: <LineChart className="w-10 h-10 text-purple-500" />,
      color: "border-purple-200 hover:border-purple-500 hover:bg-purple-50"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6">
      <div className="flex items-center justify-between mb-8">
        <button
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          onClick={goBack}
        >
          <ArrowLeft size={18} />
          <span>Back</span>
        </button>
        <h1 className="text-2xl font-bold text-center">Queue Visualizer</h1>
        <div className="w-[72px]"></div> {/* Spacer for centering */}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {queueTypes.map((type) => (
          <div
            key={type.id}
            onClick={() => handleQueueSelection(type.id)}
            className={`p-6 border-2 rounded-lg cursor-pointer transition-all duration-200 ${type.color} hover:shadow-md`}
          >
            <div className="flex flex-col items-center text-center">
              <div className="mb-4">{type.icon}</div>
              <h2 className="text-lg font-semibold mb-2">{type.title}</h2>
              <p className="text-sm text-gray-600">{type.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-4 bg-gray-50 border border-gray-200 rounded-lg">
        <h2 className="text-lg font-semibold mb-2">What is a Queue?</h2>
        <p className="text-gray-700">
          A queue is a linear data structure that follows the First In, First Out (FIFO) principle.
          Elements are added at the rear (enqueue) and removed from the front (dequeue).
        </p>
        <div className="mt-4 flex justify-center">
          <div className="relative flex items-center">
            <div className="absolute -top-6 left-0 text-xs font-medium text-gray-500">Enqueue here</div>
            <div className="absolute -top-6 right-0 text-xs font-medium text-gray-500">Dequeue here</div>
            <div className="absolute -bottom-6 left-0 right-0 text-xs font-medium text-center text-gray-500">FIFO: First In, First Out</div>

            <svg width="300" height="60" viewBox="0 0 300 60">
              <rect x="0" y="10" width="300" height="40" fill="none" stroke="#d1d5db" strokeWidth="2" rx="4" />
              <rect x="10" y="20" width="50" height="20" fill="#93c5fd" rx="2" />
              <rect x="70" y="20" width="50" height="20" fill="#93c5fd" rx="2" />
              <rect x="130" y="20" width="50" height="20" fill="#93c5fd" rx="2" />
              <rect x="190" y="20" width="50" height="20" fill="#93c5fd" rx="2" />

              {/* Arrows */}
              <path d="M 0,5 L 15,5 L 10,10 L 15,5 L 10,0 Z" fill="#4b5563" transform="translate(285, 30)" />
              <path d="M 0,5 L 15,5 L 10,10 L 15,5 L 10,0 Z" fill="#4b5563" transform="translate(0, 30) rotate(180)" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QueueVisualizer;
