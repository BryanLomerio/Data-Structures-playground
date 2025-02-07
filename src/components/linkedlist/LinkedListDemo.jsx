import React from 'react';
import { FaRegCircle } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoBanOutline } from "react-icons/io5";

const LinkedListDemo = ({ linkedList }) => (

  <div className="container mx-auto p-5 mb-5 border-2 border-gray-300">
    <div className="flex justify-center items-center space-x-2">
      <div className="flex border-2 border-green-600 bg-white rounded-lg w-40 h-[50px] justify-center items-center">
        <span className="mr-2 text-black-600 font-bold">HEAD</span>
        <FaRegCircle />
      </div>
      <span>
        <FaArrowRightLong />
      </span>
      {linkedList.map((node, index) => (
        <React.Fragment key={index}>
          <div className="flex border-2 border-green-400 bg-white rounded-lg w-40 h-[50px]">
            <div className="flex justify-center items-center w-1/2 border-r-2 border-green-600">
              <span className="text-black-600 font-bold">{node.value}</span>
            </div>
            <div className="flex justify-center items-center w-1/2">
              <span className="text-black-600 font-bold">NEXT</span>
            </div>
          </div>

          {index < linkedList.length - 1 && (
            <span>
              <FaArrowRightLong />
            </span>
          )}
        </React.Fragment>
      ))}

      {linkedList.length > 0 && (
        <span>
          <FaArrowRightLong />
        </span>
      )}
      <div className="flex border-2 border-green-600 bg-white rounded-lg w-40 h-[50px] justify-center items-center">
        <IoBanOutline className="mr-2" />
        <span className="text-black-600 font-bold">NULL</span>
      </div>
    </div>
  </div>
);

export default LinkedListDemo;
