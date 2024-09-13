import React from "react";
import myprofile from "../pages/assets/myprofile.png";

const Profile = () => {
  return (
    <div className="bg-customBlue2 min-h-screen flex justify-center items-center p-4 overflow-hidden">
      <div
        data-aos="fade-left"
        className="grid grid-cols-1 md:grid-cols-2 gap-8 shadow-lg container bg-customBlue rounded-xl p-6 md:p-10 max-w-5xl"
      >
        {/* Left Side: Profile Picture and CV */}
        <div className="flex flex-col items-center justify-center md:items-start space-y-4 md:space-y-6 rounded-xl">
          <img
            src={myprofile}
            alt="Profile"
            className="w-32 h-32 md:w-48 md:h-48 rounded-full mb-4 border-4 border-customBlue2"
          />
          <p className="text-center text-white text-sm md:text-base">
            Download CV aku Di sini Yak
          </p>
          <button className="bg-blue-700 text-white py-2 px-6 md:py-3 md:px-8 rounded-full text-base text-center md:text-lg hover:bg-blue-800 transition-colors">
            CV
          </button>
          <p className="text-center md:text-left text-white leading-relaxed text-sm md:text-base">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </div>

        {/* Right Side: Name and Description */}
        <div className="flex flex-col justify-center space-y-4 md:space-y-6">
          {/* Name */}
          <div className="bg-customBlue2 rounded-xl p-6 md:p-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold italic text-white text-center md:text-left">
              Zaldi
            </h1>
          </div>
          {/* Description */}
          <div className="bg-customBlue2 rounded-xl p-6 md:p-8">
            <p className="text-white italic leading-relaxed text-center md:text-left text-sm md:text-base">
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
