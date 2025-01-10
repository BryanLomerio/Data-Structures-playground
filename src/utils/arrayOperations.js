// Generates the code
export const generateCode = (array, action, description, newArray) => {
    return `let array = ${JSON.stringify(array)};\n${action} // ${description}\nconsole.log(array); // Output: ${JSON.stringify(newArray)}`;
};

export const validateInput = (inputValue, index, arrayLength) => {
    return inputValue !== "" && !isNaN(inputValue) && !isNaN(index) && index >= 0 && index <= arrayLength;
};
