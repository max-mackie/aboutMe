import React from "react";
import "./Misc.css";

const AnimatedLink = ({ to, children }) => {
  return (
    <div className="relative inline">
      <a href={to} target="_blank" className="animated-underline">
        {children}
      </a>
    </div>
  );
};

export default AnimatedLink;
