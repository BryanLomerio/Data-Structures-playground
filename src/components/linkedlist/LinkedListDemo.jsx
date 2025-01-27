import React from 'react';
import { FaRegCircle } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoBanOutline } from "react-icons/io5";

const LinkedListDemo = ({ linkedList }) => (
  <div className="flex justify-between space-x-4 mb-5">
    <div className="flex-1 border-2 p-10">
      <div className="flex justify-center items-center space-x-4 flex-wrap">
        {/* Head */}
        <div className="flex items-center border-2 border-green-600 rounded-lg w-40 h-[50px] justify-center">
          <span className="mr-2">HEAD</span>
          <FaRegCircle />
        </div>

        <FaArrowRightLong />

        {linkedList.map((node, index) => (
          <div key={index} className="flex items-center space-x-4">

            {/* Node */}
            <div className="flex border-2 border-green-400 w-40 h-[50px]">

              <div className="flex justify-center items-center w-1/2 border-r-2 border-green-600">
                <span className="text-green-600 font-bold">{node.value}</span>
              </div>
              <div className="flex w-1/2"></div>
            </div>

            {/* Arrow */}
            {index < linkedList.length - 1 && (
              <span className="mx-2">
                <FaArrowRightLong />
              </span>
            )}
          </div>
        ))}

        {linkedList.length > 0 && (
          <span className="mx-2">
            <FaArrowRightLong />
          </span>
        )}

        {/* Null */}
        <div className="flex items-center border-2 border-green-600 rounded-lg w-40 h-[50px] justify-center ml-4">
          <IoBanOutline className="mr-2" />
          <span>NULL</span>
        </div>
      </div>
    </div>
  </div>
);

export default LinkedListDemo;
