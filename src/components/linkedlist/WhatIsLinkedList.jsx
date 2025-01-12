function WhatIsLinkedList() {

  return (
    <div className="mt-10">
        <div>
          <h1 className="text-2xl font-bold mb-4">What is a Linked List?</h1>
          <p className="mb-4">
            A Linked List is a linear data structure where elements (called nodes) are stored in memory. Each node contains two parts: the data and a reference (or link) to the next node in the sequence. Unlike arrays, linked lists do not store elements in contiguous memory locations. Instead, each node points to the next node, forming a chain.
          </p>

          <p className="mb-4">
            Think of it like a chain of people, where each person has their own information (data) and knows who comes next (link).
          </p>

          <h2 className="text-xl font-semibold mb-2">Key Points:</h2>
          <ul className="list-disc pl-6 mb-4">
            <li>Each node has two parts: data and a link to the next node.</li>
            <li>The first node is called the head, and the last node points to null (end of the list).</li>
            <li>Unlike arrays, linked lists can easily insert or remove elements without shifting other elements.</li>
          </ul>

          <h2 className="text-xl font-semibold mb-2">Types of Linked Lists:</h2>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>Singly Linked List:</strong> Each node points to the next node, and the last node points to null.</li>
            <li><strong>Doubly Linked List:</strong> Each node has a reference to both the next node and the previous node.</li>
            <li><strong>Circular Linked List:</strong> The last node points back to the first node, creating a circle.</li>
          </ul>

          <h2 className="text-xl font-semibold mb-2">Linked List Methods</h2>

          <h3 className="text-lg font-medium mb-2">Insert:</h3>
          <p className="mb-4">
            To add a new node to the linked list, we can insert it at the beginning, middle, or end of the list. Here is an example of inserting a node at the beginning:
          </p>
          <pre className="bg-gray-200 p-4 rounded-md overflow-x-auto mb-4">
            {`// Node structure
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// LinkedList class with insert at beginning
class LinkedList {
  constructor() {
    this.head = null;
  }

  insertAtBeginning(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }
}`}  
          </pre>

          <h3 className="text-lg font-medium mb-2">Delete:</h3>
          <p className="mb-4">
            To remove a node from the linked list, we can delete it from the beginning, middle, or end. Here's how we delete the first node:
          </p>
          <pre className="bg-gray-200 p-4 rounded-md overflow-x-auto mb-4">
            {`// Delete node at the beginning
deleteAtBeginning() {
  if (!this.head) {
    console.log('List is empty!');
    return;
  }
  this.head = this.head.next;
}`}
          </pre>

          <h3 className="text-lg font-medium mb-2">Utility Operations:</h3>
          
          <h4 className="text-md font-semibold mb-2">Traverse (Display the List):</h4>
          <p className="mb-4">
            A utility operation to display all elements of the linked list:
          </p>
          <pre className="bg-gray-200 p-4 rounded-md overflow-x-auto mb-4">
            {`// Traverse the list and print data
traverse() {
  let current = this.head;
  while (current) {
    console.log(current.data);
    current = current.next;
  }
}`}
          </pre>

          <h4 className="text-md font-semibold mb-2">Search:</h4>
          <p className="mb-4">
            To find a specific node in the list, you can search for it:
          </p>
          <pre className="bg-gray-200 p-4 rounded-md overflow-x-auto mb-4">
            {`// Search for a value
search(data) {
  let current = this.head;
  while (current) {
    if (current.data === data) {
      console.log('Node found:', current);
      return;
    }
    current = current.next;
  }
  console.log('Node not found!');
}`}
          </pre>

          <h4 className="text-md font-semibold mb-2">Find the Length:</h4>
          <p className="mb-4">
            A utility to find the length of the linked list (number of nodes):
          </p>
          <pre className="bg-gray-200 p-4 rounded-md overflow-x-auto mb-4">
            {`// Find the length of the list
length() {
  let count = 0;
  let current = this.head;
  while (current) {
    count++;
    current = current.next;
  }
  console.log('Length of the list:', count);
}`}
          </pre>

          <h3 className="text-lg font-medium mb-2">Example Usage:</h3>
          <pre className="bg-gray-200 p-4 rounded-md overflow-x-auto mb-4">
            {`const list = new LinkedList();
list.insertAtBeginning(10);
list.insertAtBeginning(20);
list.traverse(); // Output: 20, 10
list.deleteAtBeginning();
list.traverse(); // Output: 10
list.search(10); // Output: Node found: 10`}
          </pre>
        </div>
      
    </div>
  );
}

export default WhatIsLinkedList;
