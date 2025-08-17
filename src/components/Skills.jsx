import React from "react";
import SkillCard from "./SkillCard";
import skillsData from "../assets/skill";
const Skills = () => {
  console.log(skillsData.webdev[1])
  return (
    <div className="skills h-screen  bg-amber-200">
      <div
        id="head"
        className=" font-bold text-center text-5xl mb-1 text-shadow-lg text-shadow-amber-900 p-5 ">
        skills
      </div>
      <div id="part2">
        <div id="cards" className="flex flex-wrap justify-center gap-9">
         {skillsData.webdev.map((skill)=> <SkillCard key={skill.name} skill={skill} />)}
        </div>
      </div>
    </div>
  );
};

export default Skills;
