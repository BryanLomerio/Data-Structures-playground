import { useState, useEffect } from "react"
import { ArrowLeft, ArrowRight, RotateCcw, AlertCircle } from "lucide-react"
import { useNavigate } from "react-router-dom"

function QueueLinear() {
  const size = 5
  const [queue, setQueue] = useState(new Array(size).fill(null))
  const [front, setFront] = useState(-1)
  const [rear, setRear] = useState(-1)
  const [notification, setNotification] = useState("")
  const [inputValue, setInputValue] = useState("")
  const [isAnimating, setIsAnimating] = useState(false)
  const [animationTarget, setAnimationTarget] = useState(null)
  const [animationType, setAnimationType] = useState(null)

  // Navigation
  const navigate = useNavigate()
  const goBack = () => {
    navigate("/queues")
  }

  useEffect(() => {
    setNotification("Welcome! You can now add items to the queue.")
  }, [])

  const isFull = () => {
    return rear === size - 1
  }

  const isEmpty = () => {
    return front === -1 || front > rear
  }

  // Enqueue operation
  const enqueue = (item) => {
    if (isFull()) {
      setNotification("Queue is full! Cannot enqueue.")
      return
    }

    // Start animation
    setAnimationType("enqueue")
    setIsAnimating(true)

    setTimeout(() => {
      const newQueue = [...queue]
      if (front === -1) {
        setFront(0)
      }
      const newRear = rear + 1
      newQueue[newRear] = item
      setQueue(newQueue)
      setRear(newRear)
      setAnimationTarget(newRear)

      setTimeout(() => {
        setIsAnimating(false)
        setAnimationTarget(null)
        setNotification(`Enqueued: '${item}' at position ${newRear}`)
      }, 500)
    }, 500)
  }

  // Dequeue operation
  const dequeue = () => {
    if (isEmpty()) {
      setNotification("Queue is empty! Cannot dequeue.")
      return
    }

    // Start animation
    setAnimationType("dequeue")
    setAnimationTarget(front)
    setIsAnimating(true)

    const dequeuedItem = queue[front]

    setTimeout(() => {
      const newQueue = [...queue]
      newQueue[front] = null
      setQueue(newQueue)
      setFront(front + 1)

      if (front > rear) {
        setFront(-1)
        setRear(-1)
      }

      setTimeout(() => {
        setIsAnimating(false)
        setAnimationTarget(null)
        setNotification(`Dequeued: '${dequeuedItem}' from position ${front}`)
      }, 500)
    }, 500)
  }

  const reset = () => {
    setQueue(new Array(size).fill(null))
    setFront(-1)
    setRear(-1)
    setNotification("Queue has been reset.")
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
        <h2 className="text-xl font-bold">Linear Queue</h2>
        <div className="w-[72px]"></div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-6">
        <div className="bg-gradient-to-r from-gray-700 to-gray-600 px-4 py-3">
          <h3 className="text-white font-medium">Queue Visualization (FIFO)</h3>
        </div>

        <div className="p-6">
          {/* Queue visualization */}
          <div className="flex flex-col items-center mb-12 mt-4">
            <div className="relative mb-10">
              <div className="flex border-2 border-gray-300 rounded-lg overflow-hidden">
                {queue.map((item, index) => {
                  const isHighlighted =
                    (animationType === "enqueue" && index === rear) ||
                    (animationType === "dequeue" && index === front) ||
                    animationTarget === index

                  return (
                    <div
                      key={index}
                      className={`w-16 h-16 flex items-center justify-center border-r-2 border-gray-300 last:border-r-0 transition-all duration-300 ${
                        isHighlighted ? "scale-110 shadow-md z-10" : ""
                      } ${item ? "bg-purple-500 text-white" : "bg-gray-100 text-gray-400"} ${
                        index === front && front !== -1 && !isEmpty() ? "ring-2 ring-red-500 ring-inset" : ""
                      } ${index === rear && rear !== -1 ? "ring-2 ring-blue-500 ring-inset" : ""}`}
                    >
                      <div className="text-center">
                        <div className="font-medium">{item || "-"}</div>
                        <div className="text-xs opacity-80">[{index}]</div>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Front and Rear indicators */}
              <div className="absolute -bottom-10 left-0 right-0 flex justify-between px-2">
                {front !== -1 && !isEmpty() && (
                  <div
                    className="text-xs font-bold text-red-600 flex flex-col items-center"
                    style={{
                      position: "absolute",
                      left: `calc(${front * (100 / size)}% + ${8}px)`,
                      transform: "translateX(-50%)",
                    }}
                  >
                    <div className="h-6 w-px bg-red-400 mb-1"></div>
                    Front
                  </div>
                )}

                {rear !== -1 && (
                  <div
                    className="text-xs font-bold text-blue-600 flex flex-col items-center"
                    style={{
                      position: "absolute",
                      left: `calc(${rear * (100 / size)}% + ${8 + rear * 16}px)`,
                      transform: "translateX(-50%)",
                    }}
                  >
                    <div className="h-6 w-px bg-blue-400 mb-1"></div>
                    Rear
                  </div>
                )}
              </div>
            </div>

            {/* Direction indicators */}
            <div className="flex items-center justify-between w-full max-w-md mb-2">
              <div className="flex flex-col items-center">
                <div className="text-xs text-gray-500 mb-1">Dequeue from here</div>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-red-500"
                >
                  <line x1="19" y1="12" x2="5" y2="12"></line>
                  <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-xs text-gray-500 mb-1">Enqueue here</div>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-blue-500"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
            </div>
          </div>

          {/* Queue status */}
          <div className="grid grid-cols-3 gap-3 mb-4">
            <div className="bg-gray-50 p-3 rounded-lg border border-gray-200 text-center">
              <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Front</div>
              <div className="font-medium">{isEmpty() ? "None" : front}</div>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg border border-gray-200 text-center">
              <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Rear</div>
              <div className="font-medium">{rear === -1 ? "None" : rear}</div>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg border border-gray-200 text-center">
              <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Status</div>
              <div
                className={`font-medium ${isEmpty() ? "text-yellow-600" : isFull() ? "text-red-600" : "text-green-600"}`}
              >
                {isEmpty() ? "Empty" : isFull() ? "Full" : `${queue.filter((item) => item !== null).length}/${size}`}
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex flex-col space-y-4">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Enter value"
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                disabled={isAnimating || isFull()}
              />
              <button
                onClick={() => {
                  if (inputValue) {
                    enqueue(inputValue)
                    setInputValue("")
                  } else {
                    setNotification("Please enter a value.")
                  }
                }}
                className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition-colors flex items-center gap-1 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isAnimating || isFull() || !inputValue}
              >
                <ArrowRight size={16} />
                Enqueue
              </button>
            </div>

            <div className="flex space-x-2">
              <button
                onClick={dequeue}
                className="flex-1 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors flex items-center justify-center gap-1 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isAnimating || isEmpty()}
              >
                <ArrowLeft size={16} />
                Dequeue
              </button>
              <button
                onClick={reset}
                className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors flex items-center gap-1 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isAnimating || (isEmpty() && front === -1)}
              >
                <RotateCcw size={16} />
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Notification */}
      {notification && (
        <div
          className={`p-3 rounded-md mb-4 flex items-start gap-2 ${
            notification.includes("Cannot")
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
          <h3 className="text-white font-medium">About Linear Queues</h3>
        </div>
        <div className="p-4 text-sm">
          <p className="mb-2">
            A linear queue is a basic queue implementation that follows the FIFO (First In First Out) principle where
            elements are added at the rear and removed from the front.
          </p>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            <li>Unlike circular queues, linear queues don't wrap around when they reach the end</li>
            <li>This implementation uses a fixed-size array of {size} elements</li>
            <li>The queue is full when rear reaches size-1</li>
            <li>The queue is empty when front equals -1 or front &gt; rear</li>
            <li>A limitation of linear queues is that space cannot be reused after dequeue operations</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default QueueLinear

