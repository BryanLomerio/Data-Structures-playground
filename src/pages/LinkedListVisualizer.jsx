import React, { useState } from 'react';
import LinkedListDemo from '../components/linkedlist/LinkedListDemo';
import OperationsMenu from '../components/linkedlist/OperationsMenu';
import InsertForm from '../components/linkedlist/InsertForm';
import DeleteForm from '../components/linkedlist/DeleteForm';
import UtilitiesForm from '../components/linkedlist/UtilitiesForm';
import { IoArrowBackSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const LinkedListVisualizer = () => {
  const [linkedList, setLinkedList] = useState([]);
  const [operation, setOperation] = useState('insert');
  const [inputValue, setInputValue] = useState('');
  const [insertIndex, setInsertIndex] = useState('');
  const [selectedDelete, setSelectedDelete] = useState(null);
  const [selectedUtility, setSelectedUtility] = useState(null);


  const navigate = useNavigate();
     const goBack = () => {
         navigate('/');
     };

  const insertNode = (value) => {
    const newNode = { value, next: null };
    if (linkedList.length === 0) {
      setLinkedList([newNode]);
    } else {
      const newList = [...linkedList];
      newList[newList.length - 1].next = newNode;
      setLinkedList([...newList, newNode]);
    }
  };

  const insertAtSpecificIndex = (value, index) => {
    if (index < 0 || index > linkedList.length) return;
    const newNode = { value, next: null };
    const newList = [...linkedList];
    newList.splice(index, 0, newNode);
    setLinkedList(newList);
  };

  const deleteNode = (value) => {
    setLinkedList(linkedList.filter((node) => node.value !== value));
  };

  const reverseList = () => setLinkedList([...linkedList].reverse());
  const clearList = () => setLinkedList([]);

  return (
    <div className="max-w-7xl mx-auto mt-10 p-5 rounded-lg">
          <button
           className="flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-5"
           onClick={goBack}
            >
            <IoArrowBackSharp />
                        Back
            </button>
      <LinkedListDemo linkedList={linkedList} />
      <OperationsMenu operation={operation} setOperation={setOperation} />
      {operation === 'insert' && (
        <InsertForm
          inputValue={inputValue}
          setInputValue={setInputValue}
          insertNode={insertNode}
        />
      )}
      {operation === 'delete' && (
        <DeleteForm
          linkedList={linkedList}
          selectedDelete={selectedDelete}
          setSelectedDelete={setSelectedDelete}
          deleteNode={deleteNode}
        />
      )}
      {operation === 'utilities' && (
        <UtilitiesForm
          reverseList={reverseList}
          clearList={clearList}
          selectedUtility={selectedUtility}
          setSelectedUtility={setSelectedUtility}
        />
      )}
    </div>
  );
};

export default LinkedListVisualizer;
