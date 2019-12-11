import React from "react";
import withName from "./withName";
import withCounter from "./withCounter";

const Counter = props => {
  return (
    <div>
      <span>
        {props.name} Clicked counter <strong>{props.count}</strong> times{" "}
      </span>
      <button onClick={props.incrementCount}>+</button>
    </div>
  );
};

export default withName(withCounter(Counter));
