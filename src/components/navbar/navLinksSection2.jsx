"use client"

import Link from 'next/link';
import React from 'react';
import SearchComponent from './navbarSearch';
import UserMenu from './UserMenu';
import PhoneMenu from './phoneMenu';

const NavbarLinksSection2 = () => {
  return (
    <div className="flex items-center justify-between space-x-4 p-1 2xl:-mr-4">
      <section className='hidden md:block'>
        <SearchComponent />
      </section>
      <div>
        <Link href={"/curt"}>
          <button
            className={`relative z-10 py-2 px-6 transition-colors duration-300 font-bold text-white bg-amber-500 rounded-3xl`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </button>
        </Link>
      </div>
      <section>
        <UserMenu/>
      </section>
      <section className='2xl:hidden'>
        <PhoneMenu/>
      </section>
    </div>
  );
};

export default NavbarLinksSection2;