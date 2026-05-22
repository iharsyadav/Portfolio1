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
        mt-12
        grid
        grid-cols-1
        md:grid-cols-2
        xl:grid-cols-3
        gap-6
      "
    >
      {cards.map((c, i) => (
        <div
          key={c.title}
          className={`
            ${c.tone}
            clay

            relative
            overflow-hidden

            min-h-[210px]

            px-7
            pt-7
            pb-7

            border
            border-white/30

            transition-all
            duration-500

            hover:-translate-y-2
            hover:scale-[1.02]
          `}
          style={{
            animationDelay: `${i * 120}ms`,
          }}
        >
          {/* glow */}
          <div
            className="
              absolute
              inset-0
              bg-[linear-gradient(135deg,rgba(255,255,255,0.22),transparent_45%)]
              pointer-events-none
            "
          />

          {/* blur */}
          <div
            className="
              absolute
              -top-10
              -right-10

              h-28
              w-28

              rounded-full
              bg-white/20
              blur-3xl
            "
          />

          {/* icon */}
          <div
            className="
              clay-sm

              flex
              items-center
              justify-center

              h-[62px]
              w-[62px]

              rounded-full

              text-[26px]

              animate-float
            "
          >
            {c.icon}
          </div>

          {/* title */}
          <h3
            className="
              mt-6

              text-[32px]
              leading-none

              font-black

              tracking-[-0.05em]

              text-foreground
            "
          >
            {c.title}
          </h3>

          {/* body */}
          <p
            className="
              mt-4

              max-w-[26ch]

              text-[15px]
              leading-[1.55]

              font-medium

              text-muted-foreground
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