import React from "react";
import myprofile from "../pages/assets/myprofile.png";

const Profile = () => {
  return (
    <div data-aos="fade-left" className="bg-customBlue2 min-h-screen flex justify-center items-center p-4 overflow-hidden">
      <div
        data-aos="fade-left"
        className="grid grid-cols-1 md:grid-cols-2 gap-8 shadow-lg container bg-customBlue rounded-xl p-6 md:p-10 max-w-5xl"
      >
        {/* Left Side: Profile Picture, Name, CV Button, and Description */}
        <div className="flex flex-col items-center justify-center space-y-4 md:space-y-6 rounded-xl text-center">
          {/* Gambar Profil */}
          <img
            src={myprofile}
            alt="Profile"
            className="w-32 h-32 md:w-48 md:h-48 rounded-full mb-4 border-4 border-customBlue2"
          />

          {/* Nama */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold italic text-white">
            Zaldi
          </h1>

          {/* Tombol Download CV */}
          <p className="text-white text-sm md:text-base">
            Download CV aku Di sini Yak
          </p>
          <button className="bg-blue-700 text-white py-2 px-6 md:py-3 md:px-8 rounded-full text-base md:text-lg hover:bg-blue-800 transition-colors">
            CV
          </button>

          {/* Deskripsi */}
          <p className="text-white leading-relaxed text-sm md:text-base">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </div>

        {/* Right Side: Additional Description */}
        <div className="flex flex-col items-center justify-center space-y-4 md:space-y-6 text-center pb-10">
          <div className="bg-customBlue2 rounded-xl p-6 md:p-12 text-center w-full">
            <h1 className="text-4xl md:text-6xl font-bold italic text-white">
              Profile
            </h1>
          </div>
          <div className="bg-customBlue2 rounded-xl p-6 md:p-8 w-full h-full">
            <p className="text-white italic leading-relaxed text-sm md:text-base text-justify-center">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
