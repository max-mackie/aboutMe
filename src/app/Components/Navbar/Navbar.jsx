"use client";
import React, { useState, useEffect } from "react";
import "./Navbar.css";

const useHideOnScroll = () => {
  const [hide, setHide] = useState(false);
  let lastScrollY = window.scrollY;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setHide(true);
      } else {
        setHide(false);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return hide;
};

const Navbar = () => {
  const hide = useHideOnScroll();

  return (
    <nav
      className={`bg-navy flex top-0 bg-opacity-70  fixed transition-transform ${
        hide ? "-translate-y-full" : ""
      } duration-300 tranform-gpu left-0 w-full items-center justify-between px-20 pt-10 pb-4 text-lightest-slate font-nav-font`}
    >
      <section className="flex items-center">
        <svg
          width="60"
          height="52"
          viewBox="0 0 120 104"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="hexagon-outline"
            d="M30 2 L90 2 L118 52 L90 102 L30 102 L2 52 Z"
            stroke="#64ffda"
            strokeWidth="5"
          />
          <text
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            fill="#64ffda"
            fontSize="40"
            fontFamily="Arial, sans-serif"
          >
            M
          </text>
        </svg>
      </section>
      <section className="">
        <ul className="flex space-x-4">
          <li>
            <a href="/#about" className="mr-4 hover:text-green">
              <span className="text-green mr-1">01.</span>About
            </a>
          </li>
          <li>
            <a href="/#experience" className="mr-4 hover:text-green">
              <span className="text-green mr-1">02.</span>Experience
            </a>
          </li>
          <li>
            <a href="/#work" className="mr-4 hover:text-green">
              <span className="text-green mr-1">03.</span>Work
            </a>
          </li>
          <li>
            <a href="/#contact" className="hover:text-green">
              <span className="text-green mr-1">04.</span>Contact
            </a>
          </li>
          <div>
            <a
              className="text-green rounded  px-4 py-2 m-2 border border-1 border-green"
              href="/resume.pdf"
            >
              Resume
            </a>
          </div>
        </ul>
      </section>
    </nav>
  );
};

export default Navbar;
