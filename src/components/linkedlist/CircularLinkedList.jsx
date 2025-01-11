import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { FaArrowRotateLeft } from "react-icons/fa6";

const CircularLinkedList = ({ list }) => {
  return (
    <div className="my-4">
      <h2 className="text-xl font-semibold">Circular Linked List</h2>
      <div className="flex items-center space-x-4">
        {list.map((node, index) => (
          <div key={index} className="flex items-center">
            <div className="bg-yellow-500 text-white px-4 py-2 rounded-full">
              {node.value}
            </div>
            {index < list.length - 1 && (
              <div className="text-gray-500"><FaArrowRight /></div>
            )}
          </div>
        ))}
        {list.length > 0 && (
          <div className="text-gray-500"><FaArrowRotateLeft /></div>
        )}
      </div>
    </div>
  );
};

export default CircularLinkedList;
