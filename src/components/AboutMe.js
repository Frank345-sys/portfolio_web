import React from "react";
import foto_perfil from "../images/foto-perfil-cv.jpg";

const AboutMe = () => (
  <section id="about-me" className="section about-me">
    <div className="about-me__content">
      <h2 className="about-me__title">Sobre mi</h2>
    </div>
    <div className="about-me__items">
      <article className="info">
        <div className="info__content">
          <Presentation />
        </div>
      </article>
      <article className="info">
        <div className="info__content">
          <Education />
          <Skills />
          <Languages />
        </div>
      </article>
      <article className="info">
        <div className="info__content">
          <Aptitudes />
          <Recognitions />
        </div>
      </article>
    </div>
  </section>
);

/* */

const Presentation = () => (
  <>
    <h3 className="info__title_display-none">¿Quién soy?</h3>
    <div className="presentation">
      <div className="presentation__photo">
        <img
          src={foto_perfil}
          alt="Foto de perfil de Francisco Omar Habib González Utrera"
        />
        <div className="animation-photo"></div>
      </div>
      <div className="presentation__description">
        <h3>Francisco Omar Habib González Utrera</h3>
        <h4 className="presentation__title">
          Ing. en Sistemas Computacionales
        </h4>
        <h5>Desarrollador web jr.</h5>
      </div>
    </div>
    <p className="info__description">
      Ingeniero en Sistemas Computacionales, graduado del Instituto Tecnológico
      Superior de Xalapa. Con experiencia programando en HTML, CSS, Javascript y
      React. Durante mi trayetoria académica he liderado proyectos de desarrollo
      de software, destacando en el diseño, codificación y documentación. Me
      considero una persona responsable, colaborativa, proactiva, creativa y
      autodidacta. Disfruto del aprendizaje constante, buscando nuevas
      oportunidades para adquirir conocimientos y experiencias unicas que me
      permitan mejorar constantemente mi desempeño en mi profesión.
    </p>
  </>
);

/*

      <li>
        <a className="info__link link link-animation" href="#">
          Programa de desarrollo web TripleTen.
        </a>
      </li>
*/

const Education = () => (
  <div className="info__education info_gap-5">
    <h3>Educación</h3>
    <div className="info__education-item">
      <h4>Ingeniería en Sistemas Computacionales - Titulado</h4>
      <h5>Instituto Tecnológico Superior de Xalapa (ITSX)</h5>
      <span>2016 - 2022</span>
    </div>
    <div className="info__education-item">
      <h4>Programa de desarrollo web</h4>
      <h5>TripleTen</h5>
      <span>2022 - 2024</span>
    </div>
  </div>
);

const Skills = () => (
  <div className="info__skills info_gap-5">
    <h3>Mis skills</h3>
    <ul className="list">
      <li>HTML5</li>
      <li>CSS3</li>
      <li>JavaScript</li>
      <li>React.js</li>
      <li>Node.js</li>
      <li>NoSQL</li>
      <li>Git y GitHub</li>
    </ul>
  </div>
);

const Languages = () => (
  <div className="info__languages info_gap-5">
    <h3>Idiomas</h3>
    <ul className="list">
      <li>Español (lengua nativa)</li>
      <li>Inglés (básico)</li>
    </ul>
  </div>
);

const Aptitudes = () => (
  <div className="info__aptitudes info_gap-5">
    <h3>Aptitudes</h3>
    <ul className="list">
      <li>Puntual</li>
      <li>Responsable</li>
      <li>Trabajo en equipo</li>
      <li>Proactivo</li>
      <li>Actodidacta</li>
      <li>Paciente</li>
    </ul>
  </div>
);

const Recognitions = () => (
  <div className="info__recognitions info_gap-5">
    <h3>Reconocimientos</h3>
    <ul className="list">
      <li>
        <a
          className="info__link link link-animation"
          href="https://crehana.com/diplomas/890575cf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Introducción al desarrollo web front-end HTML5 y CSS3 desde cero.
        </a>
      </li>
      <li>
        <a
          className="info__link link link-animation"
          href="https://s3.amazonaws.com/public-lessons.crehana.com/images/certificate/participation-pdf/09ef2e51/d7cfd6c5.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Fundamentos de JavaScript.
        </a>
      </li>
      <li>
        <a className="info__link link link-animation">
          Git y GitHub: Control de versiones en Proyectos Web (próximamente).
        </a>
      </li>
      <li>
        <a className="info__link link link-animation">
          Programa de desarrollo web TripleTen (próximamente).
        </a>
      </li>
    </ul>
  </div>
);

export default AboutMe;

/*
import React, { useState, useRef } from "react";

function AboutMe() {
  return (
    <section classNameName="about-me">
      <div className="about-me__content">
        <h2 className="about-me__title">Más sobre mi</h2>
      </div>
      <div className="about-me__items">
        <article className="info">
          <div className="info__content">
            <div className="presentation">
              <div className="animación-foto">
                <img src="img/foto-perfil.jpg" />
              </div>
              <div className="presentation__descripcion">
                <h3>Francisco Omar Habib González Utrera</h3>
                <h4 className="titulo-animado">
                  Ing. en Sistemas Computacionales Especilidad Ingeniería de
                  software
                </h4>
              </div>
            </div>
            <p className="info__description">
              Soy Ingeniero en sistemas computacionales recien egresado del
              Instituto Tecnológico Superior de Xalapa, con conocimientos en
              C/C++, HTML5, CSS3, Java, JavaScript y Asp.net C# mvc básico,
              además a lo largo de mi formación académica he realizado proyectos
              de software y redes, en donde he realizado, diseño, codificación y
              documentación, me considero una persona responsable, proactiva,
              dispuesto a ayudar y aprender nuevos conocimientos.
            </p>
          </div>
        </article>
        <article className="info">
          <div className="info__content">
            <div className="info__educacion">
              <h3>Educación</h3>
              <div>
                <p>Ingeniería en sistemas computacionales - titulado</p>
                <p>Especialidad de Ingeniería de sofware</p>
                <p>Insittuto Tecnológico Superior de Xalapa (ITSX)</p>
                <p>2016 - 2022</p>
              </div>
              <div>
                <p>Programa de desarrollo web</p>
                <p>Desarrollador web full-stack jr.</p>
                <p>TripleTen</p>
                <p>2022 - 2024</p>
              </div>
            </div>
            <div className="info__conocimientos">
              <h3>Conocimientos</h3>
              <ul className="lista">
                <li>
                  <p>Mantenimiento de equipo y sistemas computacionales</p>
                </li>
                <li>
                  <p>Java</p>
                </li>
                <li>
                  <p>C/C++</p>
                </li>
                <li>
                  <p>HTML5</p>
                </li>
                <li>
                  <p>CSS3</p>
                </li>
                <li>
                  <p>JavaScript</p>
                </li>
                <li>
                  <p>asp.net C# básico / técnico</p>
                </li>
              </ul>
            </div>
            <div className="idiomas">
              <h3>Idiomas</h3>
              <ul className="lista">
                <li>
                  <p>Español (lengua nativa)</p>
                </li>
                <li>
                  <p>Ingles (básico)</p>
                </li>
              </ul>
            </div>
          </div>
        </article>
        <article className="info">
          <div className="info__content">
            <div>
              <h3>Aptitudes</h3>
              <ul className="lista">
                <li>
                  <p>Puntual</p>
                </li>
                <li>
                  <p>Responsable</p>
                </li>
                <li>
                  <p>Trabajo en equipo</p>
                </li>
                <li>
                  <p>Proactivo</p>
                </li>
                <li>
                  <p>Paciente</p>
                </li>
              </ul>
            </div>
            <div>
              <h3>Reconocimientos</h3>
              <ul className="lista">
                <li>
                  <a
                    className="link"
                    href="https://crehana.com/diplomas/890575cf"
                    target="_blank"
                  >
                    Introducción al desarrollo web front-end HTML5 y CSS3 desde
                    cero
                  </a>
                </li>
                <li>
                  <a
                    className="link"
                    href="https://s3.amazonaws.com/public-lessons.crehana.com/images/certificate/participation-pdf/09ef2e51/d7cfd6c5.pdf"
                    target="_blank"
                  >
                    Fundamentos de JavaScript
                  </a>
                </li>
                <li>
                  <a className="link">TypeScript desde cero</a>
                </li>
                <li>
                  <a className="link">Título electrónico</a>
                </li>
                <li>
                  <a className="link">
                    Git y GitHub: Control de versiones en Proyectos Web
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default AboutMe;
*/
