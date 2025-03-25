import { useState, useEffect } from "react"
import ArrayControls from "./ArrayControls"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { cn } from "@/lib/utils"
import { useNavigate } from "react-router-dom";

const WhatIsArray = () => (
  <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
    <h3 className="text-lg font-medium mb-2">Arrays in JavaScript</h3>
    <p className="mb-2">
      An array is an ordered collection of values. Each value is called an element, and each element has a numeric
      position in the array, known as its index.
    </p>
    <p className="mb-2">
      JavaScript arrays are zero-indexed: the first element of an array is at index 0, the second is at index 1, and so
      on.
    </p>
    <h4 className="font-medium mt-4 mb-2">Common Array Methods:</h4>
    <ul className="list-disc pl-5 space-y-1">
      <li>
        <code className="bg-gray-100 p-0.5 rounded">push()</code>: Adds elements to the end of an array
      </li>
      <li>
        <code className="bg-gray-100 p-0.5 rounded">pop()</code>: Removes the last element from an array
      </li>
      <li>
        <code className="bg-gray-100 p-0.5 rounded">shift()</code>: Removes the first element from an array
      </li>
      <li>
        <code className="bg-gray-100 p-0.5 rounded">unshift()</code>: Adds elements to the beginning of an array
      </li>
      <li>
        <code className="bg-gray-100 p-0.5 rounded">splice()</code>: Changes an array by removing or replacing elements
      </li>
    </ul>
  </div>
)

// Mock GeneratedCode component
const GeneratedCode = ({ generatedCode, explanation }) => (
  <Card className="mt-6">
    <CardHeader className="pb-2">
      <CardTitle className="text-lg">Generated Code</CardTitle>
      <CardDescription>See the JavaScript behind the operation</CardDescription>
    </CardHeader>
    <CardContent>
      <pre className="bg-gray-50 p-4 rounded-lg overflow-x-auto text-sm font-mono">{generatedCode}</pre>
      {explanation && <div className="mt-4 p-3 bg-blue-50 text-blue-800 rounded-lg text-sm">{explanation}</div>}
    </CardContent>
  </Card>
)

export default function ArrayVisualizer() {
  const [array, setArray] = useState([1, 2, 3, 4, 5])
  const [inputValue, setInputValue] = useState("")
  const [insertIndex, setInsertIndex] = useState("")
  const [generatedCode, setGeneratedCode] = useState("")
  const [explanation, setExplanation] = useState("")
  const [highlightedElement, setHighlightedElement] = useState(null)
  const [deletedElement, setDeletedElement] = useState(null)
  const [arrayUpdated, setArrayUpdated] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [alertOpen, setAlertOpen] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")


  const toggleVisibility = () => {
    setIsVisible(!isVisible)
  }

  // Navigation
  const navigate = useNavigate()
  const goBack = () => {
    navigate("/")
  }

  const updateGeneratedCode = (newCode, newExplanation) => {
    setGeneratedCode(newCode)
    setExplanation(newExplanation)
  }

  useEffect(() => {
    if (highlightedElement !== null) {
      const timer = setTimeout(() => setHighlightedElement(null), 2000)
      return () => clearTimeout(timer)
    }
    if (deletedElement !== null) {
      const timer = setTimeout(() => setDeletedElement(null), 1000)
      return () => clearTimeout(timer)
    }
  }, [highlightedElement, deletedElement])

  const showError = (message) => {
    setErrorMessage(message)
    setAlertOpen(true)
  }

  const addElement = () => {
    const newElementValue = Math.floor(Math.random() * 100) + 1
    const newArray = [...array, newElementValue]
    setArray(newArray)
    setHighlightedElement(newElementValue)
    setArrayUpdated(true)
    updateGeneratedCode(
      `let array = ${JSON.stringify(array)};\narray.push(${newElementValue}); // Added random element to the end\nconsole.log(array); // Output: ${JSON.stringify(newArray)}`,
      "This code adds a random element at the end of the array and prints the updated array."
    )
  }

  const removeElement = () => {
    if (array.length === 0) {
      showError("Array is already empty!")
      return
    }
    const newArray = array.slice(0, -1)
    setDeletedElement(array[array.length - 1])
    setArray(newArray)
    setArrayUpdated(true)
    updateGeneratedCode(
      `let array = ${JSON.stringify(array)};\narray = array.slice(0, -1); // Removed last element\nconsole.log(array); // Output: ${JSON.stringify(newArray)}`,
      "This code removes the last element from the array and prints the updated array."
    )
  }

  const popElement = () => {
    if (array.length === 0) {
      showError("Cannot pop from an empty array!")
      return
    }
    const poppedElement = array[array.length - 1]
    const newArray = array.slice(0, -1)
    setArray(newArray)
    setDeletedElement(poppedElement)
    setHighlightedElement(null)
    setArrayUpdated(true)
    updateGeneratedCode(
      `let array = ${JSON.stringify(array)};\nconst poppedElement = array.pop(); // Removed element at index ${array.length - 1} (value: ${poppedElement})\nconsole.log(array); // Output: ${JSON.stringify(newArray)}\nconsole.log(poppedElement); // Output: ${poppedElement}`,
      `This code removes the last element (value: ${poppedElement}) from the array using pop() and prints the updated array.`
    )
  }

  const insertElement = () => {
    const index = Number.parseInt(insertIndex)
    if (
      inputValue !== "" &&
      !isNaN(Number(inputValue)) &&
      !isNaN(index) &&
      index >= 0 &&
      index <= array.length
    ) {
      const newArray = [...array]
      newArray.splice(index, 0, Number.parseInt(inputValue))
      setArray(newArray)
      setInputValue("")
      setInsertIndex("")
      setHighlightedElement(Number.parseInt(inputValue))
      setArrayUpdated(true)
      updateGeneratedCode(
        `let array = ${JSON.stringify(array)};\narray.splice(${index}, 0, ${inputValue}); // Inserts ${inputValue} at index ${index}\nconsole.log(array); // Output: ${JSON.stringify(newArray)}`,
        `This code inserts the element ${inputValue} at index ${index} in the array and prints the updated array.`
      )
    } else {
      showError("Please enter a valid index and element!")
    }
  }

  const shiftElement = () => {
    if (array.length === 0) {
      showError("Cannot shift from an empty array!")
      return
    }
    const shiftedElement = array[0]
    const newArray = array.slice(1)
    setArray(newArray)
    setDeletedElement(shiftedElement)
    setArrayUpdated(true)
    updateGeneratedCode(
      `let array = ${JSON.stringify(array)};\nconst shiftedElement = array.shift(); // Removed element at index 0 (value: ${shiftedElement})\nconsole.log(array); // Output: ${JSON.stringify(newArray)}\nconsole.log(shiftedElement); // Output: ${shiftedElement}`,
      `This code removes the first element (value: ${shiftedElement}) from the array using shift() and prints the updated array.`
    )
  }

  const unshiftElement = () => {
    if (inputValue !== "" && !isNaN(Number(inputValue))) {
      const newArray = [Number.parseInt(inputValue), ...array]
      setArray(newArray)
      setInputValue("")
      setHighlightedElement(Number.parseInt(inputValue))
      setArrayUpdated(true)
      updateGeneratedCode(
        `let array = ${JSON.stringify(array)};\narray.unshift(${inputValue}); // Added ${inputValue} to the beginning of the array\nconsole.log(array); // Output: ${JSON.stringify(newArray)}`,
        `This code adds the element ${inputValue} at the beginning of the array using unshift() and prints the updated array.`
      )
    } else {
      showError("Please enter a valid number!")
    }
  }

  const reverseArray = () => {
    if (array.length <= 1) {
      showError("Need at least two elements to see the effect of reversing!")
      return
    }
    const newArray = [...array].reverse()
    setArray(newArray)
    setArrayUpdated(true)
    updateGeneratedCode(
      `let array = ${JSON.stringify(array)};\narray.reverse(); // Reverses the array\nconsole.log(array); // Output: ${JSON.stringify(newArray)}`,
      "This code reverses the array and prints the updated array."
    )
  }

  const sortArray = () => {
    if (array.length <= 1) {
      showError("Need at least two elements to see the effect of sorting!")
      return
    }
    const newArray = [...array].sort((a, b) => a - b)
    setArray(newArray)
    setArrayUpdated(true)
    updateGeneratedCode(
      `let array = ${JSON.stringify(array)};\narray.sort((a, b) => a - b); // Sorts the array\nconsole.log(array); // Output: ${JSON.stringify(newArray)}`,
      "This code sorts the array in ascending order and prints the updated array."
    )
  }

  const spliceElement = () => {
    const index = Number.parseInt(insertIndex)
    if (
      inputValue !== "" &&
      !isNaN(Number(inputValue)) &&
      !isNaN(index) &&
      index >= 0 &&
      index < array.length
    ) {
      const newArray = [...array]
      const removedElement = newArray[index]
      newArray.splice(index, 1, Number.parseInt(inputValue))
      setArray(newArray)
      setInputValue("")
      setInsertIndex("")
      setHighlightedElement(Number.parseInt(inputValue))
      setArrayUpdated(true)
      updateGeneratedCode(
        `let array = ${JSON.stringify(array)};\nconst removedElement = array.splice(${index}, 1, ${inputValue}); // Splices the array at index ${index} with ${inputValue}\nconsole.log(array); // Output: ${JSON.stringify(newArray)}\nconsole.log(removedElement); // Output: [${removedElement}]`,
        `This code splices the array at index ${index}, removing ${removedElement} and inserting ${inputValue} in its place.`
      )
    } else {
      showError("Please enter valid index and element!")
    }
  }

  const concatArray = () => {
    const randomElement = Math.floor(Math.random() * 100) + 1
    const newArray = array.concat([randomElement])
    setArray(newArray)
    setHighlightedElement(randomElement)
    setArrayUpdated(true)
    updateGeneratedCode(
      `let array = ${JSON.stringify(array)};\nconst randomElement = ${randomElement};\narray = array.concat([randomElement]); // Concatenates with a random element\nconsole.log(array); // Output: ${JSON.stringify(newArray)}`,
      "This code concatenates a random element to the array and prints the updated array."
    )
  }

  const sliceArray = () => {
    if (array.length < 3) {
      showError("Need at least 3 elements to demonstrate slicing!")
      return
    }
    const newArray = array.slice(1, 3)
    setArray(newArray)
    setArrayUpdated(true)
    updateGeneratedCode(
      `let array = ${JSON.stringify(array)};\narray = array.slice(1, 3); // Slices the array from index 1 to 3 (exclusive)\nconsole.log(array); // Output: ${JSON.stringify(newArray)}`,
      "This code extracts a section of the array from index 1 up to but not including index 3."
    )
  }

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6">
    <Button variant="ghost" onClick={goBack} className="flex items-center gap-2 mb-6">
        <ArrowLeft size={16} />
        Back
      </Button>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Array Visualizer
            <Badge variant="outline" className="ml-2">
              Length: {array.length}
            </Badge>
          </CardTitle>
          <CardDescription>Interactive tool to visualize JavaScript array operations</CardDescription>
        </CardHeader>
        <CardContent>
          {/* Array display container */}
          <div className="py-10 px-4 border border-gray-200 rounded-lg bg-gray-50 mb-2">
            <div className="flex flex-wrap items-center justify-center gap-6 relative">
              <div className="font-bold text-lg mr-2 h-12 flex items-center justify-center">arr</div>
              {array.length === 0 ? (
                <div className="text-gray-500 italic">[ ] Empty array</div>
              ) : (
                array.map((element, index) => (
                  <div key={index} className="relative">
                    <div
                      className={cn(
                        "w-12 h-12 flex items-center justify-center border-2 border-gray-300 rounded-lg transition-all duration-300",
                        highlightedElement === element
                          ? "bg-green-100 border-green-500 shadow-md scale-110"
                          : "bg-white",
                        deletedElement === element ? "opacity-50 scale-90" : ""
                      )}
                    >
                      {element}
                    </div>
                    <div className="absolute -bottom-6 left-0 right-0 text-center text-xs text-gray-500">[{index}]</div>
                  </div>
                ))
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      <ArrayControls
        onAddElement={addElement}
        onRemoveElement={removeElement}
        onPopElement={popElement}
        onPushElement={unshiftElement}
        onInsertElement={insertElement}
        onShiftElement={shiftElement}
        onUnshiftElement={unshiftElement}
        onReverseArray={reverseArray}
        onSortArray={sortArray}
        onSpliceElement={spliceElement}
        onConcatArray={concatArray}
        onSliceArray={sliceArray}
        inputValue={inputValue}
        setInputValue={setInputValue}
        insertIndex={insertIndex}
        setInsertIndex={setInsertIndex}
      />

      <GeneratedCode generatedCode={generatedCode} explanation={explanation} />

      <div className="mt-8">
        <Collapsible open={isVisible} onOpenChange={setIsVisible} className="border border-gray-200 rounded-lg">
          <CollapsibleTrigger asChild>
            <Button variant="ghost" className="w-full flex items-center justify-between p-4 rounded-lg">
              <span className="font-medium">What is an Array?</span>
              <span className="ml-2">
                {isVisible ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m18 15-6-6-6 6" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                )}
              </span>
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="px-4 pb-4">
            <WhatIsArray />
          </CollapsibleContent>
        </Collapsible>
      </div>

      <AlertDialog open={alertOpen} onOpenChange={setAlertOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Operation Error</AlertDialogTitle>
            <AlertDialogDescription>{errorMessage}</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction>Try Again</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
