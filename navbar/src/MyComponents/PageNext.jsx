import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

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
  const navigate = useNavigate();

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const images = [
  "code1.jpg", "code2.jpg", "code3.jpg",
  "code2.jpg", "code3.jpg", "code1.jpg",
  "code3.jpg", "code1.jpg", "code2.jpg",
  "code1.jpg", "code3.jpg", "code2.jpg"
];


  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((prev) => (prev - 3 + images.length) % images.length);
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 3) % images.length);
  };

  const getVisibleImages = () => {
    return [
      images[index % images.length],
      images[(index + 1) % images.length],
      images[(index + 2) % images.length],
    ];
  };


  return (
    <div className="Color1" onMouseMove={handleMouseMove}>
      {/* <motion.div
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
      /> */}

      <div className="video-container">
        <video
          src="/VID_20250414220307.mp4"
          autoPlay
          loop
          muted
          playsInline
        ></video>
        <h2 className="video-texts typing-text">
          <TypeAnimation
            sequence={[
              "The leading platform to create, manage and grow a digital presence.",
              1000,
              "",
              500,
              "Dedication with work can beat any company in the world.",
              1000,
              "",
              500,
              "Impact and vision.",
              1000,
              "",
              500,
              "Freedom to create anything.",
              1000,
              "",
              500,
            ]}
            wrapper="span"
            speed={60}
            deletionSpeed={80}
            repeat={Infinity}
            cursor={true}
          />
        </h2>
      </div>

      <section
        className="nextPage-style d-flex"
        style={{ height: "100vh", color: "white", margin: "0" }}
      >
        <div className="nextPage-style1">
          <motion.h1 variants={fadeInUp} initial="hidden" whileInView="visible">
            Customize to make it your own
          </motion.h1>
          <motion.p variants={fadeInUp} initial="hidden" whileInView="visible">
            → Intuitive drag & drop
          </motion.p>
          <motion.p
            className="para-2"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
          >
            Effortlessly add & arrange your text. Visual, Button & even entire
            sections
          </motion.p>
          <motion.p
            className="para-3"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
          >
            Built in AI tool
          </motion.p>
          <motion.p
            className="para-4"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
          >
            Advance design features
          </motion.p>
          <motion.button
            className="para-5 mx-2"
            onClick={() => navigate("/start")}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
          >
            Get Started
          </motion.button>
        </div>
        <div className="boxPage-style">
          <div className="image-container">
            <img className="boxPage-img" src="/HWB.png" alt="img" />
            <div className="overlay">
              <a
                href="https://6693fe06b61ecd50c6f3c1dd--preeminent-queijadas-612713.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Our Work
              </a>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="nextSection">
          <motion.h1 variants={fadeInUp} initial="hidden" whileInView="visible">
            Grow your website on a rock-solid foundation
          </motion.h1>
          <motion.p variants={fadeInUp} initial="hidden" whileInView="visible">
            Set your site up for success on the powerful infrastructure that
            supports millions of websites worldwide.
          </motion.p>
          <motion.button
            className="para-6 mx-2"
            onClick={() => navigate("/start")}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
          >
            Get Started
          </motion.button>
          <div className="slider-wrapper">
            <button className="slider-btn left" onClick={handlePrev}>
              ◀
            </button>

            <div className="cards-container">
              {getVisibleImages().map((img, i) => (
                <motion.div
                  key={i}
                  className="gradient-card"
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  whileHover={{
                    scale: 1.1,
                    zIndex: 10,
                    transition: { type: "spring", stiffness: 300 },
                  }}
                >
                  <img className="gradient-card" src={img} alt="" />
                </motion.div>
              ))}
            </div>

            <button className="slider-btn right" onClick={handleNext}>
              ▶
            </button>
          </div>
        </div>
      </section>

      <section>
        <div className="nextSection1">
          <motion.h1
            className="para-7"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
          >
            Grow your business from scratch
          </motion.h1>
          {[
            "Build app for business",
            "Custom automation",
            "Data Analytics",
            "Deploy your app",
            "Connect with industries leaders",
            "Get help at every step",
          ].map((txt, i) => (
            <motion.p
              key={i}
              className={`para-${8 + i}`}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
            >
              {txt}
            </motion.p>
          ))}
          <motion.button
            className="para-14 mx-2"
            onClick={() => navigate("/start")}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
          >
            Get Started
          </motion.button>
          <div className="container">
            <div className="boxs">
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
        <motion.h1
          className="para-15"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
        >
          Build your site in 5 Simple steps
        </motion.h1>
        <motion.button
          className="para-16 mx-2"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
        >
          Start for free
        </motion.button>
        <div className="stepsCount">
          {[
            "1. Choose a free template or use the AI website builder to create a unique site that's ready for business.",
            "2. Customize everything from the site layout to visual & content using the drag & drop editor.",
            "3. Add business offering like eCommerce, scheduling solution, a blog & more.",
            "4. Find & register the perfect domain or connect a domain name you already own.",
            "5. Start getting traffic and expand your reach with built-in marketing & SEO tools.",
          ].map((txt, i) => (
            <React.Fragment key={i}>
              <motion.p
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
              >
                {txt}
              </motion.p>
              <hr />
            </React.Fragment>
          ))}
        </div>
      </section>

      <section className="nextSection3">
        <motion.h1 variants={fadeInUp} initial="hidden" whileInView="visible">
          See what's possible
        </motion.h1>
        <motion.p variants={fadeInUp} initial="hidden" whileInView="visible">
          Get inspired by incredible websites made with Appsi
        </motion.p>
        <motion.button
          className="para-16 mx-2"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
        >
          Explore sites
        </motion.button>
        {[1, 2].map((row, idx) => (
          <div key={idx} className="scroll-container">
            <div className={idx === 0 ? "scroll-content" : "scroll-content1"}>
              {[...Array(20)].map((_, i) => (
                <div key={i} className="box1"></div>
              ))}
            </div>
          </div>
        ))}
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
            {[
              [
                "Product",
                [
                  "Website templates",
                  "Website builder",
                  "Website design",
                  "Web hosting",
                  "Mobile app builder",
                  "Domain names",
                ],
              ],
              [
                "Solution",
                [
                  "eCommerce Website",
                  "Portfolio Website",
                  "Restaurant Website",
                  "Blog Website",
                  "Student Website",
                  "Enterprise Solutions",
                  "Appsi Studio",
                ],
              ],
              ["Learn", ["Community Page", "Appsi Blog", "Learning hub"]],
              [
                "Support",
                [
                  "Hire a professional",
                  "Help center",
                  "Report abuse",
                  "System status",
                ],
              ],
            ].map(([title, items], i) => (
              <div key={i} className="footer-column">
                <p className="footer-title">{title}</p>
                {items.map((item, j) => (
                  <p key={j}>{item}</p>
                ))}
              </div>
            ))}
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
