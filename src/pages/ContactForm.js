import React from "react";
import myprofile from "../pages/assets/myprofile.png"; // Sesuaikan path gambar

const ContactForm = () => {
  return (
    <div className="min-h-screen bg-customBlue2 text-white flex justify-center items-center p-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 bg-customBlue rounded-xl p-10">
        {/* Left Side: Profile Section */}
        <div className="flex flex-col items-center text-center">
          <img
            src={myprofile}
            alt="Profile"
            className="w-48 h-48 rounded-full border-4 border-white mb-6"
          />
          <h2 className="text-xl font-bold mb-2">Zaldi</h2>
          <p className="text-sm mb-2">zaldiallan4083@gmail.com</p>
          <p className="text-sm mb-2">081316162222</p>
          <p className="text-sm mb-2">IG: Zal_Zaldi</p>
          <p className="text-sm mb-2">LinkedIn: Zaldi-</p>
          <p className="text-sm mb-2">GitHub: zaldibaik</p>
        </div>

        {/* Right Side: Contact Form */}
        <div className="flex flex-col justify-center">
          <div className="bg-customBlue2 rounded-xl p-6 md:p-8">
            <h1 className="text-4xl md:text-6xl font-bold italic text-white text-center">
              Contact me
            </h1>
          </div>
          <div className="bg-customBlue2 mt-4 rounded-xl">
            <form className="m-8">
              <div className="mb-4">
                <input
                  className="w-full px-4 py-2 bg-gray-300 text-customBlue2 rounded-lg"
                  type="text"
                  placeholder="Your name"
                />
              </div>
              <div className="mb-4">
                <input
                  className="w-full px-4 py-2 bg-gray-300 text-customBlue2 rounded-lg"
                  type="email"
                  placeholder="Your email"
                />
              </div>
              <div className="mb-4">
                <textarea
                  className="w-full px-4 py-2 bg-gray-300 text-customBlue2 rounded-lg"
                  rows="4"
                  placeholder="Your message"
                ></textarea>
              </div>
              <div className="flex justify-center">
                <button className="bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
