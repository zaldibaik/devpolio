import React, { useState } from "react";
import myprofile from "../pages/assets/myprofile.png"; // Sesuaikan path gambar

const ContactForm = () => {
  const [name, setName] = useState("");
  const [nameInstagram, setNameInstagram] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const phoneNumber = "6282238113283"; // Ganti dengan nomor WhatsApp kamu
    const textMessage = `Nama: ${name}%0AEmail: ${email} %0ANama Instagram: ${nameInstagram}%0APesan: ${message}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${textMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg- text-white flex justify-center items-center overflow-hidden pb-12 md:pb-0">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 rounded-xl p-10">
        {/* Left Side: Profile Section */}
        <div className="flex flex-col items-center text-center" data-aos="fade-right">
          <img
            src={myprofile}
            alt="Profile"
            className="w-48 h-48 rounded-full border-4 border-white mb-6"
          />
          <h2 className="text-xl font-bold mb-2">Zaldi</h2>
          <p className="text-sm mb-2">zaldiallan4083@gmail.com</p>
          <p className="text-sm mb-2">082238113283</p>
          <p className="text-sm mb-2">IG: Zal_Zaldi</p>
          <p className="text-sm mb-2">LinkedIn: Zaldi-</p>
          <p className="text-sm mb-2">GitHub: zaldibaik</p>
        </div>

        {/* Right Side: Contact Form */}
        <div className="flex flex-col justify-center"data-aos="fade-left">
          <div className="rounded-xl p-6 md:p-8">
            <h1 className="text-4xl md:text-6xl font-bold italic text-white text-center">
              Contact me
            </h1>
          </div>
          <div className="mt-4 rounded-xl">
            <form className="m-8" onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  className="w-full px-4 py-2 bg-gray-300 text-customBlue2 rounded-lg"
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <input
                  className="w-full px-4 py-2 bg-gray-300 text-customBlue2 rounded-lg"
                  type="text"
                  placeholder="Your name Instagram"
                  value={nameInstagram}
                  onChange={(e) => setNameInstagram(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <input
                  className="w-full px-4 py-2 bg-gray-300 text-customBlue2 rounded-lg"
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <textarea
                  className="w-full px-4 py-2 bg-gray-300 text-customBlue2 rounded-lg"
                  rows="4"
                  placeholder="Your message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <div className="flex justify-center">
                <button type="submit" className="bg-blue-500 hover:bg-blue-400 text-white sm font-bold py-1 px-4 rounded-lg">
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
