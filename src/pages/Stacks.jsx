import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoArrowBackSharp } from "react-icons/io5";
import WhatIsStack from "../components/stacks/WhatIsStack";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Stacks() {
  const [stack, setStack] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [lastPushed, setLastPushed] = useState(null);
  const [lastPopped, setLastPopped] = useState(null);
  const [notification, setNotification] = useState("");
  const [peekIndex, setPeekIndex] = useState("");
  const [peekedItem, setPeekedItem] = useState(null);
  const [peekedColor, setPeekedColor] = useState("bg-gray-200");
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationType, setAnimationType] = useState(null);
  const [animationItem, setAnimationItem] = useState(null);

  const stackContainerRef = useRef(null);
  const navigate = useNavigate();

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  function goBack() {
    navigate("/");
  }

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        setNotification("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  const pushToStack = () => {
    if (inputValue.trim() === "") return;

    setAnimationType("push");
    setAnimationItem(inputValue);
    setIsAnimating(true);

    setTimeout(() => {
      setStack((prevStack) => {
        const newStack = [...prevStack, inputValue];
        setLastPushed(inputValue);
        setNotification(`Pushed: ${inputValue}`);
        return newStack;
      });
      setInputValue("");
      setIsAnimating(false);
    }, 500);
  };

  const popFromStack = () => {
    if (stack.length === 0) {
      Swal.fire({
        icon: "error",
        title: "Stack is empty!",
        text: "Cannot pop from an empty stack.",
      });
      return;
    }

    const poppedItem = stack[stack.length - 1];
    setAnimationType("pop");
    setAnimationItem(poppedItem);
    setIsAnimating(true);

    setTimeout(() => {
      setStack((prevStack) => prevStack.slice(0, -1));
      setLastPopped(poppedItem);
      setNotification(`Popped: ${poppedItem}`);
      setIsAnimating(false);
    }, 500);
  };

  const clearStack = () => {
    if (stack.length === 0) return;

    setAnimationType("clear");
    setIsAnimating(true);

    setTimeout(() => {
      setStack([]);
      setLastPushed(null);
      setLastPopped(null);
      setNotification("Stack cleared");
      setIsAnimating(false);
    }, 500);
  };

  const handlePeek = () => {
    if (peekIndex.startsWith("0") && peekIndex !== "0") {
      Swal.fire({
        icon: "error",
        title: "Invalid index!",
        text: "Index cannot have leading zeros.",
      });
      setPeekedItem(null);
      setPeekedColor("bg-gray-200");
      return;
    }

    if (stack.length === 0) {
      Swal.fire({
        icon: "error",
        title: "Stack is empty!",
        text: "Please add items to the stack before peeking.",
      });
      setPeekedItem(null);
      setPeekedColor("bg-gray-200");
      return;
    }

    const index = Number.parseInt(peekIndex, 10);

    if (
      isNaN(index) ||
      index < 0 ||
      index >= stack.length ||
      peekIndex.trim() === ""
    ) {
      Swal.fire({
        icon: "error",
        title: "Invalid index!",
        text: `Valid index range: 0 to ${stack.length - 1}`,
      });
      setPeekedItem(null);
      setPeekedColor("bg-gray-200");
      return;
    }

    const item = stack[index];
    setPeekedItem(item);
    setPeekedColor("bg-yellow-200");
    setNotification(`Peeked at index ${index}: ${item}`);

    setTimeout(() => {
      setPeekedColor("bg-gray-200");
    }, 2000);
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="mb-8 flex items-center justify-between">
        <button
          className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
          onClick={goBack}
        >
          <IoArrowBackSharp size={18} />
          <span>Back</span>
        </button>
        <h1 className="text-2xl font-bold text-center text-gray-800">
          Stack Visualizer
        </h1>
        <div className="w-20"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Stack Visualization */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="bg-gradient-to-r from-gray-700 to-gray-800 px-6 py-4">
            <h2 className="text-xl font-semibold text-white">
              Stack Visualization
            </h2>
            <p className="text-white text-sm">Last In, First Out (LIFO)</p>
          </div>

          <div className="p-6">
            <div
              ref={stackContainerRef}
              className="relative flex flex-col-reverse items-center border-2 border-green-500 rounded-lg p-4 w-full mx-auto h-96 overflow-hidden"
            >
              {stack.length > 0 ? (
                <AnimatePresence>
                  {stack.map((item, index) => (
                    <motion.div
                      key={index}
                      layout
                      initial={{ opacity: 0, y: -20 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        backgroundColor:
                          peekedItem === item ? peekedColor : "rgb(21, 128, 61)",
                      }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.3 }}
                      className={`text-center text-white py-3 px-5 w-full rounded-md shadow-md mb-2 ${
                        peekedItem === item ? peekedColor : "bg-green-700"
                      }`}
                    >
                      {item}
                    </motion.div>
                  ))}
                </AnimatePresence>
              ) : (
                <div className="flex flex-col items-center justify-center h-full w-full">
                  <svg
                    className="w-16 h-16 text-gray-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                  <p className="text-gray-500 mt-4">Stack is empty</p>
                  <p className="text-gray-400 text-sm mt-2">
                    Use the controls to add elements
                  </p>
                </div>
              )}

              {/* Animation for push/pop */}
              {isAnimating && animationType === "push" && (
                <motion.div
                  initial={{ opacity: 0, y: -100 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute top-0 text-center text-white py-3 px-5 w-full rounded-md shadow-md bg-green-700"
                >
                  {animationItem}
                </motion.div>
              )}

              {isAnimating && animationType === "pop" && (
                <motion.div
                  initial={{ opacity: 1, y: 0 }}
                  animate={{ opacity: 0, y: 100 }}
                  className="absolute bottom-0 text-center text-white py-3 px-5 w-full rounded-md shadow-md bg-green-700"
                >
                  {animationItem}
                </motion.div>
              )}

              {isAnimating && animationType === "clear" && (
                <motion.div
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 0 }}
                  className="absolute inset-0 bg-red-100"
                />
              )}
            </div>

            {/* Stack info */}
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                  Stack Size
                </div>
                <div className="font-medium text-gray-800">
                  {stack.length} elements
                </div>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                  Top Element
                </div>
                <div className="font-medium text-gray-800">
                  {stack.length > 0 ? stack[stack.length - 1] : "None"}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stack Controls */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="bg-gradient-to-r from-gray-700 to-gray-800 px-6 py-4">
            <h2 className="text-xl font-semibold text-white">Stack Controls</h2>
            <p className="text-gray-300 text-sm">
              Manage your stack data structure
            </p>
          </div>

          <div className="p-6 space-y-6">
            {/* Push Controls */}
            <div className="space-y-2">
              <label
                htmlFor="push-input"
                className="block text-sm font-medium text-gray-700"
              >
                Push Element
              </label>
              <div className="flex">
                <input
                  id="push-input"
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Enter value to push"
                  className="flex-1 border border-gray-300 rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <button
                  onClick={pushToStack}
                  disabled={!inputValue.trim()}
                  className="bg-gray-600 hover:bg-gray-500 text-white px-4 py-2 rounded-r-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Push
                </button>
              </div>
            </div>

            {/* Peek Controls */}
            <div className="space-y-2">
              <label
                htmlFor="peek-input"
                className="block text-sm font-medium text-gray-700"
              >
                Peek at Index
              </label>
              <div className="flex">
                <input
                  id="peek-input"
                  type="text"
                  value={peekIndex}
                  onChange={(e) => setPeekIndex(e.target.value)}
                  placeholder="Enter index to peek"
                  className="flex-1 border border-gray-300 rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                  onClick={handlePeek}
                  className="ml-2 bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-r-md transition-colors"
                >
                  Peek
                </button>
              </div>
              <p className="text-xs text-gray-500">
                Valid indices: 0 to {Math.max(0, stack.length - 1)}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={popFromStack}
                disabled={stack.length === 0}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Pop Element
              </button>
              <button
                onClick={clearStack}
                disabled={stack.length === 0}
                className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Clear Stack
              </button>
            </div>

            {/* Status Display */}
            <div className="mt-6">
              <div className="space-y-3">
                <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                  <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                    Last Pushed
                  </div>
                  <div className="font-medium text-gray-800">
                    {lastPushed || "None"}
                  </div>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                  <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                    Last Popped
                  </div>
                  <div className="font-medium text-gray-800">
                    {lastPopped || "None"}
                  </div>
                </div>
              </div>

              <AnimatePresence>
                {notification && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-4 p-3 bg-green-100 text-green-800 rounded-lg text-sm"
                  >
                    {notification}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* What is Stack Section */}
      <div className="mt-8">
        <button
          onClick={toggleVisibility}
          className="flex items-center justify-between w-full px-6 py-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center">
            <svg
              className="w-6 h-6 text-gray-500 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="text-lg font-medium text-gray-800">
              What is a Stack?
            </span>
          </div>
          <svg
            className={`w-5 h-5 text-gray-500 transform transition-transform ${
              isVisible ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        <AnimatePresence>
          {isVisible && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 overflow-hidden"
            >
              <WhatIsStack />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Stacks;
