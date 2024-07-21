import React from "react";
import { projects } from "../utils/variables";
import ScrollImage from "./ScrollImage";
import Button from "./Button";
import { Fade } from "react-awesome-reveal";

function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="projects__content">
        <h2>Proyectos destacados</h2>
      </div>

      <article className="projects__items">
        {projects.map((project, index) => (
          <div className="project" key={index}>
            <Fade>
              <div className="project__description">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul className="list">
                  {project.points.map((point, pointIndex) => (
                    <li key={pointIndex}>{point}</li>
                  ))}
                </ul>
                <h4>Skills aplicadas</h4>
                <div className="skills">
                  {project.skills.map((skill, skillIndex) => (
                    <span className="skills__skill" key={skillIndex}>
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="content-buttons">
                  <Button
                    modifier="button_primary"
                    content="Repositorio"
                    icon={"bxl-github"}
                    href={project.repositorio}
                    target="_blank"
                  />
                  <Button
                    modifier="button_secundary"
                    content="Visitar web"
                    icon={"bx bx-world"}
                    href={project.enlace}
                    target="_blank"
                  />
                </div>
              </div>
            </Fade>
            <div className="project__images">
              {project.images.map((img, imgIndex) => (
                <ScrollImage
                  backgroundImage={img.img}
                  imageHeight={img.imageHeight}
                  imageName={img.imgName}
                  key={imgIndex}
                />
              ))}
            </div>
          </div>
        ))}
      </article>
    </section>
  );
}

/*
<a
                  className="button button_primary"
                  href={project.repositorio}
                  target="_blank"
                >
                  Repositorio
                </a>

<a
                  className="button button_secundary"
                  href={project.enlace}
                  target="_blank"
                >
                  Sitio web
                </a>
*/

/*
<a
                  className="button button_primary"
                  href={project.repositorio}
                  target="_blank"
                >
                  <i className="bx bxl-github"></i>
                  Visitar Repo
                </a>
                <a
                  className="button button_secundary"
                  href={project.enlace}
                  target="_blank"
                >
                  <i className="bx bx-world"></i>
                  Visitar web
                </a>
*/

/*
{project.images.map((img, imgIndex) => (
                <img src={img} key={imgIndex} />
              ))}
*/

export default Projects;
