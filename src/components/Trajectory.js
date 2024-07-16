import React, { useState, useRef } from "react";
import { timeblocks } from "../utils/variables";

/* <div className="trajectory__items">
        <div className="timeblock">
          <div className="timeblock__content">
            <h2 className="timeblock__title">
              Ingeniería en Sistemas Computacionales
            </h2>
            <h3 className="timeblock__subtitle">
              Instituto Tecnológico Superior de Xalapa
            </h3>
            <span className="timeblock__date">2016 - 2022</span>
            <p className="timeblock__description">
              Durante el transcurso de mi carrera en la universidad descubri el
              inmenso mundo de la programación por lo cual decidí especializarme
              en Ingeniería de Software y dedicarme a la programación.
            </p>
            <h4>Skills adquiridas</h4>
            <div className="timeblock__skills">
              <span className="skill">Java</span>
              <span className="skill">C/C++</span>
              <span className="skill">SQL</span>
            </div>
          </div>
          <div>
            <i className="timeblock__image bx bxs-graduation"></i>
          </div>
        </div>
        <div className="timeblock">
          <div className="timeblock__content">
            <h2 className="timeblock__title">
              Mi introducción al Desarrollo Web
            </h2>
            <h3 className="timeblock__subtitle">Cursos online</h3>
            <span className="timeblock__date">2022 - 2023</span>
            <p className="timeblock__description">
              En el tracyecto de mi carrera como Ingeniero, adquiri
              conocimientos en programación como Java, C/C++, al egresar y
              adentrarme por primera vez al mundo laboral, descubri el
              desarrollo web, por lo que surgio en mi una nueva pasión y cambio
              mi rumbo por completo.
            </p>
            <h4>Skills adquiridas</h4>
            <div className="timeblock__skills">
              <span className="skill">HTML5</span>
              <span className="skill">CSS3</span>
              <span className="skill">JavaScript</span>
            </div>
          </div>
          <div>
            <i className="timeblock__image bx bxs-graduation"></i>
          </div>
        </div>
        <div className="timeblock">
          <div className="timeblock__content">
            <h2 className="timeblock__title">Programa Desarrollo Web</h2>
            <h3 className="timeblock__subtitle">
              Escuela TripleTen de desarrollo web
            </h3>
            <span className="timeblock__date">ENERO 2023 - JULIO 2024</span>
            <p className="timeblock__description">
              El Programa de Desarrollo Web, es un curso de diez meses que
              abarca HTML, CSS, JS, React, Node.js y otras skills clave para la
              creación de sitios y aplicaciones web que implica proyectos
              basados en desafíos del mundo real.
            </p>
            <h4>Skills adquiridas</h4>
            <div className="timeblock__skills">
              <span className="skill">HTML5</span>
              <span className="skill">CSS3</span>
              <span className="skill">JavaScript</span>
              <span className="skill">React.js</span>
              <span className="skill">Node.js</span>
              <span className="skill">Express</span>
              <span className="skill">NoSQL</span>
            </div>
          </div>
          <div>
            <i className="timeblock__image bx bxs-graduation"></i>
          </div>
        </div>
        <span className="trajectory__timeline"></span>
      </div>*/

/*
      <p className="trajectory__description">
          Durante mi trayecto como desarrollador web, he abordado cada proyecto
          con entusiasmo dando soluciones a los problemas que se presentan.
        </p>
      */

function Trajectory() {
  return (
    <section id="trajectory" className="section trajectory">
      <div className="trajectory__content">
        <h2 className="trajectory__title">Trayectoria</h2>
      </div>
      <div className="trajectory__items">
        {timeblocks.map((block, index) => (
          <div className="timeblock" key={index}>
            <div className="timeblock__content ">
              <h3 className="timeblock__title">{block.title}</h3>
              <h4 className="timeblock__subtitle">{block.subtitle}</h4>
              <h5 className="timeblock__date">{block.date}</h5>
              <p className="timeblock__description">{block.description}</p>
              <h4>Skills adquiridas</h4>
              <div className="skills">
                {block.skills.map((skill, skillIndex) => (
                  <span className="skills__skill" key={skillIndex}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <i className="timeblock__image bx bxs-graduation"></i>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/*<span className="trajectory__timeline"></span>*/

export default Trajectory;

/*
display: block;
    margin: 30px 0;
    width: 100px;
    height: 2px;
    background-color: #00b7c7;
*/
