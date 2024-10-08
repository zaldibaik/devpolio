import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import LogoIDS from "./assets/Logo-IDS-White-Logotype.png";

// Import modul Pagination saja
import { Pagination } from "swiper/modules";

const Resume = () => {
  return (
    <div className="bg-customBlue2 min-h-screen  flex justify-center items-center p-4 overflow-hidden md:pb-0 pb-20">
      {/* Main Content */}
      <div className="w-full max-w-5xl ">
        <div className="bg-customBlue rounded-xl p-4 md:p-8 border-2 border-blue-300 shadow-[0_4px_15px_rgba(0,123,255,0.6)]">
          {/* Resume Title */}
          <div
            className=" rounded-xl p-6 md:p-10 text-center"
            data-aos="zoom-in-down"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Resume
            </h1>
          </div>
          <div
            className="bg-customBlue2 mt-6 rounded-xl p-6 md:p-10 text-center border-2 border-blue-300"
            data-aos="zoom-in-down"
          >
            <h1 className="text-2xl md:text-4xl font-bold text-white ">
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
                <div className="bg-customBlue2 rounded-xl p-6 md:p-8 text-center m-3 border-2 border-blue-300">
                  <div className="flex flex-col items-center space-y-4 md:space-y-6"></div>
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="163"
                      height="93"
                      viewBox="0 0 163 93"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_2_2)">
                        <path
                          d="M0.0225622 49.5188C0.0225622 45.6992 0.082732 41.8722 -1.48348e-06 38.0601C-0.0376076 36.1504 0.714515 34.6165 1.82766 33.203C3.07618 31.6241 4.79854 30.594 6.40808 29.4361C11.342 25.9023 16.2458 22.3158 21.1647 18.7594C23.4512 17.1053 25.7527 15.4812 28.0466 13.8346C28.6709 13.391 29.6487 13 29.7841 12.4286C29.927 11.8045 28.7687 11.5714 28.2873 11.0301C27.8361 10.5188 27.2795 10.1053 26.8884 9.53384C25.7075 7.79699 26.6477 5.49624 27.8962 4.52632C29.4005 3.35338 30.9273 2.20301 32.4842 1.10526C33.0332 0.721805 33.4544 -0.0300746 34.1238 0.00751943C34.7255 0.0451134 35.1692 0.706768 35.6807 1.08271C38.2229 2.96241 40.735 4.88722 43.3373 6.68421C46.233 8.68421 49.0008 10.8647 51.8438 12.9323C55.4991 15.5789 59.1469 18.2256 62.7872 20.8872C64.0132 21.7895 63.9906 21.7895 62.6744 22.7594C60.6286 24.2632 58.6054 25.797 56.5822 27.3233C53.6715 29.5263 52.6034 28.7143 50.1139 26.9925C48.8955 26.1504 47.7673 25.188 46.5789 24.3008C45.5711 23.5489 44.5106 22.8722 43.5253 22.0977C41.5773 20.5789 38.8622 20.6692 36.7111 22.3383C32.7549 25.4135 28.701 28.3609 24.6771 31.3459C20.9466 34.1128 17.1409 36.7744 13.4931 39.6466C11.3947 41.2932 10.3266 43.5639 10.4169 46.3684C10.5072 49.2782 10.3492 52.188 10.3417 55.0977C10.3266 60.5113 10.3417 65.9323 10.3417 71.3459C10.3417 71.5865 10.462 71.8872 10.2289 72.0451C9.9205 72.2481 9.7099 71.9398 9.50683 71.7744C6.9797 69.7744 4.09907 68.218 1.91791 65.7895C0.80477 64.5338 -1.48356e-06 63.1353 0.015041 61.3534C0.0526471 57.406 0.0225622 53.4586 0.0225622 49.5188Z"
                          fill="#FEFEFE"
                        />
                        <path
                          d="M40.577 92.9549C37.8318 93.3083 35.801 91.6767 33.7177 90.1128C28.2949 86.0376 22.857 81.9925 17.4342 77.9323C16.1556 76.9774 14.892 75.9925 13.5984 75.0677C13.0794 74.6917 13.1546 74.1805 13.2073 73.7218C13.4931 71.0075 13.2674 68.2857 13.3276 65.5714C13.3427 64.7368 13.3577 63.9398 14.1324 63.3308C15.0725 62.5865 16.6445 62.406 17.6222 63.1128C19.3672 64.3684 21.082 65.6692 22.8044 66.9474C27.0162 70.0601 31.2281 73.1729 35.425 76.2932C36.1921 76.8647 36.8916 77.5188 37.6738 78.0601C40.0505 79.7143 41.8406 79.3459 43.8638 77.7669C47.1731 75.188 50.5802 72.7594 53.9347 70.2406C57.1613 67.8195 60.4255 65.4511 63.6897 63.0752C64.5321 62.4586 65.4422 62.2256 66.5252 62.5038C67.9167 62.8647 68.398 64.2632 68.225 65.3383C68.052 66.3985 68.1724 67.4511 68.1348 68.5113C68.0821 70.015 68.5785 71.5263 68.1498 73.0301C68.1348 73.0902 68.1273 73.1654 68.1498 73.218C68.7214 74.7594 67.8415 75.4887 66.6757 76.2932C63.3287 78.6241 60.0871 81.0977 56.7928 83.4962C53.4082 85.9624 49.9635 88.3459 46.6241 90.8797C44.834 92.2406 42.9763 93.1579 40.577 92.9549Z"
                          fill="#E0E0E1"
                        />
                        <path
                          d="M71.0305 61.218C71.0305 58.2105 71.0455 55.2105 71.0305 52.203C71.0154 50.2406 71.0079 48.2707 70.8951 46.3083C70.7296 43.4812 69.1125 41.4662 66.969 39.8346C64.9984 38.3308 64.9608 38.188 66.9389 36.7143C69.1501 35.0752 71.3539 33.4361 73.5576 31.782C74.7459 30.8872 75.4153 30.9323 76.9421 31.782C78.5818 32.6917 79.6723 34.0677 80.5298 35.6617C81.5602 37.5789 81.2668 39.6767 81.1991 41.7218C81.1766 42.3459 81.2744 42.9549 81.2744 43.5789C81.2368 48.9925 81.1691 54.4135 81.2819 59.8271C81.3646 63.7669 79.7852 66.6692 76.5435 68.8045C75.0393 69.797 73.5801 70.8647 72.1962 72.0301C71.9255 72.2556 71.6322 72.6316 71.241 72.4586C70.8499 72.2857 71.0831 71.8496 71.0831 71.5413C71.0681 68.0977 71.0756 64.6541 71.0756 61.2105C71.0605 61.2105 71.0455 61.2105 71.0305 61.2105V61.218Z"
                          fill="#FEFEFE"
                        />
                        <path
                          d="M117.466 45.0376C117.226 44.7293 117.346 44.3759 117.346 44.0451C117.339 39.0677 117.339 34.0902 117.346 29.1128C117.346 28.6767 117.346 28.2481 117.128 27.8496C116.895 27.4436 116.534 27.3835 116.098 27.3835C115.639 27.3835 115.571 27.6316 115.421 27.985C115.263 28.3534 115.278 28.7068 115.278 29.0677C115.3 33.985 115.33 38.8947 115.361 43.812C115.361 45.0677 115.248 45.1804 113.984 45.188C113.044 45.188 112.111 45.1729 111.171 45.188C110.607 45.188 110.585 44.8571 110.585 44.4135C110.6 39.3083 110.6 34.203 110.6 29.1053C110.6 28.7293 110.615 28.3459 110.554 27.9774C110.479 27.5038 110.141 27.2481 109.659 27.2256C109.216 27.203 109.043 27.4887 108.877 27.8722C108.629 28.4436 108.674 29.0301 108.704 29.6015C108.968 34.4361 108.719 39.2782 108.825 44.1203C108.84 44.8496 108.494 45.1278 107.794 45.1128C106.854 45.0902 105.914 45.0902 104.974 45.1353C104.184 45.1729 103.958 44.8346 103.973 44.0752C104.011 40.5414 103.958 37 104.026 33.4586C104.049 32.0526 103.71 30.6767 103.815 29.2782C103.951 27.5564 104.252 25.8797 105.357 24.4812C106.711 22.7594 108.697 22.4135 110.961 22.8421C111.562 22.9549 112.254 22.9774 112.698 23.5639C112.818 23.7218 113.052 23.6466 113.209 23.5263C114.962 22.2406 116.88 22.5263 118.723 23.1278C120.52 23.7143 121.821 25.7368 121.844 27.7444C121.904 33.3158 121.859 38.8872 121.874 44.4662C121.874 44.9173 121.791 45.1429 121.272 45.1278C120.114 45.0902 118.963 45.1128 117.805 45.1053C117.7 45.0902 117.594 45.0677 117.489 45.0526L117.466 45.0376Z"
                          fill="#FEFEFE"
                        />
                        <path
                          d="M148.92 63.7444C148.92 66.5639 148.905 69.3835 148.935 72.1955C148.935 72.7669 148.792 72.9624 148.213 72.9398C147.311 72.8947 146.393 72.8947 145.491 72.9398C144.678 72.9774 144.377 72.7444 144.385 71.8496C144.43 66.7143 144.408 61.5789 144.408 56.4436C144.408 55.9925 144.513 55.4887 144.001 55.203C143.219 54.7744 142.738 55.015 142.602 55.9248C142.55 56.2932 142.55 56.6767 142.55 57.0451C142.55 61.8045 142.55 66.5639 142.55 71.3233C142.55 72.8872 142.512 72.9474 141 72.9398C139.97 72.9398 138.654 73.3158 137.992 72.7293C137.307 72.1203 137.789 70.782 137.781 69.7669C137.759 65.3835 137.781 61 137.781 56.6165C137.781 56.3684 137.781 56.1128 137.729 55.8722C137.601 55.2782 137.24 54.9173 136.608 55.0075C136.021 55.0902 135.924 55.5188 135.931 56.0451C135.954 61.1504 135.954 66.2556 135.961 71.3534C135.961 72.8496 135.961 72.8647 134.495 72.9173C133.712 72.9474 132.923 72.8797 132.148 72.9474C131.253 73.0301 131.102 72.5338 131.118 71.8271C131.14 70.015 131.17 68.1955 131.163 66.3835C131.14 63.0677 131.057 59.7519 131.072 56.4361C131.08 54.1729 132.013 52.3233 133.968 51.0977C135.239 50.3083 136.653 50.3684 138.052 50.6541C138.639 50.7744 139.21 51.0075 139.789 51.1804C140.12 51.2782 140.399 51.2556 140.745 51.0677C142.595 50.0827 144.543 50.2632 146.31 51.1278C148.04 51.9774 148.898 53.594 148.913 55.5714C148.928 58.2932 148.913 61.0226 148.913 63.7444H148.92Z"
                          fill="#FEFEFE"
                        />
                        <path
                          d="M151.229 63.8045C151.229 61.0827 151.184 58.3609 151.244 55.6391C151.312 52.7669 153.689 50.5038 156.524 50.4962C158.397 50.4887 160.142 50.7143 161.466 52.2406C162.564 53.5113 162.985 55.0376 162.992 56.6391C163.03 61.7068 162.97 66.7744 162.962 71.8496C162.962 72.594 162.707 72.9474 161.924 72.9173C160.894 72.8797 159.856 72.9098 158.826 72.9023C158.179 72.9023 157.78 72.6015 157.968 71.9248C158.209 71.0376 158.149 70.1804 157.983 69.2857C157.855 68.5865 157.916 67.8496 157.968 67.1353C158.006 66.5865 157.803 66.421 157.284 66.4812C157.006 66.5188 156.72 66.5188 156.441 66.4812C155.968 66.421 155.832 66.6241 155.885 67.0601C156.065 68.609 156.065 70.1654 156.073 71.7218C156.073 72.5414 155.772 72.9549 154.922 72.9398C153.922 72.9248 152.922 72.9098 151.921 72.9248C151.387 72.9248 151.169 72.7744 151.177 72.1729C151.214 69.391 151.192 66.6015 151.192 63.8195H151.237L151.229 63.8045ZM158.134 58.9248H158.119C158.119 58.0526 158.149 57.1804 158.111 56.3083C158.081 55.6241 157.916 55.0226 157.013 55.0075C156.088 54.985 156.065 55.6165 156.043 56.2556C155.968 58.0526 156.201 59.8571 155.915 61.6541C155.855 62.015 156.08 62.1579 156.404 62.1579C156.712 62.1579 157.028 62.1203 157.337 62.1579C157.961 62.2331 158.171 61.9624 158.149 61.3609C158.119 60.5489 158.141 59.7444 158.141 58.9323L158.134 58.9248Z"
                          fill="#FEFEFE"
                        />
                        <path
                          d="M91.7665 63.3759C91.7665 60.782 91.7364 58.1804 91.774 55.5865C91.8041 53.3007 93.8499 50.4135 96.896 50.4962C97.7609 50.5188 98.6108 50.4887 99.4532 50.7594C101.506 51.4211 102.627 52.9474 102.951 54.9398C103.199 56.4511 103.402 58.1128 102.8 59.5489C102.236 60.9098 102.183 61.8647 102.928 63.2782C103.928 65.1729 103.68 67.4361 103.018 69.4887C102.304 71.6992 100.168 73.1053 97.7233 73.1804C96.3845 73.218 95.0382 73.203 93.6919 73.1804C92.6239 73.1579 91.789 72.3308 91.7815 71.2632C91.7665 68.6316 91.7815 66.0075 91.7815 63.3759C91.7815 63.3759 91.774 63.3759 91.7665 63.3759ZM98.5431 66.3308C98.5431 66.3308 98.5356 66.3308 98.5281 66.3308C98.5281 65.8346 98.5657 65.3308 98.5205 64.8346C98.4604 64.1729 97.5954 63.9474 96.8057 64.0451C96.1514 64.1278 96.4447 64.6767 96.4973 64.9248C96.723 65.9098 96.7154 66.8647 96.4973 67.8496C96.4372 68.1053 96.2566 68.5413 96.738 68.7068C97.618 69.0075 98.5055 68.391 98.5431 67.4586C98.5581 67.0827 98.5431 66.7068 98.5431 66.3308ZM98.3475 57.2707C98.3475 56.7744 98.4077 56.2632 98.3325 55.7744C98.2498 55.218 97.8887 54.9699 97.2795 54.9925C96.6854 55.0226 96.6402 55.3835 96.6327 55.8045C96.6177 56.8947 96.6477 57.985 96.5951 59.0752C96.565 59.7669 96.9712 59.797 97.4149 59.6842C97.964 59.5489 98.3024 59.1579 98.34 58.5789C98.3701 58.1429 98.34 57.7068 98.34 57.2707H98.3475Z"
                          fill="#FEFEFE"
                        />
                        <path
                          d="M105.177 72.4887C105.162 69.4211 105.139 66.3534 105.124 63.2857C105.117 60.7218 105.049 58.1504 105.132 55.5865C105.214 53.0075 107.426 50.4436 110.254 50.4887C111.653 50.5113 113.029 50.5338 114.262 51.2932C115.962 52.3308 116.722 53.985 116.76 55.8647C116.857 60.406 116.812 64.9399 116.827 69.4812C116.827 70.3233 116.835 71.1729 116.857 72.015C116.872 72.6391 116.556 72.9023 115.955 72.9624C114.804 73.0752 113.653 72.8722 112.495 73.0301C112.014 73.0977 112.066 72.594 112.066 72.2632C112.066 70.6316 112.021 69.0075 112.081 67.3759C112.104 66.6466 111.916 66.4211 111.171 66.4586C109.81 66.5188 109.81 66.4737 109.81 67.8421C109.81 69.218 109.75 70.6015 109.832 71.9774C109.885 72.797 109.592 73.015 108.855 72.9399C107.666 72.8196 106.448 73.1955 105.282 72.7218C105.245 72.6466 105.214 72.5714 105.177 72.4887ZM112.066 58.7744C112.066 57.9624 112.066 57.1504 112.066 56.3383C112.066 55.7293 112.081 55.1504 111.164 55.188C110.058 55.2331 109.825 55.3759 109.81 56.3459C109.795 57.6917 109.81 59.0376 109.81 60.3759C109.81 62.0075 109.81 61.9774 111.412 61.9774C111.946 61.9774 112.104 61.8271 112.074 61.3008C112.029 60.4586 112.059 59.6165 112.059 58.7669L112.066 58.7744Z"
                          fill="#FEFEFE"
                        />
                        <path
                          d="M124.266 44.4436C124.055 39.3759 124.198 34.3083 124.16 29.2406C124.145 27.406 124.153 25.5789 124.138 23.7444C124.138 23.203 124.386 22.9925 124.928 23.015C126.048 23.0526 127.176 23.0677 128.305 23.0601C128.846 23.0601 128.959 23.2932 129.004 23.797C129.215 26.1429 128.981 28.4887 129.124 30.8271C129.147 31.203 128.711 31.9098 129.553 31.8722C130.215 31.8421 130.072 31.203 130.132 30.7368C130.456 28.3835 130.772 26.0226 131.238 23.6917C131.336 23.1955 131.584 22.9699 132.05 22.9699C133.208 22.9699 134.367 23.0075 135.517 22.985C136.119 22.9774 136.232 23.3008 136.119 23.7594C135.57 26 135.254 28.2857 134.675 30.5263C134.487 31.2481 134.442 32.0301 134.254 32.7669C134.111 33.3008 134.389 33.7594 134.705 34.1053C135.668 35.1579 135.856 36.4737 135.916 37.7744C136.014 39.8045 135.901 41.8421 135.924 43.8722C135.931 44.7368 135.623 45.1429 134.72 45.0977C133.69 45.0526 132.652 45.0977 131.621 45.0827C131.223 45.0827 130.817 44.9925 130.877 44.4737C130.945 43.812 130.817 43.1429 130.899 42.5113C131.125 40.7444 131.057 39 130.877 37.2406C130.787 36.3609 130.2 36.4286 129.591 36.3985C128.801 36.3534 129.064 36.9098 129.064 37.2932C129.049 39.5789 129.034 41.8647 129.042 44.1429C129.042 44.7744 128.748 45.0677 128.162 45.0752C127.003 45.0902 125.845 45.0752 124.687 45.0601C124.461 45.0601 124.236 45.0376 124.258 44.7218C124.258 44.6316 124.258 44.5338 124.258 44.4436H124.266Z"
                          fill="#FEFEFE"
                        />
                        <path
                          d="M93.4287 37.9098C93.6468 37.9098 93.8649 37.9098 94.083 37.9098C95.9107 37.9098 95.8806 37.9098 96.1062 39.7293C96.1814 40.3459 96.2943 41.0526 97.2344 40.9248C97.8888 40.8346 98.3024 40.1203 98.152 39.3534C97.8963 38.0451 97.1291 37.0301 96.2566 36.0752C95.0006 34.6992 93.4663 33.5789 92.5036 31.9398C90.9843 29.3534 90.7135 26.9023 92.5036 24.4361C93.1955 23.4812 94.1958 22.9549 95.3315 22.797C97.0464 22.5564 98.7537 22.5113 100.288 23.5639C101.89 24.6692 102.477 26.2857 102.672 28.1128C102.702 28.3609 102.627 28.6316 102.687 28.8647C102.89 29.594 102.454 29.797 101.89 29.812C100.98 29.8421 100.07 29.8271 99.1674 29.812C98.0768 29.7895 97.8361 29.5414 97.791 28.4436C97.791 28.3534 97.806 28.2556 97.8211 28.1654C97.8587 27.7444 97.6782 27.4135 97.3021 27.2481C97.0163 27.1203 96.6553 27.0827 96.4296 27.3534C96.1739 27.6541 95.9784 28.015 96.1513 28.4511C96.3995 29.1053 96.7004 29.7143 97.2043 30.2331C98.701 31.7669 100.311 33.2105 101.552 34.9774C102.981 37.0226 103.334 39.3158 102.823 41.7218C102.417 43.6241 100.506 45.1955 98.513 45.3759C97.0088 45.5113 95.4293 45.6842 94.0153 44.7519C92.293 43.6165 91.6085 41.9098 91.2475 40.0075C91.2024 39.7669 91.1422 39.5338 91.067 39.3008C90.8188 38.4887 91.2776 37.9173 92.12 37.9098C92.5562 37.9098 93 37.9098 93.4362 37.9098H93.4287Z"
                          fill="#FEFEFE"
                        />
                        <path
                          d="M119.415 50.7744C122.047 50.7669 124.672 50.7143 127.304 50.7594C128.914 50.7895 129.29 51.3308 129.388 52.9173C129.508 54.8647 129.012 56.5789 128.117 58.3008C126.507 61.3759 125.078 64.5414 123.574 67.6767C123.318 68.203 123.393 68.5263 124.1 68.5113C125.604 68.4737 127.109 68.4887 128.613 68.4586C129.47 68.4361 129.892 68.7368 129.809 69.6692C129.741 70.4135 129.779 71.1729 129.779 71.9248C129.779 72.5865 129.448 72.9248 128.809 72.9098C125.74 72.8195 122.671 73.1128 119.603 72.8647C118.632 72.7895 118.166 72.2707 118.091 71.2632C117.94 69.406 118.286 67.6842 119.151 66C120.648 63.0902 121.987 60.0902 123.401 57.1353C124.333 55.1955 124.341 55.203 122.152 55.203C121.272 55.203 120.4 55.1729 119.52 55.2105C119.008 55.2331 118.768 55.1128 118.835 54.5564C118.978 53.3985 118.58 52.203 119.069 51.0602C119.279 51.0827 119.422 51.0226 119.415 50.782V50.7744Z"
                          fill="#FEFEFE"
                        />
                        <path
                          d="M30.9724 51.1429C31.3184 50.2932 32.1758 49.9248 32.8301 49.4737C34.8759 48.0827 36.7788 46.5188 38.7794 45.0752C40.1558 44.0827 41.5021 44.0451 42.8409 45.0827C44.3978 46.2857 46.0299 47.391 47.5642 48.6165C48.384 49.2707 49.2189 49.9173 50.1139 50.4361C50.8736 50.8797 51.0315 51.4211 50.7984 52.188C49.3092 52.0902 48.4893 53.2932 47.4364 53.9774C45.8268 55.0301 44.3828 56.3233 42.7958 57.4135C41.5623 58.2632 40.231 58.3308 38.9675 57.391C37.9446 56.6316 36.9443 55.8421 35.9138 55.0902C34.3118 53.9248 32.7925 52.6241 30.9649 51.797C30.9574 51.6767 30.9498 51.5489 30.9348 51.4286C31.0251 51.3383 31.0251 51.2406 30.9649 51.1353L30.9724 51.1429Z"
                          fill="#FEFEFE"
                        />
                        <path
                          d="M146.762 44.4962C146.739 39.1429 146.694 33.797 146.702 28.4436C146.702 27.6391 146.551 27.3383 145.656 27.3609C143.309 27.4361 143.309 27.3835 143.362 25.0526C143.407 22.9248 143.407 22.9774 145.573 22.9323C148.356 22.8647 151.132 23.0752 153.907 23.0601C154.569 23.0601 154.892 23.2632 154.862 23.9699C154.824 24.812 154.862 25.6617 154.87 26.5038C154.87 27.1128 154.682 27.4737 153.944 27.406C153.23 27.3383 152.508 27.406 151.786 27.3835C151.395 27.3759 151.259 27.5263 151.395 27.8797C151.666 28.5789 151.523 29.3007 151.523 30.015C151.538 33.8647 151.56 37.7143 151.485 41.5639C151.462 42.5188 151.38 43.4812 151.372 44.4361C151.372 44.8346 151.214 45.0827 150.868 45.0601C149.808 44.9774 148.77 45.1504 147.724 45.2556C147.378 45.2932 147.145 45.0677 146.852 44.9925C146.859 44.8195 146.897 44.6466 146.747 44.5038L146.762 44.4962Z"
                          fill="#FEFEFE"
                        />
                        <path
                          d="M30.9724 51.8045C32.8001 52.6391 34.3194 53.9323 35.9214 55.0977C36.9518 55.8496 37.9521 56.6391 38.975 57.3985C40.2386 58.3383 41.5698 58.2782 42.8033 57.4211C44.3903 56.3308 45.8343 55.0376 47.4439 53.985C48.4969 53.2932 49.3242 52.0902 50.8059 52.1955C50.9413 53.9398 50.7758 55.6767 50.7908 57.4211C50.7908 57.797 50.5426 57.985 50.302 58.1654C49.2565 58.9474 48.2186 59.7519 47.128 60.4812C45.4733 61.5865 43.9014 62.797 42.2919 63.9699C41.4645 64.5714 40.2386 64.6391 39.3962 64.0301C37.0796 62.3534 34.7781 60.6391 32.4767 58.9474C32.251 58.782 32.0103 58.6466 31.7922 58.4812C31.183 58.0301 30.8521 57.5113 30.9047 56.6692C31.0025 55.0526 30.9574 53.4286 30.9724 51.8045Z"
                          fill="#E0E0E1"
                        />
                        <path
                          d="M156.63 22.9474C157.878 22.9474 159.134 22.9699 160.383 22.9398C160.856 22.9248 160.984 23.0827 160.962 23.5263C160.932 24.1504 160.962 24.7744 160.962 25.3985C160.962 31.6842 160.954 37.9699 160.977 44.2556C160.977 44.8722 160.871 45.1654 160.187 45.1278C159.217 45.0752 158.247 45.0677 157.284 45.1128C156.584 45.1429 156.396 44.9023 156.404 44.203C156.434 38.9173 156.457 33.6316 156.411 28.3534C156.396 26.5865 156.171 24.8271 156.502 23.0752C156.547 23.0376 156.599 22.9925 156.645 22.9549L156.63 22.9474Z"
                          fill="#FEFEFE"
                        />
                        <path
                          d="M57.748 31.5338C57.5524 30.0902 58.6204 29.4286 59.5756 28.6992C61.5612 27.188 63.5694 25.7068 65.54 24.1805C66.0213 23.8045 66.3899 23.812 66.8261 24.1805C68.5184 25.594 70.3385 26.8571 72.1361 28.1278C72.7002 28.5263 72.6851 28.8271 72.1511 29.2256C69.6992 31.0451 67.2849 32.9173 64.8029 34.6992C63.1708 35.8722 62.0952 36.1955 60.1999 34.8346C59.6283 34.4286 59.0191 34.0752 58.5227 33.5489C57.9811 32.9774 57.6502 32.3684 57.7404 31.5414L57.748 31.5338Z"
                          fill="#FEFEFE"
                        />
                        <path
                          d="M119.415 50.7744C119.415 51.015 119.279 51.0827 119.069 51.0526C118.963 50.9774 118.911 50.8346 119.016 50.782C119.121 50.7218 119.279 50.7744 119.422 50.7744H119.415Z"
                          fill="#E0E0E1"
                        />
                        <path
                          d="M146.762 44.4962C146.912 44.6316 146.874 44.812 146.867 44.985C146.544 44.8797 146.724 44.6767 146.762 44.4962Z"
                          fill="#E0E0E1"
                        />
                        <path
                          d="M117.466 45.0376C117.572 45.0526 117.677 45.0752 117.782 45.0902C117.662 45.1729 117.557 45.1429 117.466 45.0376Z"
                          fill="#E0E0E1"
                        />
                        <path
                          d="M30.9724 51.1429C31.0401 51.2481 31.0326 51.3459 30.9423 51.4361C30.9498 51.3383 30.9649 51.2406 30.9724 51.1429Z"
                          fill="#E0E0E1"
                        />
                        <path
                          d="M156.63 22.9474C156.584 22.985 156.532 23.0301 156.487 23.0677C156.457 22.9323 156.487 22.8722 156.63 22.9474Z"
                          fill="#E0E0E1"
                        />
                        <path
                          d="M105.177 72.4887C105.214 72.5639 105.244 72.6391 105.282 72.7218C105.184 72.6767 105.132 72.6015 105.177 72.4887Z"
                          fill="#E0E0E1"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_2_2">
                          <rect width="163" height="93" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="mt-4 md:mt-6">
                    <div className="text-xl md:text-2xl font-bold text-white mt-6 mb-6">
                      2021 - present
                    </div>
                    <div className="text-xl text-3xl md:text-2xl font-bold text-white">
                      SMK TI BAZMA
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
                    <svg
                      fill="#ffffff"
                      width="80px"
                      height="80px"
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                      id="Layer_1"
                      data-name="Layer 1"
                    >
                      <path d="M8.49,12.68v4.61c0,.34,.23,.61,.53,.71v5.48c0,.13-.14,3.21,1.88,5.34,1.22,1.28,2.93,1.94,5.09,1.94s3.88-.65,5.09-1.94c2.02-2.13,1.89-5.21,1.88-5.3v-5.52c.3-.1,.53-.37,.53-.71v-4.61c1.71-.69,2.92-2.36,2.92-4.32,0-2.57-2.09-4.67-4.67-4.67-.49,0-.98,.08-1.46,.23-1.09-1.67-2.93-2.68-4.94-2.68s-3.68,.91-4.79,2.46c-2.74-.22-5.01,1.96-5.01,4.65,0,1.96,1.21,3.63,2.92,4.32Zm11.51,15.11c-.92,.97-2.27,1.46-4,1.46s-3.07-.49-4-1.46c-1.58-1.66-1.48-4.21-1.48-4.28v-5.48h10.96v5.51s.1,2.58-1.48,4.24Zm2.01-14.77v3.51H9.99v-3.51h12.02ZM10.23,5.19c.21,0,.4,.02,.59,.05,.3,.05,.61-.09,.77-.35,.81-1.34,2.22-2.15,3.78-2.15,1.68,0,3.19,.94,3.95,2.45,.09,.18,.25,.31,.43,.38,.19,.06,.39,.05,.57-.04,.45-.23,.95-.35,1.44-.35,1.75,0,3.17,1.42,3.17,3.17s-1.42,3.17-3.17,3.17H10.23c-1.75,0-3.17-1.42-3.17-3.17s1.42-3.17,3.17-3.17Z" />
                      <path d="M14.26,5.25c1.5,.28,2.59,1.59,2.59,3.11,0,.41,.34,.75,.75,.75s.75-.34,.75-.75c0-2.24-1.6-4.17-3.81-4.59-.4-.07-.8,.19-.88,.6-.08,.41,.19,.8,.6,.88Z" />
                      <circle cx="13.32" cy="20.07" r="1.25" />
                      <circle cx="18.68" cy="20.07" r="1.25" />
                      <path d="M17.56,24.5h-3.12c-.41,0-.75,.34-.75,.75s.34,.75,.75,.75h3.12c.41,0,.75-.34,.75-.75s-.34-.75-.75-.75Z" />
                    </svg>
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

          {/* Logos and Text in Swiper */}
          <div
            className="bg-customBlue2 mt-6 rounded-xl p-6 md:p-10 text-center border-2 border-blue-300"
            data-aos="zoom-in-down"
          >
            <h1 className="text-2xl md:text-4xl font-bold text-white ">
              Experience During PKL
            </h1>
          </div>
          <Swiper
            pagination={{ clickable: true }}
            modules={[Pagination]} // Hanya menggunakan Pagination
            className="mt-2"
          >
            {/* Slide 1 */}
            <div data-aos="zoom-in-up">
              {/* Slide 2 */}
              <SwiperSlide>
                <div className="bg-customBlue2 rounded-xl p-6 md:p-8 text-center m-3 border-2 border-blue-300">
                  <div className="flex flex-col items-center space-y-4 md:space-y-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="176"
                      height="41"
                      viewBox="0 0 176 41"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_8_278)">
                        <path
                          d="M63.6089 17.264H69.1089C70.7828 17.264 71.9785 17.7434 72.935 18.4625C73.8915 19.1816 74.6089 20.1405 74.6089 21.339C74.6089 22.2978 74.6089 23.736 74.1306 24.4551C73.6524 25.1742 72.935 25.6536 71.9785 26.133L69.348 26.6124H66.9567V31.4064H63.6089V17.264ZM66.9567 20.3802V23.9757H68.8698L70.5437 23.4963C71.0219 23.0169 71.0219 22.5375 71.0219 22.0581C71.0219 21.5787 70.7828 21.0993 70.3045 20.8596C69.8263 20.3802 69.348 20.3802 68.6306 20.3802H66.9567ZM76.5219 17.264H85.3698V20.1405H79.6306V22.5375H85.1306V25.6536H79.6306V28.2903H85.3698V31.4064H76.5219V17.264ZM88.4785 17.264H94.2176C95.6524 17.264 96.6089 17.7434 97.5654 18.4625C98.2828 19.1816 98.7611 20.3802 98.7611 21.339C99.0002 22.2978 98.7611 23.0169 98.5219 23.736C98.0437 24.4551 96.848 25.4139 95.6524 25.6536L100.196 31.4064H96.1306L92.0654 25.6536H91.5871V31.4064H88.4785V17.264ZM91.5871 20.1405V23.736H92.7828C94.4567 23.736 95.4132 22.7772 95.4132 21.5787C95.4132 20.1405 93.9785 20.1405 93.0219 20.1405H91.5871ZM100.196 17.264H110.957V20.3802H107.37V31.4064H103.783V20.3802H100.196V17.264ZM115.022 17.264H118.37L123.152 31.4064H119.565L118.848 28.7697H114.544L113.587 31.4064H110.239L115.022 17.264ZM116.696 21.8184L115.022 26.133H117.891L116.696 21.8184ZM126.5 17.264H129.848L132.239 25.1742L135.109 17.264H138.457L140.131 31.4064H137.022L136.065 23.4963L132.957 31.4064H131.761L128.652 23.2566L127.457 31.4064H124.348L126.5 17.264ZM142.283 17.264H145.631V31.4064H142.283V17.264ZM158.065 17.5037H161.174V31.4064H157.826L151.848 23.0169V31.4064H148.739V17.5037H151.848L158.065 26.133V17.5037ZM167.87 17.264H171.457L176 31.4064H172.652L171.696 28.7697H167.391L166.435 31.4064H163.087L167.87 17.264ZM169.544 21.8184L168.109 26.133H170.978L169.544 21.8184Z"
                          fill="white"
                        />
                        <path
                          d="M0 40.9944L12.913 20.6199C14.587 17.5037 16.2609 17.264 21.2826 17.264H32.2826C31.5652 17.9831 30.3696 18.9419 29.6522 20.3802L18.413 38.3577C17.2174 40.2753 15.0652 40.9944 12.1957 40.9944H0Z"
                          fill="white"
                        />
                        <path
                          d="M43.7608 17.264C38.739 17.264 37.0651 17.5037 35.1521 20.6199L28.2173 31.4064H41.1303C43.2825 31.4064 45.4347 30.4476 46.3912 28.7697L53.8042 17.264H43.7608Z"
                          fill="white"
                        />
                        <path
                          d="M38.4999 0.00561523C43.5216 0.00561523 44.9564 0.245316 46.8695 3.12173L53.8042 13.9083H41.1303C38.9782 13.9083 36.826 12.9495 35.8695 11.5113L28.2173 0.00561523H38.4999Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_8_278">
                          <rect width="176" height="41" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="mt-4 md:mt-7">
                    <div className="text-xl md:text-2xl font-bold text-white mb-6">
                      01/Agustus/2024 - Present
                    </div>
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
              <SwiperSlide>
                <div className="bg-customBlue2 rounded-xl p-6 md:p-8 text-center m-3 border-2 border-blue-300">
                  <div className="flex flex-col items-center space-y-4 md:space-y-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="176"
                      height="41"
                      viewBox="0 0 176 41"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_8_278)">
                        <path
                          d="M63.6089 17.264H69.1089C70.7828 17.264 71.9785 17.7434 72.935 18.4625C73.8915 19.1816 74.6089 20.1405 74.6089 21.339C74.6089 22.2978 74.6089 23.736 74.1306 24.4551C73.6524 25.1742 72.935 25.6536 71.9785 26.133L69.348 26.6124H66.9567V31.4064H63.6089V17.264ZM66.9567 20.3802V23.9757H68.8698L70.5437 23.4963C71.0219 23.0169 71.0219 22.5375 71.0219 22.0581C71.0219 21.5787 70.7828 21.0993 70.3045 20.8596C69.8263 20.3802 69.348 20.3802 68.6306 20.3802H66.9567ZM76.5219 17.264H85.3698V20.1405H79.6306V22.5375H85.1306V25.6536H79.6306V28.2903H85.3698V31.4064H76.5219V17.264ZM88.4785 17.264H94.2176C95.6524 17.264 96.6089 17.7434 97.5654 18.4625C98.2828 19.1816 98.7611 20.3802 98.7611 21.339C99.0002 22.2978 98.7611 23.0169 98.5219 23.736C98.0437 24.4551 96.848 25.4139 95.6524 25.6536L100.196 31.4064H96.1306L92.0654 25.6536H91.5871V31.4064H88.4785V17.264ZM91.5871 20.1405V23.736H92.7828C94.4567 23.736 95.4132 22.7772 95.4132 21.5787C95.4132 20.1405 93.9785 20.1405 93.0219 20.1405H91.5871ZM100.196 17.264H110.957V20.3802H107.37V31.4064H103.783V20.3802H100.196V17.264ZM115.022 17.264H118.37L123.152 31.4064H119.565L118.848 28.7697H114.544L113.587 31.4064H110.239L115.022 17.264ZM116.696 21.8184L115.022 26.133H117.891L116.696 21.8184ZM126.5 17.264H129.848L132.239 25.1742L135.109 17.264H138.457L140.131 31.4064H137.022L136.065 23.4963L132.957 31.4064H131.761L128.652 23.2566L127.457 31.4064H124.348L126.5 17.264ZM142.283 17.264H145.631V31.4064H142.283V17.264ZM158.065 17.5037H161.174V31.4064H157.826L151.848 23.0169V31.4064H148.739V17.5037H151.848L158.065 26.133V17.5037ZM167.87 17.264H171.457L176 31.4064H172.652L171.696 28.7697H167.391L166.435 31.4064H163.087L167.87 17.264ZM169.544 21.8184L168.109 26.133H170.978L169.544 21.8184Z"
                          fill="white"
                        />
                        <path
                          d="M0 40.9944L12.913 20.6199C14.587 17.5037 16.2609 17.264 21.2826 17.264H32.2826C31.5652 17.9831 30.3696 18.9419 29.6522 20.3802L18.413 38.3577C17.2174 40.2753 15.0652 40.9944 12.1957 40.9944H0Z"
                          fill="white"
                        />
                        <path
                          d="M43.7608 17.264C38.739 17.264 37.0651 17.5037 35.1521 20.6199L28.2173 31.4064H41.1303C43.2825 31.4064 45.4347 30.4476 46.3912 28.7697L53.8042 17.264H43.7608Z"
                          fill="white"
                        />
                        <path
                          d="M38.4999 0.00561523C43.5216 0.00561523 44.9564 0.245316 46.8695 3.12173L53.8042 13.9083H41.1303C38.9782 13.9083 36.826 12.9495 35.8695 11.5113L28.2173 0.00561523H38.4999Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_8_278">
                          <rect width="176" height="41" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="mt-4 md:mt-7">
                    <div className="text-xl md:text-2xl font-bold text-white mb-6">
                      01/Agustus/2024 - Present
                    </div>
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
            </div>

            {/* Add more slides as needed */}
          </Swiper>
          <div
            className="bg-customBlue2 mt-6 rounded-xl p-6 md:p-10 text-center border-2 border-blue-300"
            data-aos="zoom-in-down"
          >
            <h1 className="text-2xl md:text-4xl font-bold text-white ">
              Free time experience{" "}
            </h1>
          </div>
          <Swiper
            pagination={{ clickable: true }}
            modules={[Pagination]} // Hanya menggunakan Pagination
            className="mt-2"
          >
            {/* Slide 1 */}
            <div data-aos="zoom-in-up">
              {/* Slide 2 */}
              <SwiperSlide>
                <div className="bg-customBlue2 rounded-xl p-6 md:p-8 text-center m-2 border-2 border-blue-300">
                  <div className="flex flex-col items-center space-y-4 md:space-y-6">
                    <img src={LogoIDS} alt={LogoIDS} className="h-24"></img>
                  </div>
                  <div className="mt-4 md:mt-7">
                    <div className="text-xl md:text-2xl font-bold text-white mb-6">
                      05/October/2024 10:00-16:00
                    </div>
                    <div className="text-xl md:text-2xl font-bold text-white">
                      Jelajahi jalur akademis dalam bidang industri kreatif
                      filem, Studi Desain & Animasi di IDS | BTEC
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
