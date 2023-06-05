import React from "react";
import "./About.css";
import Image from "../../assets/avatar-5.svg";
import AboutBox from "./AboutBox";

export default function About() {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
        <img src={Image} alt="" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              I am Erika Miglietta, translator/interpreter and web developer
              hailing from Taranto, Italy. Having majored in specialized
              translation, I have a keen eye for detail and an innate ability to
              convey ideas across languages. Through dedicated self-study, I was
              focused on mastering Javascript and React, two powerful tools for
              building interactive and user-friendly applications. My ambitions
              and drive to learn and grow in both my pursuits make me a great
              asset in bridging the gap between languages and technologies.
            </p>
            <a href="#" className="btn">
              Download CV
            </a>
          </div>
          <div className="about__skills grid">
            <div className="skills_data">
              <div className="skills__titles">
                <h3 className="skills__name">Development</h3>
                <span className="skills__number">90%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage development"></span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">UI/UX Design</h3>
                <span className="skills__number">20%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage ux"></span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Translation</h3>
                <span className="skills__number">100%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage translation"></span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">React</h3>
                <span className="skills__number">60%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage react"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AboutBox />
    </section>
  );
}
