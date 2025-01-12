import React from 'react';

const OperationsMenu = ({ operation, setOperation }) => (
  <div className="mb-5 border-solid border-2 border-black w-[20%] p-4 rounded-md">
    <label className="block mb-2">Select Operation</label>
    <select
      className="border p-2 rounded w-full"
      value={operation}
      onChange={(e) => setOperation(e.target.value)}
    >
      <option value="insert">Insert</option>
      <option value="delete">Delete</option>
      <option value="utilities">Utilities</option>
    </select>
  </div>
);

export default OperationsMenu;
