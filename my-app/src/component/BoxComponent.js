import React, { useState } from "react";

const BoxComponent = (props) => {
  const [isPointPresent, setPointPresent] = useState(false);

  const showPoint = (e) => {
    props.getClickCount();
    props.count < 4 ? setPointPresent(true) : console.log("more than 4");
  };

  return (
    <div
      className="randBox"
      onClick={showPoint}
      style={{ background: props.clr }}
    >
      <span>{isPointPresent && props.value}</span>
    </div>
  );
};

export { BoxComponent };
