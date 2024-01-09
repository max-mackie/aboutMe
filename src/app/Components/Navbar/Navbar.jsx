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

  const [animationFinished, setAnimationFinished] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationFinished(true);
      console.log("animation finished");
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <nav
      className={`bg-navy flex top-0 bg-opacity-70  fixed transition-transform ${
        hide ? "-translate-y-full" : ""
      } duration-300 tranform-gpu left-0 w-full items-center justify-between px-20 pt-10 pb-4 text-lightest-slate font-nav-font`}
    >
      <section className="relative">
        <svg
          className={` ${
            animationFinished
              ? "hoverEffect absolute z-10"
              : "logo absolute z-10 transition-all duration-0.2 "
          }`}
          width="60"
          height="52"
          viewBox="0 0 120 104"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="hexagon"
            d="M30 2 L90 2 L118 52 L90 102 L30 102 L2 52 Z"
            stroke="#64ffda"
            strokeWidth="5"
            fill="#0a192f"
            strokeLinejoin="miter"
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
        <svg
          className="text-navy"
          width="60"
          height="52"
          viewBox="0 0 120 104"
          fill="#64ffda"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="hexagon"
            d="M30 2 L90 2 L118 52 L90 102 L30 102 L2 52 Z"
            stroke="#64ffda"
            strokeWidth="5"
          />
        </svg>
      </section>
      <section>
        <ul className="flex space-x-4 mr-10">
          <li
            className="mr-4 hover:text-green opacity-0 "
            style={{
              transform: "translateY(-20px)",
              animation: "fadeInDropDown 0.6s ease 0.1s forwards",
            }}
          >
            <a href="/#about">
              <span className="text-green mr-1">01.</span>About
            </a>
          </li>
          <li
            className="mr-4 hover:text-green opacity-0"
            style={{
              transform: "translateY(-20px)",
              animation: "fadeInDropDown 0.6s ease 0.2s forwards",
            }}
          >
            <a href="/#experience">
              <span className="text-green mr-1">02.</span>Experience
            </a>
          </li>
          <li
            className="mr-4 hover:text-green opacity-0"
            style={{
              transform: "translateY(-20px)",
              animation: "fadeInDropDown 0.6s ease 0.3s forwards",
            }}
          >
            <a href="/#work" className="">
              <span className="text-green mr-1">03.</span>Work
            </a>
          </li>
          <li
            className="mr-4 hover:text-green opacity-0"
            style={{
              transform: "translateY(-20px)",
              animation: "fadeInDropDown 0.6s ease 0.4s forwards",
            }}
          >
            <a href="/#contact" className="">
              <span className="text-green mr-1">04.</span>Contact
            </a>
          </li>
          <div className="flex relative">
            <div
              className={`${
                animationFinished
                  ? "absolute top-0 left-0"
                  : "opacity-0 transition-all duration-200 fadeInDropDown absolute top-0 left-0"
              }`}
            >
              {/* Green background */}
              <div className="absolute top-0 left-0 m-2 px-4 py-2 bg-green rounded z-0"></div>
              {/* Resume link */}
              <a
                className={`relative z-10 text-green bg-navy rounded px-4 py-2 m-2 border border-1 border-green ${
                  animationFinished ? "hoverEffect" : ""
                }`}
                href="/resume.pdf"
              >
                Resume
              </a>
            </div>
          </div>
        </ul>
      </section>
    </nav>
  );
};

export default Navbar;
