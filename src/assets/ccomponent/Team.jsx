
import React from "react";
import Slider from "./slider";
import "./team.css";

function Team() {
  return (
    <div className="team">
      <Slider />
      <section className="upper">
        <h1>Our team belives you deserve only the best.</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
        <img src="/teach.png" alt="team" />
      </section>
      <section className="down">
        <h1>Featured works.</h1>
          <img src="/bland.png" alt="bland" />
          <img src="/pink.png" alt="pink" />
        
      </section>
    </div>
  );
}

export default Team;