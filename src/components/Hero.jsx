import React from "react";
import myImage from "../assets/0030708de15f068420ef386dce3230c9_2-removebg-preview.png";

const Hero = () => {
  return (
    <>
      {/* ===== Desktop / Laptop: EXACT original markup, visible ONLY on lg and up ===== */}
      <div className="hidden lg:block relative">
        <div className="line w-1/2 h-2.5 rounded-r-full bg-amber-900 absolute top-24 "></div>
        <div className="line w-5/12 h-2.5 rounded-r-full bg-amber-900 absolute top-36"></div>
        <div className="line w-4/12 h-2.5 rounded-r-full bg-amber-900 absolute top-48"></div>

        <div id="image">
          <img
            src={myImage}
            alt="hello"
            className="absolute right-0 h-1/2 top-2/4"
          />
        </div>

        <div className="hero  h-[88.5vh] bg-[#ddc69d] bg-cover bg-center">
          <div className="hero-content text-center text-[rgb(91,87,86)]">
            <div className="">
              <h1 className="text-5xl font-bold text-shadow-lg">Hello there</h1>
              <p className="py-6 text-5xl  font-bold w-full text-shadow-lg">
                I am{" "}
                <span className="text-[#6f2f14] text-shadow-[rgba(201,122,89,0.73)] text-shadow-lg">
                  Michael
                </span>{" "}
                and I'm a{" "}
                <span className="text-[#6f2f14] text-shadow-[rgba(201,122,89,0.73)] text-shadow-lg">
                  "Full Stack Developer"
                </span>
              </p>
              <a href="#projects">
                <button className="btn bg-[#6f2f14] mt-10 h-10 w-48 text-2xl font-mono rounded-full border-gray-400 hover:bg-[#ddc69d] hover:text-[#6f2f14] ">
                  My Projects
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Mobile / Tablet: responsive stacked version, visible ONLY below lg ===== */}
      <div className="block lg:hidden">
        <div className="hero bg-[#ddc69d] bg-cover bg-center py-10 px-4">
          <div className="max-w-3xl mx-auto text-center text-[rgb(91,87,86)]">
            {/* Centered smaller image for mobile so it doesn't overlap */}
            <div className="mb-6">
              <img
                src={myImage}
                alt="Michael"
                className="w-40 sm:w-56 mx-auto h-auto object-contain"
              />
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold text-shadow-lg">
              Hello there
            </h1>

            <p className="py-4 sm:py-6 text-2xl sm:text-3xl font-bold text-shadow-lg">
              I am{" "}
              <span className="text-[#6f2f14] text-shadow-[rgba(201,122,89,0.73)]">
                Michael
              </span>{" "}
              and I'm a{" "}
              <span className="text-[#6f2f14] text-shadow-[rgba(201,122,89,0.73)]">
                "Full Stack Developer"
              </span>
            </p>

            <a href="#projects">
              <button className="btn bg-[#6f2f14] mt-4 h-10 w-40 text-lg font-mono rounded-full border-gray-400 hover:bg-[#ddc69d] hover:text-[#6f2f14]">
                My Projects
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
