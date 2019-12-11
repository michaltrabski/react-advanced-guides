import React, { useState } from "react";
import WithName from "./withName";

const Hover = props => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <span onMouseOver={() => setCount(count + 1)}>
        {props.name} hovered this text <stron>{count}</stron> times{" "}
      </span>
    </div>
  );
};

export default WithName(Hover);
