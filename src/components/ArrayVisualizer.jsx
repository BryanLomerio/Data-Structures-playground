import React, { useState, useEffect } from "react";

const ArrayVisualizer = () => {
    const [array, setArray] = useState([1, 2, 3, 4, 5]);
    const [inputValue, setInputValue] = useState("");
    const [insertIndex, setInsertIndex] = useState("");
    const [generatedCode, setGeneratedCode] = useState("");
    const [highlightedElement, setHighlightedElement] = useState(null);
    const [deletedElement, setDeletedElement] = useState(null);

    const updateGeneratedCode = (newCode) => {
        setGeneratedCode(newCode);
    };

    useEffect(() => {
        if (highlightedElement !== null) {
            const timer = setTimeout(() => setHighlightedElement(null), 2000);
            return () => clearTimeout(timer);
        }

        if (deletedElement !== null) {
            const timer = setTimeout(() => setDeletedElement(null), 1000);
            return () => clearTimeout(timer);
        }
    }, [highlightedElement, deletedElement]);

    // Add random element to the end
    const addElement = () => {
        const newElementValue = Math.floor(Math.random() * 100) + 1;
        const newArray = [...array, newElementValue];
        setArray(newArray);
        setHighlightedElement(newElementValue);
        updateGeneratedCode(`let array = ${JSON.stringify(newArray)}; // Added random element to the end\nconsole.log(array); // Output: ${JSON.stringify(newArray)}`);
    };

    // Remove last element
    const removeElement = () => {
        const newArray = array.slice(0, -1);
        setArray(newArray);
        updateGeneratedCode(`let array = ${JSON.stringify(array)}; // Removed last element\nconsole.log(array); // Output: ${JSON.stringify(newArray)}`);
    };

    // Pop last element
    const popElement = () => {
        const poppedElement = array[array.length - 1];
        const newArray = array.slice(0, -1);
        setArray(newArray);
        setDeletedElement(poppedElement);
        setHighlightedElement(null);
        updateGeneratedCode(`let array = ${JSON.stringify(array)};\narray.pop(); // Removed element at index ${array.length - 1} (value: ${poppedElement})\nconsole.log(array); // Output: ${JSON.stringify(newArray)}`);
    };

    // Insert element at a specified index
    const insertElement = () => {
        const index = parseInt(insertIndex);
        if (inputValue !== "" && !isNaN(inputValue) && !isNaN(index) && index >= 0 && index <= array.length) {
            const newArray = [...array];
            newArray.splice(index, 0, parseInt(inputValue));
            setArray(newArray);
            setInputValue("");
            setInsertIndex("");
            setHighlightedElement(parseInt(inputValue));
            updateGeneratedCode(`let array = ${JSON.stringify(array)};\narray.splice(${index}, 0, ${inputValue}); // Inserts ${inputValue} at index ${index}\nconsole.log(array); // Output: ${JSON.stringify(newArray)}`);
        } else {
            alert("Please enter valid index and element.");
        }
    };

    // Shift element (removes first element)
    const shiftElement = () => {
        const shiftedElement = array[0];
        const newArray = array.slice(1);
        setArray(newArray);
        updateGeneratedCode(`let array = ${JSON.stringify(array)};\narray.shift(); // Removed element at index 0 (value: ${shiftedElement})\nconsole.log(array); // Output: ${JSON.stringify(newArray)}`);
    };

    // Unshift element (add to the beginning)
    const unshiftElement = () => {
        if (inputValue !== "" && !isNaN(inputValue)) {
            const newArray = [parseInt(inputValue), ...array];
            setArray(newArray);
            setInputValue("");
            setHighlightedElement(parseInt(inputValue));
            updateGeneratedCode(`let array = ${JSON.stringify(array)};\narray.unshift(${inputValue}); // Added ${inputValue} to the beginning of the array\nconsole.log(array); // Output: ${JSON.stringify(newArray)}`);
        } else {
            alert("Please enter a valid number.");
        }
    };

    // Reverse array
    const reverseArray = () => {
        const newArray = [...array].reverse();
        setArray(newArray);
        setHighlightedElement("Reversed");
        updateGeneratedCode(`let array = ${JSON.stringify(array)};\narray.reverse(); // Reverses the array\nconsole.log(array); // Output: ${JSON.stringify(newArray)}`);
    };

    // Sort array
    const sortArray = () => {
        const newArray = [...array].sort((a, b) => a - b);
        setArray(newArray);
        updateGeneratedCode(`let array = ${JSON.stringify(array)};\narray.sort((a, b) => a - b); // Sorts the array\nconsole.log(array); // Output: ${JSON.stringify(newArray)}`);
    };

    // Splice element at index
    const spliceElement = () => {
        const index = parseInt(insertIndex);
        if (inputValue !== "" && !isNaN(inputValue) && !isNaN(index) && index >= 0 && index < array.length) {
            const newArray = [...array];
            newArray.splice(index, 1, parseInt(inputValue));
            setArray(newArray);
            setInputValue("");
            setInsertIndex("");
            setHighlightedElement(parseInt(inputValue));
            updateGeneratedCode(`let array = ${JSON.stringify(array)};\narray.splice(${index}, 1, ${inputValue}); // Splices the array at index ${index} with ${inputValue}\nconsole.log(array); // Output: ${JSON.stringify(newArray)}`);
        } else {
            alert("Please enter valid index and element.");
        }
    };

    // Concat array
    const concatArray = () => {
        const newArray = array.concat([Math.floor(Math.random() * 100) + 1]);
        setArray(newArray);
        updateGeneratedCode(`let array = ${JSON.stringify(array)};\narray = array.concat([Math.floor(Math.random() * 100) + 1]); // Concatenates with a random element\nconsole.log(array); // Output: ${JSON.stringify(newArray)}`);
    };

    // Slice array
    const sliceArray = () => {
        const newArray = array.slice(1, 3);
        setArray(newArray);
        updateGeneratedCode(`let array = ${JSON.stringify(array)};\narray.slice(1, 3); // Slices the array from index 1 to 3\nconsole.log(array); // Output: ${JSON.stringify(newArray)}`);
    };

    // Push an element into the array
    const pushElement = () => {
        if (inputValue !== "" && !isNaN(inputValue)) {
            const newArray = [...array];
            newArray.push(parseInt(inputValue));
            setArray(newArray);
            setInputValue("");
            setHighlightedElement(parseInt(inputValue));
            updateGeneratedCode(`let array = ${JSON.stringify(array)};\narray.push(${inputValue}); // Pushed ${inputValue} into the array\nconsole.log(array); // Output: ${JSON.stringify(newArray)}`);
        } else {
            alert("Please enter a valid number.");
        }
    };

    return (
        <div className="p-6 max-w-screen-lg mx-auto">
            <h2 className="text-2xl font-semibold mb-4">Array Visualizer</h2>

            <div className="grid grid-cols-2 flex gap-4 mb-4">
                <button onClick={addElement} className="px-2 py-2 bg-blue-500 text-white rounded-lg">Add Random Element</button>
                <button onClick={removeElement} className="px-4 py-2 bg-red-500 text-white rounded-lg">Remove Last Element</button>
                <button onClick={popElement} className="px-4 py-2 bg-yellow-500 text-white rounded-lg">Pop Last Element</button>
                <div className="flex gap-2">
                    <input
                        type="number"
                        placeholder="Element (number)"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        className="px-4 py-2 border rounded-lg"
                        title="Enter a number to add to the array"
                    />
                    <button onClick={pushElement} className="px-4 py-2 bg-green-500 text-white rounded-lg">Push Element</button>
                </div>
            </div>

            <div className="flex gap-2 mb-4">
                <input
                    type="number"
                    placeholder="Insert Index (position)"
                    value={insertIndex}
                    onChange={(e) => setInsertIndex(e.target.value)}
                    className="px-4 py-2 border rounded-lg"
                    title="Enter an index where you want to insert the element"
                />
                <button onClick={insertElement} className="px-4 py-2 bg-purple-500 text-white rounded-lg">Insert Element</button>
            </div>

            <div className="grid grid-cols-3 gap-2 mb-2">
                <button onClick={shiftElement} className="px-4 py-2 bg-gray-500 text-white rounded-lg">Shift Element</button>
                <button onClick={unshiftElement} className="px-4 py-2 bg-teal-500 text-white rounded-lg">Unshift Element</button>
                <button onClick={reverseArray} className="px-4 py-2 bg-indigo-500 text-white rounded-lg">Reverse Array</button>
                <button onClick={sortArray} className="px-4 py-2 bg-orange-500 text-white rounded-lg">Sort Array</button>
                <button onClick={spliceElement} className="px-4 py-2 bg-brown-500 text-white rounded-lg">Splice Element</button>
                <button onClick={concatArray} className="px-4 py-2 bg-pink-500 text-white rounded-lg">Concat Array</button>
                <button onClick={sliceArray} className="px-4 py-2 bg-lime-500 text-white rounded-lg">Slice Array</button>
            </div>

            <div className="flex gap-2 mb-4 overflow-x-auto">
                {array.map((el, index) => (
                    <div
                        key={index}
                        className={`bg-gray-200 p-4 rounded-lg shadow-md ${el === highlightedElement ? "border-4 border-green-500" : ""}`}
                    >
                        {el}
                    </div>
                ))}
            </div>

            {/* Display deleted element */}
            {deletedElement && (
                <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-lg">
                    <strong>Deleted Element:</strong> {deletedElement}
                </div>
            )}

            <div className="mt-4 p-4 bg-gray-100 rounded-lg">
                <h4 className="font-semibold">Code:</h4>
                <pre className="bg-black text-white p-4">{generatedCode}</pre>
            </div>
        </div>
    );
};

export default ArrayVisualizer;
