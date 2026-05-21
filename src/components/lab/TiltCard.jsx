// src/components/lab/TiltCard.jsx

import { useRef } from "react";
import LabTile from "./LabTile";

const TiltCard = () => {
  const ref = useRef(null);

  return (
    <LabTile title="3D TILT" tone="clay-peach">

      <div className="grid place-items-center h-full [perspective:700px]">

        <div
          ref={ref}
          onMouseMove={(e) => {
            const el = ref.current;
            const r = el.getBoundingClientRect();

            const x = (e.clientX - r.left) / r.width - 0.5;
            const y = (e.clientY - r.top) / r.height - 0.5;

            el.style.transform = `
              rotateY(${x * 22}deg)
              rotateX(${-y * 22}deg)
            `;
          }}
          onMouseLeave={() => {
            if (ref.current) {
              ref.current.style.transform = "";
            }
          }}
          className="
            h-[140px]
            w-[210px]

            rounded-[28px]

            bg-white/30

            grid
            place-items-center

            text-[1.3rem]
            font-black

            text-[#24172f]

            shadow-[0_15px_30px_rgba(0,0,0,0.08)]

            transition-transform
            duration-200
          "
        >
          Tilt me
        </div>

      </div>

    </LabTile>
  );
};

export default TiltCard;