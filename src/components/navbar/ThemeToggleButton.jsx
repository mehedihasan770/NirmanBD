"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ThemeToggleButton() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // Sun and Moon SVG components
  const SunIcon = () => (
    <motion.svg
      key="moon"
      initial={{ rotate: 45, scale: 0 }}
      animate={{ rotate: 0, scale: 1 }}
      exit={{ rotate: -45, scale: 0 }}
      transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
      xmlns="http://www.w3.org/2000/svg"
      className="h-5.5 w-5.5 text-white"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
    </motion.svg>
  );

  const MoonIcon = () => (
    <motion.svg
      key="sun"
      initial={{ rotate: -45, scale: 0 }}
      animate={{ rotate: 0, scale: 1 }}
      exit={{ rotate: 45, scale: 0 }}
      transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
      xmlns="http://www.w3.org/2000/svg"
      className="h-5.5 w-5.5 text-white"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
        clipRule="evenodd"
      />
    </motion.svg>
  );

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className="relative px-3 cursor-pointer py-3 rounded-full bg-linear-to-r from-[#9f28e3] to-[#9f28e3]/40 dark:from-[#9f28e3] dark:to-[#9f28e3]/40 transition-all duration-300 overflow-hidden"
      aria-label="Toggle theme"
    >
      {/* Animated background circle */}
      <motion.div
        className="absolute inset-0 rounded-full bg-[#9f28e3] dark:bg-linear-to-r from-[#9f28e3] to-[#9f28e3]/40"
        initial={false}
        animate={{
          scale: theme === "dark" ? 1 : 0,
        }}
        transition={{ duration: 0.4 }}
      />
      
      {/* Icon container */}
      <div className="relative flex items-center justify-center w-full h-full">
        <AnimatePresence mode="wait">
          {theme === "dark" ? <SunIcon /> : <MoonIcon />}
        </AnimatePresence>
      </div>
      
      {/* Animated ring around button on hover */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-transparent"
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  );
}