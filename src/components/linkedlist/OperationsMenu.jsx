
import React from "react";

const OperationsMenu = ({
  operation,
  setOperation,
  insertSubOperation,
  setInsertSubOperation,
  deleteSubOperation,
  setDeleteSubOperation,
  selectedUtility,
  setSelectedUtility
}) => (
  <div className="mb-5 border-solid border-2 border-gray-300 p-4 rounded-md">
    <label className="block mb-2">Operation</label>
    <select
      className="border p-2 rounded w-full"
      value={operation}
      onChange={(e) => setOperation(e.target.value)}
    >
      <option value="insert">Insert</option>
      <option value="delete">Delete</option>
      <option value="utilities">Utilities</option>
    </select>

    {operation === "insert" && (
      <div className="mt-4">
        <label className="block mb-2">Select Insert Sub-operation</label>
        <div className="flex flex-col space-y-2">
          <label className="flex items-center">
            <input
              type="radio"
              name="insertSubOperation"
              value="insertBack"
              checked={insertSubOperation === "insertBack"}
              onChange={() => setInsertSubOperation("insertBack")}
              className="mr-2"
            />
            insertBack
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="insertSubOperation"
              value="insertFront"
              checked={insertSubOperation === "insertFront"}
              onChange={() => setInsertSubOperation("insertFront")}
              className="mr-2"
            />
            insertFront
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="insertSubOperation"
              value="insertAt"
              checked={insertSubOperation === "insertAt"}
              onChange={() => setInsertSubOperation("insertAt")}
              className="mr-2"
            />
            insertAt
          </label>
        </div>
      </div>
    )}

    {operation === "delete" && (
      <div className="mt-4">
        <label className="block mb-2">Select Delete Sub-operation</label>
        <div className="flex flex-col space-y-2">
          <label className="flex items-center">
            <input
              type="radio"
              name="deleteSubOperation"
              value="remove"
              checked={deleteSubOperation === "remove"}
              onChange={() => setDeleteSubOperation("remove")}
              className="mr-2"
            />
            remove
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="deleteSubOperation"
              value="removeFront"
              checked={deleteSubOperation === "removeFront"}
              onChange={() => setDeleteSubOperation("removeFront")}
              className="mr-2"
            />
            removeFront
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="deleteSubOperation"
              value="removeBack"
              checked={deleteSubOperation === "removeBack"}
              onChange={() => setDeleteSubOperation("removeBack")}
              className="mr-2"
            />
            removeBack
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="deleteSubOperation"
              value="removeAt"
              checked={deleteSubOperation === "removeAt"}
              onChange={() => setDeleteSubOperation("removeAt")}
              className="mr-2"
            />
            removeAt
          </label>
        </div>
      </div>
    )}

    {operation === "utilities" && (
      <div className="mt-4">
        <label className="block mb-2">Select Utility Operation</label>
        <div className="flex flex-col space-y-2">
        <label className="flex items-center">
        <input
          type="radio"
          name="utility"
          value="reverse"
          checked={selectedUtility === 'reverse'}
          onChange={() => setSelectedUtility('reverse')}
          className="mr-2"
        />
        reverse
      </label>


          <label className="flex items-center">
            <input
              type="radio"
              name="utilityOption"
              value="update"
              checked={selectedUtility === "update"}
              onChange={() => setSelectedUtility("update")}
              className="mr-2"
            />
            updateData
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="utilityOption"
              value="replace"
              checked={selectedUtility === "replace"}
              onChange={() => setSelectedUtility("replace")}
              className="mr-2"
            />
            replace
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="utilityOption"
              value="clear"
              checked={selectedUtility === "clear"}
              onChange={() => setSelectedUtility("clear")}
              className="mr-2"
            />
            clear
          </label>
        </div>
      </div>
    )}
  </div>
);

export default OperationsMenu;
