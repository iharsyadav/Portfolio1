// src/components/about/AboutCards.jsx

const cards = [
  {
    tone: "clay-pink",
    icon: "🎨",
    title: "Clean UI",
    body: "Composition, hierarchy, breathing room — interfaces that feel obvious.",
  },
  {
    tone: "clay-sky",
    icon: "📱",
    title: "Responsive",
    body: "Fluid grids, container queries, and layouts that survive every device.",
  },
  {
    tone: "clay-mint",
    icon: "🌀",
    title: "Animation",
    body: "Motion with intent — Framer Motion & GSAP, never gratuitous.",
  },
  {
    tone: "clay-yellow",
    icon: "🧩",
    title: "Components",
    body: "Composable, accessible primitives backed by a real design system.",
  },
  {
    tone: "clay-lavender",
    icon: "🚀",
    title: "Performance",
    body: "Lazy boundaries, image budgets, and zero jank on slow networks.",
  },
  {
    tone: "clay-peach",
    icon: "🧪",
    title: "Curiosity",
    body: "Side projects, UI labs, and 'what if I tried…' afternoons.",
  },
];

const AboutCards = () => {
  return (
    <div
      className="
        mt-14

        grid
        grid-cols-1
        md:grid-cols-2
        xl:grid-cols-3

        gap-[28px]
      "
    >
      {cards.map((c) => (
        <div
          key={c.title}
          className={`
            ${c.tone}

            relative
            overflow-hidden

            rounded-[36px]

            h-[252px]

            px-[36px]
            pt-[34px]

            shadow-[0_18px_50px_rgba(215,205,225,0.42)]

            border
            border-white/30
          `}
        >
          {/* soft gloss */}
          <div
            className="
              absolute
              inset-0

              bg-[linear-gradient(135deg,rgba(255,255,255,0.12),transparent_45%)]

              pointer-events-none
            "
          />

          {/* icon */}
          <div
            className="
              flex
              items-center
              justify-center

              h-[70px]
              w-[70px]

              rounded-full

              bg-[#f6edf4]

              text-[32px]

              shadow-[0_8px_20px_rgba(255,255,255,0.45)]
            "
          >
            {c.icon}
          </div>

          {/* title */}
          <h3
            className="
              mt-[26px]

              text-[28px]
              leading-none

              font-black

              tracking-[-0.05em]

              text-[#1f1430]
            "
          >
            {c.title}
          </h3>

          {/* body */}
          <p
            className="
              mt-[16px]

              max-w-[28ch]

              text-[16px]
              leading-[1.45]

              font-medium

              text-black/48
            "
          >
            {c.body}
          </p>
        </div>
      ))}
    </div>
  );
};

export default AboutCards;