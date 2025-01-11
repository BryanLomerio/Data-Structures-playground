import React, { useState } from 'react';
import SinglyLinkedList from "../components/linkedlist/SinglyLinkedList";
import DoublyLinkedList from '../components/linkedlist/DoublyLinkedList';
import CircularLinkedList from '../components/linkedlist/CircularLinkedList';
import NodeInput from '../components/linkedlist/NodeInput';

const LinkedListVisualizer = () => {
  const [inputValue, setInputValue] = useState('');
  const [singlyList, setSinglyList] = useState([]);
  const [doublyList, setDoublyList] = useState([]);
  const [circularList, setCircularList] = useState([]);

  const handleAddNode = (listType) => {
    const newNode = { value: inputValue };

    if (listType === 'singly') {
      setSinglyList([...singlyList, newNode]);
    } else if (listType === 'doubly') {
      const prevNode = doublyList[doublyList.length - 1];
      newNode.prev = prevNode;
      setDoublyList([...doublyList, newNode]);
    } else if (listType === 'circular') {
      const updatedList = [...circularList, newNode];
      setCircularList(updatedList);
    }
    setInputValue('');
  };

  const handleRemoveNode = (listType) => {
    if (listType === 'singly') setSinglyList(singlyList.slice(0, -1));
    if (listType === 'doubly') setDoublyList(doublyList.slice(0, -1));
    if (listType === 'circular') setCircularList(circularList.slice(0, -1));
  };

  return (
    <div className="flex justify-center min-h-screen p-4">
      <div className="text-center w-full max-w-4xl">
        <h1 className="text-3xl font-bold mb-4">Linked List Visualizer</h1>
        
        {/* Center NodeInput */}
        <div className="flex justify-center mb-4">
          <NodeInput inputValue={inputValue} setInputValue={setInputValue} />
        </div>

        <div className="flex justify-center gap-4 my-4">
          <button
            onClick={() => handleAddNode('singly')}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Add to Singly List
          </button>
          <button
            onClick={() => handleAddNode('doubly')}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Add to Doubly List
          </button>
          <button
            onClick={() => handleAddNode('circular')}
            className="bg-yellow-500 text-white px-4 py-2 rounded"
          >
            Add to Circular List
          </button>
        </div>
        <SinglyLinkedList list={singlyList} />
        <DoublyLinkedList list={doublyList} />
        <CircularLinkedList list={circularList} />
      </div>
    </div>
  );
};

export default LinkedListVisualizer;
