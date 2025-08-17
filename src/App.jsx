import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import CursorFollower from "./components/CursorFollower";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
function App() {
  return (
    <>
      <div className="h-screen w-full  bg-cover bg-center">
        <CursorFollower />
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects/>
        <Contact/>
      </div>
    </>
  );
}

export default App;
