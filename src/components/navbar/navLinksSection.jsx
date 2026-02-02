"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import React from 'react';

const NavbarLinksSection = () => {
    const pathname = usePathname();
    
    const navItems = [
      { name: "Home", href: "/" },
      { name: "Products", href: "/products" },
      { name: "Our Story", href: "/story" },
      { name: "Contact", href: "/contact" },
    ];

    const isActive = (href) => {
        if (href === '/') {
            return pathname === href;
        }
        return pathname?.startsWith(href);
    };

    return (
        <div className='flex items-center space-x-4 p-1 bg-white/50 rounded-3xl backdrop-blur-3xl'>
            {
              navItems.map((l, i) => (
                <div key={i} className='relative'>
                  <Link href={l.href}>
                    <button className={`relative z-10 rounded-3xl cursor-pointer py-2 px-6 transition-colors duration-300 font-bold ${isActive(l.href) ? 'text-white' : 'text-gray-800 hover:text-amber-500 hover:bg-amber-50'}`}>
                        {l.name}
                    </button>
                  </Link>
                  
                  {isActive(l.href) && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-amber-500 rounded-3xl"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30
                      }}
                    />
                  )}
                </div>
              ))  
            }
        </div>
    );
};

export default NavbarLinksSection;