import React from 'react';

const ArrayDisplay = ({ array, highlightedElement }) => {
    return (
        <div className="flex gap-2 mb-4 overflow-x-auto">
            {array.map((el, index) => (
                <div
                    key={index}
                    className={`bg-gray-200 p-4 rounded-lg shadow-md ${el === highlightedElement ? "border-4 border-green-500" : ""}`}
                >
                    {el}
                </div>
            ))}
        </div>
    );
};

export default ArrayDisplay;
