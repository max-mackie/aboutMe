import React from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <section className="flex flex-col text-slate mt-48 mx-10 items-center">
      <h3 className="text-xl font-normal text-green">04. What&apos;s Next?</h3>
      <h2 className="flex items-center font-bold text-5xl text-lightest-slate my-5">
        Get In Touch
      </h2>
      <p className="max-w-[700px] text-lg text-center mb-10">
        My inbox is always open. Whether you have a question or just want to say
        hi, I&apos;ll try my best to get back to you!
      </p>
      <div className="flex relative">
        <div className="absolute inset-0 bg-green h-[3.9rem] m-2 px-8 rounded z-0 transition-opacity duration-200"></div>
        <button className="relative z-10 text-lg text-green bg-navy rounded px-8 py-4 m-2 border border-1 border-green hoverEffect">
          Say Hello
        </button>
      </div>
      <div className=" flex items-center flex-col mt-56">
        <div className=" space-y-4 text-2xl text-lightest-slate responsive-show">
          <FontAwesomeIcon
            className="mt-4 mr-2 hover:-translate-y-1 pb-2 hover:text-green transition-all duration-150"
            icon={faLinkedin}
          />
          <FontAwesomeIcon
            className="ml-2 hover:-translate-y-1 pb-2 hover:text-green transition-all duration-150"
            icon={faGithub}
          />
        </div>
        <footer className="mb-10 mt-4">Designed and Built by Max Mackie</footer>
      </div>
    </section>
  );
};

export default Contact;
