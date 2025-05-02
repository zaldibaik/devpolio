import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import poster from "./assets/PosterBangor.jpg";
import DashboardSeles from "./assets/DashboardSales.png";
import posterInfografi from "./assets/posterinfograpi.png";
import desainBlue from "./assets/design blue.png";
import crocodile from "./assets/beground (1).png";
import peri from "./assets/GABUNGAN GAMBAR (1).png";
import sampulBuku from "./assets/Buku zaldi dgn.png";
import MonsterBacground from "./assets/bacground1.png";
import Monster from "./assets/bacground1.png";
import sampulBukuSekolah from "./assets/cover book.png";
import VectorWajah from "./assets/VectorWajah.png";
import cakeshop from "./assets/cakeshop.png";
import webPortofolio from "./assets/webPortofolio.png";

const ProjectSection = () => {
  const [activeCategory, setActiveCategory] = useState("Web Dev");
  const swiperRef = useRef(null);

  // Data projects based on categories

  // Desain Grafish

  const additionalProjectsGraphicDesignDigitalImaging = [
    {
      id: 9,
      category: "Digital Imaging",
      name: "Crocodile",
      description: "Project using Certificate PowerPoint",
      image: crocodile,
    },
    {
      id: 10,
      category: "Digital Imaging",
      name: "Menggabungkan gambar",
      description: "Project using Certificate Access",
      image: peri,
    },
    {
      id: 10,
      category: "Digital Imaging",
      name: "Monster",
      description: "Project using Certificate Access",
      image: Monster,
    },
  ];
  const additionalProjectsGraphicDesignAnimasi = [
    {
      id: 9,
      category: "Animasi",
      name: "Udin & Idin",
      description:
        "Sebuah Animasi yang menceritakan kak dan adik yang memiliki sifat yang berbeda",
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
      description: "Project using Certificate Access",
      image: posterInfografi,
    },
  ];
  const additionalProjectsGraphicDesignVector = [
    {
      id: 9,
      category: "Vector",
      name: "Design stengah Vector",
      description: "Project using Certificate PowerPoint",
      image: desainBlue,
    },
    {
      id: 10,
      category: "Vector",
      name: "Vector Wajah",
      description: "Project using Certificate Access",
      image: VectorWajah,
    },
  ];
  const additionalProjectsGraphicDesignSampulBuku = [
    {
      id: 9,
      category: "Sampul Buku",
      name: "Sampul Buku Berpetualang",
      description: "Project using Certificate PowerPoint",
      image: sampulBuku,
    },
    {
      id: 10,
      category: "Sampul Buku",
      name: "Buku visi misi SMK TI BAZMA",
      description: "Project using Certificate Access",
      image: sampulBukuSekolah,
    },
  ];
  // Web Dev
  const additionalProjectsWebDevJS = [
    {
      id: 7,
      category: "laravel",
      name: "Project UKK",
      description: "Project UKK Yaitu membuat webuah website iccomers",
      image: cakeshop,
    },
  ];
  const additionalProjectsWebDevLaravel = [
    {
      id: 7,
      category: "React Js",
      name: "Web portofolio",
      description: "Another web dev project",
      image: webPortofolio,
    },
    {
      id: 8,
      category: "Lorem",
      name: "Web Dev Project 4",
      description: "Yet another web dev project",
      image:
        "https://media.suara.com/pictures/653x366/2019/01/09/97107-upin-ipin-youtube.jpg",
    },
  ];

  // Certificate

  const additionalProjectsCertificatePowerBI = [
    {
      id: 9,
      category: "Power BI",
      name: "Dashboard Seles",
      description: "Project using Certificate PowerPoint",
      image: DashboardSeles,
    },
    {
      id: 10,
      category: "Lorem",
      name: "Certificate Project 4",
      description: "Project using Certificate Access",
      image:
        "https://media.suara.com/pictures/653x366/2019/01/09/97107-upin-ipin-youtube.jpg",
    },
  ];
  const additionalProjectsCertificate = [
    {
      id: 9,
      category: "Lorem",
      name: "Certificate Project 3",
      description: "Project using Certificate PowerPoint",
      image:
        "https://media.suara.com/pictures/653x366/2019/01/09/97107-upin-ipin-youtube.jpg",
    },
    {
      id: 10,
      category: "Lorem",
      name: "Certificate Project 4",
      description: "Project using Certificate Access",
      image:
        "https://media.suara.com/pictures/653x366/2019/01/09/97107-upin-ipin-youtube.jpg",
    },
  ];

  //Other
  const additionalProjectsOther1 = [
    {
      id: 9,
      category: "Lorem",
      name: "Certificate Project 3",
      description: "Project using Certificate PowerPoint",
      image:
        "https://media.suara.com/pictures/653x366/2019/01/09/97107-upin-ipin-youtube.jpg",
    },
    {
      id: 10,
      category: "Lorem",
      name: "Certificate Project 4",
      description: "Project using Certificate Access",
      image:
        "https://media.suara.com/pictures/653x366/2019/01/09/97107-upin-ipin-youtube.jpg",
    },
  ];
  const additionalProjectsOther2 = [
    {
      id: 9,
      category: "Lorem",
      name: "Certificate Project 3",
      description: "Project using Certificate PowerPoint",
      image:
        "https://media.suara.com/pictures/653x366/2019/01/09/97107-upin-ipin-youtube.jpg",
    },
    {
      id: 10,
      category: "Lorem",
      name: "Certificate Project 4",
      description: "Project using Certificate Access",
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
                <span className="text-blue-300">Proj</span>ects
              </h1>
            </div>

            {/* Category Section */}
            <div className="flex justify-center space-x-2 md:space-x-6 mb-4 md:mb-8">
              {["Web Dev", "Design", "Certificate", "Other"].map((category) => (
                <div key={category} className="relative">
                  <button
                    onClick={() => handleCategoryChange(category)}
                    className={`text-sm md:text-lg h4 font-medium md:font-semibold ${
                      activeCategory === category
                        ? "text-blue-500"
                        : "text-gray-400"
                    }`}
                  >
                    {category}
                  </button>
                  {activeCategory === category && (
                    <div className="absolute left-0 right-0 bottom-0 h-1 bg-blue-500" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/*Web Dev */}
          <div class="grid md:grid-cols-2 grid-cols-1 md:gap-0">
            <div>
              {activeCategory === "Web Dev" && (
                <Swiper
                  pagination={{ clickable: true }}
                  autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }}
                  modules={[Pagination, Autoplay]}
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
                        <div className="grid grid-cols-1 md:gap-0 gap-4">
                          <div>
                            <a
                              className="bg-customBlue2 text-white py-1 px-3 md:py-2 md:px-5 rounded-full text-base md:text-lg hover:bg-blue-400 transition-colors border-2 w-full"
                              href="https://github.com/zzaldi"
                            >
                              Other on Github
                            </a>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              )}
            </div>
            <div>
              {activeCategory === "Web Dev" && (
                <Swiper
                  pagination={{ clickable: true }}
                  autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }}
                  modules={[Pagination, Autoplay]}
                  className="mt-6"
                >
                  {additionalProjectsWebDevLaravel.map((project) => (
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
                        <div className="grid grid-cols- md:gap-0 gap-4">
                          <div>
                            <a
                              className="bg-customBlue2 text-white py-1 px-3 md:py-2 md:px-5 rounded-full text-base md:text-lg hover:bg-blue-400 transition-colors border-2 w-full"
                              href="https://github.com/zzaldi"
                            >
                              Other on Github
                            </a>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              )}
            </div>
          </div>
          {/*Desain Grafis */}

          <div class="grid md:grid-cols-2 grid-cols-1 md:gap-0">
            <div class="...">
              {activeCategory === "Design" && (
                <Swiper
                  pagination={{ clickable: true }}
                  autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }}
                  modules={[Pagination, Autoplay]}
                  className="mt-6"
                >
                  {additionalProjectsGraphicDesignDigitalImaging.map(
                    (project) => (
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
                          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-0 gap-4">
                            <div>
                              <a
                                className="bg-customBlue2 text-white py-2 px-2 rounded-full text-base md:text-lg hover:bg-blue-400 transition-colors border-2 w-full"
                                href="https://www.behance.net/zaldizaldi"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Other on Behance
                              </a>
                            </div>
                            <div class="mt-2 md:mt-0">
                              <a
                                className="bg-customBlue2 text-white py-2 px-2  rounded-full text-base md:text-lg hover:bg-blue-400 transition-colors border-2 w-full"
                                href="https://www.instagram.com/zal_zaldii/"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Other on Instagram
                              </a>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    )
                  )}
                </Swiper>
              )}
            </div>
            <div class="...">
              {activeCategory === "Design" && (
                <Swiper
                  pagination={{ clickable: true }}
                  autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }}
                  modules={[Pagination, Autoplay]}
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
                        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-0 gap-4">
                          <div>
                            <a
                              className="bg-customBlue2 text-white py-2 px-2  rounded-full text-base md:text-lg hover:bg-blue-400 transition-colors border-2 w-full"
                              href="https://www.behance.net/zaldizaldi"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Other on Behance
                            </a>
                          </div>
                          <div class="mt-2 md:mt-0">
                            <a
                              className="bg-customBlue2 text-white py-2 px-2  rounded-full text-base md:text-lg hover:bg-blue-400 transition-colors border-2 w-full"
                              href="https://www.instagram.com/zal_zaldii/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Other on Instagram
                            </a>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              )}
            </div>
            <div class="...">
              {activeCategory === "Design" && (
                <Swiper
                  pagination={{ clickable: true }}
                  autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }}
                  modules={[Pagination, Autoplay]}
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
                        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-0 gap-4">
                          <div>
                            <a
                              className="bg-customBlue2 text-white py-2 px-2  rounded-full text-base md:text-lg hover:bg-blue-400 transition-colors border-2 w-full"
                              href="https://www.behance.net/zaldizaldi"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Other on Behance
                            </a>
                          </div>
                          <div class="mt-2 md:mt-0">
                            <a
                              className="bg-customBlue2 text-white py-2 px-2  rounded-full text-base md:text-lg hover:bg-blue-400 transition-colors border-2 w-full"
                              href="https://www.instagram.com/zal_zaldii/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Other on Instagram
                            </a>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              )}
            </div>
            <div class="...">
              {" "}
              {activeCategory === "Design" && (
                <Swiper
                  pagination={{ clickable: true }}
                  autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }}
                  modules={[Pagination, Autoplay]}
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
                        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-0 gap-4">
                          <div>
                            <a
                              className="bg-customBlue2 text-white py-2 px-2  rounded-full text-base md:text-lg hover:bg-blue-400 transition-colors border-2 w-full"
                              href="https://www.behance.net/zaldizaldi"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Other on Behance
                            </a>
                          </div>
                          <div class="mt-2 md:mt-0">
                            <a
                              className="bg-customBlue2 text-white py-2 px-2  rounded-full text-base md:text-lg hover:bg-blue-400 transition-colors border-2 w-full"
                              href="https://www.instagram.com/zal_zaldii/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Other on Instagram
                            </a>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              )}
            </div>
            <div class="...">
              {" "}
              {activeCategory === "Design" && (
                <Swiper
                  pagination={{ clickable: true }}
                  autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }}
                  modules={[Pagination, Autoplay]}
                  className="mt-6"
                >
                  {additionalProjectsGraphicDesignAnimasi.map((project) => (
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
                          <video className="max-600" controls>
                            <source
                              src="/video/UdinDanIdin.mp4"
                              type="video/mp4"
                            />
                            Your browser does not support the video tag.
                          </video>
                          <p className="text-white text-xl md:text-2xl font-semibold mt-4">
                            {project.name}
                          </p>
                          <p className="text-sm md:text-base text-white leading-relaxed mt-3 mb-8">
                            {project.description}
                          </p>
                        </a>
                        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-0 gap-4">
                          <div>
                            <a
                              className="bg-customBlue2 text-white py-2 px-2  rounded-full text-base md:text-lg hover:bg-blue-400 transition-colors border-2 w-full"
                              href="https://www.behance.net/zaldizaldi"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Other on Behance
                            </a>
                          </div>
                          <div class="mt-2 md:mt-0">
                            <a
                              className="bg-customBlue2 text-white py-2 px-2  rounded-full text-base md:text-lg hover:bg-blue-400 transition-colors border-2 w-full"
                              href="https://www.instagram.com/zal_zaldii/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Other on Instagram
                            </a>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              )}
            </div>
          </div>

          {/*Certificate */}
          <div class="grid md:grid-cols-2 grid-cols-1 md:gap-0">
            <div>
              {activeCategory === "Certificate" && (
                <Swiper
                  pagination={{ clickable: true }}
                  autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }}
                  modules={[Pagination, Autoplay]}
                  className="mt-6"
                >
                  {additionalProjectsCertificatePowerBI.map((project) => (
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
            </div>
            <div>
              {activeCategory === "Certificate" && (
                <Swiper
                  pagination={{ clickable: true }}
                  autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }}
                  modules={[Pagination, Autoplay]}
                  className="mt-6"
                >
                  {additionalProjectsCertificate.map((project) => (
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
            </div>
          </div>
          {/*Other*/}

          <div class="grid md:grid-cols-2 grid-cols-1 md:gap-0">
            <div>
              {activeCategory === "Other" && (
                <Swiper
                  pagination={{ clickable: true }}
                  autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }}
                  modules={[Pagination, Autoplay]}
                  className="mt-6"
                >
                  {additionalProjectsOther1.map((project) => (
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
            </div>
            <div>
              {activeCategory === "Other" && (
                <Swiper
                  pagination={{ clickable: true }}
                  autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }}
                  modules={[Pagination, Autoplay]}
                  className="mt-6"
                >
                  {additionalProjectsOther2.map((project) => (
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
