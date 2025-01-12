import React from 'react';

const InsertForm = ({ inputValue, setInputValue, insertNode }) => (
  <div className="relative mb-5 border-black p-5 border-2 border-gray-300 w-[50%] right-0">
    <label className="block">Value to Insert</label>
    <input
      className="border p-2 rounded w-[50%]"
      type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
    />
    <button
      onClick={() => {
        insertNode(inputValue);
        setInputValue('');
      }}
      className="px-6 py-3 bg-blue-500 text-white rounded-lg ml-4"
    >
      Insert
    </button>
  </div>
);

export default InsertForm;
