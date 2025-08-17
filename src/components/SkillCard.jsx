import React from 'react';

const SkillCard = ({ skill }) => { // destructure props
  console.log(skill)
  return (
    <div className="card bg-base-100 w-32 shadow-lg rounded-full flex flex-col items-center p-4">
  <figure className="mb-2">
    <img src={skill.image} alt={skill.name} className="w-24 h-24 object-contain"/>
  </figure>
  <div className="card-body p-0 flex flex-col items-center">
    <h2 className="card-title text-xl font-bold text-center">{skill.name}</h2>
  </div>
</div>

  );
};

export default SkillCard;
