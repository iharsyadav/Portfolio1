const timeline = [
  {
    year: "2022",
    title: "Hello, HTML & CSS",
    body: "First static sites, fell in love with the cascade.",
  },
  {
    year: "2023",
    title: "JavaScript & React",
    body: "From DOM to components, hooks, and state.",
  },
  {
    year: "2024",
    title: "Tailwind & Motion",
    body: "Design systems, framer-motion, real product UI.",
  },
  {
    year: "2025",
    title: "Shipping & Polish",
    body: "Freelance projects, performance, accessibility.",
  },
];

const JourneyTimeline = () => {
  return (
    <div
      className="
        rounded-[36px]
        bg-white/55
        p-8
        shadow-[0_10px_30px_rgba(0,0,0,0.04)]
      "
    >

      <h3 className="text-3xl font-black text-[#21152b]">
        My journey so far
      </h3>

      <div className="mt-8 space-y-6 border-l border-black/10 pl-6">

        {timeline.map((t) => (
          <div key={t.year} className="relative">

            <div
              className="
                absolute
                -left-[31px]
                top-1
                h-4
                w-4
                rounded-full
                bg-pink-300
              "
            />

            <p className="text-xs font-bold tracking-[0.25em] text-pink-400">
              {t.year}
            </p>

            <h4 className="mt-1 text-lg font-bold text-[#21152b]">
              {t.title}
            </h4>

            <p className="mt-1 text-black/55">
              {t.body}
            </p>

          </div>
        ))}

      </div>

    </div>
  );
};

export default JourneyTimeline;