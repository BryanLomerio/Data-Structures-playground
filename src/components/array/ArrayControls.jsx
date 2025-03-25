import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Plus,
  Trash2,
  ArrowDown,
  ArrowUp,
  ArrowLeftToLine,
  ArrowRightToLine,
  RefreshCw,
  SortAsc,
  Scissors,
  PlusSquare,
  Slice,
  MoveLeft,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export default function ArrayControls({
  onAddElement,
  onRemoveElement,
  onPopElement,
  onPushElement,
  onInsertElement,
  onShiftElement,
  onUnshiftElement,
  onReverseArray,
  onSortArray,
  onSpliceElement,
  onConcatArray,
  onSliceArray,
  inputValue,
  setInputValue,
  insertIndex,
  setInsertIndex,
}) {
  return (
    <div className="p-5 border border-gray-200 rounded-lg shadow-sm bg-white">
      <Tabs defaultValue="basic" className="w-full">
        <TabsList className="grid grid-cols-3 mb-4">
          <TabsTrigger value="basic">Basic</TabsTrigger>
          <TabsTrigger value="modification">Modification</TabsTrigger>
          <TabsTrigger value="transformation">Transformation</TabsTrigger>
        </TabsList>

        <TabsContent value="basic" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button onClick={onAddElement} className="w-full" variant="outline" size="sm">
                    <Plus size={16} className="mr-2" />
                    Add Random
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Add a random number to the end of the array</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button onClick={onRemoveElement} className="w-full" variant="outline" size="sm">
                    <Trash2 size={16} className="mr-2" />
                    Remove Last
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Remove the last element from the array</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button onClick={onPopElement} className="w-full" variant="outline" size="sm">
                    <ArrowDown size={16} className="mr-2" />
                    Pop Element
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Remove the last element and return it</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="element-input" className="text-sm font-medium">
                Element Value
              </label>
              <div className="flex space-x-2">
                <Input
                  id="element-input"
                  type="number"
                  placeholder="Enter a number"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="flex-grow"
                />
                <Button onClick={onPushElement} variant="secondary" size="sm">
                  <ArrowUp size={16} className="mr-2" />
                  Push
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="index-input" className="text-sm font-medium">
                Insert at Index
              </label>
              <div className="flex space-x-2">
                <Input
                  id="index-input"
                  type="number"
                  placeholder="Enter index"
                  value={insertIndex}
                  onChange={(e) => setInsertIndex(e.target.value)}
                  className="flex-grow"
                />
                <Button onClick={onInsertElement} variant="secondary" size="sm">
                  <ArrowLeftToLine size={16} className="mr-2" />
                  Insert
                </Button>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="modification" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="splice-operation" className="text-sm font-medium">
                Splice Element
              </label>
              <div className="grid grid-cols-2 gap-2">
                <Input
                  type="number"
                  placeholder="Value"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="w-full"
                />
                <Input
                  type="number"
                  placeholder="Index"
                  value={insertIndex}
                  onChange={(e) => setInsertIndex(e.target.value)}
                  className="w-full"
                />
                <Button onClick={onSpliceElement} className="col-span-2" variant="outline" size="sm">
                  <Scissors size={16} className="mr-2" />
                  Splice Element
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="unshift-operation" className="text-sm font-medium">
                Unshift Element
              </label>
              <div className="flex flex-col gap-2">
                <Input
                  type="number"
                  placeholder="Value to add at beginning"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="w-full"
                />
                <Button onClick={onUnshiftElement} variant="outline" size="sm">
                  <ArrowRightToLine size={16} className="mr-2" />
                  Unshift Element
                </Button>
              </div>
            </div>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button onClick={onShiftElement} className="w-full" variant="outline" size="sm">
                    <MoveLeft size={16} className="mr-2" />
                    Shift Element
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Remove the first element and return it</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button onClick={onConcatArray} className="w-full" variant="outline" size="sm">
                    <PlusSquare size={16} className="mr-2" />
                    Concat Array
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Combine with another array</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </TabsContent>

        <TabsContent value="transformation" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button onClick={onReverseArray} className="w-full" variant="outline" size="sm">
                    <RefreshCw size={16} className="mr-2" />
                    Reverse Array
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Reverse the order of elements</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button onClick={onSortArray} className="w-full" variant="outline" size="sm">
                    <SortAsc size={16} className="mr-2" />
                    Sort Array
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Sort elements in ascending order</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
