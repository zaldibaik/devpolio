import React, { useState } from "react";
import myprofile from "../pages/assets/myprofile.png"; // Sesuaikan path gambar

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const phoneNumber = "6282238113283"; // Ganti dengan nomor WhatsApp kamu
    const textMessage = `Nama: ${name}%0AEmail: ${email}%0APesan: ${message}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${textMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div
      data-aos="fade-down"
      className="bg-customBlue2 min-h-screen text-white flex justify-center items-center overflow-hidden pb-12 md:pb-0"
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 rounded-xl p-10">
        {/* Left Side: Profile Section */}
        <div className="flex flex-col items-center text-center">
          <img
            src={myprofile}
            alt="Profile"
            className="w-48 h-48 rounded-full border-4 border-white mb-6"
            data-aos="zoom-in"
          />
          <h2 className="text-xl font-bold mb-2" data-aos="fade-right">
            Zaldi
          </h2>
          <p className="text-sm mb-2" data-aos="fade-left">
            zaldiallan4083@gmail.com
          </p>
          <p className="text-sm mb-2" data-aos="fade-right">
            081316162222
          </p>
          <p className="text-sm mb-2" data-aos="fade-left">
            IG: Zal_Zaldi
          </p>
          <p className="text-sm mb-2" data-aos="fade-right">
            LinkedIn: Zaldi-
          </p>
          <p className="text-sm mb-2" data-aos="fade-left">
            GitHub: zaldibaik
          </p>
        </div>

        {/* Right Side: Contact Form */}
        <div className="flex flex-col justify-center">
          <div className="bg-customBlue2 rounded-xl p-6 md:p-8" data-aos="zoom-in-down">
            <h1 className="text-4xl md:text-6xl font-bold italic text-white text-center">
              Contact me
            </h1>
          </div>
          <div className="bg-customBlue2 mt-4 rounded-xl" data-aos="zoom-in-up">
            <form className="m-8" onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  className="w-full px-4 py-2 bg-gray-300 text-customBlue2 rounded-lg"
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  data-aos="fade-right"
                />
              </div>
              <div className="mb-4">
                <input
                  className="w-full px-4 py-2 bg-gray-300 text-customBlue2 rounded-lg"
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  data-aos="fade-left"
                />
              </div>
              <div className="mb-4">
                <textarea
                  className="w-full px-4 py-2 bg-gray-300 text-customBlue2 rounded-lg"
                  rows="4"
                  placeholder="Your message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  data-aos="fade-right"
                ></textarea>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  data-aos="fade-down"
                  className="bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg"
                >
                  Submit via WhatsApp
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
