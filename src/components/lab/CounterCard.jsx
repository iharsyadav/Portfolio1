// src/components/lab/CounterCard.jsx

import { useState } from "react";
import LabTile from "./LabTile";

const CounterCard = () => {
  const [count, setCount] = useState(0);

  return (
    <LabTile title="PRESSABLE COUNTER" tone="clay-yellow">

      <div className="grid place-items-center h-full">

        <div className="flex flex-col items-center gap-6">

          <button
            onClick={() => setCount(count + 1)}
            className="
              rounded-full

              bg-white/75

              px-8
              py-4

              text-[1rem]
              font-black

              text-[#24172f]

              shadow-[0_8px_20px_rgba(0,0,0,0.08)]

              active:scale-[0.98]

              transition-all
            "
          >
            Press me
          </button>

          <p
            className="
              text-[1rem]
              font-semibold

              text-black/55
            "
          >
            Pressed{" "}
            <span className="font-black text-[#24172f]">
              {count}
            </span>{" "}
            times
          </p>

        </div>

      </div>

    </LabTile>
  );
};

export default CounterCard;