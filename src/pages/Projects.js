import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"; // Tambahkan CSS untuk pagination
import { Navigation, Pagination } from "swiper/modules"; // Import Pagination

const ProjectSection = () => {
  const [activeCategory, setActiveCategory] = useState("Web Development");
  const swiperRef = useRef(null); // Reference untuk Swiper

  // Data proyek berdasarkan kategori, dengan link yang sesuai
  const projects = {
    "Web Development": [
      {
        id: 1,
        name: "Project 1",
        image:
          "https://image.popmama.com/content-images/community/20230620/community-19d71834eb62929ad943075160605b88.jpg?1726211369",
        link: "https://github.com/zaldibaik/portofolio", // Link ke GitHub
      },
      {
        id: 2,
        name: "Project 2",
        image:
          "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiCDhj1K6gWUt97g14MhdFKwelz-5kW3190rXmiv6w-SjG9AATYTw8CUp8VE17Vaam-o-ugJEGOlxfPkPG66V5Ky78SQX3TgDy31DYuQKMXEr6a26VWX-d2WBTQZWJ_E36BmSxEaudIGgga2L3Mh1fkQwZ-32tvt8241tZP4m_FU3Br4NyxRwTkPnmcALbk/s800/Ultraman-Ginga-S-Movie-Heisei-Ultras.jpg",
        link: "https://github.com/zaldibaik/portofolio", // Link ke GitHub
      },
    ],
    "Graphic Design": [
      {
        id: 3,
        name: "Design 1",
        image:
          "https://media.suara.com/pictures/653x366/2019/01/09/97107-upin-ipin-youtube.jpg",
        link: "https://www.behance.net/your-profile/design1", // Link ke Behance
      },
      {
        id: 4,
        name: "Design 2",
        image:
          "https://media.suara.com/pictures/653x366/2021/09/15/19731-kartun-upin-dan-ipin-facebookupinipinofficial.jpg",
        link: "https://www.behance.net/your-profile/design2", // Link ke Behance
      },
    ],
    "Microsoft Office": [
      {
        id: 5,
        name: "Office 1",
        image:
          "https://cdn.idntimes.com/content-images/duniaku/post/20230330/dora-dan-boots-dfc63c106f03db8ea792dcc7647d5be9_600x400.jpg",
        link: "https://upload.microsoft.com/your-profile/office1", // Link upload untuk Office
      },
      {
        id: 6,
        name: "Office 2",
        image:
          "https://d1tgyzt3mf06m9.cloudfront.net/production/media/2018/juni/inilah-aktor-villain-di-live-action-dora-the-explorer/1-inilah-aktor-villain-di-live-action-dora-the-explorer-700x700.jpg",
        link: "https://upload.microsoft.com/your-profile/office2", // Link upload untuk Office
      },
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
    <div className="bg-customBlue2 min-h-screen flex justify-center items-center px-4 md:pb-0 pb-20 md:px-6">
      {/* Main Content */}
      <div className="w-full max-w-5xl px-4 py-8 mx-auto">
        <div className="bg-customBlue rounded-xl p-4 md:p-8 w-full">
          {/* Project Title */}
          <div
            className="bg-customBlue2 rounded-xl p-1 md:p-5 mb-5"
            data-aos="zoom-in-down"
          >
            <div className="text-center mb-8">
              <h1 className="text-5xl md:text-7xl font-bold italic text-white">
                Project
              </h1>
            </div>

            {/* Category Section */}
            <div
              className="flex justify-center space-x-8 mb-8"
              data-aos="zoom-in-down"
            >
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
                className={`md:text-lg md:text-xl md:font-semibold ${
                  activeCategory === "Microsoft Office"
                    ? "underline decoration-blue-500 text-white"
                    : "text-gray-400"
                }`}
              >
                Microsoft Office
              </button>
            </div>
          </div>

          {/* Carousel Section */}
          <div
            className="bg-customBlue2 rounded-xl p-3 md:p-5"
            data-aos="zoom-in-up"
          >
            <div className="relative">
              <Swiper
                modules={[Navigation, Pagination]} // Tambahkan Pagination di sini
                spaceBetween={30}
                slidesPerView={1}
                className="w-full"
                pagination={{ clickable: true }} // Aktifkan pagination yang bisa diklik
                onSwiper={(swiper) => (swiperRef.current = swiper)} // Set reference untuk Swiper
              >
                {projects[activeCategory].map((project) => (
                  <SwiperSlide key={project.id}>
                    <div className="flex justify-center items-center pb-10 md:pt-10">
                      <div className="text-center">
                        {/* Link dibungkus di sekitar gambar dan judul */}
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src={project.image}
                            alt={project.name}
                            className="rounded-xl mx-auto"
                          />
                          <p className="text-white text-xl md:text-2xl font-semibold italic mt-4">
                            {project.name}
                          </p>
                          <p className="text-sm md:text-base text-white leading-relaxed mt-3">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book
                          </p>
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
