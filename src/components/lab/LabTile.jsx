// src/components/lab/LabTile.jsx

const LabTile = ({ title, tone, children }) => {
  return (
    <div
      className={`
        ${tone}

        relative
        overflow-hidden

        rounded-[36px]

        h-[330px]

        px-8
        py-7

        border
        border-white/20

        shadow-[0_15px_40px_rgba(210,190,230,0.18)]
      `}
    >

      {/* overlay */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-br
          from-white/10
          to-transparent
          pointer-events-none
        "
      />

      <div className="relative z-10 h-full flex flex-col">

        <p
          className="
            text-[12px]
            uppercase
            tracking-[0.24em]
            font-black
            text-black/45
          "
        >
          {title}
        </p>

        <div className="flex-1 mt-6">
          {children}
        </div>

      </div>

    </div>
  );
};

export default LabTile;