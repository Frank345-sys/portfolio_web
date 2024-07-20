import React from "react";
import Header from "../src/components/Header";
import Main from "./components/Main";
import Trajectory from "./components/Trajectory";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Main />
      <AboutMe />
      <Trajectory />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
