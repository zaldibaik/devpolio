import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import poster from "./assets/PosterBangor.jpg";
import DashboardSeles from "./assets/DashboardSales.png";
import posterInfografi from "./assets/posterinfograpi.png";
import desainBlue from "./assets/design blue.png";
import crocodile from "./assets/beground (1).png";
import peri from "./assets/GABUNGAN GAMBAR (1).png";
import sampulBuku from "./assets/Buku zaldi dgn.png";
import MonsterBacground from "./assets/bacground1.png";
import Monster from "./assets/Hue_Saturation 1 copy 2.png";
import sampulBukuSekolah from "./assets/cover book.png";
import VectorWajah from "./assets/VectorWajah.png";

const ProjectSection = () => {
  const [activeCategory, setActiveCategory] = useState("Web Development");
  const swiperRef = useRef(null);

  // Data projects based on categories

  // Desain Grafish

  const additionalProjectsGraphicDesignDigitalImaging = [
    {
      id: 9,
      category: "Digital Imaging",
      name: "Crocodile",
      description: "Project using Microsoft PowerPoint",
      image: crocodile,

    },
    {
      id: 10,
      category: "Digital Imaging",
      name: "Menggabungkan gambar",
      description: "Project using Microsoft Access",
      image: peri,

    },
    {
      id: 10,
      category: "Digital Imaging",
      name: "Monster",
      description: "Project using Microsoft Access",
      image: Monster,
    },
  ];
  const additionalProjectsGraphicDesignPoster = [
    {
      id: 9,
      category: "poster",
      name: "Poster Bangor",
      description:
        "Poster Bangor dalam Tema momen syukur lebih spesial dengan rasa lezat dari bangor",
      image: poster,

    },
    {
      id: 10,
      category: "poster",
      name: "Poster Infografi",
      description: "Project using Microsoft Access",
      image: posterInfografi,
    },
  ];
  const additionalProjectsGraphicDesignVector = [
    {
      id: 9,
      category: "Vector",
      name: "Design stengah Vector",
      description: "Project using Microsoft PowerPoint",
      image: desainBlue,

    },
    {
      id: 10,
      category: "Vector",
      name: "Vector Wajah",
      description: "Project using Microsoft Access",
      image: VectorWajah,
    },
  ];
  const additionalProjectsGraphicDesignSampulBuku = [
    {
      id: 9,
      category: "Sampul Buku",
      name: "Sampul Buku Berpetualang",
      description: "Project using Microsoft PowerPoint",
      image: sampulBuku,

    },
    {
      id: 10,
      category: "Sampul Buku",
      name: "Buku visi misi SMK TI BAZMA",
      description: "Project using Microsoft Access",
      image: sampulBukuSekolah,
    },
  ];
  // Web Development
  const additionalProjectsWebDevJS = [
    {
      id: 7,
      name: "Web Dev Project 3",
      description: "Another web development project",
      image:
        "https://media.suara.com/pictures/653x366/2019/01/09/97107-upin-ipin-youtube.jpg",
    },
    {
      id: 8,
      name: "Web Dev Project 4",
      description: "Yet another web development project",
      image: "https://example.com/webdev4.jpg",
    },
  ];
  const additionalProjectsWebDevPHP = [
    {
      id: 7,
      name: "Web Dev Project 3",
      description: "Another web development project",
      image:
        "https://media.suara.com/pictures/653x366/2019/01/09/97107-upin-ipin-youtube.jpg",
    },
    {
      id: 8,
      name: "Web Dev Project 4",
      description: "Yet another web development project",
      image: "https://example.com/webdev4.jpg",
    },
  ];

  // Microsoft Office

  const additionalProjectsMicrosoftPowerBI = [
    {
      id: 9,
      category: "Power BI",
      name: "Dashboard Seles",
      description: "Project using Microsoft PowerPoint",
      image:
        DashboardSeles,

    },
    {
      id: 10,
      name: "Microsoft Office Project 4",
      description: "Project using Microsoft Access",
      image:
        "https://media.suara.com/pictures/653x366/2019/01/09/97107-upin-ipin-youtube.jpg",

    },
  ];
  const additionalProjectsMicrosoftExcel = [
    {
      id: 9,
      name: "Microsoft Office Project 3",
      description: "Project using Microsoft PowerPoint",
      image:
        "https://media.suara.com/pictures/653x366/2019/01/09/97107-upin-ipin-youtube.jpg",

    },
    {
      id: 10,
      name: "Microsoft Office Project 4",
      description: "Project using Microsoft Access",
      image:
        "https://media.suara.com/pictures/653x366/2019/01/09/97107-upin-ipin-youtube.jpg",

    },
  ];

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(0); // Reset to first slide
    }
  };

  return (
    <div className="bg-customBlue2 min-h-screen flex justify-center items-center px-4 md:pb-0 pb-20 md:px-6">
      <div className="w-full max-w-5xl px-4 py-8 mx-auto">
        <div className="bg-customBlue rounded-xl p-4 md:p-8 w-full border-2 border-blue-300 md:shadow-[0_4px_15px_rgba(0,123,255,0.6)]">
          {/* Project Title */}
          <div className="bg-customBlue2 rounded-xl p-1 md:p-5 mb-5 border-2 border-blue-300">
            <div className="text-center mb-8">
              <h1 className="text-5xl md:text-7xl font-bold italic text-white">
                <span className="text-blue-300">Porto</span>folio
              </h1>
            </div>

            {/* Category Section */}
            <div className="flex justify-center space-x-2 md:space-x-6 mb-4 md:mb-8">
              {["Web Development", "Graphic Design", "Microsoft Office"].map(
                (category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryChange(category)}
                    className={`text-sm md:text-lg h4 font-medium md:font-semibold ${
                      activeCategory === category
                        ? "decoration-blue-500 text-white"
                        : "text-gray-400"
                    }`}
                  >
                    {category}
                  </button>
                )
              )}
            </div>
          </div>

          {/* Additional Carousel for Web Development */}
          {activeCategory === "Web Development" && (
            <Swiper
              pagination={{ clickable: true }}
              modules={[Pagination]}
              className="mt-6"
            >
              {additionalProjectsWebDevJS.map((project) => (
                <SwiperSlide key={project.id}>
                  <div className="bg-customBlue2 rounded-xl p-6 md:p-8 text-center m-3 border-2 border-blue-300">
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
                      <p className="text-white text-xl md:text-2xl font-semibold mt-4">
                        {project.name}
                      </p>
                      <p className="text-sm md:text-base text-white leading-relaxed mt-3 mb-8">
                        {project.description}
                      </p>
                    </a>
                    <div className="grid grid-cols- gap-4">
                      <div>
                        <a
                          className="bg-customBlue2 text-white py-1 px-3 md:py-3 md:px-8 rounded-full text-base md:text-lg hover:bg-blue-400 transition-colors border-2 w-full"
                          href="https://www.instagram.com/zal_zaldii/"
                        >
                          More on Github
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
          {activeCategory === "Web Development" && (
            <Swiper
              pagination={{ clickable: true }}
              modules={[Pagination]}
              className="mt-6"
            >
              {additionalProjectsWebDevPHP.map((project) => (
                <SwiperSlide key={project.id}>
                  <div className="bg-customBlue2 rounded-xl p-6 md:p-8 text-center m-3 border-2 border-blue-300">
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
                      <p className="text-white text-xl md:text-2xl font-semibold mt-4">
                        {project.name}
                      </p>
                      <p className="text-sm md:text-base text-white leading-relaxed mt-3 mb-8">
                        {project.description}
                      </p>
                    </a>
                    <div className="grid grid-cols- gap-4">
                      <div>
                        <a
                          className="bg-customBlue2 text-white py-1 px-3 md:py-3 md:px-8 rounded-full text-base md:text-lg hover:bg-blue-400 transition-colors border-2 w-full"
                          href="https://github.com/zaldibaik"
                        >
                          More on Github
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}

          {activeCategory === "Graphic Design" && (
            <Swiper
              pagination={{ clickable: true }}
              modules={[Pagination]}
              className="mt-6"
            >
              {additionalProjectsGraphicDesignDigitalImaging.map((project) => (
                <SwiperSlide key={project.id}>
                  <div className="bg-customBlue2 rounded-xl p-6 md:p-8 text-center m-3 border-2 border-blue-300">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <p className="text-white text-xl md:text-3xl font-semibold mb-4">
                        {project.category}
                      </p>
                      <img
                        src={project.image}
                        alt={project.name}
                        className="rounded-xl mx-auto"
                      />
                      <p className="text-white text-xl md:text-2xl font-semibold mt-4">
                        {project.name}
                      </p>
                      <p className="text-sm md:text-base text-white leading-relaxed mt-3 mb-8">
                        {project.description}
                      </p>
                    </a>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <a
                          className="bg-customBlue2 text-white py-1 px-3 md:py-3 md:px-8 rounded-full text-base md:text-lg hover:bg-blue-400 transition-colors border-2 w-full"
                          href="https://www.behance.net/zaldizaldi"
                        >
                           More on Behance
                        </a>
                      </div>
                      <div>
                        <a
                          className="bg-customBlue2 text-white py-1 px-3 md:py-3 md:px-8 rounded-full text-base md:text-lg hover:bg-blue-400 transition-colors border-2 w-full"
                          href="https://www.instagram.com/zal_zaldii/"
                        >
                          More on Instagram
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
          {activeCategory === "Graphic Design" && (
            <Swiper
              pagination={{ clickable: true }}
              modules={[Pagination]}
              className="mt-6"
            >
              {additionalProjectsGraphicDesignPoster.map((project) => (
                <SwiperSlide key={project.id}>
                  <div className="bg-customBlue2 rounded-xl p-6 md:p-8 text-center m-3 border-2 border-blue-300">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <p className="text-white text-xl md:text-3xl font-semibold mb-4">
                        {project.category}
                      </p>
                      <img
                        src={project.image}
                        alt={project.name}
                        className="rounded-xl mx-auto"
                      />

                      <p className="text-white text-xl md:text-2xl font-semibold mt-4">
                        {project.name}
                      </p>
                      <p className="text-sm md:text-base text-white leading-relaxed mt-3 mb-8">
                        {project.description}
                      </p>
                    </a>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <a
                          className="bg-customBlue2 text-white py-1 px-3 md:py-3 md:px-8 rounded-full text-base md:text-lg hover:bg-blue-400 transition-colors border-2 w-full"
                          href="https://www.behance.net/zaldizaldi"
                        >
                           More on Behance
                        </a>
                      </div>
                      <div>
                        <a
                          className="bg-customBlue2 text-white py-1 px-3 md:py-3 md:px-8 rounded-full text-base md:text-lg hover:bg-blue-400 transition-colors border-2 w-full"
                          href="https://www.instagram.com/zal_zaldii/"
                        >
                          More on Instagram
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
          {activeCategory === "Graphic Design" && (
            <Swiper
              pagination={{ clickable: true }}
              modules={[Pagination]}
              className="mt-6"
            >
              {additionalProjectsGraphicDesignSampulBuku.map((project) => (
                <SwiperSlide key={project.id}>
                  <div className="bg-customBlue2 rounded-xl p-6 md:p-8 text-center m-3 border-2 border-blue-300">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <p className="text-white text-xl md:text-3xl font-semibold mb-4">
                        {project.category}
                      </p>
                      <img
                        src={project.image}
                        alt={project.name}
                        className="rounded-xl mx-auto"
                      />

                      <p className="text-white text-xl md:text-2xl font-semibold mt-4">
                        {project.name}
                      </p>
                      <p className="text-sm md:text-base text-white leading-relaxed mt-3 mb-8">
                        {project.description}
                      </p>
                    </a>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <a
                          className="bg-customBlue2 text-white py-1 px-3 md:py-3 md:px-8 rounded-full text-base md:text-lg hover:bg-blue-400 transition-colors border-2 w-full"
                          href="https://www.behance.net/zaldizaldi"
                        >
                           More on Behance
                        </a>
                      </div>
                      <div>
                        <a
                          className="bg-customBlue2 text-white py-1 px-3 md:py-3 md:px-8 rounded-full text-base md:text-lg hover:bg-blue-400 transition-colors border-2 w-full"
                          href="https://www.instagram.com/zal_zaldii/"
                        >
                          More on Instagram
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
          {activeCategory === "Graphic Design" && (
            <Swiper
              pagination={{ clickable: true }}
              modules={[Pagination]}
              className="mt-6"
            >
              {additionalProjectsGraphicDesignVector.map((project) => (
                <SwiperSlide key={project.id}>
                  <div className="bg-customBlue2 rounded-xl p-6 md:p-8 text-center m-3 border-2 border-blue-300">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <p className="text-white text-xl md:text-3xl font-semibold mb-4">
                        {project.category}
                      </p>
                      <img
                        src={project.image}
                        alt={project.name}
                        className="rounded-xl mx-auto"
                      />
                      <p className="text-white text-xl md:text-2xl font-semibold mt-4">
                        {project.name}
                      </p>
                      <p className="text-sm md:text-base text-white leading-relaxed mt-3 mb-8">
                        {project.description}
                      </p>
                    </a>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <a
                          className="bg-customBlue2 text-white py-1 px-3 md:py-3 md:px-8 rounded-full text-base md:text-lg hover:bg-blue-400 transition-colors border-2 w-full"
                          href="https://www.behance.net/zaldizaldi"
                        >
                           More on Behance
                        </a>
                      </div>
                      <div>
                        <a
                          className="bg-customBlue2 text-white py-1 px-3 md:py-3 md:px-8 rounded-full text-base md:text-lg hover:bg-blue-400 transition-colors border-2 w-full"
                          href="https://www.instagram.com/zal_zaldii/"
                        >
                          More on Instagram
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}

          {/* Additional Carousel for Microsoft Office */}
          {activeCategory === "Microsoft Office" && (
            <Swiper
              pagination={{ clickable: true }}
              modules={[Pagination]}
              className="mt-6"
            >
              {additionalProjectsMicrosoftPowerBI.map((project) => (
                <SwiperSlide key={project.id}>
                  <div className="bg-customBlue2 rounded-xl p-6 md:p-8 text-center m-3 border-2 border-blue-300">
                    <p className="text-white text-xl md:text-3xl font-semibold mb-4">
                      {project.category}
                    </p>
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
                      <p className="text-white text-xl md:text-2xl font-semibold mt-4">
                        {project.name}
                      </p>
                      <p className="text-sm md:text-base text-white leading-relaxed mt-3">
                        {project.description}
                      </p>
                    </a>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
          {activeCategory === "Microsoft Office" && (
            <Swiper
              pagination={{ clickable: true }}
              modules={[Pagination]}
              className="mt-6"
            >
              {additionalProjectsMicrosoftExcel.map((project) => (
                <SwiperSlide key={project.id}>
                  <div className="bg-customBlue2 rounded-xl p-6 md:p-8 text-center m-3 border-2 border-blue-300">
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
                      <p className="text-white text-xl md:text-2xl font-semibold mt-4">
                        {project.name}
                      </p>
                      <p className="text-sm md:text-base text-white leading-relaxed mt-3">
                        {project.description}
                      </p>
                    </a>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
