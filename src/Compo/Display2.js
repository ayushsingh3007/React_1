import React, { useState } from "react";
import ClassCompo from "./ClassCompo";


function Display2() {
  const [count, setCount] = useState(true);

  return (
    <>
      <button id="btn-2" onClick={() => setCount(!count)}>
        This is Class Component
      </button>
      {count ? <ClassCompo /> : null}
    </>
  );
}

export default Display2;
