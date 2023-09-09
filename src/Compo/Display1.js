import React, { useState } from "react";
import FuncCompo from "./FuncCompo";


function Display1() {
  const [count2,setCount2]=useState(true)
  console.log(count2);
    return(
        <>
         <>
            <button id="btn-1"  onClick={()=>setCount2(!count2)}>
                This is Functional compo
            </button>
        {count2 ? <FuncCompo/>:""}
          </>  
        </>
    )
}export default Display1;