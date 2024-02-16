import React from "react";
import NavLinks from "../NavLinks/NavLinks";
import "./SideNav.css";

const SideNav = ({ isOpen, toggleNavbar }) => {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-navy bg-opacity-50 backdrop-blur-sm"
          onClick={toggleNavbar}
        ></div>
      )}
      <div
        id="sideBarNavLinks"
        className={` sidebar-transition z-50 flex text-center flex-col items-center justify-around pt-20 pb-10 fixed top-0 right-0 w-80 h-full text-lightest-slate bg-light-navy p-5 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } `}
      >
        <NavLinks onNavLinkClick={toggleNavbar} />
      </div>
    </>
  );
};

export default SideNav;
