import React from "react";
import "./Sidebar.css";
import Logo2 from "../assets/logo2.svg";

export default function Sidebar() {
  return (
    <aside className="aside">
      <a href="#Home" className="nav__logo">
        <img src={Logo2} alt="" />
      </a>

      <nav className="nav">
        <div className="nav__menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#Home" className="nav__link">
                <i className="fa-solid fa-house"></i>
              </a>
            </li>

            <li className="nav__item">
              <a href="#About" className="nav__link">
                <i className="fa-solid fa-user"></i>
              </a>
            </li>

            <li className="nav__item">
              <a href="#Services" className="nav__link">
                <i className="fa-solid fa-briefcase"></i>
              </a>
            </li>

            <li className="nav__item">
              <a href="#Resume" className="nav__link">
                <i className="fa-solid fa-graduation-cap"></i>
              </a>
            </li>

            <li className="nav__item">
              <a href="#Portfolio" className="nav__link">
                <i className="fa-solid fa-layer-group"></i>
              </a>
            </li>

            <li className="nav__item">
              <a href="#Contact" className="nav__link">
                <i className="fa-solid fa-envelope"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="nav__footer">
        <span className="copyright">&copy; 2022 - 2023.</span>
      </div>
    </aside>
  );
}
