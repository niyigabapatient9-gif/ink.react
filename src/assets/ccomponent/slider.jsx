

import React from "react";
import "./slider.css";

function Slider() {
  return (
    <div className="corousel">
      <div className="track">
        {/* Isibo ya 1 y'amafoto */}
        <div className="item"><img src="black.png" alt="1" /></div>
        <div className="item"><img src="africa.png" alt="2" /></div>
        <div className="item"><img src="richone.png" alt="3" /></div>
        <div className="item"><img src="teach.png" alt="4" /></div>

        {/* Isibo ya 2 (Duplicate) yo gutuma iguma kwizunguruka infinitly */}
        <div className="item"><img src="black.png" alt="1" /></div>
        <div className="item"><img src="africa.png" alt="2" /></div>
        <div className="item"><img src="richone.png" alt="3" /></div>
        <div className="item"><img src="teach.png" alt="4" /></div>
      </div>
    </div>
  );
}
 
export default Slider;