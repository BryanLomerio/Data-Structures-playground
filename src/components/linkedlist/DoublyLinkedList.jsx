import React from 'react';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";


const DoublyLinkedList = ({ list }) => {
  return (
    <div className="my-4">
      <h2 className="text-xl font-semibold">Doubly Linked List</h2>
      <div className="flex items-center space-x-4">
        {list.map((node, index) => (
          <div key={index} className="flex items-center">
            {index > 0 && <div className="text-gray-500"><FaArrowLeft />
                </div>}
            <div className="bg-green-500 text-white px-4 py-2 rounded-full">
              {node.value}
            </div>
            {index < list.length - 1 && (
              <div className="text-gray-500"><FaArrowRight /></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoublyLinkedList;
