// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Profile from './pages/Profile';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import ContactForm from './pages/ContactForm';
import Skills from './pages/Skills';

function App() {
  return (
    <Router>
      <div >
        <Sidebar />
        <div className="ml-16 w-full">
          <Routes>
            <Route path="/" element={<Profile />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/skills
            " element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<ContactForm />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
