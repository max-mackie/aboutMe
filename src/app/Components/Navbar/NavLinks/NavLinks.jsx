import React from "react";
import Link from "next/link";

const NavLinks = ({ animationFinished }) => {
  return (
    <>
      <Link href="/#about" className=" link mr-4 hover:text-green dd100">
        <span className="text-green mr-1">01.</span>About
      </Link>
      <Link href="/#experience" className=" link mr-4 hover:text-green dd200">
        <span className="text-green mr-1">02.</span>Experience
      </Link>
      <Link href="/#projects" className="link mr-4 hover:text-green dd300">
        <span className="text-green mr-1">03.</span>Projects
      </Link>

      <Link href="/#contact" className="link mr-4 hover:text-green dd400">
        <span className="text-green mr-1">04.</span>Contact
      </Link>
      <div className="flex relative">
        {animationFinished && (
          <div className="absolute inset-0 bg-green h-[1.9rem] mx-2 px-4 rounded z-0 transition-opacity duration-200"></div>
        )}
        <button
          className={`${
            animationFinished
              ? "hoverEffect"
              : "transition-all duration-200 dd500"
          }`}
        >
          <a
            id="resumeButton"
            className="relative z-10 text-green bg-navy rounded px-4 py-2 m-2 border border-1 border-green"
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </button>
      </div>
    </>
  );
};

export default NavLinks;
