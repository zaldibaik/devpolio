import React from "react";
import myprofile from "../pages/assets/profile.png";

const Profile = () => {
  return (
    <div className="bg-customBlue2 min-h-screen flex justify-center items-center p-4 overflow-hidden md:mb-0 mb-24">
      {" "}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 shadow-lg container rounded-xl bg-customBlue rounded-xl0 p-6 md:p-10 max-w-5xl border-2 border-blue-300 md:shadow-[0_4px_15px_rgba(0,123,255,0.6)] ">
        {/* Left Side: Profile Picture, Name, CV Button, and Description */}
        <div
          className="flex flex-col items-center justify-center space-y-4 md:space-y-6 rounded-xl text-center"
          data-aos="zoom-in-right"
        >
          {/* Profile Picture */}
          <img
            src={myprofile}
            alt="Profile"
            className="w-32 h-32 md:w-48 md:h-48 rounded-full mb-4 border-4 border-blue-300"
          />

          {/* Name */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold italic text-white">
            <span className="text-blue-00">Zal</span>di
          </h1>

          {/* Download CV Text */}
          <p className="text-white text-sm md:text-base">
            Download CV aku Di sini Yak
          </p>

          {/* Download CV Button */}
          <a
            href="/Zaldi.pdf" // Mengarahkan ke file PDF di folder public
            download="Zaldi.pdf" // Nama file yang akan diunduh
            className="bg-customBlue2 text-white py-2 px-6 md:py-3 md:px-8 rounded-full text-base md:text-lg hover:bg-blue-400 transition-colors border-2 "
          >
            Download CV
          </a>
        </div>

        {/* Right Side: Profile Title and Description */}
        <div className="flex flex-col  items-center justify-center space-y-4 md:space-y-6 md:pb-0 pb-10">
          {/* Profile Title */}
          <div
            className="bg-customBlue2 rounded-xl p-6 md:p-12 border-2 border-blue-300 text-center w-full"
            data-aos="zoom-in-down"
          >
            <h1 className="text-4xl md:text-6xl font-bold italic text-white">
              <span className="text-blue-300">Pro</span>file
            </h1>
          </div>

          {/* Profile Description */}
          <div
            className="bg-customBlue2 rounded-xl p-6 border-2 border-blue-300 md:p-8 w-full h-full"
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
              membangun website.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
