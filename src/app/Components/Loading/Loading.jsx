import React from "react";
import "./Loading.css";

const Loading = () => {
  return (
    <div className="loading-container">
      <svg
        width="120"
        height="104"
        viewBox="0 0 120 104"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="hexagon-outline"
          d="M30 2 L90 2 L118 52 L90 102 L30 102 L2 52 Z"
          stroke="#64ffda"
          stroke-width="5"
        />
        <text
          x="50%"
          y="50%"
          dominant-baseline="middle"
          text-anchor="middle"
          fill="#64ffda"
          font-size="40"
          font-family="Arial, sans-serif"
        >
          M
        </text>
      </svg>
    </div>
  );
};

export default Loading;
