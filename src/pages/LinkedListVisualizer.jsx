import React, { useState } from 'react';
import LinkedListDemo from '../components/linkedlist/LinkedListDemo';
import OperationsMenu from '../components/linkedlist/OperationsMenu';
import { IoArrowBackSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import WhatIsLinkedList from "../components/linkedlist/WhatIsLinkedList";


const LinkedListVisualizer = () => {
  const [linkedList, setLinkedList] = useState([]);
  const [operation, setOperation] = useState('insert');
  const [inputValue, setInputValue] = useState('');
  const [insertIndex, setInsertIndex] = useState('');
  const [selectedDelete, setSelectedDelete] = useState(null);
  const [selectedUtility, setSelectedUtility] = useState(null);
  const [insertSubOperation, setInsertSubOperation] = useState('insertBack');
  const [deleteSubOperation, setDeleteSubOperation] = useState('remove');
  const [generatedCode, setGeneratedCode] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const navigate = useNavigate();
  const goBack = () => navigate('/');

  const insertNode = (value) => {
    const newNode = { value, next: null };
  
    if (insertSubOperation === 'insertBack') {
      if (linkedList.length === 0) {
        setLinkedList([newNode]);
      } else {
        const newList = linkedList.map((node, index) => {
          if (index === linkedList.length - 1) {
            return { ...node, next: newNode };
          }
          return node;
        });
        setLinkedList([...newList, newNode]);
      }
    } else if (insertSubOperation === 'insertFront') {
      const newList = [{ ...newNode, next: linkedList[0] || null }, ...linkedList];
      setLinkedList(newList);
    } else if (insertSubOperation === 'insertAt') {
      const index = parseInt(insertIndex);
      if (!isNaN(index) && index >= 0 && index <= linkedList.length) {
        const newList = [];
        linkedList.forEach((node, i) => {
          if (i === index - 1) {
            newList.push({ ...node, next: newNode });
          } else if (i === index) {
            newNode.next = node;
          }
          newList.push(node);
        });
        if (index === 0) newNode.next = linkedList[0] || null;
        setLinkedList([...linkedList.slice(0, index), newNode, ...linkedList.slice(index)]);
      }
    }
  };

  const deleteNode = (value) => {
    setLinkedList(linkedList.filter((node) => node.value !== value));
  };

  const removeFrontNode = () => {
    if (linkedList.length > 0) {
      setLinkedList(linkedList.slice(1));
    }
  };

  const removeBackNode = () => {
    if (linkedList.length > 0) {
      setLinkedList(linkedList.slice(0, -1));
    }
  };

  const reverseList = () => {
    if (linkedList.length > 0) {
      const reversed = [...linkedList].reverse(); 
      setLinkedList(reversed); 
      console.log("Reversed list:", reversed);
    } else {
      console.log("List is empty; nothing to reverse.");
    }
  };
  
  const clearList = () => {
    setLinkedList([]);
    console.log("List cleared.");
  };
  
  const update = (oldValue, newValue) => {
    if (!oldValue || !newValue) {
      console.log("Invalid inputs for update.");
      return;
    }
    const updatedList = linkedList.map(node =>
      node.value === oldValue ? { ...node, value: newValue } : node
    );
    setLinkedList(updatedList);
    console.log(`Updated node with value ${oldValue} to ${newValue}.`);
  };
  
  const replace = (index, newValue) => {
    const parsedIndex = parseInt(index);
    if (isNaN(parsedIndex) || parsedIndex < 0 || parsedIndex >= linkedList.length) {
      console.log("Invalid index for replace.");
      return;
    }
    const replacedList = [...linkedList];
    replacedList[parsedIndex] = { value: newValue, next: replacedList[parsedIndex]?.next || null };
    setLinkedList(replacedList);
    console.log(`Replaced value at index ${parsedIndex} with ${newValue}.`);
  };
  

  // execute
  const handleExecute = () => {
    if (operation === 'insert') {
      insertNode(inputValue);
      setGeneratedCode(`insertNode('${inputValue}')`);
      setInputValue('');
    } else if (operation === 'delete') {
      if (deleteSubOperation === 'removeAt') {
        const index = parseInt(insertIndex);
        if (!isNaN(index) && index >= 0 && index < linkedList.length) {
          setLinkedList(linkedList.filter((_, i) => i !== index));
          setGeneratedCode(`deleteNodeAt(${insertIndex})`);
        }
      } else if (deleteSubOperation === 'removeFront') {
        removeFrontNode();
        setGeneratedCode('removeFrontNode()');
      } else if (deleteSubOperation === 'removeBack') {
        removeBackNode();
        setGeneratedCode('removeBackNode()');
      } else {
        deleteNode(inputValue);
        setGeneratedCode(`deleteNode('${inputValue}')`);
      }
      setSelectedDelete(null);
    } else if (operation === 'utilities') {
      if (selectedUtility === 'reverse') {
        reverseList();
        setGeneratedCode('reverseList()');
      } else if (selectedUtility === 'clear') {
        clearList();
        setGeneratedCode('clearList()');
      } else if (selectedUtility === 'update') {
        update(inputValue, insertIndex); 
        setGeneratedCode(`update('${inputValue}', '${insertIndex}')`);
      } else if (selectedUtility === 'replace') {
        replace(parseInt(insertIndex), inputValue);
        setGeneratedCode(`replace(${insertIndex}, '${inputValue}')`);
      }
    }
  };


  // explanation
  const getExplanation = () => {
    if (operation === 'insert') {
      if (insertSubOperation === 'insertBack') 
        return "insertBack() - Also referred to as push(), this operation inserts a new node at the end of the linked list. It typically takes O(n) time to traverse the list and find the end. However, since we maintain a separate pointer to the tail of the list, it executes in O(1) time, directly appending the new node to the end.";
  
      if (insertSubOperation === 'insertFront') 
        return "insertFront() - Adds a new node at the front of the linked list. This operation is O(1), as it directly updates the head of the list by pointing to the new node, which in turn points to the previous head.";
  
      if (insertSubOperation === 'insertAt') 
        return "insertAt() - Inserts a node at a specific index in the list. This operation has an O(n) time complexity due to the need to traverse the list to find the correct position. After finding the position, it updates the next pointers to insert the new node at the specified index.";
    } 
    
    else if (operation === 'delete') {
      if (deleteSubOperation === 'remove') 
        return " deleteNode() - Removes a specific node by value from the linked list. This operation requires O(n) time complexity, as it involves traversing the list to find the node with the given value, then adjusting the pointers accordingly to remove it from the list.";
  
      if (deleteSubOperation === 'removeFront') 
        return "removeFrontNode() - Removes the node at the front of the list. This operation is O(1) since it only requires updating the head pointer to the next node in the list, making it an efficient operation for removing the first element.";
  
      if (deleteSubOperation === 'removeBack') 
        return "removeBackNode() - Removes the node at the end of the list. Typically, this operation would be O(n), but since we maintain a pointer to the tail, it can be performed in O(1) by simply adjusting the tail pointer to the previous node and updating its next pointer to null.";
  
      if (deleteSubOperation === 'removeAt') 
        return "removeAt() - Removes a node at a specific index. This operation requires O(n) time, as it needs to traverse the list to the specified index, then adjust the pointers of the nodes before and after it to remove it from the list.";
    } 
    
    else if (operation === 'utilities') {
      if (selectedUtility === 'reverse') 
        return "reverseList() - Reverses the entire linked list. This operation involves iterating through the list and reversing the direction of the next pointers. It has an O(n) time complexity, where n is the number of nodes in the list, as it requires a full pass over the list.";
  
      if (selectedUtility === 'clear') 
        return "clearList() - Clears all nodes in the list by resetting the list to an empty array. This operation runs in O(1) time, as it only involves setting the head pointer to null or an empty array, without needing to traverse the list.";
  
      if (selectedUtility === 'update') 
        return "updateData() - Updates the data (value) of a specific node by its current value. This operation has an O(n) time complexity since it needs to search through the list to find the node with the old value, then update its data with the new value.";
  
      if (selectedUtility === 'replace') 
        return "replaceData() - Replaces a node at a specific index with a new value. This operation also has an O(n) time complexity as it requires traversing the list to find the node at the given index, then replacing its value while maintaining its next pointer.";
    }
  };
  
  return (
    <div className="max-w-7xl mx-auto mt-10 p-5 rounded-lg">
      <button className="flex items-center gap-2 text-black-600 hover:text-black-800 mb-5" onClick={goBack}>
        <IoArrowBackSharp /> Back
      </button>
      <LinkedListDemo linkedList={linkedList} />

      {/* Operations Section */}
      <div className="flex space-x-6 mb-5">
        <div className="flex-1">
          <OperationsMenu
            operation={operation}
            setOperation={setOperation}
            insertSubOperation={insertSubOperation}
            setInsertSubOperation={setInsertSubOperation}
            deleteSubOperation={deleteSubOperation}
            setDeleteSubOperation={setDeleteSubOperation}
            selectedUtility={selectedUtility}
            setSelectedUtility={setSelectedUtility}
          />
        </div>

        <div className="flex-1 border-l-2 pl-6">
          <h2 className="text-xl font-semibold">{operation.charAt(0).toUpperCase() + operation.slice(1)} Operation</h2>
          <p className="mt-4">{getExplanation()}</p>
        </div>

        <div className="flex-1 border-l-2 pl-6">
          <div className="relative mb-5 border-black p-5 border-2 border-gray-300 w-full">
            <label className="block">Data</label>
            <input
              className="border p-2 rounded w-[100%]"
              placeholder='Node Data'
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              disabled={
                (operation !== 'insert' && operation !== 'delete' && operation !== 'utilities') ||
                (deleteSubOperation === 'removeFront' || deleteSubOperation === 'removeBack' || selectedUtility === 'clear' || selectedUtility === 'reverse')
              }
              style={{
                cursor: (operation !== 'insert' && operation !== 'delete' && operation !== 'utilities') || (deleteSubOperation === 'removeFront' || deleteSubOperation === 'removeBack' || selectedUtility === 'clear' || selectedUtility === 'reverse') ? 'not-allowed' : 'auto',
              }}
            />

            <div className="mt-4">
              <label className="block mb-2">Index (0-based)</label>
              <input
                className="border p-2 rounded w-[100%]"
                type="number"
                value={insertIndex}
                onChange={(e) => setInsertIndex(e.target.value)}
                min="0"
                disabled={
                  !(operation === 'insert' && insertSubOperation === 'insertAt') && 
                  !(operation === 'delete' && deleteSubOperation === 'removeAt') &&
                  !(operation === 'utilities' && (selectedUtility === 'update' || selectedUtility === 'replace')) || 
                  (deleteSubOperation === 'removeFront' || deleteSubOperation === 'removeBack' || selectedUtility === 'clear' || selectedUtility === 'reverse')
                }
              />
            </div>
          </div>

          <button className="w-full p-2 text-white bg-gray-600 hover:bg-gray-800 rounded" onClick={handleExecute}>
            Execute
          </button>
        </div>
      </div>

      <div className="mt-5">
        <h3 className="text-lg font-semibold">Method</h3>
        <pre className="bg-gray-100 p-4 rounded">{generatedCode}</pre>
      </div>

      <div className="mt-10">
      <button
        onClick={toggleVisibility}
        className="flex items-center justify-between px-4 py-2 bg-gray-600 text-white rounded-md mb-4"
      >
      What is Linked List?
        <span className="ml-2">
          {isVisible ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 14l-7-7-7 7"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 10l-7 7-7-7"
              />
            </svg>
          )}
        </span>
      </button>
      {isVisible && <WhatIsLinkedList />}
    </div>

    </div>
  );
};

export default LinkedListVisualizer;
