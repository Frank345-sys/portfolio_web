import React from "react";
import Header from "../src/components/Header";
import Main from "./components/Main";
import Trajectory from "./components/Trajectory";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Fade } from "react-awesome-reveal";

function App() {
  return (
    <div>
      <Header />
      <Main />
      <AboutMe />
      <Trajectory />
      <Projects />
      <Fade cascade>
        <Contact />
        <Footer />
      </Fade>
    </div>
  );
}

export default App;
