import React, { useState } from 'react';
import { FaGithubAlt } from "react-icons/fa";
import { motion } from 'framer-motion';

function Github() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <motion.div
        className="absolute top-[40px] right-[125px]"
        initial={{ x: 0, y: 0 }}
        animate={{ x: 0, y: 0 }}
        drag
        dragConstraints={{ top: 0, left: 0, right: window.innerWidth - 50, bottom: window.innerHeight - 50 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <a href="https://github.com/BryanLomerio" target="_blank" rel="noopener noreferrer">
          <FaGithubAlt className='text-4xl' />
        </a>
      </motion.div>
      {isHovered && (
        <div className="absolute top-[10px] right-[110px] text-lg font-semibold">
          Click Me
        </div>
      )}
    </div>
  );
}

export default Github;
