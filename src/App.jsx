import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ProjectDetails from "./Pages/ProjectDetails";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-gradient-to-br from-black via-[#0a0f1a] to-[#111111] min-h-screen text-white">
        <ScrollToTop />
        <Navbar />
        <div className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:id" element={<ProjectDetails />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
