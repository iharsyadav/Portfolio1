// src/components/lab/TiltCard.jsx

import { useRef } from "react";
import LabTile from "./LabTile";

const TiltCard = () => {
  const ref = useRef(null);

  return (
    <LabTile title="3D TILT" tone="clay-peach">
      <div className="grid place-items-center h-full [perspective:900px]">
        <div
          ref={ref}
          onMouseMove={(e) => {
            const el = ref.current;
            const r = el.getBoundingClientRect();

            const x = (e.clientX - r.left) / r.width - 0.5;
            const y = (e.clientY - r.top) / r.height - 0.5;

            el.style.transform = `
              rotateY(${x * 18}deg)
              rotateX(${-y * 18}deg)
              scale(1.03)
            `;
          }}
          onMouseLeave={() => {
            if (ref.current) {
              ref.current.style.transform = "";
            }
          }}
          className="
            clay
            clay-pink

            h-[140px]
            w-[210px]

            grid
            place-items-center

            text-[1.4rem]
            font-black

            tracking-[-0.04em]

            text-[#24172f]

            transition-transform
            duration-200

            will-change-transform
          "
        >
          Tilt me
        </div>
      </div>
    </LabTile>
  );
};

export default TiltCard;