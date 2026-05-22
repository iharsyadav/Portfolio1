// src/components/skills/SkillCard.jsx

const SkillCard = ({ skill }) => {
  return (
    <div
      className={`
        ${skill.tone}
        clay

        relative
        overflow-hidden

        h-[150px]
        w-full

        px-4
        pt-4
        pb-4

        border
        border-white/25

        transition-all
        duration-300

        hover:-translate-y-1
      `}
    >
      {/* gloss */}
      <div
        className="
          absolute
          inset-0

          bg-[linear-gradient(135deg,rgba(255,255,255,0.18),transparent_45%)]

          pointer-events-none
        "
      />

      {/* blur */}
      <div
        className="
          absolute
          -top-10
          -right-10

          h-24
          w-24

          rounded-full

          bg-white/20

          blur-3xl
        "
      />

      {/* icon */}
      <div
        className="
          clay-sm

          relative
          z-10

          flex
          items-center
          justify-center

          h-[48px]
          w-[48px]

          rounded-full

          text-[20px]
        "
      >
        {skill.icon}
      </div>

      {/* title */}
      <h3
        className="
          relative
          z-10

          mt-4

          text-[15px]
          leading-none

          font-black

          tracking-[-0.03em]

          text-foreground
        "
      >
        {skill.name}
      </h3>

      {/* progress */}
      <div
        className="
          relative
          z-10

          mt-5

          h-[10px]
          w-full

          overflow-hidden

          rounded-full

          bg-white/40
        "
      >
        <div
          className="
            h-full
            rounded-full

            bg-gradient-to-r
            from-clay-pink
            via-clay-lavender
            to-clay-sky
          "
          style={{
            width: `${skill.level}%`,
          }}
        />
      </div>

      {/* percent */}
  
    </div>
  );
};

export default SkillCard;