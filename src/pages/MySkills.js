import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("Web Development"); // State untuk kategori aktif
  const swiperRef = useRef(null); // Reference untuk Swiper

  // Data skills berdasarkan kategori
  const skills = {
    "Web Development": [
      { name: "Programming language", icon: "/path/to/html-icon.png" },
      { name: "FrameWork", icon: "/path/to/css-icon.png" },
    ],
    "Graphic Design": [
      { name: "Hardware", icon: "/path/to/photoshop-icon.png" },
    ],
    "Microsoft Office": [
      { name: "MIcrosoft Office", icon: "/path/to/word-icon.png" },
    ],
  };

  // Fungsi untuk mengganti kategori dan mengembalikan Swiper ke slide pertama
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    if (swiperRef.current) {
      swiperRef.current.slideTo(0); // Kembalikan ke slide pertama
    }
  };

  return (
    <div id="Skills" className="bg-customBlue2 min-h-screen flex justify-center items-center p-4 overflow-hidden">
      {/* Main Content */}
      <div className="w-full max-w-4xl px-4 py-8 mx-auto">
        <div className="bg-customBlue rounded-xl p-4 md:p-8 w-full">
          {/* Skills Title */}
          <div className="bg-customBlue2 rounded-xl p-6 md:p-12 text-center w-full">
            <h1 className="text-4xl md:text-6xl font-bold italic text-white">
              Skills
            </h1>
          </div>

          {/* Tab Section */}
          <div className="mt-8 flex justify-center space-x-8">
            <button
              onClick={() => handleCategoryChange("Web Development")}
              className={`text-white font-bold italic cursor-pointer ${
                activeCategory === "Web Development" ? "underline decoration-blue-500" : ""
              }`}
            >
              Web Development
            </button>
            <button
              onClick={() => handleCategoryChange("Graphic Design")}
              className={`text-white font-bold italic cursor-pointer ${
                activeCategory === "Graphic Design" ? "underline decoration-blue-500" : ""
              }`}
            >
              Graphic Design
            </button>
            <button
              onClick={() => handleCategoryChange("Microsoft Office")}
              className={`text-white font-bold italic cursor-pointer ${
                activeCategory === "Microsoft Office" ? "underline decoration-blue-500" : ""
              }`}
            >
              Microsoft Office
            </button>
          </div>

          {/* Carousel Section */}
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={30}
            slidesPerView={1}
            className="mt-8 w-full"
            onSwiper={(swiper) => (swiperRef.current = swiper)} // Set reference untuk Swiper
          >
            {skills[activeCategory].map((skill, index) => (
              <SwiperSlide key={index}>
                <div className="bg-customBlue2 rounded-xl p-6 md:p-8 text-center">
                  <h2 className="text-2xl md:text-4xl font-bold italic text-white">
                    {skill.name}
                  </h2>
                  <div className="flex justify-center mt-4 space-x-8">
                    <img src={skill.icon} alt={skill.name} className="h-16" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Skills;
