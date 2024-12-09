import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSmile } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const AnimatedButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const button = document.getElementById("animatedButton");

    if (!button) return;

    const jumpAnimation = () => {
      button.animate(
        [
          { transform: "translateY(0)" },
          { transform: "translateY(-75px)" },
          { transform: "translateY(0)" },
          { transform: "translateY(-8px)" },
          { transform: "translateY(0)" },
        ],
        {
          duration: 1600,
          easing: "ease-in-out",
          iterations: isHovered ? 0 : Infinity,
        }
      );
    };

    jumpAnimation();

    return () => {
      button.getAnimations().forEach((anim) => anim.cancel());
    };
  }, [isHovered]);

  const handleClick = () => {
    navigate("/games");
  };

  return (
    <div className="fixed bottom-4 right-14 z-50">
      <motion.div
        id="animatedButton"
        className={`relative flex items-center justify-center w-16 h-16 bg-gradient-to-r from-teal-400 to-blue-500 text-white rounded-full shadow-lg`}
        style={{
          cursor: "pointer",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
      >
        <AnimatePresence>
          {isHovered ? (
            <motion.div
              className="absolute flex items-center justify-center px-4 py-2 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full shadow-lg"
              style={{
                whiteSpace: "nowrap",
                height: "100%",
              }}
              initial={{ width: "4rem" }}
              animate={{ width: "10rem" }}
              exit={{ width: "4rem" }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
              }}
            >
              <span className="text-white font-semibold text-sm mr-2">
                Have some fun!
              </span>
              <FaSmile className="text-white text-xl" />
            </motion.div>
          ) : (
            <motion.div
              className="text-white flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
            >
              <FaSmile className="text-2xl" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default AnimatedButton;
