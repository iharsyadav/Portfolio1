// src/components/lab/LoaderCard.jsx

import LabTile from "./LabTile";

const LoaderCard = () => {
  return (
    <LabTile title="SQUISHY LOADER" tone="clay-mint">

      <div className="grid place-items-center h-full">

        <div className="flex flex-col items-center gap-6">

          <div className="flex gap-3">

            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="
                  h-5
                  w-5

                  rounded-full

                  bg-[#f4a6cb]

                  animate-bounce
                "
                style={{
                  animationDelay: `${i * 0.12}s`,
                }}
              />
            ))}

          </div>

          <p
            className="
              text-[0.95rem]
              font-bold

              text-black/50
            "
          >
            Loading delight...
          </p>

        </div>

      </div>

    </LabTile>
  );
};

export default LoaderCard;