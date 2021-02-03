//State is similar to props, but it is private and fully controlled by the component.
//Managed inside component instead of being passed into it like props.

import { useState } from "react";

const LittleMonkeys = () => {
  const [count, setCount] = useState(10);

  function handleClick() {
    //subtract  count
    if (count != 0) {
      setCount(count - 1);
    }
  }
  return (
    <>
      {/* ternary example */}
      <p>{count != 0 ? `{count} little monkies jumping` : "no more monkeys"}</p>
      <button onClick={handleClick}> Click Here</button>
    </>
  );
};
