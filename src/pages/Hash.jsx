import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { IoArrowBackSharp } from "react-icons/io5";

const HashTableVisualizer = () => {
    const [hashTable, setHashTable] = useState(Array(10).fill([]));
    const [inputKey, setInputKey] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [notification, setNotification] = useState('');
    // Nav
    const navigate = useNavigate();
    const goBack = () => {
        navigate('/');
    };

    const hashFunction = (key) => {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i)) % hashTable.length;
        }
        return hash;
    };

    // Insert 
    const insertToHashTable = () => {
        if (!inputKey || !inputValue) {
            setNotification('Both key and value are required.');
            return;
        }

        const index = hashFunction(inputKey);
        const newTable = [...hashTable];
        newTable[index] = [...newTable[index], { key: inputKey, value: inputValue }];
        setHashTable(newTable);
        setNotification(`Inserted ${inputKey} at index ${index}`);
        setInputKey('');
        setInputValue('');
    };

    // Remove 
    const removeFromHashTable = () => {
        if (!inputKey) {
            setNotification('Key is required to remove.');
            return;
        }

        const index = hashFunction(inputKey);
        const newTable = [...hashTable];
        const updatedBucket = newTable[index].filter(item => item.key !== inputKey);

        if (updatedBucket.length === newTable[index].length) {
            setNotification(`Key ${inputKey} not found.`);
        } else {
            newTable[index] = updatedBucket;
            setHashTable(newTable);
            setNotification(`Removed ${inputKey} from index ${index}`);
        }
        setInputKey('');
    };

    // Lookup
    const lookupInHashTable = () => {
        if (!inputKey) {
            setNotification('Key is required to lookup.');
            return;
        }

        const index = hashFunction(inputKey);
        const foundItem = hashTable[index].find(item => item.key === inputKey);

        if (foundItem) {
            setNotification(`Found ${inputKey} at index ${index}: ${foundItem.value}`);
        } else {
            setNotification(`Key ${inputKey} not found.`);
        }
        setInputKey('');
    };

    return (
        <div className="max-w-4xl mx-auto p-6">
            <button
                className="flex items-center gap-2 mt-10 text-black-600 flex-start hover:text-gray-800 mb-10 mr-[450px] top-10"
                onClick={goBack}
            >
                <IoArrowBackSharp />
                Back
            </button>
            <h2 className="text-2xl font-semibold text-center mb-4">Hash Table Visualizer</h2>

            {/* Input*/}
            <div className="flex justify-center gap-4 mb-6">
                <input
                    type="text"
                    placeholder="Enter Key"
                    value={inputKey}
                    onChange={(e) => setInputKey(e.target.value)}
                    className="border p-2 rounded-md"
                />
                <input
                    type="text"
                    placeholder="Enter Value"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="border p-2 rounded-md"
                />
            </div>

            {/* Buttons */}
            <div className="flex justify-center gap-4 mb-6">
                <button onClick={insertToHashTable} className="bg-gray-700 text-white px-4 py-2 rounded-md">Insert</button>
                <button onClick={removeFromHashTable} className="bg-gray-700 text-white px-4 py-2 rounded-md">Remove</button>
                <button onClick={lookupInHashTable} className="bg-gray-700 text-white px-4 py-2 rounded-md">Lookup</button>
            </div>

            {/* Notification */}
            <div className="text-center mb-4 text-lg text-gray-700">{notification}</div>

            {/*Table*/}
            <div className="grid grid-cols-5 gap-4 justify-center">
                {hashTable.map((bucket, index) => (
                    <div key={index} className="p-4 border border-gray-300 rounded-md flex flex-col items-center space-y-2">
                        <div className="font-semibold text-xl">Index {index}</div>
                        <div className="space-y-2">
                            {bucket.length > 0 ? (
                                bucket.map((item, idx) => (
                                    <div key={idx} className="bg-green-100 p-2 rounded-md">
                                        <strong>{item.key}:</strong> {item.value}
                                    </div>
                                ))
                            ) : (
                                <div className="text-gray-500">Empty</div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HashTableVisualizer;
