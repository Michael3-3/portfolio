/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CursorFollower = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [colorIndex, setColorIndex] = useState(0);

  const colors = ["#f97316", "#facc15", "#14b8a6", "#8b5cf6", "#ec4899"]; // orange, yellow, teal, purple, pink

  useEffect(() => {
    const updateMouse = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      setColorIndex((prev) => (prev + 1) % colors.length);
    };
    window.addEventListener("mousemove", updateMouse);
    return () => window.removeEventListener("mousemove", updateMouse);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50 rounded-full mix-blend-difference"
      animate={{
        x: mousePos.x - 15,
        y: mousePos.y - 15,
        backgroundColor: colors[colorIndex],
      }}
      transition={{
        type: "spring",
        damping: 30,
        stiffness: 300,
        mass: 0.5,
      }}
      style={{
        width: 30,
        height: 30,
      }}
    />
  );
};

export default CursorFollower;
