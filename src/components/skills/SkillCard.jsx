// src/components/skills/SkillCard.jsx

const SkillCard = ({ skill }) => {
  return (
    <div
      className={`
        ${skill.tone}

        relative
        overflow-hidden

        rounded-[34px]

        h-[188px]

        px-5
        pt-5

        border
        border-white/30

        shadow-[0_18px_40px_rgba(215,205,230,0.45)]

        transition-all
        duration-300

        hover:-translate-y-1
      `}
    >
      {/* GLOSS */}
      <div
        className="
          absolute
          inset-0

          bg-[linear-gradient(135deg,rgba(255,255,255,0.15),transparent_40%)]

          pointer-events-none
        "
      />

      {/* ICON */}
      <div
        className="
          relative
          z-10

          flex
          items-center
          justify-center

          h-[58px]
          w-[58px]

          rounded-full

          bg-[#f8f1f6]

          text-[26px]

          shadow-[0_10px_24px_rgba(255,255,255,0.5)]
        "
      >
        {skill.icon}
      </div>

      {/* TITLE */}
      <h3
        className="
          relative
          z-10

          mt-5

          text-[18px]
          leading-none

          font-black

          tracking-[-0.03em]

          text-[#23163a]
        "
      >
        {skill.name}
      </h3>

      {/* PROGRESS TRACK */}
      <div
        className="
          relative
          z-10

          mt-5

          h-[12px]
          w-full

          overflow-hidden

          rounded-full

          bg-white/45
        "
      >
        {/* PROGRESS */}
        <div
          className="
            h-full

            rounded-full

            bg-gradient-to-r
            from-[#d97ae5]
            via-[#78bfff]
            to-[#5dd9d2]
          "
          style={{
            width: `${skill.level}%`,
          }}
        />
      </div>

      {/* PERCENT */}
      <p
        className="
          relative
          z-10

          mt-2

          text-[14px]

          font-semibold

          text-black/50
        "
      >
        {skill.level}%
      </p>
    </div>
  );
};

export default SkillCard;