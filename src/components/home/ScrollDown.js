import React from "react";

export default function ScrollDown() {
  return (
    <div className="scroll__down">
      <a href="#About" className="mouse__wrapper">
        <span className="home__scroll-name">Scroll Down</span>
        <span className="mouse">
          <span className="wheel"></span>
        </span>
      </a>
    </div>
  );
}
