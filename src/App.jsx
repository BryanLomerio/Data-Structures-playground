import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ArrayVisualizer from "./components/array/ArrayVisualizer";
import LinkedListVisualizer from "./pages/LinkedListVisualizer";
import QueueVisualizer from "./pages/QueueVisualizer";
import Hash from "./pages/Hash";
import Github from './components/Github';
import Stacks from "./pages/Stacks";
import ArrayQueue from "./components/queue/ArrayQueue";
import CircularQueue from "./components/queue/CircularQueue";
import QueueLinear from "./components/queue/QueueLinear";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/array-visualizer" element={<ArrayVisualizer />} />
        <Route path="/linked-list-visualizer" element={<LinkedListVisualizer />} />
        <Route path="/stacks" element={<Stacks />} />
        <Route path="/queues" element={<QueueVisualizer />} />
        <Route path="/array-queue" element={<ArrayQueue />} />
        <Route path="/circular-queue" element={<CircularQueue />} />
        <Route path="/queue-linear" element={<QueueLinear />} />
        <Route path="/hash-tables" element={<Hash />} />
      </Routes>
      <Github />
    </Router>
  );
};

export default App;
