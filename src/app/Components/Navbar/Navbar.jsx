"use client";
import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import NavbarLogo from "./NavbarLogo/NavbarLogo.jsx";
import NavLinks from "./NavLinks/NavLinks";
import SideNav from "./SideNav/SideNav";
import { Menu, X } from "lucide-react";

const useHideOnScroll = () => {
  const [hide, setHide] = useState(false);
  // let lastScrollY = window.scrollY;
  let lastScrollY = useRef(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current) {
        setHide(true);
      } else {
        setHide(false);
      }
      lastScrollY.current = currentScrollY;
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
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const toggleNavbar = () => {
    if (isOpen) {
      setIsClosing(true);
    } else {
      setIsClosing(false);
    }
    setTimeout(() => {
      setIsOpen(!isOpen);
    }, 150);
    document.body.style.overflow = isOpen ? "auto" : "hidden"; //Disable Scrolling
  };

  const checkWindowSize = () => {
    if (window.innerWidth > 767) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", checkWindowSize);
    checkWindowSize();
    return () => {
      window.removeEventListener("resize", checkWindowSize);
    };
  }, []);

  return (
    <nav className="flex flex-col relative">
      <SideNav isOpen={isOpen} toggleNavbar={toggleNavbar} />
      <section
        //  backdrop-blur-md want to put this in but it ruins the sideNav
        className={`w-full backdrop-blur-md flex items-center justify-between pl-10 pr-12 pt-10 pb-4 bg-navy text-lightest-slate font-nav-font bg-opacity-70 fixed z-20 transition-transform duration-300 tranform-gpu backdropfilter ${
          hide ? "-translate-y-full" : ""
        }`}
      >
        <NavbarLogo animationFinished={animationFinished} />
        <div className="responsive-hidden flex childrenFadeIn ">
          <NavLinks animationFinished={animationFinished} />
        </div>
        <div className="responsive-show text-green">
          <button id="navControl" onClick={toggleNavbar}>
            {isOpen ? (
              <X
                className={`${isClosing ? "spin-back" : "spin"} relative z-50`}
              />
            ) : (
              <Menu
                className={`${
                  isClosing && !isOpen ? "uncollapseIcon" : "collapseIcon"
                }`}
              />
            )}
          </button>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
