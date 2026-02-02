"use client"

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { FiHome } from 'react-icons/fi';
import { FiPackage } from 'react-icons/fi';
import { FiBookOpen } from 'react-icons/fi';
import { FiMail } from 'react-icons/fi';

const PhoneMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const navItems = [
    { name: "Home", href: "/", icon: <FiHome className="w-5 h-5" /> },
    {
      name: "Products",
      href: "/products",
      icon: <FiPackage className="w-5 h-5" />,
    },
    {
      name: "Our Story",
      href: "/story",
      icon: <FiBookOpen className="w-5 h-5" />,
    },
    { name: "Contact", href: "/contact", icon: <FiMail className="w-5 h-5" /> },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          w-11 h-11 rounded-full flex flex-col items-center justify-center
          bg-linear-to-br from-gray-100 to-gray-200 cursor-pointer
          border-2 transition-all duration-300
          ${isOpen ? "border-amber-500 ring-2 ring-amber-500/30" : "border-transparent"}
          hover:shadow-md
        `}
      >
        {/* 3 Lines */}
        <div className="space-y-1.5">
          <span
            className={`block w-5 h-0.5 bg-gray-700 rounded-full transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-gray-700 rounded-full transition-all duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-gray-700 rounded-full transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </div>
      </button>

      {/* Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 25,
              duration: 0.2,
            }}
            className="absolute right-0 mt-4 w-60 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-50"
            style={{
              boxShadow:
                "0 20px 40px rgba(0, 0, 0, 0.1), 0 5px 15px rgba(0, 0, 0, 0.05)",
            }}
          >
            <div className="py-2 px-2">
              {navItems.map((item, index) => (
                <Link
                  href={`${item?.href}`}
                  onClick={() => setIsOpen(false)}
                  key={index}
                  className={`
                    w-full flex items-center justify-between
                    px-4 py-3 rounded-xl cursor-pointer
                    text-sm font-medium transition-all duration-200
                    ${item.color || "text-gray-700"}
                    ${item.hoverColor || "hover:bg-amber-50 hover:text-amber-700"}
                    mb-1 last:mb-0
                  `}
                >
                  <div className="flex items-center">
                    <span className={`mr-3 ${item.color || "text-amber-500"}`}>
                      {item?.icon}
                    </span>
                    <span>{item?.name}</span>
                  </div>
                </Link>
              ))}
            </div>

            <div className="px-4">
              <div className="border-t border-gray-100"></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/10 backdrop-blur-sm z-40"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default PhoneMenu;