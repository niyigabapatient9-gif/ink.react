import React from "react";
import "./style.css";

function TestimonialCard() {
  return (
    <div className="card-container">
      <div className="card-wrapper">
        <div className="avatar-box">
          <img src="richone.png" alt="Robert Fox" className="avatar-img" />
        </div>

        <div className="card-body">
          <p>
            There are many variations of passages of Lorem Ipsum available,
            but the majority have suffered alteration in some form, by
            injected humour
          </p>
        </div>

        <div className="card-footer">
          <div className="user-info">
            <h4 className="user-name">Robert Fox</h4>
            <span className="user-role">CEO, Parkview Int.Ltd</span>
          </div>
          <div className="stars">★ ★ ★ ★ ★</div>
         </div>
         </div>

    </div>
  );
}

export default TestimonialCard;