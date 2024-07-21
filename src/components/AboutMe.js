import React from "react";
import foto_perfil from "../images/foto-perfil-cv.jpg";
import { Fade } from "react-awesome-reveal";

const AboutMe = () => (
  <section id="about-me" className="section about-me">
    <div className="about-me__content">
      <h2 className="about-me__title">Sobre mi</h2>
    </div>
    <Fade>
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
    </Fade>
  </section>
);

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
        <a
          className="info__link link link-animation"
          href="https://s3.amazonaws.com/public-lessons.crehana.com/images/certificate/participation-pdf/f3224198/3d9d7622.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Git y GitHub: Control de versiones en Proyectos Web.
        </a>
      </li>
      <li>
        <p className="info__link link link-animation">
          Programa de desarrollo web TripleTen (próximamente).
        </p>
      </li>
    </ul>
  </div>
);

export default AboutMe;
