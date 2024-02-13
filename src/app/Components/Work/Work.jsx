import React, { useState, useEffect, useRef } from "react";
import Job from "./Job/Job";
import jobData from "./Job/jobData";
import useWindowSize from "../../utils/useWindowSize";
import "./Work.css";

const Work = () => {
  const size = useWindowSize();
  const isMobile = size.width < 768;

  const [selectedButton, setSelectedButton] = useState(0);
  const [highlightStyle, setHighlightStyle] = useState({});
  const buttonsRef = useRef(null);

  const selectButton = (index) => {
    setSelectedButton(index);

    const buttons = buttonsRef.current.children;
    const { offsetTop, clientHeight } = buttons[index];

    setHighlightStyle({
      top: offsetTop + "px",
      height: clientHeight + "px",
      transition: "top 0.3s ease",
    });
  };
  useEffect(() => {
    selectButton(0);
  }, []);

  return (
    <section
      id="experience"
      className="text-slate mt-48 mx-10 mr-10 flex flex-col relative"
    >
      <h2 className="flex items-center font-bold text-2xl text-lightest-slate">
        <span className="text-lg font-normal text-green mr-4">02.</span>
        Where I've Worked
        <span className="flex-grow bg-dark-slate h-[1px] mx-2 "></span>
      </h2>
      <div className="flex flex-col md:flex-row md:items-start mt-4">
        <div className=" mb-10 md:mb-0 relative">
          {isMobile || (
            <div className="absolute bg-dark-slate w-[2px] h-full" />
          )}
          {isMobile || (
            <div
              className=" absolute bg-green w-[2px]"
              style={highlightStyle}
            />
          )}
          <div className="my-responsive-width">
            <div
              ref={buttonsRef}
              className="flex md:flex-col overflow-x-auto whitespace-nowrap"
            >
              {jobData.map((data, index) => (
                <button
                  key={index}
                  className={`my-2 mx-8 text-left ${
                    index === selectedButton ? "text-green" : "text-slate"
                  }`}
                  onClick={() => selectButton(index)}
                >
                  {data.company}
                </button>
              ))}
            </div>
            {/* Horezontal for smaller screens */}
            {/* <div className="absolute bg-dark-slate w-full h-[2px]" />
            <div className=" absolute bg-green h-[2px]" style={highlightStyle} /> */}
          </div>
        </div>
        <div>
          <Job props={jobData[selectedButton]} />
        </div>
      </div>
    </section>
  );
};

export default Work;
