import React, { useState, useRef } from "react";

function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="contact__content">
        <i className="bx bx-paper-plane contact__icon"></i>
        <h2>Pónganse en contacto</h2>
        <p className="contact__description">
          Aunque actualmente no estoy realizando servicios freelance, estoy
          dispuesto a nuevas oportunidades laborales, ya que mi objetivo actual
          es encontrar un trabajo estable, mi bandeja de entrada siempre estará
          abierta. Ya sea que tenga una pregunta o simplemente saludar, ¡haré
          todo lo posible para responderle!
        </p>
        <p>
          <b>¡Gracias por visitar mi portafolio!</b>
        </p>
        <a
          className="button button_primary contact_margin-top"
          href="mailto:francgonzalez456@gmail.com"
          target="_blank"
        >
          Contacto
        </a>
      </div>
    </section>
  );
}

export default Contact;
