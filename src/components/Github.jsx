import React from 'react'
import { FaGithubAlt } from "react-icons/fa";
import { motion } from 'framer-motion';

function Github() {
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
      >
        <a href="https://github.com/BryanLomerio" target="_blank" rel="noopener noreferrer">
          <FaGithubAlt className='text-4xl' />
        </a>
      </motion.div>
    </div>
  );
}

export default Github;
