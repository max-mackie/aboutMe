import React from "react";

const Email = () => {
  return (
    <section className="fixed bottom-0 right-0 m-10">
      <div className="flex flex-col items-center space-y-4">
        <div className="rotate-90 hover:-translate-y-1 transition-all duration-150 ml-1 mb-2">
          <a
            href="mailto:mprmackie@gmail.com"
            className=" p-2 hover:text-green text-light-slate text-xs"
          >
            mprmackie@gmail.com
          </a>
        </div>
      </div>
      <div className="w-px h-24 mt-16 bg-light-slate mx-auto"></div>
    </section>
  );
};

export default Email;
