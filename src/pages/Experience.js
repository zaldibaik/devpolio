import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Experience = () => {
  return (
    <div className="bg-customBlue2 min-h-screen flex justify-center items-center p-4 overflow-hidden">
      {/* Main Content */}
      <div className="w-full max-w-4xl px-4 py-8 mx-auto">
        <div className="bg-customBlue rounded-xl p-4 md:p-8 w-full">
          {/* Experience Title */}
          <div className="bg-customBlue2 rounded-xl p-6 md:p-12 text-center w-full">
            <h1 className="text-4xl md:text-6xl font-bold italic text-white">
              Experience
            </h1>
          </div>

          {/* Carousel Section */}
          <Swiper
            modules={[Pagination]} // Aktivasi modul pagination
            pagination={{ clickable: true }} // Pagination yang bisa diklik
            spaceBetween={30}
            slidesPerView={1}
            className="mt-8 w-full" // Pastikan Swiper menggunakan lebar penuh
          >
            <SwiperSlide>
              <div className="bg-customBlue2 rounded-xl p-6 md:p-8 text-center">
                <div className="mt-4 md:mt-6">
                  <div className="text-xl md:text-2xl font-bold italic text-white">
                    Data analysis
                  </div>
                  <p className="text-sm md:text-base text-white italic leading-relaxed">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.  ,ahc u HDUDHUI S  CASXUatdcuygySVVIwfyicbULUACFUASFUASFS FIU FwfhuHFH Liefhua LHD Phh fhuE HFweufhoWHF ooihfshfshfafb'puiahf9ubasfasbfoouas  hhfoe hbwu8o 8we8u wuf8o 8wau wu o8 wgw agui efgasfhuasefg b
                  </p>
                </div>
              </div>
            </SwiperSlide>

            {/* Tambahkan SwiperSlide untuk pengalaman lainnya */}
            <SwiperSlide>
              <div className="bg-customBlue2 rounded-xl p-6 md:p-8 text-center">
                <div className="text-xl md:text-2xl font-bold italic text-white">
                  Software Development
                </div>
                <p className="text-sm md:text-base text-white italic leading-relaxed">
                  Example of another experience description.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Experience;
