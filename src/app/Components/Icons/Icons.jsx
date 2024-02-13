import react from "react";
import "./Icons.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Icons = () => {
  return (
    <section className="fixed bottom-0 left-0 p-10 responsive-hidden">
      <div className="flex flex-col items-left space-y-4 text-2xl text-lightest-slate">
        <a
          href="https://www.linkedin.com/in/max-mackie/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            className="hover:-translate-y-1 pb-2 hover:text-green transition-all duration-150"
            icon={faLinkedin}
          />
        </a>
        <a
          href="https://github.com/max-mackie"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            className=" mb-2 hover:-translate-y-1 pb-2 hover:text-green transition-all duration-150"
            icon={faGithub}
          />
        </a>
        <div className="w-px h-24 bg-lightest-slate mx-auto"></div>
      </div>
    </section>
  );
};

export default Icons;
