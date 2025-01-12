import React from 'react'

function WhatIsArray() {
  return (
    <div className="mt-10">
        <h1 className="text-2xl font-bold mb-4">What is an Array?</h1>
        <p className="mb-4">
          An Array is like a row of boxes where each box can store something. You can imagine it like a row of mailboxes, and each mailbox can hold one letter. These mailboxes are organized in a line, and each mailbox has a special number that tells us where it is in the row.
        </p>
        <p className="mb-4">
          Each box in the array is called an element, and the number that tells us the position is called an index.
        </p>
        <p className="mb-4">
          So, if you have an array of numbers, it might look like this:
        </p>
        <pre className="bg-gray-200 p-4 rounded-md overflow-x-auto mb-4">
          {`[5, 10, 15, 20, 25]`}
        </pre>
        <p className="mb-4">
          In this case:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>The first box (index 0) has the number 5.</li>
          <li>The second box (index 1) has the number 10.</li>
          <li>The third box (index 2) has the number 15, and so on.</li>
        </ul>
        <h2 className="text-xl font-semibold mb-2">Key Points:</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>Index: The number that tells you where an element is in the array. The first element is at index 0.</li>
          <li>Element: The value stored inside the box. For example, 5, 10, etc.</li>
          <li>Fixed Size: Once you decide how many boxes (elements) you need, you can't change it easily.</li>
        </ul>
  
        <h2 className="text-xl font-semibold mb-2">How to Create an Array?</h2>
        <p className="mb-4">To create an array, you can just put a list of things inside square brackets []:</p>
        <pre className="bg-gray-200 p-4 rounded-md overflow-x-auto mb-4">
          {`let numbers = [5, 10, 15, 20, 25];`}
        </pre>
        <p className="mb-4">This creates an array called numbers with 5 elements.</p>
  
        <h2 className="text-xl font-semibold mb-2">What Can You Do with Arrays?</h2>
  
        <h3 className="text-lg font-medium mb-2">Accessing Elements:</h3>
        <p className="mb-4">You can get any element from the array by using its index:</p>
        <pre className="bg-gray-200 p-4 rounded-md overflow-x-auto mb-4">
          {`let numbers = [5, 10, 15, 20, 25];
  console.log(numbers[0]);  // Output: 5
  console.log(numbers[3]);  // Output: 20`}
        </pre>
  
        <h3 className="text-lg font-medium mb-2">Changing Elements:</h3>
        <p className="mb-4">You can change the value of an element at any index:</p>
        <pre className="bg-gray-200 p-4 rounded-md overflow-x-auto mb-4">
          {`let numbers = [5, 10, 15, 20, 25];
  numbers[2] = 30;  // Change the element at index 2 (which was 15) to 30
  console.log(numbers);  // Output: [5, 10, 30, 20, 25]`}
        </pre>
  
        <h3 className="text-lg font-medium mb-2">Adding Elements:</h3>
        <p className="mb-4">You can add new elements to the end of the array using <code>push()</code>:</p>
        <pre className="bg-gray-200 p-4 rounded-md overflow-x-auto mb-4">
          {`let numbers = [5, 10, 15, 20];
  numbers.push(25);  // Add 25 to the end of the array
  console.log(numbers);  // Output: [5, 10, 15, 20, 25]`}
        </pre>
  
        <h3 className="text-lg font-medium mb-2">Removing Elements:</h3>
        <p className="mb-4">You can remove elements from the end of the array using <code>pop()</code>:</p>
        <pre className="bg-gray-200 p-4 rounded-md overflow-x-auto mb-4">
          {`let numbers = [5, 10, 15, 20, 25];
  numbers.pop();  // Remove the last element
  console.log(numbers);  // Output: [5, 10, 15, 20]`}
        </pre>
        <p className="mb-4">Or remove the first element using <code>shift()</code>:</p>
        <pre className="bg-gray-200 p-4 rounded-md overflow-x-auto mb-4">
          {`let numbers = [5, 10, 15, 20];
  numbers.shift();  // Remove the first element
  console.log(numbers);  // Output: [10, 15, 20]`}
        </pre>
  
        <h3 className="text-lg font-medium mb-2">Finding the Length of an Array:</h3>
        <p className="mb-4">You can check how many elements are in the array using the <code>.length</code> property:</p>
        <pre className="bg-gray-200 p-4 rounded-md overflow-x-auto mb-4">
          {`let numbers = [5, 10, 15, 20, 25];
  console.log(numbers.length);  // Output: 5`}
        </pre>
  
        <h3 className="text-lg font-medium mb-2">Looping Through an Array:</h3>
        <p className="mb-4">You can go through each element of the array one by one using a loop:</p>
        <pre className="bg-gray-200 p-4 rounded-md overflow-x-auto mb-4">
          {`let numbers = [5, 10, 15, 20, 25];
  for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);  // Output: 5, 10, 15, 20, 25
  }`}
        </pre>
  </div>
  
  )
}

export default WhatIsArray