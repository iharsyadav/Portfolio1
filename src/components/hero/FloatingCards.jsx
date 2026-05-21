import FloatCard from "./FloatCard";

const FloatingCards = () => {
  return (
    <div className="relative hidden lg:block h-[520px] w-full">

      {/* BIG BLUE SHAPE */}
      <div
        className="
          absolute
          top-[-60px]
          right-[-120px]
          w-[420px]
          h-[420px]
          rounded-full
          bg-[#a0e7ff]
          opacity-45
        "
      />

      {/* PURPLE */}
      <div
        className="
          absolute
          top-[150px]
          left-[70px]
          w-[260px]
          h-[260px]
          rounded-full
          bg-[#cdb4ff]
          opacity-20
        "
      />

      {/* PINK CARD */}
      <FloatCard
        className="
          top-[40px]
          left-[20px]
          w-[210px]
          bg-[#f7b2d4]
          px-6
          py-5
        "
      >
        <p className="text-[10px] uppercase tracking-[0.2em] text-black/45">
          NOW
        </p>

        <h3
          className="
            mt-3
            text-[1rem]
            leading-[1.8]
            font-bold
            text-[#21152b]
          "
        >
          Building UI
          <br />
          at the speed of
          <br />
          thought
        </h3>
      </FloatCard>

      {/* BLUE CARD */}
      <FloatCard
        className="
          top-[150px]
          right-[10px]
          w-[220px]
          bg-[#8fd8ff]
          px-6
          py-5
        "
      >
        <h3
          className="
            text-[2.2rem]
            leading-none
            font-black
            text-[#21152b]
          "
        >
          42+
        </h3>

        <p
          className="
            mt-2
            uppercase
            tracking-[0.18em]
            text-[11px]
            text-black/45
          "
        >
          PROJECTS SHIPPED
        </p>
      </FloatCard>

      {/* YELLOW CARD */}
      <FloatCard
        className="
          bottom-[120px]
          left-[-10px]
          w-[250px]
          bg-[#ffe082]
          px-5
          py-4
        "
      >
        <div className="flex items-center gap-4">

          <div
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              bg-[#ffc09f]
              text-lg
            "
          >
            ⚡
          </div>

          <div>
            <h4
              className="
                text-[1rem]
                leading-[1.3]
                font-bold
                text-[#21152b]
              "
            >
              Lighthouse 98
            </h4>

            <p className="mt-1 text-sm text-black/45">
              Performance budget kept
            </p>
          </div>

        </div>
      </FloatCard>

      {/* GREEN CARD */}
      <FloatCard
        className="
          bottom-[20px]
          right-[50px]
          w-[230px]
          bg-[#9ee7bf]
          px-6
          py-5
        "
      >
        <p
          className="
            text-[10px]
            uppercase
            tracking-[0.18em]
            text-black/45
          "
        >
          CURRENTLY LEARNING
        </p>

        <h3
          className="
            mt-3
            text-[1rem]
            leading-[1.8]
            font-bold
            text-[#21152b]
          "
        >
          Next.js · Three.js
        </h3>
      </FloatCard>

    </div>
  );
};

export default FloatingCards;