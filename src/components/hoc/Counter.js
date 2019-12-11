import React, { useState } from "react";
import WithName from "./withName";

const Counter = props => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <span>
        {props.name} Clicked counter <strong>{count}</strong> times{" "}
      </span>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};

export default WithName(Counter);
