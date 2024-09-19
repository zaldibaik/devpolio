import React from "react";
import myprofile from "../pages/assets/myprofile.png";

const Profile = () => {
  return (
    <div className="bg-customBlue2 min-h-screen flex justify-center items-center p-4 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 shadow-lg container bg-customBlue rounded-xl p-6 md:p-10 max-w-5xl">
        
        {/* Left Side: Profile Picture, Name, CV Button, and Description */}
        <div
          className="flex flex-col items-center justify-center space-y-4 md:space-y-6 rounded-xl text-center"
          data-aos="zoom-in-right"
        >
          {/* Profile Picture */}
          <img
            src={myprofile}
            alt="Profile"
            className="w-32 h-32 md:w-48 md:h-48 rounded-full mb-4 border-4 border-customBlue2"
          />

          {/* Name */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold italic text-white">
            Zaldi
          </h1>

          {/* Download CV Text */}
          <p className="text-white text-sm md:text-base">
            Download CV aku Di sini Yak
          </p>

          {/* Download CV Button */}
          <button className="bg-blue-700 text-white py-2 px-6 md:py-3 md:px-8 rounded-full text-base md:text-lg hover:bg-blue-800 transition-colors">
            Download CV
          </button>
        </div>

        {/* Right Side: Profile Title and Description */}
        <div className="flex flex-col items-center justify-center space-y-4 md:space-y-6 md:pb-0 pb-10">
          
          {/* Profile Title */}
          <div
            className="bg-customBlue2 rounded-xl p-6 md:p-12 text-center w-full"
            data-aos="zoom-in-down"
          >
            <h1 className="text-4xl md:text-6xl font-bold italic text-white">
              Profile
            </h1>
          </div>

          {/* Profile Description */}
          <div
            className="bg-customBlue2 rounded-xl p-6 md:p-8 w-full h-full"
            data-aos="zoom-in-up"
          >
            <p className="text-white leading-relaxed text-sm md:text-base">
              Halo, perkenalkan, aku Zaldi. Aku lahir di Bo'di, Desa Perangian,
              Kecamatan Baraka, Kabupaten Enrekang, Sulawesi Selatan. Saat ini,
              aku tinggal di Jakarta Selatan sebagai siswa PKL dari SMK TI
              BAZMA. Aku adalah anak pertama dan bercita-cita menjadi orang yang
              sukses, sukses di dunia dan akhirat. Aamiin. 🫣
            </p>
            <p className="text-white leading-relaxed text-sm md:text-base mt-4">
              Hobi aku adalah bermain game mobile seperti PUBG, Mobile Legends,
              dan lainnya. Selain itu, aku juga suka menggambar, mendesain, dan
              membangun website. Meskipun belum menguasai bidang backend
              development, namun aku akan selalu belajar dan belajar agar aku bisa menhgapai semua cita-citaku.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
