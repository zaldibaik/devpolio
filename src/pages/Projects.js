import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import poster from "./assets/PosterBangor.jpg";
import DashboardSeles from "./assets/dashboardseles.png";
import posterInfografi from "./assets/posterinfograpi.png"

const ProjectSection = () => {
  const [activeCategory, setActiveCategory] = useState("Web Development");
  const swiperRef = useRef(null);

  // Data projects based on categories

  // Desain Grafish

  const additionalProjectsGraphicDesignDigitalImaging = [
    {
      id: 9,
      category:"Digital Imaging",
      name: "Digital Imaging",
      description: "Project using Microsoft PowerPoint",
      image: "https://media.suara.com/pictures/653x366/2019/01/09/97107-upin-ipin-youtube.jpg",

      link: "https://example.com/microsoft-office-project3",
    },
    {
      id: 10,
      category:"Digital Imaging",
      name: "Microsoft Office Project 4",
      description: "Project using Microsoft Access",
      image:
        "https://media.suara.com/pictures/653x366/2019/01/09/97107-upin-ipin-youtube.jpg",

      link: "https://example.com/microsoft-office-project4",
    },
  ];
  const additionalProjectsGraphicDesignPoster = [
    {
      id: 9,
      category:"poster",
      name: "Poster Bangor",
      description: "Poster Bangor dalam Tema momen syukur lebih spesial dengan rasa lezat dari bangor",
      image: 
        poster,

      link: "https://example.com/microsoft-office-project3",
    },
    {
      id: 10,
      category:"poster",
      name: "Poster Infografi",
      description: "Project using Microsoft Access",
      image: posterInfografi,
      link: "https://example.com/microsoft-office-project4",
    },
  ];
  const additionalProjectsGraphicDesignVector = [
    {
      id: 9,
      name: "Vector",
      description: "Project using Microsoft PowerPoint",
      image:
        "https://media.suara.com/pictures/653x366/2019/01/09/97107-upin-ipin-youtube.jpg",

      link: "https://example.com/microsoft-office-project3",
    },
    {
      id: 10,
      name: "Microsoft Office Project 4",
      description: "Project using Microsoft Access",
      image: "https://example.com/msoffice4.jpg",
      link: "https://example.com/microsoft-office-project4",
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
      link: "https://github.com/zaldibaik/project3",
    },
    {
      id: 8,
      name: "Web Dev Project 4",
      description: "Yet another web development project",
      image: "https://example.com/webdev4.jpg",
      link: "https://github.com/zaldibaik/project4",
    },
  ];
  const additionalProjectsWebDevPHP = [
    {
      id: 7,
      name: "Web Dev Project 3",
      description: "Another web development project",
      image:
        "https://media.suara.com/pictures/653x366/2019/01/09/97107-upin-ipin-youtube.jpg",
      link: "https://github.com/zaldibaik/project3",
    },
    {
      id: 8,
      name: "Web Dev Project 4",
      description: "Yet another web development project",
      image: "https://example.com/webdev4.jpg",
      link: "https://github.com/zaldibaik/project4",
    },
  ];

  // Microsoft Office

  const additionalProjectsMicrosoftPowerBI = [
    {
      id: 9,
      category:"Power BI",
      name: "Dashboard Seles",
      description: "Project using Microsoft PowerPoint",
      image:
        DashboardSeles,

      link: "https://example.com/microsoft-office-project3",
    },
    {
      id: 10,
      name: "Microsoft Office Project 4",
      description: "Project using Microsoft Access",
      image:
        "https://media.suara.com/pictures/653x366/2019/01/09/97107-upin-ipin-youtube.jpg",

      link: "https://example.com/microsoft-office-project4",
    },
  ];
  const additionalProjectsMicrosoftExcel = [
    {
      id: 9,
      name: "Microsoft Office Project 3",
      description: "Project using Microsoft PowerPoint",
      image:
        "https://media.suara.com/pictures/653x366/2019/01/09/97107-upin-ipin-youtube.jpg",

      link: "https://example.com/microsoft-office-project3",
    },
    {
      id: 10,
      name: "Microsoft Office Project 4",
      description: "Project using Microsoft Access",
      image:
        "https://media.suara.com/pictures/653x366/2019/01/09/97107-upin-ipin-youtube.jpg",

      link: "https://example.com/microsoft-office-project4",
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
        <div className="bg-customBlue rounded-xl p-4 md:p-8 w-full">
          {/* Project Title */}
          <div className="bg-customBlue2 rounded-xl p-1 md:p-5 mb-5">
            <div className="text-center mb-8">
              <h1 className="text-6xl md:text-8xl font-hurricane italic text-white">
                Portofolio
              </h1>
            </div>

            {/* Category Section */}
            <div className="flex justify-center space-x-6 md:space-x-8 mb-8">
              {["Web Development", "Graphic Design", "Microsoft Office"].map(
                (category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryChange(category)}
                    className={`md:text-lg md:text-xl md:font-semihurricane ${
                      activeCategory === category
                        ? "underline decoration-blue-500 text-white"
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
                  <div className="bg-customBlue2 rounded-xl p-6 md:p-8 text-center m-3">
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
                      <p className="text-white text-xl md:text-2xl font-semihurricane mt-4">
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
          {activeCategory === "Web Development" && (
            <Swiper
              pagination={{ clickable: true }}
              modules={[Pagination]}
              className="mt-6"
            >
              {additionalProjectsWebDevPHP.map((project) => (
                <SwiperSlide key={project.id}>
                  <div className="bg-customBlue2 rounded-xl p-6 md:p-8 text-center m-3">
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
                      <p className="text-white text-xl md:text-2xl font-semihurricane mt-4">
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

          {activeCategory === "Graphic Design" && (
            <Swiper
              pagination={{ clickable: true }}
              modules={[Pagination]}
              className="mt-6"
            >
              {additionalProjectsGraphicDesignDigitalImaging.map((project) => (
                <SwiperSlide key={project.id}>
                  <div className="bg-customBlue2 rounded-xl p-6 md:p-8 text-center m-3">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <p className="text-white text-xl md:text-6xl font-hurricane mb-4">
                        {project.category}
                      </p>
                      <img
                        src={project.image}
                        alt={project.name}
                        className="rounded-xl mx-auto"
                      />
                      <p className="text-white text-xl md:text-2xl font-bold mt-4">
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
          {activeCategory === "Graphic Design" && (
            <Swiper
              pagination={{ clickable: true }}
              modules={[Pagination]}
              className="mt-6"
            >
              {additionalProjectsGraphicDesignPoster.map((project) => (
                <SwiperSlide key={project.id}>
                  <div className="bg-customBlue2 rounded-xl p-6 md:p-8 text-center m-3">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <p className="text-white text-xl md:text-7xl font-hurricane mb-4">
                        {project.category}
                      </p>
                      <img
                        src={project.image}
                        alt={project.name}
                        className="rounded-xl mx-auto"
                      />
                      
                      <p className="text-white text-xl md:text-3xl font-bold mt-4">
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
          {activeCategory === "Graphic Design" && (
            <Swiper
              pagination={{ clickable: true }}
              modules={[Pagination]}
              className="mt-6"
            >
              {additionalProjectsGraphicDesignVector.map((project) => (
                <SwiperSlide key={project.id}>
                  <div className="bg-customBlue2 rounded-xl p-6 md:p-8 text-center m-3">
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
                      <p className="text-white text-xl md:text-2xl font-semihurricane mt-4">
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

          {/* Additional Carousel for Microsoft Office */}
          {activeCategory === "Microsoft Office" && (
            <Swiper
              pagination={{ clickable: true }}
              modules={[Pagination]}
              className="mt-6"
            >
              {additionalProjectsMicrosoftPowerBI.map((project) => (
                <SwiperSlide key={project.id}>
                  <div className="bg-customBlue2 rounded-xl p-6 md:p-8 text-center m-3">
                  <p className="text-white text-xl md:text-3xl font-semihurricane mb-4">
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
                      <p className="text-white text-xl md:text-2xl font-semihurricane mt-4">
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
                  <div className="bg-customBlue2 rounded-xl p-6 md:p-8 text-center m-3">
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
                      <p className="text-white text-xl md:text-2xl font-semihurricane mt-4">
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
