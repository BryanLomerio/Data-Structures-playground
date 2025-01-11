import React from 'react';

const NodeInput = ({ inputValue, setInputValue }) => {
  return (
    <div className="mb-4 flex items-center gap-2">
      <input
        type="text"
        placeholder="Enter node value"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="border border-gray-300 rounded px-3 py-2"
      />
    </div>
  );
};

export default NodeInput;
