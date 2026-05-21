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

          bg-white/20
        "
        style={{
          background:
            "radial-gradient(180px circle at var(--x,50%) var(--y,50%), rgba(255,255,255,0.55), transparent 60%)",
        }}
      >

        <div
          className="
            absolute
            inset-0

            grid
            place-items-center

            text-[1.2rem]
            font-black

            text-black/55
          "
        >
          Move your cursor
        </div>

      </div>

    </LabTile>
  );
};

export default SpotlightCard;