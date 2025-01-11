import React from 'react';

const ArrayControls = ({
    onAddElement,
    onRemoveElement,
    onPopElement,
    onPushElement,
    onInsertElement,
    onShiftElement,
    onUnshiftElement,
    onReverseArray,
    onSortArray,
    onSpliceElement,
    onConcatArray,
    onSliceArray,
    inputValue,
    setInputValue,
    insertIndex,
    setInsertIndex,
}) => {
    return (
        <div className="grid grid-cols-3 gap-10">
            {/* Add Random Element */}
            <div className="relative group">
                <button
                    onClick={onAddElement}
                    className="h-12 w-full bg-blue-500 text-white rounded-lg text-center"
                >
                    Add Random Element
                </button>
                <span className="hover-label bg-blue-800">
                    Adds a random number to the end of the array.
                </span>
            </div>

            {/* Remove Last Element */}
            <div className="relative group">
                <button
                    onClick={onRemoveElement}
                    className="h-12 w-full bg-red-500 text-white rounded-lg text-center"
                >
                    Remove Last Element
                </button>
                <span className="hover-label bg-red-800">
                    Removes the last element from the array.
                </span>
            </div>

            {/* Pop Last Element */}
            <div className="relative group">
                <button
                    onClick={onPopElement}
                    className="h-12 w-full bg-yellow-500 text-white rounded-lg text-center"
                >
                    Pop Last Element
                </button>
                <span className="hover-label bg-yellow-800">
                    Pops (removes and returns) the last element.
                </span>
            </div>

            {/* Push Element */}
            <div className="relative group w-full">
                <input
                    type="number"
                    placeholder="Element (number)"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="h-12 px-4 py-2 border rounded-lg w-full pr-16"
                />
                <button
                    onClick={onPushElement}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 h-10 w-24 bg-green-500 text-white rounded-lg text-center"
                >
                    Push
                </button>
                <span className="hover-label bg-green-800">
                    Adds a new element to the end of the array.
                </span>
            </div>

            {/* Insert Element */}
            <div className="relative group w-full">
                <input
                    type="number"
                    placeholder="Insert Index (position)"
                    value={insertIndex}
                    onChange={(e) => setInsertIndex(e.target.value)}
                    className="h-12 px-4 py-2 border rounded-lg w-full pr-16"
                />
                <button
                    onClick={onInsertElement}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 h-10 w-24 bg-purple-500 text-white rounded-lg text-center"
                >
                    Insert
                </button>
                <span className="hover-label bg-purple-800">
                    Inserts an element at the specified index.
                </span>
            </div>

            {/* Splice Element */}
            <div className="relative group">
                <button
                    onClick={onSpliceElement}
                    className="h-12 w-full bg-black text-white rounded-lg text-center"
                >
                    Splice Element
                </button>
                <span className="hover-label bg-black">
                    Removes or replaces elements in the array.
                </span>
            </div>

            {/* Unshift Element */}
            <div className="relative group">
                <button
                    onClick={onUnshiftElement}
                    className="h-12 w-full bg-teal-500 text-white rounded-lg text-center"
                >
                    Unshift Element
                </button>
                <span className="hover-label bg-teal-800">
                    Adds a new element to the start of the array.
                </span>
            </div>

            {/* Reverse Array */}
            <div className="relative group">
                <button
                    onClick={onReverseArray}
                    className="h-12 w-full bg-indigo-500 text-white rounded-lg text-center"
                >
                    Reverse Array
                </button>
                <span className="hover-label bg-indigo-800">
                    Reverses the order of the array.
                </span>
            </div>

            {/* Sort Array */}
            <div className="relative group">
                <button
                    onClick={onSortArray}
                    className="h-12 w-full bg-orange-500 text-white rounded-lg text-center"
                >
                    Sort Array
                </button>
                <span className="hover-label bg-orange-800">
                    Sorts the array in ascending order.
                </span>
            </div>

            {/* Concat Array */}
            <div className="relative group">
                <button
                    onClick={onConcatArray}
                    className="h-12 w-full bg-pink-500 text-white rounded-lg text-center"
                >
                    Concat Array
                </button>
                <span className="hover-label bg-pink-800">
                    Concatenates another array.
                </span>
            </div>

            {/* Slice Array */}
            <div className="relative group">
                <button
                    onClick={onSliceArray}
                    className="h-12 w-full bg-lime-500 text-white rounded-lg text-center"
                >
                    Slice Array
                </button>
                <span className="hover-label bg-lime-800">
                    Slices a portion of the array.
                </span>
            </div>

            {/* Shift Element */}
            <div className="relative group">
                <button
                    onClick={onShiftElement}
                    className="h-12 w-full bg-gray-500 text-white rounded-lg text-center"
                >
                    Shift Element
                </button>
                <span className="hover-label bg-gray-800">
                    Removes the first element of the array.
                </span>
            </div>
        </div>
    );
};

export default ArrayControls;
