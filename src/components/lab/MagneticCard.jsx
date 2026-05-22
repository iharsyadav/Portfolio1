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
                ${(e.clientX - r.left - r.width / 2) / 5}px,
                ${(e.clientY - r.top - r.height / 2) / 5}px
              )
            `;
          }}
          onMouseLeave={() => {
            if (ref.current) {
              ref.current.style.transform = "";
            }
          }}
          className="
            clay-sm
            clay-mint

            rounded-full

            px-8
            py-4

            text-[1.15rem]
            font-black

            text-[#24172f]

            transition-all
            duration-300

            hover:scale-105
          "
        >
          Hover me ✨
        </button>
      </div>
    </LabTile>
  );
};

export default MagneticCard;