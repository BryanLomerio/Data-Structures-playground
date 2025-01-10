import React from 'react';

const GeneratedCode = ({ generatedCode, explanation }) => {
    const [showExplanation, setShowExplanation] = React.useState(false);

    const handleToggleExplanation = () => {
        setShowExplanation(!showExplanation);
    };

    return (
        <div className="mt-4 p-4 bg-gray-100 rounded-lg">
            <h4 className="font-semibold">Code:</h4>
            <pre className="bg-black text-white p-4">{generatedCode}</pre>
            <button
                className="mt-2 px-4 py-2 bg-blue-600 text-white rounded"
                onClick={handleToggleExplanation}
            >
                {showExplanation ? 'Hide Explanation' : 'View Explanation'}
            </button>
            {showExplanation && (
                <p className="mt-2 text-sm text-gray-600">{explanation}</p>
            )}
        </div>
    );
};

export default GeneratedCode;
