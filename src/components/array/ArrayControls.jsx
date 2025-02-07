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
    const buttonClass =
        "h-8 w-full bg-gray-200 text-gray-800 rounded-md text-xs text-center hover:bg-gray-300 focus:outline-none";

    return (
        // Container with padding, a subtle border, and rounded corners.
        <div className="p-4 border border-gray-300 rounded-md">
            <div className="grid grid-cols-3 gap-4">
                <button onClick={onAddElement} className={buttonClass}>
                    Add Random
                </button>
                <button onClick={onRemoveElement} className={buttonClass}>
                    Remove Last
                </button>
                <button onClick={onPopElement} className={buttonClass}>
                    Pop Last
                </button>

                <div className="relative">
                    <input
                        type="number"
                        placeholder="Element"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        className="h-8 w-full border border-gray-300 rounded-md px-2 text-xs focus:outline-none"
                    />
                    <button
                        onClick={onPushElement}
                        className="absolute right-0 top-0 h-8 px-2 bg-gray-200 text-gray-800 rounded-r-md text-xs hover:bg-gray-300 focus:outline-none"
                    >
                        Push
                    </button>
                </div>

                <div className="relative">
                    <input
                        type="number"
                        placeholder="Index"
                        value={insertIndex}
                        onChange={(e) => setInsertIndex(e.target.value)}
                        className="h-8 w-full border border-gray-300 rounded-md px-2 text-xs focus:outline-none"
                    />
                    <button
                        onClick={onInsertElement}
                        className="absolute right-0 top-0 h-8 px-2 bg-gray-200 text-gray-800 rounded-r-md text-xs hover:bg-gray-300 focus:outline-none"
                    >
                        Insert
                    </button>
                </div>

                <button onClick={onSpliceElement} className={buttonClass}>
                    Splice Element
                </button>
                <button onClick={onUnshiftElement} className={buttonClass}>
                    Unshift Element
                </button>
                <button onClick={onReverseArray} className={buttonClass}>
                    Reverse Array
                </button>
                <button onClick={onSortArray} className={buttonClass}>
                    Sort Array
                </button>
                <button onClick={onConcatArray} className={buttonClass}>
                    Concat Array
                </button>
                <button onClick={onSliceArray} className={buttonClass}>
                    Slice Array
                </button>
                <button onClick={onShiftElement} className={buttonClass}>
                    Shift Element
                </button>
            </div>
        </div>
    );
};

export default ArrayControls;
