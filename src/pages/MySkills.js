import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

// Import gambar
import programmingLanguages from "../pages/assets/tools-bhs-pemograman.png"; // Gambar hardware (Graphic Design)
import toolsWordIcon from "../pages/assets/tools-word.png"; // Gambar Word (Microsoft Office)
import toolsDesignIcon from "../pages/assets/tools-design.png"; // Gambar hardware (Graphic Design)
import Framework from "../pages/assets/Framework.png"; // Gambar hardware (Graphic Design)
import Frameworkcss from "../pages/assets/Frameworkcss.png"; // Gambar hardware (Graphic Design)

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("Web Development"); // State buat kategori aktif
  const swiperRef = useRef(null); // Reference buat Swiper

  // Data skills berdasarkan kategori
  const skills = {
    "Web Development": [
      { name: "Programming Languages", icon: programmingLanguages }, // Kategori Web Development gak ada icon
      { name: "Framework", icon: Framework },
      { name: "Framework CSS", icon: Frameworkcss },
    ],
    "Graphic Design": [
      { name: "Hardware", icon: toolsDesignIcon }, // Graphic Design ada icon hardware
    ],
    "Microsoft Office": [
      { name: "Word", icon: toolsWordIcon }, // Microsoft Office ada icon Word
    ],
  };

  // Fungsi buat ganti kategori
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    if (swiperRef.current) {
      swiperRef.current.slideTo(0); // Kembalikan ke slide pertama
    }
  };

  return (
    <div
      id="Skills"
      className="bg-customBlue2 min-h-screen flex justify-center items-center p-4 overflow-hidden pb-10"
    >
      {/* Main Content */}
      <div className="w-full max-w-4xl px-4 py-8 mx-auto">
        <div className="bg-customBlue rounded-xl p-4 md:p-8 w-full">
          {/* Title */}
          <div className="bg-customBlue2 rounded-xl p-6 md:p-12 text-center w-full" data-aos="zoom-in-down">
            <h1 className="text-4xl md:text-6xl font-bold  text-white" >
              Skills
            </h1>
          </div>

          <div className="flex justify-center space-x-8 mb-8" data-aos="zoom-in-down">
            <button
              onClick={() => handleCategoryChange("Web Development")}
              className={`md:text-lg md:text-xl md:font-semibold  ${
                activeCategory === "Web Development"
                  ? "underline decoration-blue-500 text-white"
                  : "text-gray-400"
              }`}
            >
              Web Development
            </button>
            <button
              onClick={() => handleCategoryChange("Graphic Design")}
              className={`md:text-lg md:text-xl md:font-semibold  ${
                activeCategory === "Graphic Design"
                  ? "underline decoration-blue-500 text-white"
                  : "text-gray-400"
              }`}
            >
              Graphic Design
            </button>
            <button
              onClick={() => handleCategoryChange("Microsoft Office")}
              className={`md:text-lg md:text-xl md:font-semibold  ${
                activeCategory === "Microsoft Office"
                  ? "underline decoration-blue-500 text-white"
                  : "text-gray-400"
              }`}
            >
              Microsoft Office
            </button>
          </div>

          {/* Carousel Section */}
          <div className="relative mt-8" data-aos="zoom-in-up">
            <Swiper
              modules={[Pagination, Navigation]}
              pagination={{ clickable: true }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              spaceBetween={30}
              slidesPerView={1}
              className="w-full"
              onSwiper={(swiper) => (swiperRef.current = swiper)} // Set reference buat Swiper
            >
              {skills[activeCategory].map((skill, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-customBlue2 rounded-xl p-6 md:p-8 text-center">
                    <h2 className="text-2xl md:text-4xl font-bold  text-white">
                      {skill.name}
                    </h2>
                    {skill.icon && (
                      <div className="flex justify-center mt-4 space-x-8">
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          className="h-16"
                        />
                      </div>
                    )}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
