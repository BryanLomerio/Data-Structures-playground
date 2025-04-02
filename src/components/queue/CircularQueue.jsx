import { useState, useEffect } from "react"
import { ArrowLeft, ArrowRight, RotateCcw, AlertCircle } from "lucide-react"
import { useNavigate } from "react-router-dom"

function CircularQueue() {
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
    return (rear + 1) % size === front
  }

  const isEmpty = () => {
    return front === -1
  }

  const enqueue = (item) => {
    if (isFull()) {
      setNotification("Queue is full! Cannot enqueue.")
      return
    }

    // Start animation
    setAnimationType("enqueue")
    setIsAnimating(true)

    setTimeout(() => {
      if (front === -1) {
        setFront(0)
      }
      const newRear = (rear + 1) % size
      const newQueue = [...queue]
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

      if (front === rear) {
        setFront(-1)
        setRear(-1)
      } else {
        setFront((front + 1) % size)
      }
      setQueue(newQueue)

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
        <h2 className="text-xl font-bold">Circular Queue</h2>
        <div className="w-[72px]"></div> {/* Spacer for centering */}
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-6">
        <div className="bg-gradient-to-r from-gray-700 to-gray-600 px-4 py-3">
          <h3 className="text-white font-medium">Queue Visualization (FIFO)</h3>
        </div>

        <div className="p-6">
          {/* Queue visualization */}
          <div className="flex justify-center items-center mb-12 mt-4">
            <div className="relative w-[280px] h-[280px]">
              {/* Circle background */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] rounded-full border-2 border-dashed border-gray-300"></div>

              {queue.map((item, index) => {
                const angle = index * (360 / size) * (Math.PI / 180)
                const x = Math.cos(angle) * 90
                const y = Math.sin(angle) * 90

                const isHighlighted =
                  (animationType === "enqueue" && index === rear) ||
                  (animationType === "dequeue" && index === front) ||
                  animationTarget === index

                return (
                  <div
                    key={index}
                    className={`absolute w-14 h-14 flex items-center justify-center rounded-full border-2 transition-all duration-300 ${
                      isHighlighted ? "scale-110 shadow-md z-10" : ""
                    } ${
                      item ? "bg-green-500 text-white border-green-600" : "bg-gray-100 text-gray-400 border-gray-200"
                    } ${index === front && front !== -1 ? "ring-2 ring-red-500 ring-offset-2" : ""} ${
                      index === rear && rear !== -1 ? "ring-2 ring-blue-500 ring-offset-2" : ""
                    }`}
                    style={{
                      top: "50%",
                      left: "50%",
                      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) ${isHighlighted && isAnimating ? "scale(1.2)" : "scale(1)"}`,
                    }}
                  >
                    <div className="text-center">
                      <div className="font-medium">{item || "-"}</div>
                      <div className="text-xs opacity-80">[{index}]</div>
                    </div>
                  </div>
                )
              })}

              {/* Front and Rear indicators */}
              {front !== -1 && (
                <div
                  className="absolute text-xs font-bold bg-red-100 text-red-800 px-2 py-1 rounded-full z-20"
                  style={{
                    top: "50%",
                    left: "50%",
                    transform: `translate(calc(-50% + ${Math.cos(front * (360 / size) * (Math.PI / 180)) * 140}px), calc(-50% + ${Math.sin(front * (360 / size) * (Math.PI / 180)) * 140}px))`,
                  }}
                >
                  Front
                </div>
              )}

              {rear !== -1 && (
                <div
                  className="absolute text-xs font-bold bg-blue-100 text-blue-800 px-2 py-1 rounded-full z-20"
                  style={{
                    top: "50%",
                    left: "50%",
                    transform: `translate(calc(-50% + ${Math.cos(rear * (360 / size) * (Math.PI / 180)) * 140}px), calc(-50% + ${Math.sin(rear * (360 / size) * (Math.PI / 180)) * 140}px))`,
                  }}
                >
                  Rear
                </div>
              )}
            </div>
          </div>

          {/* Queue status */}
          <div className="grid grid-cols-3 gap-3 mb-4">
            <div className="bg-gray-50 p-3 rounded-lg border border-gray-200 text-center">
              <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Front</div>
              <div className="font-medium">{front === -1 ? "None" : front}</div>
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
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
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
                className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors flex items-center gap-1 disabled:opacity-50 disabled:cursor-not-allowed"
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
          <h3 className="text-white font-medium">About Circular Queues</h3>
        </div>
        <div className="p-4 text-sm">
          <p className="mb-2">
            A circular queue is a linear data structure that follows the FIFO (First In First Out) principle and the
            last position is connected to the first position to make a circle.
          </p>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            <li>Elements are added at the rear and removed from the front</li>
            <li>When the rear reaches the end, it wraps around to the beginning if space is available</li>
            <li>This implementation uses a fixed-size array of {size} elements</li>
            <li>The queue is full when (rear + 1) % size equals front</li>
            <li>The queue is empty when front equals -1</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CircularQueue

