// src/components/lab/LoaderCard.jsx

import LabTile from "./LabTile";

const LoaderCard = () => {
  return (
    <LabTile title="SQUISHY LOADER" tone="clay-mint">
      <div className="grid place-items-center h-full">
        <div className="flex flex-col items-center gap-8">
          
          {/* dots */}
          <div className="flex items-center gap-4">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="
                  h-5
                  w-5

                  rounded-full

                  bg-clay-pink

                  animate-bounce

                  shadow-[0_6px_16px_rgba(244,166,203,0.35)]
                "
                style={{
                  animationDelay: `${i * 0.12}s`,
                }}
              />
            ))}
          </div>

          {/* text */}
          <p
            className="
              text-[15px]

              font-bold

              tracking-[-0.02em]

              text-muted-foreground
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