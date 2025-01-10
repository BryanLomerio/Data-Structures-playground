import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ArrayVisualizer from "./components/array/ArrayVisualizer";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/array-visualizer" element={<ArrayVisualizer />} />
      </Routes>
    </Router>
  );
};

export default App;
