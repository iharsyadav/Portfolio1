// src/components/lab/OrbCard.jsx

import LabTile from "./LabTile";

const OrbCard = () => {
  return (
    <LabTile title="ANIMATED ORB" tone="clay-lavender">

      <div className="grid place-items-center h-full">

        <div
          className="
            h-32
            w-32

            rounded-full

            animate-spin
          "
          style={{
            animationDuration: "10s",
            background:
              "conic-gradient(from 0deg, #f6a7ca, #89cff8, #9ce7c0, #f7df84, #f6a7ca)",
          }}
        />

      </div>

    </LabTile>
  );
};

export default OrbCard;