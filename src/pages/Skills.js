import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Skills = () => {
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
            <div className="text-white font-bold italic cursor-pointer">
              Web Development
            </div>
            <div className="text-white font-bold italic cursor-pointer">
              Graphic Design
            </div>
            <div className="text-white font-bold italic cursor-pointer">
              Microsoft Office
            </div>
          </div>

          {/* Carousel Section */}
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={30}
            slidesPerView={1}
            className="mt-8 w-full"
          >
            <SwiperSlide>
              <div className="bg-customBlue2 rounded-xl p-6 md:p-8 text-center">
                <h2 className="text-2xl md:text-4xl font-bold italic text-white">
                  Bahasa Pemrograman
                </h2>
                <div className="flex justify-center mt-4 space-x-8">
                  <img
                    src="/path/to/html-icon.png" // Pastikan path benar
                    alt="HTML"
                    className="h-16"
                  />
                  <img
                    src="/path/to/css-icon.png" // Pastikan path benar
                    alt="CSS"
                    className="h-16"
                  />
                  <img
                    src="/path/to/js-icon.png" // Pastikan path benar
                    alt="JS"
                    className="h-16"
                  />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-customBlue2 rounded-xl p-6 md:p-8 text-center">
                <h2 className="text-2xl md:text-4xl font-bold italic text-white">
                  Framework
                </h2>
                <div className="flex justify-center mt-4 space-x-8">
                  <img
                    src="/path/to/laravel-icon.png" // Pastikan path benar
                    alt="Laravel"
                    className="h-16"
                  />
                  <img
                    src="/path/to/react-icon.png" // Pastikan path benar
                    alt="React"
                    className="h-16"
                  />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-customBlue2 rounded-xl p-6 md:p-8 text-center">
                <h2 className="text-2xl md:text-4xl font-bold italic text-white">
                  Framework CSS
                </h2>
                <div className="flex justify-center mt-4 space-x-8">
                  <img
                    src="/path/to/tailwind-icon.png" // Pastikan path benar
                    alt="Tailwind CSS"
                    className="h-16"
                  />
                  <img
                    src="/path/to/bootstrap-icon.png" // Pastikan path benar
                    alt="Bootstrap"
                    className="h-16"
                  />
                  <img
                    src="/path/to/pure-css-icon.png" // Pastikan path benar
                    alt="Pure CSS"
                    className="h-16"
                  />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Skills;
