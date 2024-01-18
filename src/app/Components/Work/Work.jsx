import React, { useState, useRef } from "react";
import Job from "./Job/Job";
import jobData from "./Job/jobData";

const Work = () => {
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
  return (
    <section className="text-slate mt-24 ml-20 md:ml-36 mr-10 relative">
      <h2 className="flex items-center font-bold text-2xl text-lightest-slate">
        <span className="text-lg font-normal text-green mr-4">02.</span>
        Where I've Worked
        <span className="flex-grow bg-dark-slate h-[1px] mx-2 mr-16"></span>
      </h2>
      <div className="flex flex-col md:flex-row md:items-start space-x-4 mt-4 ">
        <div className="relative">
          <div className="absolute bg-dark-slate w-[2px] h-full" />
          <div className=" absolute bg-green w-[2px]" style={highlightStyle} />
          <div ref={buttonsRef} className="flex md:flex-col ">
            {jobData.map((data, index) => (
              <button
                key={index}
                className={`py-2 px-8 text-left whitespace-nowrap ${
                  index === selectedButton ? "text-green" : "text-slate"
                }`}
                onClick={() => selectButton(index)}
              >
                {data.company}
              </button>
            ))}
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