import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

// Import modul Pagination saja
import { Pagination } from "swiper/modules";

const Resume = () => {
  return (
    <div className="bg-customBlue2 min-h-screen flex justify-center items-center p-4 overflow-hidden md:pb-0 pb-20">
      {/* Main Content */}
      <div className="w-full max-w-5xl">
        <div className="bg-customBlue rounded-xl p-4 md:p-8">
          {/* Resume Title */}
          <div
            className=" rounded-xl p-6 md:p-10 text-center"
            data-aos="zoom-in-down"
          >
            <h1 className="text-4xl md:text-6xl font-bold italic text-white">
              Resume
            </h1>
          </div>
          <div
            className="bg-customBlue2 mt-6 rounded-xl p-6 md:p-10 text-center"
            data-aos="zoom-in-down"
          >
            <h1 className="text-2xl md:text-4xl font-bold italic text-white">
              Education
            </h1>
          </div>
          <Swiper
            pagination={{ clickable: true }}
            modules={[Pagination]} // Hanya menggunakan Pagination
            className="mt-2"
          >
            {/* Slide 1 */}
            <div data-aos="zoom-in-up">
              <SwiperSlide>
                <div className="bg-customBlue2 rounded-xl p-6 md:p-8 text-center m-3">
                  <div className="flex flex-col items-center space-y-4 md:space-y-6">
                  </div>
                  <div className="mt-4 md:mt-6">
                  <div className="text-xl text-3xl md:text-5xl font-bold text-white">
                      SMPN 7 Angge Raja
                    </div>
                    <div className="text-xl md:text-2xl font-bold text-white mt-6">
                      2018 - 2020
                    </div>
                    <p className="text-sm md:text-base text-white leading-relaxed mt-3">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book
                    </p>
                  </div>
                </div>
              </SwiperSlide>

              {/* Slide 2 */}
              <SwiperSlide>
                <div
                  className="bg-customBlue2 rounded-xl p-6 md:p-8 text-center m-3"
                  data-aos="zoom-in-up"
                >
                  <div className="flex flex-col items-center space-y-4 md:space-y-6">
                  </div>
                  <div className="mt-4 md:mt-6">
                  <div className="text-xl text-3xl md:text-5xl font-bold text-white">
                      SMK TI BAZMA
                    </div>
                    <div className="text-xl md:text-2xl font-bold text-white mt-6">
                      2021 - present
                    </div>
                    <p className="text-sm md:text-base text-white leading-relaxed mt-3">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                  </div>
                </div>
              </SwiperSlide>

              {/* Slide 3 */}
              <SwiperSlide>
                <div className="bg-customBlue2 rounded-xl p-6 md:p-8 text-center m-3">
                  <div className="flex flex-col items-center space-y-4 md:space-y-6">
                  </div>
                  <div className="mt-4 md:mt-7">
                    <div className="text-xl md:text-2xl font-bold text-white">
                      Lorem Ipsum is simply dummy
                    </div>
                    <p className="text-sm md:text-base text-white leading-relaxed mt-3">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </div>

            {/* Add more slides as needed */}
          </Swiper>
          <div
            className="bg-customBlue2 mt-6 rounded-xl p-6 md:p-10 text-center"
            data-aos="zoom-in-down"
          >
            <h1 className="text-2xl md:text-4xl font-bold italic text-white">
              Experience
            </h1>
          </div>

          {/* Logos and Text in Swiper */}
          <Swiper
            pagination={{ clickable: true }}
            modules={[Pagination]} // Hanya menggunakan Pagination
            className="mt-2"
          >
            {/* Slide 1 */}
            <div data-aos="zoom-in-up">
              {/* Slide 2 */}
              <SwiperSlide>
                <div className="bg-customBlue2 rounded-xl p-6 md:p-8 text-center m-3">
                  <div className="flex flex-col items-center space-y-4 md:space-y-6">
                  </div>
                  <div className="mt-4 md:mt-7">
                    <div className="text-xl md:text-2xl font-bold text-white">
                      Melaksanakan PKL di Shared Services Project – Technology &
                      Development
                    </div>
                    <p className="text-sm md:text-base text-white leading-relaxed mt-3">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book
                    </p>
                  </div>
                </div>
              </SwiperSlide>

              {/* Slide 3 */}
              <SwiperSlide>
                <div className="bg-customBlue2 rounded-xl p-6 md:p-8 text-center m-3">
                  <div className="flex flex-col items-center space-y-4 md:space-y-6">
                  </div>
                  <div className="mt-4 md:mt-7">
                    <div className="text-xl md:text-2xl font-bold text-white">
                      Lorem Ipsum is simply dummy
                    </div>
                    <p className="text-sm md:text-base text-white leading-relaxed mt-3">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </div>

            {/* Add more slides as needed */}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Resume;
