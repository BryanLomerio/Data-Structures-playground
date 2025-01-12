import React from 'react';

const UtilitiesForm = ({ reverseList, clearList, selectedUtility, setSelectedUtility }) => (
  <div className="mb-5">
    <label className="block mb-2">Select Utility Operation</label>
    <div className="flex flex-col">
      <label>
        <input
          type="radio"
          name="utilityOption"
          value="reverse"
          checked={selectedUtility === 'reverse'}
          onChange={(e) => setSelectedUtility(e.target.value)}
        />
        <span className="ml-2">Reverse</span>
      </label>
      <label>
        <input
          type="radio"
          name="utilityOption"
          value="clear"
          checked={selectedUtility === 'clear'}
          onChange={(e) => setSelectedUtility(e.target.value)}
        />
        <span className="ml-2">Clear</span>
      </label>
    </div>
    <button
      onClick={() => {
        if (selectedUtility === 'reverse') reverseList();
        if (selectedUtility === 'clear') clearList();
      }}
      className="px-6 py-3 bg-green-500 text-white rounded-lg mt-4"
    >
      Execute
    </button>
  </div>
);

export default UtilitiesForm;
