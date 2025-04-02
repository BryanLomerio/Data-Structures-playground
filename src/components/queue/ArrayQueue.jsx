import { useState, useEffect } from "react"
import { ArrowLeft, ArrowRight, Eye, Trash2, HelpCircle, AlertCircle } from "lucide-react"
import { useNavigate } from "react-router-dom"

function ArrayQueue() {
  const [queue, setQueue] = useState([])
  const [inputValue, setInputValue] = useState("")
  const [notification, setNotification] = useState("")
  const [isAnimating, setIsAnimating] = useState(false)
  const [animationType, setAnimationType] = useState(null)
  const [highlightedIndex, setHighlightedIndex] = useState(null)
  const maxSize = 5

  // Navigation
  const navigate = useNavigate()
  const goBack = () => {
    navigate("/queues")
  }

  useEffect(() => {
    setNotification("Welcome! This queue uses JavaScript arrays with dynamic resizing.")

    // Clear notification after 5 seconds
    const timer = setTimeout(() => {
      setNotification("")
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  const showNotification = (message, isError = false) => {
    setNotification(message)

    // Clear notification after 3 seconds
    setTimeout(() => {
      setNotification("")
    }, 3000)
  }

  const enqueue = () => {
    if (inputValue === "") {
      showNotification("Please enter a value to enqueue", true)
      return
    }

    if (queue.length >= maxSize) {
      showNotification("Queue is full! Cannot enqueue more items.", true)
      return
    }

    setAnimationType("enqueue")
    setIsAnimating(true)
    setHighlightedIndex(queue.length)

    setTimeout(() => {
      setQueue([...queue, inputValue])
      showNotification(`Enqueued: ${inputValue}`)
      setInputValue("")
      setIsAnimating(false)

      setTimeout(() => {
        setHighlightedIndex(null)
      }, 1000)
    }, 500)
  }

  const dequeue = () => {
    if (queue.length === 0) {
      showNotification("Queue is empty! Cannot dequeue.", true)
      return
    }

    setAnimationType("dequeue")
    setIsAnimating(true)
    setHighlightedIndex(0)

    const dequeuedItem = queue[0]

    setTimeout(() => {
      const newQueue = [...queue]
      newQueue.shift()
      setQueue(newQueue)
      showNotification(`Dequeued: ${dequeuedItem}`)
      setIsAnimating(false)
      setHighlightedIndex(null)
    }, 500)
  }

  const peek = () => {
    if (queue.length === 0) {
      showNotification("Queue is empty! Nothing to peek.", true)
      return
    }

    setHighlightedIndex(0)
    showNotification(`Front element: ${queue[0]}`)

    setTimeout(() => {
      setHighlightedIndex(null)
    }, 2000)
  }

  const isEmpty = () => {
    const status = queue.length === 0
    showNotification(status ? "Queue is empty" : "Queue is not empty")
  }

  const size = () => {
    showNotification(`Queue size: ${queue.length} / ${maxSize}`)
  }

  const clear = () => {
    if (queue.length === 0) {
      showNotification("Queue is already empty!")
      return
    }

    setAnimationType("clear")
    setIsAnimating(true)

    setTimeout(() => {
      setQueue([])
      showNotification("Queue cleared")
      setIsAnimating(false)
    }, 500)
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="flex items-center justify-between mb-6">
        <button
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          onClick={goBack}
        >
          <ArrowLeft size={18} />
          <span>Back</span>
        </button>
        <h2 className="text-xl font-bold">Array Queue</h2>
        <div className="w-[72px]"></div> {/* Spacer for centering */}
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-6">
        <div className="bg-gradient-to-r from-gray-700 to-gray-600 px-4 py-3">
          <h3 className="text-white font-medium">Queue Visualization (FIFO)</h3>
        </div>

        <div className="p-6">
          {/* Queue visualization */}
          <div className="relative border border-gray-300 rounded-lg p-4 mb-6 min-h-[120px] flex items-center justify-center">
            {queue.length > 0 ? (
              <div className="flex space-x-2 overflow-x-auto max-w-full py-2">
                {queue.map((element, index) => (
                  <div
                    key={index}
                    className={`relative flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-md transition-all duration-300 ${
                      highlightedIndex === index ? "scale-110 shadow-md z-10" : ""
                    } ${index === 0 ? "bg-blue-600 text-white" : "bg-blue-500 text-white"}`}
                  >
                    <div className="text-center">
                      <div className="font-medium">{element}</div>
                      <div className="text-xs text-blue-100">[{index}]</div>
                    </div>

                    {index === 0 && (
                      <div className="absolute -bottom-6 left-0 right-0 text-xs font-bold text-center text-blue-800">
                        Front
                      </div>
                    )}

                    {index === queue.length - 1 && (
                      <div className="absolute -bottom-6 left-0 right-0 text-xs font-bold text-center text-blue-800">
                        Rear
                      </div>
                    )}
                  </div>
                ))}

                {/* Animation for enqueue */}
                {isAnimating && animationType === "enqueue" && (
                  <div
                    className="absolute flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-md bg-blue-500 text-white opacity-70"
                    style={{
                      right: "-20px",
                      animation: "slideIn 0.5s forwards",
                    }}
                  >
                    {inputValue}
                    <style jsx>{`
                      @keyframes slideIn {
                        from { transform: translateX(50px); opacity: 0; }
                        to { transform: translateX(0); opacity: 1; }
                      }
                    `}</style>
                  </div>
                )}

                {/* Animation for dequeue */}
                {isAnimating && animationType === "dequeue" && (
                  <div
                    className="absolute flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-md bg-blue-500 text-white opacity-70"
                    style={{
                      left: "-20px",
                      animation: "slideOut 0.5s forwards",
                    }}
                  >
                    {queue[0]}
                    <style jsx>{`
                      @keyframes slideOut {
                        from { transform: translateX(0); opacity: 1; }
                        to { transform: translateX(-50px); opacity: 0; }
                      }
                    `}</style>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-gray-400 italic flex flex-col items-center">
                <div className="mb-2">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="7" width="20" height="10" rx="2" ry="2"></rect>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  </svg>
                </div>
                <div>Queue is empty</div>
              </div>
            )}
          </div>

          {/* Queue status */}
          <div className="flex justify-between items-center mb-4 p-3 bg-blue-50 rounded-lg border border-blue-100">
            <div className="text-sm font-medium text-blue-800">
              Size: <span className="font-bold">{queue.length}</span> / {maxSize}
            </div>
            <div
              className={`text-sm font-medium ${
                queue.length === 0 ? "text-yellow-600" : queue.length === maxSize ? "text-red-600" : "text-green-600"
              }`}
            >
              Status: {queue.length === 0 ? "Empty" : queue.length === maxSize ? "Full" : "Available"}
            </div>
          </div>

          {/* Controls */}
          <div className="space-y-4">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Enter value"
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                disabled={isAnimating || queue.length >= maxSize}
              />
              <button
                onClick={enqueue}
                className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors flex items-center gap-1 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isAnimating || queue.length >= maxSize || !inputValue}
              >
                <ArrowRight size={16} />
                Enqueue
              </button>
            </div>

            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={dequeue}
                className="px-3 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors flex items-center justify-center gap-1 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isAnimating || queue.length === 0}
              >
                <ArrowLeft size={16} />
                Dequeue
              </button>
              <button
                onClick={peek}
                className="px-3 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors flex items-center justify-center gap-1 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isAnimating || queue.length === 0}
              >
                <Eye size={16} />
                Peek
              </button>
              <button
                onClick={clear}
                className="px-3 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors flex items-center justify-center gap-1 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isAnimating || queue.length === 0}
              >
                <Trash2 size={16} />
                Clear
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={isEmpty}
                className="px-3 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors flex items-center justify-center gap-1"
                disabled={isAnimating}
              >
                <HelpCircle size={16} />
                Is Empty?
              </button>
              <button
                onClick={size}
                className="px-3 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors flex items-center justify-center gap-1"
                disabled={isAnimating}
              >
                <HelpCircle size={16} />
                Size?
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Notification */}
      {notification && (
        <div
          className={`p-3 rounded-md mb-4 flex items-start gap-2 ${
            notification.includes("Cannot") || notification.includes("Please enter")
              ? "bg-red-50 text-red-800 border border-red-200"
              : "bg-green-50 text-green-800 border border-green-200"
          }`}
        >
          <AlertCircle size={18} className="mt-0.5 flex-shrink-0" />
          <div>{notification}</div>
        </div>
      )}

      {/* Explanation */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="bg-gradient-to-r from-gray-700 to-gray-800 px-4 py-3">
          <h3 className="text-white font-medium">About Array Queues</h3>
        </div>
        <div className="p-4 text-sm">
          <p className="mb-2">
            An array queue is a queue implementation that uses JavaScript's built-in array methods to manage elements.
          </p>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            <li>
              Elements are added at the end using <code className="bg-gray-100 px-1 rounded">push()</code>
            </li>
            <li>
              Elements are removed from the front using <code className="bg-gray-100 px-1 rounded">shift()</code>
            </li>
            <li>This implementation has a maximum size of {maxSize} elements</li>
            <li>Unlike linear queues, array queues automatically shift elements after dequeue</li>
            <li>This makes array queues more memory efficient but potentially slower for large queues</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ArrayQueue

