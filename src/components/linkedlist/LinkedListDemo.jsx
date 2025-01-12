import React from 'react';
import { FaRegCircle } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoBanOutline } from "react-icons/io5";

const LinkedListDemo = ({ linkedList }) => (
  <div className="flex justify-between space-x-4 mb-5">
    <div className="flex-1 border-2 p-3">
      <h3 className="text-center font-semibold">Demo Visualization</h3>
      <div className="flex justify-center items-center space-x-4">
        <span className='border border-black rounded-full p-2'>Head <FaRegCircle /></span>
        <span><FaArrowRightLong /></span>
        {linkedList.map((node, index) => (
          <div key={index} className="flex items-center">
            <span className="px-4 py-2 border border-red-600 rounded-full">{node.value}</span>
            {node.next && <span className="mx-2"><FaArrowRightLong /></span>}
          </div>
        ))}
        <span className="ml-4 border border-black rounded-full p-2">Null <IoBanOutline /></span>
      </div>
    </div>
  </div>
);

export default LinkedListDemo;
