import React from "react";
import "./Email.css";

const Email = () => {
  return (
    <section className="fixed bottom-0 right-0 p-10 responsive-hidden">
      <div className="flex flex-col items-left space-y-4 text-2xl text-lightest-slate">
        {/* <div className="rotate-90 hover:-translate-y-1 transition-all duration-150 ml-1 mb-2 inline-block"> */}
        <div className="writing-mode-vertical hover:-translate-y-1 transition-all duration-150 ml-1 mb-4">
          <a
            href="mailto:mprmackie@gmail.com"
            className=" p-2 hover:text-green text-xs"
          >
            mprmackie@gmail.com
          </a>
        </div>
      </div>
      <div className="w-px h-24 bg-lightest-slate mx-auto"></div>
    </section>
  );
};

export default Email;
