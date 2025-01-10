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
        <div className="grid grid-cols-3 gap-4">
            <button
                onClick={onAddElement}
                className="h-12 w-full bg-blue-500 text-white rounded-lg text-center"
            >
                Add Random Element
            </button>
            <button
                onClick={onRemoveElement}
                className="h-12 w-full bg-red-500 text-white rounded-lg text-center"
            >
                Remove Last Element
            </button>
            <button
                onClick={onPopElement}
                className="h-12 w-full bg-yellow-500 text-white rounded-lg text-center"
            >
                Pop Last Element
            </button>

            {/* Combined Push and Insert buttons inside the input fields */}
            <div className="relative w-full">
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
            </div>

            <div className="relative w-full">
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
            </div>

            <button
                onClick={onShiftElement}
                className="h-12 w-full bg-gray-500 text-white rounded-lg text-center"
            >
                Shift Element
            </button>
            <button
                onClick={onUnshiftElement}
                className="h-12 w-full bg-teal-500 text-white rounded-lg text-center"
            >
                Unshift Element
            </button>
            <button
                onClick={onReverseArray}
                className="h-12 w-full bg-indigo-500 text-white rounded-lg text-center"
            >
                Reverse Array
            </button>
            <button
                onClick={onSortArray}
                className="h-12 w-full bg-orange-500 text-white rounded-lg text-center"
            >
                Sort Array
            </button>
            <button
                onClick={onSpliceElement}
                className="h-12 w-full bg-black text-white rounded-lg text-center"
            >
                Splice Element
            </button>
            <button
                onClick={onConcatArray}
                className="h-12 w-full bg-pink-500 text-white rounded-lg text-center"
            >
                Concat Array
            </button>
            <button
                onClick={onSliceArray}
                className="h-12 w-full bg-lime-500 text-white rounded-lg text-center"
            >
                Slice Array
            </button>
        </div>
    );
};

export default ArrayControls;
