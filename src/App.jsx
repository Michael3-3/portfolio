import React from "react";
import BgImg from "./assets/portfolio-background-header-53082_1080x675.jpg";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import CursorFollower from "./components/CursorFollower";
function App() {
  return (
    <>
      <div className="h-screen w-full  bg-cover bg-center">
        <CursorFollower />
        <Navbar />
        <Hero />
        <About />
        <Skills />
      </div>
    </>
  );
}

export default App;
