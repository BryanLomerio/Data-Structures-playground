import React, { useState } from "react";
import { motion } from "framer-motion";

const TreeNode = ({ node, level }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleNode = () => setExpanded(!expanded);

  return (
    <div className={`ml-${level * 4} mb-2`}>
      <div
        className={`flex items-center cursor-pointer p-2 rounded-lg bg-gray-100 hover:bg-gray-200`}
        onClick={toggleNode}
      >
        <span className={`text-xl ${node.children ? "font-bold" : "font-normal"}`}>
          {expanded ? "▼" : "▶"}
        </span>
        <span className="ml-2">{node.label}</span>
      </div>
      {expanded && node.children && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="ml-6"
        >
          {node.children.map((child, index) => (
            <TreeNode key={index} node={child} level={level + 1} />
          ))}
        </motion.div>
      )}
    </div>
  );
};

const Trees = () => {
  const treeData = {
    label: "Root",
    children: [
      {
        label: "Branch 1",
        children: [
          { label: "Leaf 1-1" },
          { label: "Leaf 1-2" },
        ],
      },
      {
        label: "Branch 2",
        children: [
          { label: "Leaf 2-1" },
          { label: "Leaf 2-2" },
        ],
      },
    ],
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">Tree Visualization</h1>
      <TreeNode node={treeData} level={0} />
    </div>
  );
};

export default Trees;
