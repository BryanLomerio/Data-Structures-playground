const UtilityOperations = ({ selectedUtility, setSelectedUtility, updateDataValue, setUpdateDataValue }) => {
    return (
      <div className="mb-5">
        <label className="block">Select Utility Operation</label>
        <div>
          <label>
            <input
              type="radio"
              name="utilityOption"
              value="reverse"
              checked={selectedUtility === 'reverse'}
              onChange={(e) => setSelectedUtility(e.target.value)}
            />
            Reverse
          </label>
          <label>
            <input
              type="radio"
              name="utilityOption"
              value="updateData"
              checked={selectedUtility === 'updateData'}
              onChange={(e) => setSelectedUtility(e.target.value)}
            />
            Update Data
          </label>
          <label>
            <input
              type="radio"
              name="utilityOption"
              value="replace"
              checked={selectedUtility === 'replace'}
              onChange={(e) => setSelectedUtility(e.target.value)}
            />
            Replace
          </label>
          <label>
            <input
              type="radio"
              name="utilityOption"
              value="clear"
              checked={selectedUtility === 'clear'}
              onChange={(e) => setSelectedUtility(e.target.value)}
            />
            Clear
          </label>
        </div>
  
        {selectedUtility === 'updateData' && (
          <div className="mb-5">
            <label className="block">New Data Value</label>
            <input
              className="border p-2 rounded w-full"
              type="text"
              value={updateDataValue}
              onChange={(e) => setUpdateDataValue(e.target.value)}
            />
          </div>
        )}
      </div>
    );
  };
  
  export default UtilityOperations;
  