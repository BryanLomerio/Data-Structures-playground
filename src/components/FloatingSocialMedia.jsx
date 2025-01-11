import React, { useState } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const FloatingSocialMedia = () => {
    const [position, setPosition] = useState({ x: window.innerWidth - 80, y: window.innerHeight - 80 });
    const [showLinks, setShowLinks] = useState(false);

    const handleDragStart = (e) => {
        e.preventDefault();
        const offsetX = e.clientX - position.x;
        const offsetY = e.clientY - position.y;

        const onMouseMove = (e) => {
            setPosition({
                x: e.clientX - offsetX,
                y: e.clientY - offsetY,
            });
        };

        const onMouseUp = () => {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        };

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    };

    return (
        <div
            className="fixed z-50 cursor-grab bg-gray-800 text-white rounded-full w-16 h-16 flex items-center justify-center transition-all"
            style={{ left: `${position.x}px`, top: `${position.y}px` }}
            onMouseDown={handleDragStart}
        >
            <div
                className="text-2xl cursor-pointer"
                onClick={() => setShowLinks(!showLinks)}
            >
                {/* Default icon */}
                <FaGithub />
            </div>
            {showLinks && (
                <div className="absolute top-[-70px] left-[-70px] flex items-center justify-center w-full h-full">
                    <div className="flex space-x-4">
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-800 text-lg hover:text-gray-600"
                        >
                            <FaGithub />
                        </a>
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 text-lg hover:text-blue-400"
                        >
                            <FaFacebook />
                        </a>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 text-lg hover:text-blue-600"
                        >
                            <FaTwitter />
                        </a>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-pink-600 text-lg hover:text-pink-400"
                        >
                            <FaInstagram />
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-700 text-lg hover:text-blue-500"
                        >
                            <FaLinkedin />
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FloatingSocialMedia;
