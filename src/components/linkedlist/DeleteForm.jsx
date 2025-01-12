import React from 'react';

const DeleteForm = ({ linkedList, selectedDelete, setSelectedDelete, deleteNode }) => (
  <div className="mb-5">
    <label className="block">Select Node to Delete</label>
    <select
      className="border p-2 rounded w-full"
      value={selectedDelete}
      onChange={(e) => setSelectedDelete(e.target.value)}
    >
      <option value="">-- Select --</option>
      {linkedList.map((node, index) => (
        <option key={index} value={node.value}>
          {node.value}
        </option>
      ))}
    </select>
    <button
      onClick={() => {
        deleteNode(selectedDelete);
        setSelectedDelete(null);
      }}
      className="px-6 py-3 bg-red-500 text-white rounded-lg mt-4"
    >
      Delete
    </button>
  </div>
);

export default DeleteForm;
