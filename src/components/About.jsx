import React from "react";
import myimage from "../assets/sittingdeveloper (2).png";

const About = () => {
  return (
    <div>
      <div id="img" className="absolute left-0 w-60">
        <img src={myimage} alt="image" />
      </div>
      <div className="hero bg-[#6f2f14] min-h-min">
        <div className="hero-content text-center">
          <div className="">
            <h1 className="text-5xl  font-bold mb-16 text-orange-200 text-shadow-lg text-shadow-amber-900">
              About me
            </h1>
            <p className="py-6 max-w-3xl text-xl text-[#ddc69d] text-shadow-lg font-serif">
              Final-year engineering student with a strong foundation in{" "}
              <span className="text-shadow-lg text-orange-400">
                full-stack web development
              </span>
              , specializing in modern frontend technologies. Passionate about
              building responsive, accessible, and high-performance web
              applications. Eager to contribute to fast-paced, innovative teams
              by delivering clean, maintainable code and continuously learning.
              Open to opportunities where I can grow as a developer and help
              create impactful digital products across industries.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
