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
    const buttonClass = "h-12 w-full bg-gray-600 text-white rounded-lg text-center hover:bg-gray-600";

    return (
        <div className="grid grid-cols-3 gap-10">
            {/* Add Random Element */}
            <div className="relative group">
                <button
                    onClick={onAddElement}
                    className={buttonClass}
                >
                    Add Random Element
                </button>
                <span className="hover-label bg-gray-700">
                    Adds a random number to the end of the array.
                </span>
            </div>

            {/* Remove Last Element */}
            <div className="relative group">
                <button
                    onClick={onRemoveElement}
                    className={buttonClass}
                >
                    Remove Last Element
                </button>
                <span className="hover-label bg-gray-700">
                    Removes the last element from the array.
                </span>
            </div>

            {/* Pop Last Element */}
            <div className="relative group">
                <button
                    onClick={onPopElement}
                    className={buttonClass}
                >
                    Pop Last Element
                </button>
                <span className="hover-label bg-gray-700">
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
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 h-10 w-24 bg-gray-600 text-white rounded-lg text-center hover:bg-gray-600"
                >
                    Push
                </button>
                <span className="hover-label bg-gray-700">
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
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 h-10 w-24 bg-gray-600 text-white rounded-lg text-center hover:bg-gray-700"
                >
                    Insert
                </button>
                <span className="hover-label bg-gray-700">
                    Inserts an element at the specified index.
                </span>
            </div>

            {/* Splice Element */}
            <div className="relative group">
                <button
                    onClick={onSpliceElement}
                    className={buttonClass}
                >
                    Splice Element
                </button>
                <span className="hover-label bg-gray-700">
                    Removes or replaces elements in the array.
                </span>
            </div>

            {/* Unshift Element */}
            <div className="relative group">
                <button
                    onClick={onUnshiftElement}
                    className={buttonClass}
                >
                    Unshift Element
                </button>
                <span className="hover-label bg-gray-700">
                    Adds a new element to the start of the array.
                </span>
            </div>

            {/* Reverse Array */}
            <div className="relative group">
                <button
                    onClick={onReverseArray}
                    className={buttonClass}
                >
                    Reverse Array
                </button>
                <span className="hover-label bg-gray-700">
                    Reverses the order of the array.
                </span>
            </div>

            {/* Sort Array */}
            <div className="relative group">
                <button
                    onClick={onSortArray}
                    className={buttonClass}
                >
                    Sort Array
                </button>
                <span className="hover-label bg-gray-700">
                    Sorts the array in ascending order.
                </span>
            </div>

            {/* Concat Array */}
            <div className="relative group">
                <button
                    onClick={onConcatArray}
                    className={buttonClass}
                >
                    Concat Array
                </button>
                <span className="hover-label bg-gray-700">
                    Concatenates another array.
                </span>
            </div>

            {/* Slice Array */}
            <div className="relative group">
                <button
                    onClick={onSliceArray}
                    className={buttonClass}
                >
                    Slice Array
                </button>
                <span className="hover-label bg-gray-700">
                    Slices a portion of the array.
                </span>
            </div>

            {/* Shift Element */}
            <div className="relative group">
                <button
                    onClick={onShiftElement}
                    className={buttonClass}
                >
                    Shift Element
                </button>
                <span className="hover-label bg-gray-700">
                    Removes the first element of the array.
                </span>
            </div>
        </div>
    );
};

export default ArrayControls;
