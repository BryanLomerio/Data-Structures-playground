import React, { useState, useEffect } from 'react';
import ArrayControls from './ArrayControls';

const ArrayVisualizer = () => {
    const [array, setArray] = useState([1, 2, 3, 4, 5]);
    const [inputValue, setInputValue] = useState('');
    const [insertIndex, setInsertIndex] = useState('');
    const [generatedCode, setGeneratedCode] = useState('');
    const [highlightedElement, setHighlightedElement] = useState(null);
    const [deletedElement, setDeletedElement] = useState(null);
    const [arrayUpdated, setArrayUpdated] = useState(false);

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

    const addElement = () => {
        const newElementValue = Math.floor(Math.random() * 100) + 1;
        const newArray = [...array, newElementValue];
        setArray(newArray);
        setHighlightedElement(newElementValue);
        setArrayUpdated(true);
        updateGeneratedCode(`let array = ${JSON.stringify(newArray)}; // Added random element to the end\nconsole.log(array); // Output: ${JSON.stringify(newArray)}`);
    };

    const removeElement = () => {
        const newArray = array.slice(0, -1);
        setArray(newArray);
        setArrayUpdated(true);
        updateGeneratedCode(`let array = ${JSON.stringify(array)}; // Removed last element\nconsole.log(array); // Output: ${JSON.stringify(newArray)}`);
    };

    const popElement = () => {
        const poppedElement = array[array.length - 1];
        const newArray = array.slice(0, -1);
        setArray(newArray);
        setDeletedElement(poppedElement);
        setHighlightedElement(null);
        setArrayUpdated(true);
        updateGeneratedCode(`let array = ${JSON.stringify(array)};\narray.pop(); // Removed element at index ${array.length - 1} (value: ${poppedElement})\nconsole.log(array); // Output: ${JSON.stringify(newArray)}`);
    };

    const insertElement = () => {
        const index = parseInt(insertIndex);
        if (inputValue !== '' && !isNaN(inputValue) && !isNaN(index) && index >= 0 && index <= array.length) {
            const newArray = [...array];
            newArray.splice(index, 0, parseInt(inputValue));
            setArray(newArray);
            setInputValue('');
            setInsertIndex('');
            setHighlightedElement(parseInt(inputValue));
            setArrayUpdated(true);
            updateGeneratedCode(`let array = ${JSON.stringify(array)};\narray.splice(${index}, 0, ${inputValue}); // Inserts ${inputValue} at index ${index}\nconsole.log(array); // Output: ${JSON.stringify(newArray)}`);
        } else {
            alert('Please enter valid index and element.');
        }
    };

    const shiftElement = () => {
        const shiftedElement = array[0];
        const newArray = array.slice(1);
        setArray(newArray);
        setArrayUpdated(true);
        updateGeneratedCode(`let array = ${JSON.stringify(array)};\narray.shift(); // Removed element at index 0 (value: ${shiftedElement})\nconsole.log(array); // Output: ${JSON.stringify(newArray)}`);
    };

    const unshiftElement = () => {
        if (inputValue !== '' && !isNaN(inputValue)) {
            const newArray = [parseInt(inputValue), ...array];
            setArray(newArray);
            setInputValue('');
            setHighlightedElement(parseInt(inputValue));
            setArrayUpdated(true);
            updateGeneratedCode(`let array = ${JSON.stringify(array)};\narray.unshift(${inputValue}); // Added ${inputValue} to the beginning of the array\nconsole.log(array); // Output: ${JSON.stringify(newArray)}`);
        } else {
            alert('Please enter a valid number.');
        }
    };

    const reverseArray = () => {
        const newArray = [...array].reverse();
        setArray(newArray);
        setHighlightedElement('Reversed');
        setArrayUpdated(true);
        updateGeneratedCode(`let array = ${JSON.stringify(array)};\narray.reverse(); // Reverses the array\nconsole.log(array); // Output: ${JSON.stringify(newArray)}`);
    };

    const sortArray = () => {
        const newArray = [...array].sort((a, b) => a - b);
        setArray(newArray);
        setArrayUpdated(true);
        updateGeneratedCode(`let array = ${JSON.stringify(array)};\narray.sort((a, b) => a - b); // Sorts the array\nconsole.log(array); // Output: ${JSON.stringify(newArray)}`);
    };

    const spliceElement = () => {
        const index = parseInt(insertIndex);
        if (inputValue !== '' && !isNaN(inputValue) && !isNaN(index) && index >= 0 && index < array.length) {
            const newArray = [...array];
            newArray.splice(index, 1, parseInt(inputValue));
            setArray(newArray);
            setInputValue('');
            setInsertIndex('');
            setHighlightedElement(parseInt(inputValue));
            setArrayUpdated(true);
            updateGeneratedCode(`let array = ${JSON.stringify(array)};\narray.splice(${index}, 1, ${inputValue}); // Splices the array at index ${index} with ${inputValue}\nconsole.log(array); // Output: ${JSON.stringify(newArray)}`);
        } else {
            alert('Please enter valid index and element.');
        }
    };

    const concatArray = () => {
        const newArray = array.concat([Math.floor(Math.random() * 100) + 1]);
        setArray(newArray);
        setArrayUpdated(true);
        updateGeneratedCode(`let array = ${JSON.stringify(array)};\narray = array.concat([Math.floor(Math.random() * 100) + 1]); // Concatenates with a random element\nconsole.log(array); // Output: ${JSON.stringify(newArray)}`);
    };

    const sliceArray = () => {
        const newArray = array.slice(1, 3);
        setArray(newArray);
        setArrayUpdated(true);
        updateGeneratedCode(`let array = ${JSON.stringify(array)};\narray.slice(1, 3); // Slices the array from index 1 to 3\nconsole.log(array); // Output: ${JSON.stringify(newArray)}`);
    };

    return (
        <div className="p-6 max-w-screen-lg mx-auto">
            <h2 className="text-xl font-semibold mb-4">Array Visualizer</h2>
            <div className="mb-4">
                <h3 className="text-lg">Array:</h3>
                <div
                    className={`p-4 rounded-lg border-4 ${arrayUpdated ? 'border-blue-500' : 'border-gray-300'
                        }`}
                >
                    <div className="flex gap-2">
                        {array.map((element, index) => (
                            <div
                                key={index}
                                className={`px-4 py-2 border rounded-lg ${highlightedElement === element ? 'bg-green-300' : ''}`}
                            >
                                {element}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <ArrayControls
                onAddElement={addElement}
                onRemoveElement={removeElement}
                onPopElement={popElement}
                onPushElement={unshiftElement}
                onInsertElement={insertElement}
                onShiftElement={shiftElement}
                onUnshiftElement={unshiftElement}
                onReverseArray={reverseArray}
                onSortArray={sortArray}
                onSpliceElement={spliceElement}
                onConcatArray={concatArray}
                onSliceArray={sliceArray}
                inputValue={inputValue}
                setInputValue={setInputValue}
                insertIndex={insertIndex}
                setInsertIndex={setInsertIndex}
            />
            <div>
                <h3 className="text-lg mt-10">Code:</h3>
                <pre className="p-4 bg-gray-100 rounded-lg">{generatedCode}</pre>
            </div>
        </div>
    );
};

export default ArrayVisualizer;
