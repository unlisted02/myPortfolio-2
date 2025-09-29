"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TypingEffect = ({ words, className = "" }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPausing, setIsPausing] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = words[currentWordIndex];
      
      if (!isDeleting && !isPausing) {
        // Typing
        if (currentText.length < current.length) {
          setCurrentText(current.substring(0, currentText.length + 1));
        } else {
          // Start pausing
          setIsPausing(true);
          setTimeout(() => {
            setIsPausing(false);
            setIsDeleting(true);
          }, 2000);
        }
      } else if (isDeleting) {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(current.substring(0, currentText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? 50 : isPausing ? 2000 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, currentWordIndex, isDeleting, isPausing, words]);

  return (
    <motion.span
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {currentText}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="ml-1"
      >
        |
      </motion.span>
    </motion.span>
  );
};

export default TypingEffect;
