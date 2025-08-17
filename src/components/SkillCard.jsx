import React from "react";

const SkillCard = ({ skill }) => {
  return (
    <div className="flex flex-col items-center p-2 w-24 sm:w-28 md:w-32 lg:w-40">
      {/* circular image container that keeps aspect ratio */}
      <div className="bg-base-100 shadow-lg rounded-full p-3 w-full aspect-square flex items-center justify-center overflow-hidden">
        <img
          src={skill.image}
          alt={skill.name}
          loading="lazy"
          className="max-w-full max-h-full object-contain bg-cover"
        />
      </div>

      {/* name */}
      <h2 className="mt-2 text-xl font-bold sm:text-base md:text-lg text-center truncate w-full">
        {skill.name}
      </h2>
    </div>
  );
};

export default SkillCard;
