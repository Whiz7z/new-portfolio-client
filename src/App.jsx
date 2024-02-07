import React from "react";
import AboutMe from "./components/AboutMe/AboutMe";
import "./App.sass";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import ContactMe from "./components/ContactMe/ContactMe";
import ActiveSectionContextProvider from "./context/active-section-context";

function App() {
  return (
    <>
      <ActiveSectionContextProvider>
        <AboutMe />
        <Projects />
        <Skills />
        <Experience />
        <ContactMe />
      </ActiveSectionContextProvider>
    </>
  );
}

export default App;
