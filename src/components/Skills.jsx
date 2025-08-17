import React from "react";
import SkillCard from "./SkillCard";
import skillsData from "../assets/skill";

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-[#ddc69d] text-amber-900 py-12 px-4 sm:px-8 lg:px-16"
    >
      <header className="text-center mb-8">
        <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-shadow-lg p-2">
          skills
        </h2>
      </header>

      {/* Responsive grid: cols grow with screen size */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 justify-items-center">
          {skillsData.webdev.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
