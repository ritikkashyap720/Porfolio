import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const texts = ["Vijay Mudgal", "Android Developer"];

const Typewriter = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("Vijay Mudgal");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = texts[textIndex];
    let typingSpeed = isDeleting ? 50 : 100;

    const handleTyping = () => {
      setDisplayedText((prev) =>
        isDeleting ? fullText.substring(0, prev.length - 1) : fullText.substring(0, prev.length + 1)
      );

      if (!isDeleting && displayedText === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && displayedText === "") {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }
    };

    const typingTimeout = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(typingTimeout);
  }, [displayedText, isDeleting, textIndex]);

  return (
    <motion.span
      initial={{ y:25,opacity: 0 }}
      whileInView={{ y:0,opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="text-start animated-gradient-text text-5xl md:text-6xl font-extrabold"
    >
        <span> </span>
      {displayedText}
      <span className="animate-blink">|</span>
    </motion.span>
  );
};

export default Typewriter;