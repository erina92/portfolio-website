import React from "react";
import "./Home.css";
import Me from "../../assets/avatar-4.svg";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";
import Shapes from "./Shapes";

export default function Home() {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="" className="home__img" />
        <h1 className="home__name">Erika Miglietta</h1>
        <span className="home__education">
          I am a Front-End Developer and Translator
        </span>

        <HeaderSocials />

        <a href="#Contact" className="btn">
          Hire Me
        </a>

        <ScrollDown />
      </div>

      <Shapes />
    </section>
  );
}
