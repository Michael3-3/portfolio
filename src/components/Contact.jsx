import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="contact h-72 bg-[#6f2f14] ">
      <div id="head" className="w-full text-center text-5xl font-bold p-5">
        Get In Touch
      </div>
      <div id="data">
        <div className="w-full text-center text-2xl font-bold p-5">
          Email: &nbsp;
          <a href="mailto:mikhelpottellaat@gmail.com" className="text-blue-500">
            mikhelpottellaatwork@gmail.com
          </a>
        </div>
        {/* let links to linkedin github leetcode be added here using logos*/}
         <div className="flex justify-center items-center gap-10 pt-10">
            <a href="https://www.linkedin.com/in/mikhel-pottella/">
            <img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="linkedin" className="btn rounded-full bg-white shadow-lg"></img>
            </a>
            <a href="https://github.com/Michael3-3">

            <img src="https://images.seeklogo.com/logo-png/30/2/github-logo-png_seeklogo-304612.png" alt="github" className="h-10 text-white bg-white rounded-full btn shadow-lg"/>
            </a>
         </div>
      </div>
    </div>
  );
};

export default Contact;
