import { useState } from "react";
import "./App.css";
import { Calculator } from "./Components/Calculator";
import mathsSvg from "./img/maths.svg";
import calcSvg from "./img/calc.svg";

function App() {
  const [count, setCount] = useState(0);

  const bodyElement = document.querySelector("body");
  var themeMode = "l";

  const themeHandler = () => {
    if(themeMode === "l"){
      bodyElement.classList.add("dark-mode");
      themeMode = "d";
    }
    else{
      bodyElement.classList.remove("dark-mode");
      themeMode = "l";
    }
  }


  return (
    <>
      <svg viewBox="0 0 1320 100">
        <text x="50%" y="50%" dy=".35em" text-anchor="middle">
          CALCULATOR
        </text>
      </svg>

      <div className="">
      <div className="toggle-switch">
        <label className="switch-label">
          <input type="checkbox" class="checkbox" onClick={themeHandler}/>
          <span className="slider"></span>
        </label>
      </div>
      </div>

      <div className="main">
        <img src={mathsSvg} />
        <Calculator></Calculator>
        <img src={calcSvg} alt="" />
      </div>
    </>
  );
}

export default App;
