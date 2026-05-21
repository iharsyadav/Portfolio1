// src/components/lab/MagneticCard.jsx

import { useRef } from "react";
import LabTile from "./LabTile";

const MagneticCard = () => {
  const ref = useRef(null);

  return (
    <LabTile title="MAGNETIC BUTTON" tone="clay-pink">

      <div className="grid place-items-center h-full">

        <button
          ref={ref}
          onMouseMove={(e) => {
            const el = ref.current;
            const r = el.getBoundingClientRect();

            el.style.transform = `
              translate(
                ${(e.clientX - r.left - r.width / 2) / 4}px,
                ${(e.clientY - r.top - r.height / 2) / 4}px
              )
            `;
          }}
          onMouseLeave={() => {
            if (ref.current) {
              ref.current.style.transform = "";
            }
          }}
          className="
            rounded-full

            bg-white/75

            px-8
            py-4

            text-[1rem]
            font-black

            text-[#24172f]

            shadow-[0_8px_20px_rgba(0,0,0,0.08)]

            transition-all
          "
        >
          Hover me ✨
        </button>

      </div>

    </LabTile>
  );
};

export default MagneticCard;