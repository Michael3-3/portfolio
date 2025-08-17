import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import CursorFollower from "./components/CursorFollower";
import Projects from "./components/Projects";
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
      </div>
    </>
  );
}

export default App;
