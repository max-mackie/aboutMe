import react from "react";
import "./Icons.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/fontawesome-free";

const Icons = () => {
  return (
    <section>
      <li>
        <i className="fab fa-github fa-lg"></i>
        <FontAwesomeIcon icon={faEnvelope} />
      </li>
      <li>
        <i className="fab fa-linkedin fa-lg"></i>
      </li>
      <p className="pb-24 text-white bg-blue">hello</p>
    </section>
  );
};

export default Icons;
