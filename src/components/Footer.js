import React, { useState, useRef } from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p>Built by Francisco Omar</p>
        <p>Última actalización Julio 2024.</p>
        <ul className="footer__list">
          <li>
            <a href="https://github.com/Frank345-sys" target="_blank">
              <i className="bx bxl-github"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/francisco-omar-h-glez-utrera/"
              target="_blank"
            >
              <i className="bx bxl-linkedin-square"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
