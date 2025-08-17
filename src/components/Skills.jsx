import React from "react";
import SkillCard from "./SkillCard";
import skillsData from "../assets/skill";
const Skills = () => {
  return (
    <div id="skills" className="skills h-screen  bg-[#ddc69d] text-amber-900">
      <div 
        id="head"
        className=" font-bold text-center text-5xl mb-1 text-shadow-lg  p-5 ">
        skills
      </div>
      <div id="part2">
        <div id="cards" className="flex flex-wrap justify-center gap-9 text-amber-200">
         {skillsData.webdev.map((skill)=> <SkillCard key={skill.name} skill={skill} />)}
        </div>
      </div>
    </div>
  );
};

export default Skills;
