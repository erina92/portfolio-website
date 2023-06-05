import React from "react";

export default function AboutBox() {
  return (
    <div className="about__boxes grid">
      <div className="about__box">
        <i className="about__icon fa-solid fa-fire"></i>

        <div>
          <h3 className="about__title">4</h3>
          <span className="about__subtitle">Projects Completed</span>
        </div>
      </div>
      <div className="about__box">
        <i className="about__icon fa-solid fa-mug-hot"></i>

        <div>
          <h3 className="about__title">6000</h3>
          <span className="about__subtitle">Cups of coffee</span>
        </div>
      </div>
      <div className="about__box">
        <i className="about__icon fa-solid fa-face-smile"></i>

        <div>
          <h3 className="about__title">50</h3>
          <span className="about__subtitle">Satisfied clients</span>
        </div>
      </div>
    </div>
  );
}
