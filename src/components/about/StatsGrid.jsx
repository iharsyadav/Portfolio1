const stats = [
  { n: "20+", l: "Projects" },
  { n: "2yr", l: "Coding" },
  { n: "15+", l: "Technologies" },
  { n: "95", l: "Avg Lighthouse" },
];

const StatsGrid = () => {
  return (
    <div className="grid grid-cols-2 gap-5">

      {stats.map((s, i) => (
        <div
          key={s.l}
          className={`
            rounded-[30px]
            p-7
            shadow-[0_10px_30px_rgba(0,0,0,0.04)]

            ${i === 0 && "clay-pink"}
            ${i === 1 && "clay-lavender"}
            ${i === 2 && "clay-sky"}
            ${i === 3 && "clay-mint"}
          `}
        >

          <p
            className="
              text-[3rem]
              font-black
              leading-none
              tracking-[-0.05em]
              text-[#21152b]
            "
          >
            {s.n}
          </p>

          <p
            className="
              mt-2
              text-xs
              uppercase
              tracking-[0.22em]
              text-black/45
            "
          >
            {s.l}
          </p>

        </div>
      ))}

      <div
        className="
          clay-lavender
          col-span-2
          rounded-[34px]
          p-8
          shadow-[0_10px_30px_rgba(0,0,0,0.04)]
        "
      >

        <p
          className="
            text-xs
            uppercase
            tracking-[0.22em]
            text-black/45
          "
        >
          Philosophy
        </p>

        <p
          className="
            mt-4
            text-[1.5rem]
            font-bold
            leading-[1.5]
            text-[#21152b]
          "
        >
          "Ship small things often.
          Sweat the empty states.
          Animation is communication."
        </p>

      </div>

    </div>
  );
};

export default StatsGrid;