import React from "react";
import withName from "./withName";
import withCounter from "./withCounter";

const Hover = props => {
  return (
    <div>
      <span onMouseOver={props.incrementCount}>
        {props.name} hovered this text <stron>{props.count}</stron> times{" "}
      </span>
    </div>
  );
};

export default withCounter(withName(Hover));
