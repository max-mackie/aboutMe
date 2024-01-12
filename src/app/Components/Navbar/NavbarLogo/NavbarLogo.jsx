"use client";
import React from "react";
import "./NavbarLogo.css";

const NavbarLogo = ({ animationFinished }) => {
  return (
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
  );
};

export default NavbarLogo;
