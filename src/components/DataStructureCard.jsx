import React from "react";

const DataStructureCard = ({ title, description, onClick }) => {
    return (
        <div
            className="bg-red shadow-lg rounded-lg p-6 hover:bg-blue-50 cursor-pointer transition duration-200"
            onClick={onClick}
        >
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    );
};

export default DataStructureCard;
