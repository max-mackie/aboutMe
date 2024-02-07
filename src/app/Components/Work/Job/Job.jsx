import React from "react";
import AnimatedLink from "../../Misc/AnimatedLink";

const Job = ({ props }) => {
  return (
    <section className="">
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
      <p className={`mb-4 ${!props.url && "mt-1"}`}>
        {props.start} - {props.end}
      </p>
      <ul>
        {Object.entries(props.bullets).map(([title, bullets], index) => (
          <div key={title}>
            {title && (
              <h5 key={title} className="font-bold text-lg">
                {title}
              </h5>
            )}
            {bullets.map((bullet) => (
              <div
                key={index}
                className={`flex my-4 ${title ? "my-1" : "my-4"}`}
              >
                <p className="text-green  mr-4 before:content-['▸_']"></p>
                <li className="text-slate" key={index + "c"}>
                  {bullet}
                </li>
              </div>
            ))}
          </div>
        ))}
      </ul>
    </section>
  );
};

export default Job;
