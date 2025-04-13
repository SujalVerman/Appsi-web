import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const cardData = [
  {
    title: "Who do you collaborate with most often?",
    subtitle: "Select just one to describe your team",
    options: ["Teammates", "Clients", "Nobody (just me)"],
  },
  {
    title: "What best describes your role?",
    subtitle: "Pick the option that fits you",
    options: ["Designer", "Developer", "Manager"],
  },
  {
    title: "How big is your team?",
    subtitle: "Choose one",
    options: ["Just me", "2-10 people", "10+ people"],
  },
  {
    title: "Which tools do you currently use?",
    subtitle: "Select all that apply",
    options: ["Figma", "Adobe XD", "Sketch", "None of these"],
  },
  {
    title: "What’s your main goal?",
    subtitle: "Select one",
    options: ["Learn new skills", "Work more efficiently", "Grow my business"],
  },
  {
    title: "How did you hear about us?",
    subtitle: "Select one",
    options: ["Social Media", "Friend", "Advertisement"],
  },
  {
    title: "Menu",
    subtitle: "",
    options: ["Project idea", "Business", "Entrepreneur", "Startup Help", "Freelancing"],
  },
  {
    title: "Menu",
    subtitle: "",
    options: ["Project idea", "Business", "Entrepreneur", "Startup Help", "Freelancing"],
  }
];

const OverlappingCards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [responses, setResponses] = useState({});
  const [showLoading, setShowLoading] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [showHomeLoading, setShowHomeLoading] = useState(false);
  const navigate = useNavigate();

  const totalCards = cardData.length;
  const lastMenuCardIndex = totalCards - 2;
  const isLastMenuCard = currentIndex === lastMenuCardIndex;
  const selectedOption = responses[cardData[currentIndex]?.title] || null;
  const isButtonDisabled = isLastMenuCard && !selectedOption;

  const handleOptionClick = (option) => {
    setResponses((prev) => ({
      ...prev,
      [cardData[currentIndex].title]: option,
    }));
  };

  const handleContinue = async () => {
    if (isLastMenuCard && selectedOption) {
      setShowLoading(true);
      await saveToFile();
      
      setTimeout(() => {
        setShowLoading(false);
        setShowThankYou(true);
      }, 1000);
    } else if (!isButtonDisabled) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handleSkip = () => {
    setCurrentIndex(lastMenuCardIndex);
  };

  const handleBackToHome = () => {
    setShowHomeLoading(true); //
    setTimeout(() => {
      navigate("/home"); 
    }, 2000);
  };

  const saveToFile = async () => {
    try {
      const response = await fetch("http://localhost:5000/save-data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(responses),
      });
      const data = await response.json();
      console.log(data.message);
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  return (
    <div className="card-container1">
      {/* Initial Loading Screen */}
      {showLoading && (
        <motion.div
          className="loading-screen"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="loader"></div>
          <h2>Saving your responses...</h2>
        </motion.div>
      )}

      {/* Home Redirect Loading Screen */}
      {showHomeLoading && (
        <motion.div
          className="loading-screen"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="loader"></div>
          <h2>Please wait...</h2>
        </motion.div>
      )}

      {/* Thank You Screen */}
      {showThankYou && !showHomeLoading && (
        <motion.div
          className="card-1 thank-you-card"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="fade-text">Thank You for Contributing</h2>
          <p className="subtitle">We appreciate your time at Appsi Studio! 🎉</p>
          <button className="back-home-btn" onClick={()=>{navigate("/templatepage")}}>
            Continue
          </button>
        </motion.div>
      )}

      {/* Question Cards */}
      {!showLoading && !showThankYou && !showHomeLoading &&
        cardData.map((card, index) => {
          const isCurrent = index === currentIndex;

          return (
            <motion.div
              key={index}
              className="card-1"
              initial={{ opacity: isCurrent ? 1 : 0.3 }}
              animate={{
                x: (index - currentIndex) * 15,
                y: (index - currentIndex) * 10,
                opacity: isCurrent ? 1 : 0.4,
                scale: isCurrent ? 1 : 0.92,
                filter: isCurrent ? "none" : "blur(3px)",
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              style={{ zIndex: isCurrent ? 100 : totalCards - index }}
            >
              <h2 className="fade-text">{card.title}</h2>
              <p className="subtitle">{card.subtitle}</p>
              {card.options.map((option, i) => (
                <button
                  key={i}
                  className={`option-btn ${
                    responses[card.title] === option ? "selected" : ""
                  }`}
                  onClick={() => handleOptionClick(option)}
                >
                  {option}
                </button>
              ))}
              <div className="btn-container">
                <button 
                  className="continue-btn" 
                  onClick={handleContinue} 
                  disabled={isButtonDisabled}
                >
                  {isLastMenuCard && selectedOption ? "Finish & Save" : "Continue"}
                </button>
                {currentIndex < lastMenuCardIndex && (
                  <button className="skip-btn" onClick={handleSkip}>
                    Skip
                  </button>
                )}
              </div>
            </motion.div>
          );
        })}
    </div>
  );
};

export default OverlappingCards;
