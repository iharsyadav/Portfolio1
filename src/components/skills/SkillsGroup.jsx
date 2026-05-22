// src/components/skills/SkillsGroup.jsx

import SkillCard from "./SkillCard";

const SkillsGroup = ({ group }) => {
  return (
    <div>
      {/* GROUP TITLE */}
      <div className="flex items-center gap-5 mb-8">
        <div
          className={`
            ${group.dot}

            h-[38px]
            w-[38px]

            rounded-full

            shadow-[0_10px_24px_rgba(255,255,255,0.4)]
          `}
        />

        <h3
          className="
            text-[2.1rem]
            leading-none

            font-black

            tracking-[-0.05em]

            text-[#23163a]
          "
        >
          {group.title}
        </h3>

        <div className="h-px flex-1 bg-black/8" />
      </div>

      {/* GRID */}
      <div
        className="
        grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4
        "
      >
        {group.skills.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default SkillsGroup;
