import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaGlobe,
  FaYoutube,
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaXTwitter,
  FaLinkedin,
} from "react-icons/fa6";

export const PageNext = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const text = "Welcome To Appsi Studio";
  const navigate = useNavigate();
  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  let ImgStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/anime_wallpaper.jpg)`,
    minHeight: "100vh", // Allows scrolling
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      style={{ backgroundColor: "rgba(20,14,107,1)", minHeight: "100vh" }}
    >
      {/* Background Light Effect */}
      <motion.div
        style={{
          position: "fixed",
          width: "130px",
          height: "100px",
          background:
            "radial-gradient(circle, rgba(255, 255, 255, 0.56), transparent)",
          borderRadius: "20%",
          pointerEvents: "none",
          filter: "blur(50px)",
          zIndex: 0,
        }}
        animate={{
          left: mousePosition.x - 100,
          top: mousePosition.y - 100,
        }}
        transition={{
          type: "tween",
          ease: "easeOut",
          duration: 0.1,
        }}
      />

      {/* Animated Box */}
      <motion.div
        style={{
          padding: "40px",
          backdropFilter: "blur(10px)",
          textAlign: "center",
          zIndex: 1,
          height: "100vh",
        }}
      >
        {/* Animated Text */}
        <h2
          style={{
            fontSize: "120px",
            color: "white",
            fontFamily: "Poppins, sans-serif",
            fontWeight: "bold",
            position: "relative",
            top: "30%",
            width: "56%",
            left: "22%",
          }}
        >
          {text.split("").map((char, index) => (
            <motion.span
              key={index}
              style={{ display: "inline-block" }}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
                ease: "easeOut",
              }}
              whileHover={{
                y: [-5, 0],
                transition: {
                  duration: 0.3,
                  ease: "easeOut",
                  repeat: Infinity,
                  repeatType: "reverse",
                },
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </h2>
      </motion.div>
      <section
        className="nextPage-style d-flex"
        style={{ height: "100vh", color: "white", margin: "0" }}
      >
        <div className="nextPage-style1">
          <h1>Customize to make it your own</h1>
          <p>→ Intuitive drag & drop</p>
          <p className="para-2">
            Effortlessly add & arrange your text. Visual, Button & even entire
            sections
          </p>
          <p className="para-3">Built in AI tool</p>
          <p className="para-4">Advance design features</p>
          <button className="para-5 mx-2" onClick={() => navigate("/start")}>
            Get Started
          </button>
        </div>
        <div className="boxPage-style"></div>
      </section>
      <section>
        <div className="nextSection">
          <h1>Grow your website on a rock-solid foundation</h1>
          <p>
            Set your site up for success on the powerful infrastructure that
            supports millions of websites worldwide.
          </p>
          <button className="para-6 mx-2" onClick={() => navigate("/start")}>
            Get Started
          </button>
          <div className="cards-container">
            <div className="gradient-card"></div>
            <div className="gradient-card"></div>
            <div className="gradient-card"></div>
            <div className="gradient-card"></div>
          </div>
        </div>
      </section>
      <section>
        <div className="nextSection1">
          <h1 className="para-7">Grow your business from scratch</h1>
          <p className="para-8">Build app for business</p>
          <p className="para-9">Custom automation</p>
          <p className="para-10">Data Analytics</p>
          <p className="para-11">Deploy your app</p>
          <p className="para-12">Connect with industries leaders</p>
          <p className="para-13">Get help at every step</p>
          <button className="para-14 mx-2" onClick={() => navigate("/start")}>
            Get Started
          </button>
          <div className="container">
            <div className="box">
              <img
                src="/Alpha.png"
                alt="Responsive"
                className="responsive-image"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="nextSection2">
        <h1 className="para-15">Build your site in 5 Simple steps</h1>
        <button className="para-16 mx-2">Start for free</button>
        <div className="stepsCount">
          <p>
            1. Choose a free template or use the AI website builder to create a
            unique site that's ready for business.
          </p>
          <hr />
          <p>
            2. Customize everything from the site layout to visual & content
            using the drag & drop editor.
          </p>
          <hr />
          <p>
            3. Add business offering like eCommerce, scheduling solution, a blog
            & more.
          </p>
          <hr />
          <p>
            4. Find & register the perfect domain or connect a domain name you
            already own.
          </p>
          <hr />
          <p>
            5. Start getting traffic and expand your reach with built-in
            marketing & SEO tools.
          </p>
        </div>
      </section>
      <section className="nextSection3">
        <h1>See what's possible</h1>
        <p>Get inspired by incredible websites made with Appsi</p>
        <button className="para-16 mx-2">Explore sites</button>
        <div className="scroll-container">
          <div className="scroll-content">
            {[...Array(10)].map((_, index) => (
              <div key={index} className="box1"></div>
            ))}
            {[...Array(10)].map((_, index) => (
              <div key={index + 10} className="box1"></div>
            ))}
          </div>
        </div>
        <div className="scroll-container">
          <div className="scroll-content1">
            {[...Array(10)].map((_, index) => (
              <div key={index} className="box1"></div>
            ))}

            {[...Array(10)].map((_, index) => (
              <div key={index + 10} className="box1"></div>
            ))}
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-left">
            <div className="logo-placeholder">
              <img
                src="/logo3.png"
                alt="Logo"
                width="50"
                height="50"
                className="d-inline-block align-text-top mx-4 my-1"
              />
            </div>
            <h2 className="footer-brand">Appsi</h2>
            <p className="footer-link">
              <strong>About</strong>
            </p>
            <p className="footer-link">
              <strong>Contact Us</strong>
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <p className="footer-title">Product</p>
              <p>Website templates</p>
              <p>Website builder</p>
              <p>Website design</p>
              <p>Web hosting</p>
              <p>Mobile app builder</p>
              <p>Domain names</p>
            </div>

            <div className="footer-column">
              <p className="footer-title">Solution</p>
              <p>eCommerce Website</p>
              <p>Portfolio Website</p>
              <p>Restaurant Website</p>
              <p>Blog Website</p>
              <p>Student Website</p>
              <p>Enterprise Solutions</p>
              <p>Appsi Studio</p>
            </div>

            <div className="footer-column">
              <p className="footer-title">Learn</p>
              <p>Community Page</p>
              <p>Appsi Blog</p>
              <p>Learning hub</p>
            </div>

            <div className="footer-column">
              <p className="footer-title">Support</p>
              <p>Hire a professional</p>
              <p>Help center</p>
              <p>Report abuse</p>
              <p>System status</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-policy">
            <p>Terms of Use</p>
            <p>Privacy Policy</p>
            <p>&copy; Copyright 2025</p>
          </div>

          <div className="footer-social">
            <FaGlobe />
            <FaYoutube />
            <FaFacebook />
            <FaInstagram />
            <FaPinterest />
            <FaXTwitter />
            <FaLinkedin />
          </div>
        </div>
      </footer>
    </div>
  );
};
