// src/components/lab/SpotlightCard.jsx

import { useRef } from "react";
import LabTile from "./LabTile";

const SpotlightCard = () => {
  const ref = useRef(null);

  return (
    <LabTile title="SPOTLIGHT SURFACE" tone="clay-sky">
      <div
        ref={ref}
        onMouseMove={(e) => {
          const el = ref.current;
          const r = el.getBoundingClientRect();

          el.style.setProperty("--x", `${e.clientX - r.left}px`);
          el.style.setProperty("--y", `${e.clientY - r.top}px`);
        }}
        className="
          relative
          overflow-hidden

          h-full

          rounded-[28px]

          bg-[#b8e3ff]/35
          backdrop-blur-xl

          border
          border-white/20
        "
      >
        {/* spotlight */}
        <div
          className="
            absolute
            inset-0
            pointer-events-none
          "
          style={{
            background: `
              radial-gradient(
                220px circle at var(--x,50%) var(--y,50%),
                rgba(255,80,120,0.45),
                rgba(255,120,180,0.18) 28%,
                transparent 65%
              )
            `,
          }}
        />

        {/* soft glow */}
        <div
          className="
            absolute
            inset-0

            bg-white/10
            backdrop-blur-[2px]
          "
        />

        {/* text */}
        <div
          className="
            absolute
            inset-0

            grid
            place-items-center

            text-[1.15rem]
            font-black

            text-[#2d2450]
          "
        >
          Move your cursor
        </div>
      </div>
    </LabTile>
  );
};

export default SpotlightCard;