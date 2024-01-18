import React from "react";

const Work = () => {
  return (
    <section className="text-slate mt-24 ml-20 md:ml-36 mr-10">
      <h2 className="flex items-center font-bold text-2xl text-lightest-slate">
        <span className="text-lg font-normal text-green mr-4">02.</span>
        Where I've Worked
        <span className="flex-grow bg-dark-slate h-[1px] mx-2 mr-16"></span>
      </h2>
      <div className="flex">
        <div className="flex flex-col">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
        </div>
        <div>
          <h1>Software Engineer</h1>
          <p>Hello</p>
        </div>
      </div>
    </section>
  );
};

export default Work;
