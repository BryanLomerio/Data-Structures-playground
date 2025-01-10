import React, { useState, useEffect } from 'react';
import ArrayControls from './ArrayControls';
import { IoArrowBackSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import GeneratedCode from './GeneratedCode';

const ArrayVisualizer = () => {
    const [array, setArray] = useState([1, 2, 3, 4, 5]);
    const [inputValue, setInputValue] = useState('');
    const [insertIndex, setInsertIndex] = useState('');
    const [generatedCode, setGeneratedCode] = useState('');
    const [explanation, setExplanation] = useState('');
    const [highlightedElement, setHighlightedElement] = useState(null);
    const [deletedElement, setDeletedElement] = useState(null);
    const [arrayUpdated, setArrayUpdated] = useState(false);

    // Nav
    const navigate = useNavigate();
    const goBack = () => {
        navigate('/');
    };

    const updateGeneratedCode = (newCode, newExplanation) => {
        setGeneratedCode(newCode);
        setExplanation(newExplanation);
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
        updateGeneratedCode(
            `let array = ${JSON.stringify(newArray)}; // Added random element to the end\nconsole.log(array); // Output: ${JSON.stringify(newArray)}`,
            'This code adds a random element at the end of the array and prints the updated array.'
        );
    };

    const removeElement = () => {
        const newArray = array.slice(0, -1);
        setArray(newArray);
        setArrayUpdated(true);
        updateGeneratedCode(
            `let array = ${JSON.stringify(array)}; // Removed last element\nconsole.log(array); // Output: ${JSON.stringify(newArray)}`,
            'This code removes the last element from the array and prints the updated array.'
        );
    };

    const popElement = () => {
        const poppedElement = array[array.length - 1];
        const newArray = array.slice(0, -1);
        setArray(newArray);
        setDeletedElement(poppedElement);
        setHighlightedElement(null);
        setArrayUpdated(true);
        updateGeneratedCode(
            `let array = ${JSON.stringify(array)};\narray.pop(); // Removed element at index ${array.length - 1} (value: ${poppedElement})\nconsole.log(array); // Output: ${JSON.stringify(newArray)}`,
            `This code removes the last element (value: ${poppedElement}) from the array using pop() and prints the updated array.`
        );
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
            updateGeneratedCode(
                `let array = ${JSON.stringify(array)};\narray.splice(${index}, 0, ${inputValue}); // Inserts ${inputValue} at index ${index}\nconsole.log(array); // Output: ${JSON.stringify(newArray)}`,
                `This code inserts the element ${inputValue} at index ${index} in the array and prints the updated array.`
            );
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please enter a valid index and element!',
                confirmButtonText: 'Try Again',
            });
        }
    };

    const shiftElement = () => {
        const shiftedElement = array[0];
        const newArray = array.slice(1);
        setArray(newArray);
        setArrayUpdated(true);
        updateGeneratedCode(
            `let array = ${JSON.stringify(array)};\narray.shift(); // Removed element at index 0 (value: ${shiftedElement})\nconsole.log(array); // Output: ${JSON.stringify(newArray)}`,
            `This code removes the first element (value: ${shiftedElement}) from the array using shift() and prints the updated array.`
        );
    };

    const unshiftElement = () => {
        if (inputValue !== '' && !isNaN(inputValue)) {
            const newArray = [parseInt(inputValue), ...array];
            setArray(newArray);
            setInputValue('');
            setHighlightedElement(parseInt(inputValue));
            setArrayUpdated(true);
            updateGeneratedCode(
                `let array = ${JSON.stringify(array)};\narray.unshift(${inputValue}); // Added ${inputValue} to the beginning of the array\nconsole.log(array); // Output: ${JSON.stringify(newArray)}`,
                `This code adds the element ${inputValue} at the beginning of the array using unshift() and prints the updated array.`
            );
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please enter a valid number!',
                confirmButtonText: 'Try Again',
            });
        }
    };

    const reverseArray = () => {
        const newArray = [...array].reverse();
        setArray(newArray);
        setHighlightedElement('Reversed');
        setArrayUpdated(true);
        updateGeneratedCode(
            `let array = ${JSON.stringify(array)};\narray.reverse(); // Reverses the array\nconsole.log(array); // Output: ${JSON.stringify(newArray)}`,
            'This code reverses the array and prints the updated array.'
        );
    };

    const sortArray = () => {
        const newArray = [...array].sort((a, b) => a - b);
        setArray(newArray);
        setArrayUpdated(true);
        updateGeneratedCode(
            `let array = ${JSON.stringify(array)};\narray.sort((a, b) => a - b); // Sorts the array\nconsole.log(array); // Output: ${JSON.stringify(newArray)}`,
            'This code sorts the array in ascending order and prints the updated array.'
        );
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
            updateGeneratedCode(
                `let array = ${JSON.stringify(array)};\narray.splice(${index}, 1, ${inputValue}); // Splices the array at index ${index} with ${inputValue}\nconsole.log(array); // Output: ${JSON.stringify(newArray)}`,
                `This code splices the array at index ${index} with the element ${inputValue} and prints the updated array.`
            );
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please enter valid index and element!',
                confirmButtonText: 'Try Again',
            });
        }
    };

    const concatArray = () => {
        const newArray = array.concat([Math.floor(Math.random() * 100) + 1]);
        setArray(newArray);
        setArrayUpdated(true);
        updateGeneratedCode(
            `let array = ${JSON.stringify(array)};\narray = array.concat([Math.floor(Math.random() * 100) + 1]); // Concatenates with a random element\nconsole.log(array); // Output: ${JSON.stringify(newArray)}`,
            'This code concatenates a random element to the array and prints the updated array.'
        );
    };

    const sliceArray = () => {
        const newArray = array.slice(1, 3);
        setArray(newArray);
        setArrayUpdated(true);
        updateGeneratedCode(
            `let array = ${JSON.stringify(array)};\narray.slice(1, 3); // Slices the array from index 1 to 3\nconsole.log(array); // Output: ${JSON.stringify(newArray)}`,
            'This code slices the array from index 1 to 3 and prints the updated array.'
        );
    };

    return (
        <div className="p-6 max-w-screen-lg mx-auto">
            <button
                className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
                onClick={goBack}
            >
                <IoArrowBackSharp />
                Back
            </button>
            <h2 className="text-xl font-semibold ml-4 text-center">Array Visualizer</h2>
            <div className="mb-4">
                <h3 className="text-lg">Array:</h3>
                <div
                    className={`p-4 rounded-lg border-4 mb-10 ${arrayUpdated ? 'border-blue-500' : 'border-gray-300'
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
                <GeneratedCode generatedCode={generatedCode} explanation={explanation} />
            </div>
        </div>
    );
};

export default ArrayVisualizer;
