import React from 'react';

const GeneratedCode = ({ generatedCode }) => {
    return (
        <div className="mt-4 p-4 bg-gray-100 rounded-lg">
            <h4 className="font-semibold">Code:</h4>
            <pre className="bg-black text-white p-4">{generatedCode}</pre>
        </div>
    );
};

export default GeneratedCode;
