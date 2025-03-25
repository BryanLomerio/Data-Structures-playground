import { useState } from "react"
import { motion } from "framer-motion"

function WhatIsStack() {
  const [activeTab, setActiveTab] = useState("concept")
  const [expandedSection, setExpandedSection] = useState(null)

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-sm">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <div className="flex items-center mb-6">
          <div className="w-1 h-10 bg-green-500 mr-4"></div>
          <h1 className="text-3xl font-bold text-gray-800">What is a Stack?</h1>
        </div>

        <div className="prose max-w-none mb-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            A Stack is a linear data structure that follows the{" "}
            <span className="font-semibold text-green-600">Last In, First Out (LIFO)</span> principle. This means the
            last item added to the stack is the first one to be removed.
          </p>

          <div className="my-6 p-4 bg-green-50 border-l-4 border-green-500 rounded-r-lg">
            <p className="text-green-800">
              Think of it like a stack of plates: the last plate you add to the top is the first one you'll take off.
            </p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-gray-200 mb-6">
          <button
            className={`px-4 py-2 font-medium text-sm ${
              activeTab === "concept"
                ? "text-green-600 border-b-2 border-green-500"
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveTab("concept")}
          >
            Key Concepts
          </button>
          <button
            className={`px-4 py-2 font-medium text-sm ${
              activeTab === "operations"
                ? "text-green-600 border-b-2 border-green-500"
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveTab("operations")}
          >
            Operations
          </button>
          <button
            className={`px-4 py-2 font-medium text-sm ${
              activeTab === "code" ? "text-green-600 border-b-2 border-green-500" : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveTab("code")}
          >
            Implementation
          </button>
          <button
            className={`px-4 py-2 font-medium text-sm ${
              activeTab === "uses" ? "text-green-600 border-b-2 border-green-500" : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveTab("uses")}
          >
            Real-world Uses
          </button>
        </div>

        {/* Content based on active tab */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="min-h-[400px]"
        >
          {activeTab === "concept" && (
            <div>
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Key Points:</h2>
              <ul className="space-y-3">
                {[
                  "The stack follows a LIFO (Last In, First Out) order.",
                  "The last item added (pushed) to the stack is the first one to be removed (popped).",
                  "Stacks are used in many algorithms like undo/redo operations in software, function calls, etc.",
                ].map((point, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-1 mr-3">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    </div>
                    <span className="text-gray-700">{point}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-8 p-5 bg-gray-50 rounded-lg border border-gray-200">
                <div className="flex justify-center">
                  <div className="relative w-64 h-64">
                    {/* Stack visualization */}
                    <div className="absolute bottom-0 left-0 right-0 h-64 border-b-2 border-l-2 border-r-2 border-gray-400"></div>

                    {[
                      { value: "Item 1", color: "bg-green-200" },
                      { value: "Item 2", color: "bg-green-300" },
                      { value: "Item 3", color: "bg-green-400" },
                      { value: "Item 4", color: "bg-green-500" },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + index * 0.2 }}
                        className={`absolute w-full h-12 ${item.color} border border-gray-400 flex items-center justify-center`}
                        style={{ bottom: `${index * 48}px` }}
                      >
                        <span className="font-medium">{item.value}</span>
                      </motion.div>
                    ))}

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.5 }}
                      className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 text-center"
                    >
                      <div className="text-sm font-medium text-gray-500">Top of Stack</div>
                      <svg
                        className="w-6 h-6 mx-auto text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                      </svg>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "operations" && (
            <div>
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Stack Operations:</h2>

              {[
                {
                  title: "Push",
                  description: "Adds an element to the top of the stack.",
                  code: "stack.push(10); // Adds 10 to the stack",
                  animation: "translate-y-[-100%]",
                },
                {
                  title: "Pop",
                  description: "Removes the element from the top of the stack.",
                  code: "stack.pop(); // Removes the top item from the stack",
                  animation: "translate-y-[100%]",
                },
                {
                  title: "Peek",
                  description: "Views the top element without removing it.",
                  code: "stack.peek(); // Returns the top item without removing it",
                  animation: "scale-110",
                },
                {
                  title: "isEmpty",
                  description: "Checks if the stack is empty.",
                  code: "stack.isEmpty(); // Returns true if stack is empty, false otherwise",
                  animation: "opacity-50",
                },
              ].map((operation, index) => (
                <div key={index} className="mb-6 border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleSection(operation.title)}
                    className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
                  >
                    <h3 className="text-lg font-medium text-gray-800">{operation.title}</h3>
                    <svg
                      className={`w-5 h-5 text-gray-500 transform transition-transform ${expandedSection === operation.title ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {expandedSection === operation.title && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="p-4 border-t border-gray-200"
                    >
                      <p className="mb-3 text-gray-700">{operation.description}</p>
                      <pre className="bg-gray-800 text-green-400 p-3 rounded-md overflow-x-auto text-sm">
                        {operation.code}
                      </pre>

                      <div className="mt-4 flex justify-center">
                        <div className="relative w-48 h-48 border-2 border-gray-300 rounded-lg">
                          {[1, 2, 3].map((item, i) => (
                            <div
                              key={i}
                              className={`absolute w-full h-10 bg-green-${200 + i * 100} border border-gray-400 flex items-center justify-center`}
                              style={{ bottom: `${i * 40}px` }}
                            >
                              <span className="font-medium">Item {item}</span>
                            </div>
                          ))}

                          <motion.div
                            animate={{
                              [operation.animation.split("-")[0]]: operation.animation.includes("-")
                                ? operation.animation.split("-")[1].replace("[", "").replace("]", "")
                                : operation.animation,
                            }}
                            transition={{
                              repeat: Number.POSITIVE_INFINITY,
                              repeatType: "reverse",
                              duration: 1.5,
                            }}
                            className="absolute w-full h-10 bg-yellow-300 border border-yellow-500 flex items-center justify-center"
                            style={{ bottom: "120px" }}
                          >
                            <span className="font-medium">New Item</span>
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          )}

          {activeTab === "code" && (
            <div>
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Stack Implementation in JavaScript</h2>
              <p className="mb-4 text-gray-700">Below is an example of how a Stack is implemented in JavaScript:</p>

              <div className="relative">
                <pre className="bg-gray-800 text-green-400 p-5 rounded-lg overflow-x-auto text-sm leading-relaxed">
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
console.log(stack.isEmpty()); // Output: true`}
                </pre>
                <div className="absolute top-2 right-2 bg-gray-700 text-xs text-white px-2 py-1 rounded">
                  JavaScript
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-medium mb-3 text-gray-800">Example Usage:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                    <h4 className="font-medium text-gray-700 mb-2">Code</h4>
                    <pre className="bg-gray-100 p-3 rounded-md text-sm overflow-x-auto">
                      {`const stack = new Stack();
stack.push(10);
stack.push(20);
console.log(stack.peek());
stack.pop();
console.log(stack.peek());`}
                    </pre>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                    <h4 className="font-medium text-gray-700 mb-2">Output</h4>
                    <div className="bg-black text-green-400 p-3 rounded-md font-mono text-sm">
                      <div>20</div>
                      <div>10</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "uses" && (
            <div>
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Real-life Uses of Stack</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Undo/Redo Operations",
                    description: "Stacks are used to keep track of changes and allow you to undo or redo them.",
                    icon: (
                      <svg
                        className="w-12 h-12 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                        />
                      </svg>
                    ),
                  },
                  {
                    title: "Function Calls",
                    description:
                      "The call stack in programming keeps track of function calls and ensures that the most recent function call is executed first.",
                    icon: (
                      <svg
                        className="w-12 h-12 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    ),
                  },
                  {
                    title: "Expression Evaluation",
                    description:
                      "Stacks are used in evaluating expressions (e.g., converting infix to postfix notation).",
                    icon: (
                      <svg
                        className="w-12 h-12 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                        />
                      </svg>
                    ),
                  },
                ].map((use, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex justify-center mb-4">{use.icon}</div>
                    <h3 className="text-lg font-medium text-center mb-2 text-gray-800">{use.title}</h3>
                    <p className="text-gray-600 text-center">{use.description}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 p-5 bg-gray-50 border border-gray-200 rounded-lg">
                <h3 className="text-lg font-medium mb-3 text-gray-800">Other Applications:</h3>
                <ul className="space-y-2">
                  {[
                    "Browser history navigation",
                    "Syntax parsing in compilers",
                    "Backtracking algorithms",
                    "Memory management in programming languages",
                    "Recursive function calls",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </motion.div>
      </motion.div>
    </div>
  )
}

export default WhatIsStack

