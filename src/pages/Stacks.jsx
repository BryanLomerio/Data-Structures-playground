import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { IoArrowBackSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import WhatIsStack from "../components/stacks/WhatIsStack";
import Swal from 'sweetalert2';

function Stacks() {
  const [stack, setStack] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [lastPushed, setLastPushed] = useState(null);
  const [lastPopped, setLastPopped] = useState(null);
  const [Log, setNotification] = useState('Pushed:');
  const [peekIndex, setPeekIndex] = useState('');
  const [peekedItem, setPeekedItem] = useState(null);
  const [peekedColor, setPeekedColor] = useState('bg-gray-200');

  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  function goBack() {
    navigate('/');
  }

  const pushToStack = () => {
    if (inputValue.trim() === '') return;
    setStack((prevStack) => {
      const newStack = [...prevStack, inputValue];
      setLastPushed(inputValue);
      setNotification(`Pushed: ${inputValue}`);
      return newStack;
    });
    setInputValue('');
  };

  const popFromStack = () => {
    if (stack.length === 0) return;
    const poppedItem = stack[stack.length - 1];
    setStack((prevStack) => prevStack.slice(0, -1));
    setLastPopped(poppedItem);
    setNotification(`Popped: ${poppedItem}`);
  };

  const clearStack = () => {
    setStack([]);
    setLastPushed(null);
    setLastPopped(null);
    setNotification('Stack cleared');
  };

  const handlePeek = () => {
    if (peekIndex.startsWith('0') && peekIndex !== '0') {
      Swal.fire({
        icon: 'error',
        title: 'Invalid index!',
        text: 'Index cannot have leading zeros.',
      });
      setPeekedItem(null);
      setPeekedColor('bg-gray-200');
      return;
    }

    if (stack.length === 0) {
      Swal.fire({
        icon: 'error',
        title: 'Stack is empty!',
        text: 'Please add items to the stack before peeking.',
      });
      setPeekedItem(null);
      setPeekedColor('bg-gray-200');
      return;
    }

    const index = parseInt(peekIndex, 10);

    if (isNaN(index) || index < 0 || index >= stack.length || peekIndex.trim() === '') {
      Swal.fire({
        icon: 'error',
        title: 'Invalid index!',
        text: `Valid index range: 0 to ${stack.length - 1}`,
      });
      setPeekedItem(null);
      setPeekedColor('bg-gray-200');
      return;
    }

    const item = stack[index];
    setPeekedItem(item);
    setPeekedColor('bg-yellow-200');
    setNotification(`Peeked at index ${index}: ${item}`);

    setTimeout(() => {
      setPeekedColor('bg-gray-200');
    }, 1000);
  };

  return (
    <div className="max-w-7xl mx-auto mt-10 p-5 rounded-lg flex justify-center items-center space-x-6">
      <button className="absolute top-5 left-[400px] flex items-center gap-2 mt-[60px] text-black-600 hover:text-black-800 mb-5" onClick={goBack}>
        <IoArrowBackSharp /> Back
      </button>

      <div className="w-full sm:w-1/2 md:w-1/3 p-6 space-y-6">
        {/* Stack Display */}
        <div className="w-full h-96 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Current Stack:</h2>
          <div className="flex flex-col-reverse items-center border-2 border-green-600 p-4 w-full max-w-xs mx-auto h-full overflow-y-auto border-t-0">
            {stack.length > 0 ? (
              stack.map((item, index) => (
                <motion.div
                  key={index}
                  className={`text-center py-3 px-5 w-full rounded-md shadow-md mb-2 ${peekedItem === item ? peekedColor : 'bg-gray-200'}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {item}
                </motion.div>
              ))
            ) : (
              <p className="text-gray-500">Stack is empty</p>
            )}
          </div>
        </div>
      </div>

      {/* Stack Controller */}
      <div className="w-full sm:w-1/2 md:w-1/3 p-6 space-y-6 mt-20">
        <div className="w-full rounded-lg p-6 space-y-4">
          <div className="flex justify-between items-center mb-4">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Enter value"
              className="border border-gray-300 p-2 w-100 rounded-md"
            />
            <div className="space-x-2 flex">
              <button
                onClick={pushToStack}
                className="ml-2 bg-gray-500 text-white p-2 rounded-md w-20"
              >
                Push
              </button>
              <button
                onClick={popFromStack}
                className="bg-gray-500 text-white p-2 rounded-md w-20"
              >
                Pop
              </button>
              <button
                onClick={clearStack}
                className="bg-gray-500 text-white p-2 rounded-md w-20"
              >
                Clear
              </button>
            </div>
          </div>
          <div className="flex items-center mb-4">
            <input
              type="text"
              value={peekIndex}
              onChange={(e) => setPeekIndex(e.target.value)}
              placeholder="Peek index"
              className="border border-gray-300 p-2 w-2/3 rounded-md"
            />
            <button
              onClick={handlePeek}
              className="ml-2 bg-gray-500 text-white p-2 rounded-md w-20"
            >
              Peek
            </button>
          </div>

          {/* Legend and Notification */}
          <div className="space-y-4">
            <div className="text-sm space-y-2">
              <div className="bg-gray-100 p-2 rounded-md">
                <strong>Current Top:</strong> {stack.length > 0 ? stack[stack.length - 1] : ''}
              </div>
              <div className="bg-gray-100 p-2 rounded-md">
                <strong>Most Recent Push:</strong> {lastPushed || ''}
              </div>
              <div className="bg-gray-100 p-2 rounded-md">
                <strong>Most Recent Pop:</strong> {lastPopped || ''}
              </div>
              <div className="bg-gray-100 p-2 rounded-md">
                <strong>Stack Length:</strong> {stack.length}
              </div>
            </div>

            {/* Notification */}
            <div className={`text-sm p-3 rounded-md ${Log ? 'bg-green-200 text-green-600' : 'bg-gray-200 text-gray-600'}`}>
              {Log}
            </div>
          </div>
        </div>
      </div>


      {/*      <div className="absolute bottom-10">
        <button
          onClick={toggleVisibility}
          className="flex items-center justify-between px-4 py-2 bg-gray-600 text-white rounded-md"
        >
          What is Stack List?
          <span className="ml-2">
            {isVisible ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 14l-7-7-7 7"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 10l-7 7-7-7"
                />
              </svg>
            )}
          </span>
        </button>
        {isVisible && <WhatIsStack />}
      </div> */}
    </div>
  );
}

export default Stacks;
