// src/components/lab/LabTile.jsx

const LabTile = ({ title, tone, children }) => {
  return (
    <div
      className={`
        ${tone}
        clay

        relative
        overflow-hidden

        h-[295px]

        px-6
        py-6

        border
        border-white/25

        transition-all
        duration-500

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

          h-32
          w-32

          rounded-full

          bg-white/15

          blur-3xl
        "
      />

      <div className="relative z-10 h-full flex flex-col">
        {/* label */}
        <p
          className="
            text-[12px]
            uppercase

            tracking-[0.22em]

            font-black

            text-black/45
          "
        >
          {title}
        </p>

        {/* content */}
        <div className="flex-1 mt-5">
          {children}
        </div>
      </div>
    </div>
  );
};

export default LabTile;