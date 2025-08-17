import React from "react";
import myimage from "../assets/sittingdeveloper (2).png";

const About = () => {
  return (
    <div id="about" className="bg-[#6f2f14] py-12 px-4 md:px-16 relative">
      <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between">
        {/* Image Section */}
        <div className="w-40 md:w-60 mb-8 md:mb-0 flex-shrink-0">
          <img
            src={myimage}
            alt="image"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Text Section */}
        <div className="text-center md:text-left max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 md:mb-12 text-orange-200 text-shadow-lg text-shadow-amber-900">
            About me
          </h1>
          <p className="text-lg md:text-xl text-[#ddc69d] text-shadow-lg font-serif">
            Final-year engineering student with a strong foundation in{" "}
            <span className="text-orange-400 text-shadow-lg">
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
  );
};

export default About;
