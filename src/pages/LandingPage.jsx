import { useNavigate } from "react-router-dom"
import Card from "../components/Card"
import Array from "../assets/array.png"
import LinkedList from "../assets/LinkedList.png"
import Stacks from "../assets/stacks.png"
import Queues from "../assets/Queues.png"
import Hash from "../assets/hash.png"
import Soon from "../assets/soon.avif"
import Tree from "../assets/tree.png"

const LandingPage = () => {
  const navigate = useNavigate()

  const handleCardClick = (visualizerType) => {
    const routes = {
      array: "/array-visualizer",
      "linked-list": "/linked-list-visualizer",
      stacks: "/stacks",
      queues: "/queues",
      "hash-tables": "/hash-tables",
      trees: "/trees",
      graphs: "/graphs",
      heaps: "/heaps",
      sets: "/sets",
      tries: "/tries",
    }

    navigate(routes[visualizerType])
  }

  const visualizers = [
    { id: "array", title: "Array Visualizer", image: Array, available: true },
    { id: "linked-list", title: "Linked List Visualizer", image: LinkedList, available: true },
    { id: "stacks", title: "Stacks Visualizer", image: Stacks, available: true },
    { id: "queues", title: "Queues Visualizer", image: Queues, available: true },
    { id: "hash-tables", title: "Hash Tables Visualizer", image: Hash, available: true },
    { id: "trees", title: "Trees Visualizer", image: Tree, available: true },
    { id: "graphs", title: "Graphs Visualizer", image: Soon, available: false },
    { id: "heaps", title: "Heaps Visualizer", image: Soon, available: false },
    { id: "sets", title: "Sets Visualizer", image: Soon, available: false },
    { id: "tries", title: "Tries Visualizer", image: Soon, available: false },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-12">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-green-800 mb-3">Data Structure Visualization</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Interactive visualizations to help you understand how different data structures work
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {visualizers.map((item) => (
            <div
              key={item.id}
              className={`transform transition-all duration-300 hover:scale-105 ${!item.available && "opacity-80"}`}
            >
              <Card
                title={item.title}
                description={
                  item.available
                    ? `Click to explore ${item.title}`
                    : "Coming soon! This visualizer is under development."
                }
                onClick={() => item.available && handleCardClick(item.id)}
                image={item.image}
                className={`h-full ${!item.available && "cursor-default"}`}
              />
              {!item.available && (
                <div className="mt-2 bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded-full inline-block">
                  Coming Soon
                </div>
              )}
            </div>
          ))}
        </div>

        <footer className="mt-16 text-center text-gray-500 text-sm">
          <p>Learn data structures through interactive visualizations</p>
        </footer>
      </div>
    </div>
  )
}

export default LandingPage

