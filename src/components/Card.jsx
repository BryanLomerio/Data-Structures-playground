import React from "react";

const Card = ({ title, description, onClick, image }) => {
    return (
        <div
            className="card p-4 border border-gray-300 rounded-lg shadow-lg cursor-pointer hover:bg-gray-200"
            onClick={onClick}
        >
            <img src={image} className="w-full h-40 object-contain rounded-lg mb-4" />
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-gray-500">{description}</p>
        </div>
    );
};

export default Card;
