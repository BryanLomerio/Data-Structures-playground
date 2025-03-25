import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Circle, LayoutGrid, LineChart } from "lucide-react";

function QueueVisualizer() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/");
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
      color:
        "border-blue-200 hover:border-blue-500 hover:bg-blue-50",
    },
    {
      id: "circular",
      title: "Circular Queue",
      description:
        "Fixed-size implementation with wrap-around behavior (FIFO)",
      icon: <Circle className="w-10 h-10 text-green-500" />,
      color:
        "border-green-200 hover:border-green-500 hover:bg-green-50",
    },
    {
      id: "linear",
      title: "Linear Queue",
      description: "Fixed-size implementation without wrap-around (FIFO)",
      icon: <LineChart className="w-10 h-10 text-purple-500" />,
      color:
        "border-purple-200 hover:border-purple-500 hover:bg-purple-50",
    },
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

      {/* Improved "What is a Queue?" Section */}
      <div className="mt-8 p-6 bg-gray-50 border border-gray-200 rounded-lg">
        <h2 className="text-xl font-bold mb-4 text-gray-800 text-center">
          What is a Queue?
        </h2>
        <p className="text-gray-700 text-center mb-6">
          A queue is a linear data structure that follows the First In, First Out (FIFO)
          principle. Elements are added at the rear (enqueue) and removed from the front
          (dequeue).
        </p>
        <div className="flex flex-col items-center">
          <div className="flex justify-between w-full mb-2 px-4">
            <span className="text-sm text-gray-500">Enqueue Here</span>
            <span className="text-sm text-gray-500">Dequeue Here</span>
          </div>
          <svg width="320" height="80" viewBox="0 0 320 80" className="mb-2">
            <rect
              x="0"
              y="20"
              width="320"
              height="40"
              fill="none"
              stroke="#d1d5db"
              strokeWidth="2"
              rx="4"
            />
            <rect x="20" y="30" width="50" height="20" fill="#93c5fd" rx="2" />
            <rect x="90" y="30" width="50" height="20" fill="#93c5fd" rx="2" />
            <rect x="160" y="30" width="50" height="20" fill="#93c5fd" rx="2" />
            <rect x="230" y="30" width="50" height="20" fill="#93c5fd" rx="2" />
            {/* Arrows */}
            <path
              d="M 0,40 L 20,40 L 15,35 L 20,40 L 15,45 Z"
              fill="#4b5563"
            />
            <path
              d="M 320,40 L 300,40 L 305,35 L 300,40 L 305,45 Z"
              fill="#4b5563"
            />
          </svg>
          <span className="text-sm text-gray-500">
            FIFO: First In, First Out
          </span>
        </div>
      </div>
    </div>
  );
}

export default QueueVisualizer;
