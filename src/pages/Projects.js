import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules"; // Import Navigation untuk panah

const ProjectSection = () => {
  const [activeCategory, setActiveCategory] = useState("Web Development");

  // Data proyek berdasarkan kategori
  const projects = {
    "Web Development": [
      {
        id: 1,
        name: "Project 1",
        image: "https://via.placeholder.com/600x400",
      },
      {
        id: 2,
        name: "Project 2",
        image: "https://via.placeholder.com/600x400",
      },
    ],
    "Graphic Design": [
      { id: 3, name: "Design 1", image: "https://via.placeholder.com/600x400" },
      { id: 4, name: "Design 2", image: "https://via.placeholder.com/600x400" },
    ],
    "Microsoft Office": [
      { id: 5, name: "Office 1", image: "https://via.placeholder.com/600x400" },
      { id: 6, name: "Office 2", image: "https://via.placeholder.com/600x400" },
    ],
  };

  return (
    <div className="bg-customBlue2 min-h-screen flex justify-center items-center px-4 md:px-6">
      {/* Main Content */}
      <div className="w-full max-w-5xl px-4 py-8 mx-auto">
        {/* Project Title */}
        <div className="text-center mb-8">
          <h1 className="text-5xl md:text-7xl font-bold italic text-white">
            Project
          </h1>
        </div>

        {/* Category Section */}
        <div className="flex justify-center space-x-8 mb-8">
          <button
            onClick={() => setActiveCategory("Web Development")}
            className={`text-lg md:text-xl font-semibold italic ${
              activeCategory === "Web Development"
                ? "underline decoration-blue-500 text-white"
                : "text-gray-400"
            }`}
          >
            Web Development
          </button>
          <button
            onClick={() => setActiveCategory("Graphic Design")}
            className={`text-lg md:text-xl font-semibold italic ${
              activeCategory === "Graphic Design"
                ? "underline decoration-blue-500 text-white"
                : "text-gray-400"
            }`}
          >
            Graphic Design
          </button>
          <button
            onClick={() => setActiveCategory("Microsoft Office")}
            className={`text-lg md:text-xl font-semibold italic ${
              activeCategory === "Microsoft Office"
                ? "underline decoration-blue-500 text-white"
                : "text-gray-400"
            }`}
          >
            Microsoft Office
          </button>
        </div>

        {/* Carousel Section */}
        <Swiper
          modules={[Navigation]}
          navigation // Aktivasi tombol panah
          spaceBetween={30}
          slidesPerView={1}
          className="w-full"
        >
          {projects[activeCategory].map((project) => (
            <SwiperSlide key={project.id}>
              <div className="flex justify-center items-center">
                <div className="text-center">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="rounded-xl mx-auto"
                  />
                  <p className="text-white text-xl md:text-2xl font-semibold italic mt-4">
                    {project.name}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProjectSection;
