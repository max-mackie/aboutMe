import React from "react";
import AnimatedLink from "../../Misc/AnimatedLink";

const Job = ({ props }) => {
  return (
    <section>
      <h3 className="text-xl font-bold mt-1 flex items-start">
        {props.role}
        {props.url && (
          <div className="flex items-start">
            <span className="mx-4 font-normal text-green">@</span>
            <span className="font-normal text-green">
              <AnimatedLink to={props.url}>{props.company}</AnimatedLink>
            </span>
          </div>
        )}
      </h3>
      <p className="mt-1 mb-4">
        {props.start} - {props.end}
      </p>
      <ul>
        {props.bullets.map((bullet, index) => (
          <div key={index + "a"} className="flex my-4">
            <p
              key={index + "b"}
              className="text-green  mr-4 before:content-['▸_']"
            ></p>
            <li className="text-slate" key={index + "c"}>
              {bullet}
            </li>
          </div>
        ))}
      </ul>
    </section>
  );
};

export default Job;
