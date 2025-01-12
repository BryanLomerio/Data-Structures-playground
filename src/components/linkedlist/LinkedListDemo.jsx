import React from 'react';
import { FaRegCircle } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoBanOutline } from "react-icons/io5";

const LinkedListDemo = ({ linkedList }) => (
  <div className="flex justify-between space-x-4 mb-5">
    <div className="flex-1 border-2 p-3">
      <div className="flex justify-center items-center space-x-4">
        {/* Head */}
        <div className="flex items-center border-2 border-green-600 rounded-full p-2">
          <span className="mr-2">Head</span>
          <FaRegCircle />
        </div>
        <FaArrowRightLong />

        {linkedList.map((node, index) => (
          <div key={index} className="flex items-center">
            <span className="px-4 py-2 border-2  border-green-400 rounded-full">{node.value}</span>
            {index < linkedList.length - 1 ? (
              <span className="mx-2"><FaArrowRightLong /></span>
            ) : (
              <span className="mx-2"><FaArrowRightLong /></span>
            )}
          </div>
        ))}

        {/* Null */}
        <div className="flex items-center border-2  border-green-600 rounded-full p-2 ml-4">
          <IoBanOutline className="mr-2" />
          <span>Null</span>
        </div>
      </div>
    </div>
  </div>
);

export default LinkedListDemo;
