import { useState, useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom"

// Node class
class TreeNode {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
    this.x = 0
    this.y = 0
    this.id = Math.random().toString(36).substr(2, 9)
  }
}

// Binary Search tree
class BinarySearchTree {
  constructor() {
    this.root = null
  }

  insert(value) {
    const newNode = new TreeNode(value)

    if (this.root === null) {
      this.root = newNode
      return this
    }

    const insertNode = (node, newNode) => {
      if (newNode.value < node.value) {
        if (node.left === null) {
          node.left = newNode
        } else {
          insertNode(node.left, newNode)
        }
      } else if (newNode.value > node.value) {
        if (node.right === null) {
          node.right = newNode
        } else {
          insertNode(node.right, newNode)
        }
      }
    }

    insertNode(this.root, newNode)
    return this
  }

  remove(value) {
    const removeNode = (node, value) => {
      if (node === null) return null

      if (value < node.value) {
        node.left = removeNode(node.left, value)
        return node
      } else if (value > node.value) {
        node.right = removeNode(node.right, value)
        return node
      } else {
        if (node.left === null && node.right === null) {
          return null
        }
        if (node.left === null) {
          return node.right
        }
        if (node.right === null) {
          return node.left
        }
        let successor = node.right
        while (successor.left !== null) {
          successor = successor.left
        }
        node.value = successor.value
        node.right = removeNode(node.right, successor.value)
        return node
      }
    }

    this.root = removeNode(this.root, value)
  }

  inOrderTraversal(callback) {
    const traverse = (node, callback) => {
      if (node !== null) {
        traverse(node.left, callback)
        callback(node)
        traverse(node.right, callback)
      }
    }
    traverse(this.root, callback)
  }

  preOrderTraversal(callback) {
    const traverse = (node, callback) => {
      if (node !== null) {
        callback(node)
        traverse(node.left, callback)
        traverse(node.right, callback)
      }
    }
    traverse(this.root, callback)
  }

  postOrderTraversal(callback) {
    const traverse = (node, callback) => {
      if (node !== null) {
        traverse(node.left, callback)
        traverse(node.right, callback)
        callback(node)
      }
    }
    traverse(this.root, callback)
  }

  // Calculate positions
  calculatePositions() {
    const calculateNodePositions = (node, depth = 0, position = 0, positions = {}, horizontalSpacing = 60) => {
      if (!node) return positions
      const levelWidth = Math.pow(2, depth) * horizontalSpacing
      node.x = position * levelWidth
      node.y = depth * 100
      positions[node.id] = { x: node.x, y: node.y, value: node.value, id: node.id }
      calculateNodePositions(node.left, depth + 1, position - 0.5, positions, horizontalSpacing)
      calculateNodePositions(node.right, depth + 1, position + 0.5, positions, horizontalSpacing)
      return positions
    }

    return calculateNodePositions(this.root)
  }
}

const TreeVisualizer = () => {
  const [tree, setTree] = useState(new BinarySearchTree())
  const [nodeValue, setNodeValue] = useState("")
  const [nodePositions, setNodePositions] = useState({})
  const [edges, setEdges] = useState([])
  const [highlightedNodes, setHighlightedNodes] = useState([])
  const [traversalType, setTraversalType] = useState("inOrder")
  const [isTraversing, setIsTraversing] = useState(false)
  const [treeHeight, setTreeHeight] = useState(0)
  const [treeWidth, setTreeWidth] = useState(0)
  const svgRef = useRef(null)
  const navigate = useNavigate()

  const goBack = () => {
    navigate("/")
  }

  // Calculate tree layout
  useEffect(() => {
    if (!tree.root) {
      setNodePositions({})
      setEdges([])
      return
    }

    const positions = tree.calculatePositions()
    setNodePositions(positions)

    const newEdges = []
    const calculateEdges = (node) => {
      if (!node) return
      if (node.left) {
        newEdges.push({
          id: `${node.id}-${node.left.id}`,
          source: node.id,
          target: node.left.id,
        })
        calculateEdges(node.left)
      }
      if (node.right) {
        newEdges.push({
          id: `${node.id}-${node.right.id}`,
          source: node.id,
          target: node.right.id,
        })
        calculateEdges(node.right)
      }
    }

    calculateEdges(tree.root)
    setEdges(newEdges)

    let maxX = 0
    let maxY = 0
    Object.values(positions).forEach((pos) => {
      maxX = Math.max(maxX, pos.x)
      maxY = Math.max(maxY, pos.y)
    })

    setTreeWidth(maxX + 200)
    setTreeHeight(maxY + 150)

    if (svgRef.current) {
      const centerX = maxX / 2
      svgRef.current.style.transform = `translateX(${-centerX + 400}px)`
    }
  }, [tree])

  const handleInsert = () => {
    if (!nodeValue.trim() || isNaN(Number.parseInt(nodeValue))) return
    const value = Number.parseInt(nodeValue)
    const newTree = new BinarySearchTree()
    newTree.root = JSON.parse(JSON.stringify(tree.root))
    newTree.insert(value)
    setTree(newTree)
    setNodeValue("")
  }

  const handleRemove = () => {
    if (!nodeValue.trim() || isNaN(Number.parseInt(nodeValue))) return
    const value = Number.parseInt(nodeValue)
    const newTree = new BinarySearchTree()
    newTree.root = JSON.parse(JSON.stringify(tree.root))
    newTree.remove(value)
    setTree(newTree)
    setNodeValue("")
  }

  const handleTraversal = () => {
    if (isTraversing || !tree.root) return
    setIsTraversing(true)
    setHighlightedNodes([])
    const traversalNodes = []
    const traversalCallback = (node) => {
      traversalNodes.push(node.id)
    }

    if (traversalType === "inOrder") {
      tree.inOrderTraversal(traversalCallback)
    } else if (traversalType === "preOrder") {
      tree.preOrderTraversal(traversalCallback)
    } else if (traversalType === "postOrder") {
      tree.postOrderTraversal(traversalCallback)
    }

    let i = 0
    const interval = setInterval(() => {
      if (i < traversalNodes.length) {
        setHighlightedNodes((prev) => [...prev, traversalNodes[i]])
        i++
      } else {
        clearInterval(interval)
        setTimeout(() => {
          setHighlightedNodes([])
          setIsTraversing(false)
        }, 1000)
      }
    }, 800)
  }

  const generateSampleTree = () => {
    const newTree = new BinarySearchTree()
    ;[50, 30, 70, 20, 40, 60, 80].forEach((value) => newTree.insert(value))
    setTree(newTree)
  }

  const clearTree = () => {
    setTree(new BinarySearchTree())
    setHighlightedNodes([])
  }

  return (
    <div className="flex flex-col h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Header with back button */}
      <div className="bg-white shadow-sm px-6 py-4 flex items-center">
        <button
          onClick={goBack}
          className="flex items-center gap-2 text-purple-700 hover:text-purple-900 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          <span className="font-medium">Back</span>
        </button>
        <h1 className="text-2xl font-bold text-purple-800 mx-auto">Binary Tree Visualizer</h1>
      </div>

      {/* Controls */}
      <div className="bg-white border-b border-purple-100 shadow-sm px-6 py-5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Node Operations */}
            <div className="bg-purple-50 rounded-lg p-4 shadow-sm">
              <h2 className="text-lg font-semibold text-purple-800 mb-3">Node Operations</h2>
              <div className="flex flex-col gap-3">
                <div className="flex gap-2">
                  <input
                    type="number"
                    value={nodeValue}
                    onChange={(e) => setNodeValue(e.target.value)}
                    placeholder="Enter node value"
                    disabled={isTraversing}
                    className="flex-1 px-3 py-2 border border-purple-200 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent disabled:bg-gray-100 disabled:text-gray-400"
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={handleInsert}
                    disabled={isTraversing}
                    className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors disabled:bg-purple-300 disabled:cursor-not-allowed"
                  >
                    Insert Node
                  </button>
                  <button
                    onClick={handleRemove}
                    disabled={isTraversing}
                    className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors disabled:bg-purple-300 disabled:cursor-not-allowed"
                  >
                    Remove Node
                  </button>
                </div>
              </div>
            </div>

            {/* Traversal */}
            <div className="bg-purple-50 rounded-lg p-4 shadow-sm">
              <h2 className="text-lg font-semibold text-purple-800 mb-3">Tree Traversal</h2>
              <div className="flex flex-col gap-3">
                <select
                  value={traversalType}
                  onChange={(e) => setTraversalType(e.target.value)}
                  disabled={isTraversing}
                  className="px-3 py-2 border border-purple-200 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent disabled:bg-gray-100 disabled:text-gray-400"
                >
                  <option value="inOrder">In-Order Traversal</option>
                  <option value="preOrder">Pre-Order Traversal</option>
                  <option value="postOrder">Post-Order Traversal</option>
                </select>
                <button
                  onClick={handleTraversal}
                  disabled={isTraversing || !tree.root}
                  className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors disabled:bg-purple-300 disabled:cursor-not-allowed"
                >
                  {isTraversing ? "Traversing..." : "Start Traversal"}
                </button>
              </div>
            </div>

            {/* Tree Actions */}
            <div className="bg-purple-50 rounded-lg p-4 shadow-sm">
              <h2 className="text-lg font-semibold text-purple-800 mb-3">Tree Actions</h2>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={generateSampleTree}
                  disabled={isTraversing}
                  className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors disabled:bg-purple-300 disabled:cursor-not-allowed"
                >
                  Sample Tree
                </button>
                <button
                  onClick={clearTree}
                  disabled={isTraversing}
                  className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors disabled:bg-red-300 disabled:cursor-not-allowed"
                >
                  Clear Tree
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tree Visualization */}
      <div className="flex-1 overflow-auto bg-gradient-to-b from-purple-50 to-white p-4">
        <div className="relative w-full h-full flex justify-center items-start">
          <svg
            width="100%"
            height={treeHeight || 500}
            className="transition-transform duration-500 ease-in-out"
            ref={svgRef}
          >
            <g className="tree-content">
              {/* Draw edges */}
              {edges.map((edge) => {
                const source = nodePositions[edge.source]
                const target = nodePositions[edge.target]
                if (!source || !target) return null
                return (
                  <line
                    key={edge.id}
                    x1={source.x}
                    y1={source.y}
                    x2={target.x}
                    y2={target.y}
                    className="stroke-purple-400 stroke-2 transition-all duration-300"
                  />
                )
              })}

              {/* Draw nodes */}
              {Object.values(nodePositions).map((node) => (
                <g
                  key={node.id}
                  className={`transition-transform duration-500 ease-in-out`}
                  transform={`translate(${node.x}, ${node.y})`}
                >
                  <circle
                    r="25"
                    className={`
                      ${
                        highlightedNodes.includes(node.id)
                          ? "fill-purple-400 stroke-purple-600"
                          : "fill-purple-600 stroke-purple-800"
                      }
                      stroke-2 transition-all duration-300
                      ${highlightedNodes.includes(node.id) ? "animate-pulse" : ""}
                    `}
                  />
                  <text dy=".3em" textAnchor="middle" className="fill-white text-sm font-medium select-none">
                    {node.value}
                  </text>
                </g>
              ))}
            </g>
          </svg>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-white border-t border-purple-100 py-3 px-6 text-center text-sm text-gray-500">
        <p>
          Binary Search Tree: A tree data structure with at most two children per node, where left child values are less
          than parent and right child values are greater.
        </p>
      </div>
    </div>
  )
}

export default TreeVisualizer

