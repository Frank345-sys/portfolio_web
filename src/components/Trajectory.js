import React from "react";
import { timeblocks } from "../utils/variables";
import { Fade } from "react-awesome-reveal";
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
            <div className="timeblock__content">
              <div className="timeblock__items">
                <Fade>
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
                </Fade>
              </div>
            </div>
            <i className={`timeblock__image bx ${block.classification}`}></i>
          </div>
        ))}
      </div>
    </section>
  );
}

//className="timeblock__image bx bxs-graduation"

/*<span className="trajectory__timeline"></span>*/

/*<i class='bx bxs-briefcase' ></i>*/

export default Trajectory;
