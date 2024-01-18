import React from "react";

const Job = ({ props }) => {
  return (
    <section>
      <h3>
        {props.role}
        <span>@{props.company}</span>
      </h3>
    </section>
  );
};
