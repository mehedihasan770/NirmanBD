"use client"

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiUser, FiSettings, FiLogOut, FiChevronDown, FiGrid, FiBell } from 'react-icons/fi';
import { HiOutlineUserCircle, HiOutlineCog, HiOutlineLogout } from 'react-icons/hi';

const ModernUserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const menuItems = [
    { 
      id: 1, 
      label: 'Dashboard', 
      icon: <FiGrid className="w-5 h-5" />,
      shortcut: '⌘D'
    },
    { 
      id: 2, 
      label: 'Settings', 
      icon: <HiOutlineCog className="w-5 h-5" />,
      shortcut: '⌘S'
    },
    { 
      id: 3, 
      label: 'Logout', 
      icon: <HiOutlineLogout className="w-5 h-5" />,
      color: 'text-red-500',
      hoverColor: 'hover:bg-red-50',
      shortcut: '⌘L'
    }
  ];

  const handleMenuItemClick = (itemId) => {
    console.log(`Clicked: ${menuItems.find(item => item.id === itemId)?.label}`);
    
    if (itemId === 3) {
      console.log('Logging out...');
    }
    
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          relative flex items-center justify-center
          w-11 h-11 rounded-full cursor-pointer
          bg-white/50 backdrop-blur-3xl
          shadow-sm hover:shadow-md
          border-2 transition-all duration-300
          ${isOpen ? 'border-amber-500' : 'border-transparent'}
          overflow-hidden group
        `}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div 
          className="absolute inset-0 bg-linear-to-br from-amber-400/20 to-orange-400/20"
          animate={{ opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
        
        <div className="relative z-10">
          <div className="w-8 h-8 rounded-full bg-linear-to-r from-amber-500 to-orange-500 flex items-center justify-center">
            <FiUser className="w-5 h-5 text-white" />
          </div>
        </div>
      </motion.button>

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
              duration: 0.2 
            }}
            className="absolute right-0 mt-4 w-64 bg-white/50 rounded-3xl backdrop-blur-3xl shadow-xl overflow-hidden z-50"
            style={{ 
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1), 0 5px 15px rgba(0, 0, 0, 0.05)'
            }}
          >
            <div className="p-5 bg-linear-to-r from-amber-50 to-orange-50 border-b border-amber-100">
              <div className="flex items-center space-x-3">
                <div 
                  className="w-12 h-12 rounded-full bg-linear-to-r from-amber-500 to-orange-500 flex items-center justify-center shadow-md"
                  whileHover={{ rotate: 5 }}
                >
                  <FiUser className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p 
                    className="text-sm font-semibold text-gray-900 truncate"
                  >
                    John Doe
                  </p>
                  <p 
                    className="text-xs text-gray-600 truncate mt-1"
                  >
                    john.doe@example.com
                  </p>
                </div>
              </div>
            </div>

            <div className="py-2 px-2">
              {menuItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => handleMenuItemClick(item.id)}
                  className={`
                    w-full flex items-center justify-between
                    px-4 py-3 rounded-xl
                    text-sm font-medium transition-all duration-200
                    ${item.color || 'text-gray-700'}
                    ${item.hoverColor || 'hover:bg-amber-50 hover:text-amber-700'}
                    mb-1 last:mb-0
                  `}
                >
                  <div className="flex items-center">
                    <span className={`mr-3 ${item.color || 'text-amber-500'}`}>
                      {item.icon}
                    </span>
                    <span>{item.label}</span>
                  </div>
                </button>
              ))}
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

export default ModernUserMenu;