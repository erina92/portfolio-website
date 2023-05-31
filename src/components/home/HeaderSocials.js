import React from "react";

export default function HeaderSocials() {
  return (
    <div className="home__socials">
      <a
        href="https://www.instagram.com/eri.codes/"
        className="home__socials-link"
        target="_blank"
        rel="noreferrer"
      >
        <i class="fa-brands fa-instagram"></i>
      </a>

      <a
        href="https://github.com/erina92"
        className="home__socials-link"
        target="_blank"
        rel="noreferrer"
      >
        <i class="fa-brands fa-github"></i>
      </a>

      <a
        href="https://www.linkedin.com/in/erika-miglietta/"
        className="home__socials-link"
        target="_blank"
        rel="noreferrer"
      >
        <i class="fa-brands fa-linkedin"></i>
      </a>
    </div>
  );
}
