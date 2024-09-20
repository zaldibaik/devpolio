import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Profile from "./pages/Profile";
import Projects from "./pages/Projects";
import ContactForm from "./pages/ContactForm";
import MySkills from "./pages/MySkills";
import Loading from "./components/Loading"; // Import komponen loading
import Resume from "./pages/Resume";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulasi loading selama 2 detik
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Ganti durasi sesuai kebutuhan

    return () => clearTimeout(timer); // Membersihkan timer
  }, []);

  if (loading) {
    return <Loading />; // Tampilkan loading jika masih loading
  }

  return (
    <Router>
      <div className="bg-custom-gradient w-full flex">
        <audio src="/sounds/amYours.mp4" autoPlay loop />

        <div className="fixed top-0 left-0 z-50 md:ml-10 md:mt-10">
          <Sidebar />
        </div>
        <div className="w-full ml-[width of sidebar]">
          <Routes>
            <Route path="/" element={<Profile />} />
            <Route path="/Resume" element={<Resume />} />
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
