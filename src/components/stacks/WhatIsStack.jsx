function WhatIsStack() {
    return (
        <div className="mt-10 relative">
            <div>
                <h1 className="text-2xl font-bold mb-4">What is a Stack?</h1>
                <p className="mb-4">
                    A Stack is a linear data structure that follows the <strong>Last In, First Out (LIFO)</strong> principle.
                    This means the last item added to the stack is the first one to be removed.
                </p>

                <p className="mb-4">
                    Think of it like a stack of plates: the last plate you add to the top is the first one you'll take off.
                </p>

                <h2 className="text-xl font-semibold mb-2">Key Points:</h2>
                <ul className="list-disc pl-6 mb-4">
                    <li>The stack follows a LIFO (Last In, First Out) order.</li>
                    <li>The last item added (pushed) to the stack is the first one to be removed (popped).</li>
                    <li>Stacks are used in many algorithms like undo/redo operations in software, function calls, etc.</li>
                </ul>

                <h2 className="text-xl font-semibold mb-2">Stack Operations:</h2>
                <ul className="list-disc pl-6 mb-4">
                    <li><strong>Push:</strong> Adds an element to the top of the stack.</li>
                    <li><strong>Pop:</strong> Removes the element from the top of the stack.</li>
                    <li><strong>Peek:</strong> Views the top element without removing it.</li>
                    <li><strong>isEmpty:</strong> Checks if the stack is empty.</li>
                </ul>

                <h2 className="text-xl font-semibold mb-2">Stack Implementation in JavaScript</h2>
                <p className="mb-4">
                    Below is an example of how a Stack is implemented in JavaScript:
                </p>

                <pre className="bg-gray-200 p-4 rounded-md overflow-x-auto mb-4">
                    {`// Stack class with push, pop, and peek methods
  class Stack {
    constructor() {
      this.items = [];
    }
  
    push(item) {
      this.items.push(item);
    }
  
    pop() {
      if (this.isEmpty()) {
        console.log('Stack is empty!');
        return;
      }
      return this.items.pop();
    }
  
    peek() {
      if (this.isEmpty()) {
        console.log('Stack is empty!');
        return;
      }
      return this.items[this.items.length - 1];
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  }
  
  // Example usage:
  const stack = new Stack();
  stack.push(10);
  stack.push(20);
  console.log(stack.peek()); // Output: 20
  stack.pop();
  console.log(stack.peek()); // Output: 10
  stack.pop();
  console.log(stack.isEmpty()); // Output: true
            `}
                </pre>

                <h3 className="text-lg font-medium mb-2">Push:</h3>
                <p className="mb-4">
                    The <strong>push</strong> method adds an element to the top of the stack.
                </p>
                <pre className="bg-gray-200 p-4 rounded-md overflow-x-auto mb-4">
                    {`stack.push(10); // Adds 10 to the stack`}
                </pre>

                <h3 className="text-lg font-medium mb-2">Pop:</h3>
                <p className="mb-4">
                    The <strong>pop</strong> method removes the item from the top of the stack.
                </p>
                <pre className="bg-gray-200 p-4 rounded-md overflow-x-auto mb-4">
                    {`stack.pop(); // Removes the top item from the stack`}
                </pre>

                <h3 className="text-lg font-medium mb-2">Peek:</h3>
                <p className="mb-4">
                    The <strong>peek</strong> method lets you view the top element without removing it from the stack.
                </p>
                <pre className="bg-gray-200 p-4 rounded-md overflow-x-auto mb-4">
                    {`stack.peek(); // Returns the top item without removing it`}
                </pre>

                <h3 className="text-lg font-medium mb-2">Example Usage:</h3>
                <pre className="bg-gray-200 p-4 rounded-md overflow-x-auto mb-4">
                    {`const stack = new Stack();
  stack.push(10);
  stack.push(20);
  console.log(stack.peek()); // Output: 20
  stack.pop();
  console.log(stack.peek()); // Output: 10`}
                </pre>

                <h2 className="text-xl font-semibold mb-2">Real-life Uses of Stack</h2>
                <ul className="list-disc pl-6 mb-4">
                    <li><strong>Undo/Redo operations:</strong> Stacks are used to keep track of changes and allow you to undo or redo them.</li>
                    <li><strong>Function calls:</strong> The call stack in programming keeps track of function calls and ensures that the most recent function call is executed first.</li>
                    <li><strong>Expression evaluation:</strong> Stacks are used in evaluating expressions (e.g., converting infix to postfix notation).</li>
                </ul>
            </div>
        </div>
    );
}

export default WhatIsStack;
