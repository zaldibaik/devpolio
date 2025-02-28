import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

// Import gambar
import programmingLanguages from "../pages/assets/tools-bhs-pemograman.png"; // Gambar hardware (Design)
import toolsofficeIcon from "../pages/assets/tools-office.png"; // Gambar office (Microsoft Office)
import toolsDesignIcon from "../pages/assets/tools-design.png"; // Gambar hardware (Design)
import Framework from "../pages/assets/Framework.png"; // Gambar hardware (Design)
import Frameworkcss from "../pages/assets/Frameworkcss.png"; // Gambar hardware (Design)

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("Web Dev"); // State buat kategori aktif
  const swiperRef = useRef(null); // Reference buat Swiper

  // Data skills berdasarkan kategori
  const skills = {
    "Web Dev": [
      { name: "Programming Languages", icon: programmingLanguages },
      { name: "Framework", icon: Framework },
      { name: "Framework CSS", icon: Frameworkcss },
    ],
    "Design": [
      { name: "Software", icon: toolsDesignIcon },
    ],
    "Microsoft Office": [
      { name: "Software", icon: toolsofficeIcon },
    ],
    "More": [
      { name: "Other Skills 1", icon: null },
      { name: "Other Skills 2", icon: null },
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
      className="bg-customBlue2 min-h-screen flex justify-center items-center p-2 overflow-hidden pb-10"
    >
      {/* Main Content */}
      <div className="w-full max-w-5xl px-2 py-4 mx-auto">
        <div className="bg-customBlue rounded-xl p-4 md:p-8 w-full border-2 border-blue-300 md:shadow-[0_4px_15px_rgba(0,123,255,0.6)]">
          {/* Title */}
          <div
            className="bg-customBlue2 rounded-xl p-6 md:p-12 text-center w-full border-2 border-blue-300"
            data-aos="zoom-in-down"
          >
            <h1 className="text-4xl md:text-6xl font-bold italic text-white">
              <span className="text-blue-300">Ski</span>lls
            </h1>

            <div className="flex justify-center space-x-4 md:space-x-6 mb-1 mt-3">
              {["Web Dev", "Design", "Microsoft Office", "More"].map((category) => (
                <div key={category} className="relative">
                  <button
                    onClick={() => handleCategoryChange(category)}
                    className={`md:text-lg md:text-xl md:font-semibold ${
                      activeCategory === category
                        ? "decoration-blue-500 text-white"
                        : "text-gray-400"
                    }`}
                  >
                    {category}
                  </button>
                  {/* Garis Biru di Bawah Tombol Aktif */}
                  {activeCategory === category && (
                    <div className="absolute left-0 right-0 h-1 bg-blue-500 transition-all duration-300 mt-1" />
                  )}
                </div>
              ))}
            </div>
          </div>
          {/* Carousel Section */}
          <div className="relative mt-8" data-aos="zoom-in-up">
            <Swiper
              modules={[Pagination, Navigation, Autoplay]}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
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
                  <div className="bg-customBlue2 rounded-xl p-6 md:p-8 text-center border-2 border-blue-300">
                    <h2 className="text-2xl md:text-4xl font-bold text-white">
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
