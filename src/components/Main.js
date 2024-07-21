import React from "react";
import InteractiveBox from "./InteractiveBox";
import { boxes } from "../utils/variables";
import Web_Developer_jr_Francisco_Gonzalez_2024 from "../utils/Web_Developer_jr_Francisco_Gonzalez_2024.pdf";
import Button from "./Button";
import { Fade } from "react-awesome-reveal";

function Main() {
  return (
    <main id="main" className="main">
      <div className="background-boxes">
        {boxes.map((box, index) => (
          <InteractiveBox
            key={index}
            content={box.content}
            opacityClass={box.opacityClass}
            initialTransform={box.initialTransform}
            isMovingClass={box.isMovingClass}
          ></InteractiveBox>
        ))}
      </div>
      <div className="main__content">
        <Fade cascade>
          <h1 className="main__title">¡Bienvenidos a mi portafolio web!</h1>
          <p className="main__description">
            <b>
              ¡Hola! Soy Francisco Omar H. González Utrea, Ingeniero en Sistemas
              Computacionales y actualmente me estoy especializado en Desarrollo
              Web Full Stack, con un enfoque particular en el front-end.
            </b>
          </p>
          <Button
            modifier="button_primary"
            content="Descargar CV"
            icon={"bx bxs-download"}
            href={Web_Developer_jr_Francisco_Gonzalez_2024}
            download="Web_Developer_jr_Francisco_Gonzalez_2024.pdf"
          />
        </Fade>
      </div>
    </main>
  );
}

export default Main;

/*
<a
          className="button button_primary"
          href={Web_Developer_jr_Francisco_Gonzalez_2024}
          download={"Web_Developer_jr_Francisco_Gonzalez_2024.pdf"}
        >
          Descargar CV
        </a>
*/
