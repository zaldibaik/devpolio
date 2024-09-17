// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Profile from "./pages/Profile";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import ContactForm from "./pages/ContactForm";
import MySkills from "./pages/MySkills";

function App() {
  return (
    <Router>
      <div className="bg-customBlue2 w-full flex">
        <div className="fixed top-0 left-0 z-50 md:ml-20 md:mt-12">
          <Sidebar />
        </div>
        <div className="w-full ml-[width of sidebar]">
          <Routes>
            <Route path="/" element={<Profile />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/MySkills" element={<MySkills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<ContactForm />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
