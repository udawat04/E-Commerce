import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaGoogle } from "react-icons/fa";

  
  const Footer = () => {
    const [email, setEmail] = useState("");
     const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };
    return (
      <footer className="bg-[#fffbf5] text-black font-[DM_Serif_Display]">
        {/* IMAGE GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6">
          {["f3.jpeg", "f4.png", "f5.png", "f6.jpeg"].map((img, i) => (
            <img
              key={i}
              src={`${process.env.PUBLIC_URL}/image/footer/${img}`}
              alt="footer"
              className="w-full h-48 object-cover rounded-lg"
            />
          ))}
        </div>

        {/* SUBSCRIBE */}
        <div className="text-center py-10 px-4">
          <h2 className="font-bold text-lg mb-4">
            BE THE FIRST TO KNOW ABOUT NEW PRODUCTS AND SALES
          </h2>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row justify-center items-center gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder="Ex.xyz@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-md outline-none"
            />
            <button className="bg-[#778899] text-white px-6 py-2 rounded-md hover:bg-black">
              Subscribe
            </button>
          </form>
        </div>

        {/* FEATURES BAR */}
        <div className="bg-[#E9A401] py-6">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 text-center text-sm">
            {[
              ["Free Shipping", "i1.png"],
              ["100% Protection", "i2.png"],
              ["Secure Payment", "i3.png"],
              ["Assured Quality", "i4.png"],
              ["Authentic Products", "i5.png"],
              ["Best Price Promise", "i3.png"],
            ].map(([text, img], i) => (
              <div key={i} className="flex flex-col items-center">
                <p className="mb-2">{text}</p>
                <img
                  src={`${process.env.PUBLIC_URL}/image/footer/${img}`}
                  className="w-12"
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>
        <div className="my-0 w-full px-10 h-0.5 bg-black px-auto" color="" />
        {/* NAV LINKS */}
        <div className=" bg-[#E9A401] flex flex-col md:flex-row items-center justify-center px-6 py-6 gap-6 ">
          <nav className="flex flex-wrap justify-between items-center gap-6 mb-4 md:mb-0">
            {[
              ["Home", "/"],
              ["About Us", "/about"],
              ["Contact Us", "/ContactUs"],
              ["Signup", "/Signup"],
            ].map(([label, path], i) => (
              <Link
                key={i}
                to={path}
                className="hover:text-[#E9A401] transition"
              >
                {label}
              </Link>
            ))}
          </nav>

          <img
            src={`${process.env.PUBLIC_URL}/image/footer/f2.png`}
            className="w-32"
            alt="Made in India"
          />
        </div>
        <div className="my-0 w-full px-10 h-0.5 bg-black px-auto" color="" />

        {/* BOTTOM BAR */}
        <div className=" bg-[#E9A401] flex flex-col md:flex-row items-center justify-between px-6 py-4  text-sm">
          <div className="flex gap-4 mb-3 md:mb-0">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaGoogle />
          </div>

          <p>© 2024, ARTISAN.</p>

          <div className="flex gap-3">
            {["p5.png", "p6.png", "p7.png", "p8.png"].map((img, i) => (
              <img
                key={i}
                src={`${process.env.PUBLIC_URL}/image/footer/${img}`}
                className="h-6"
                alt=""
              />
            ))}
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer
