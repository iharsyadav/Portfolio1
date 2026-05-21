// src/components/about/About.jsx

import SectionHeader from "./SectionHeader";
import AboutCards from "./AboutCards";
import JourneyTimeline from "./JourneyTimeline";
import StatsGrid from "./StatsGrid";

const About = () => {
  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden

        py-28
      "
    >

      {/* background glow */}
      <div
        className="
          absolute
          inset-0

          bg-[radial-gradient(circle_at_top_left,rgba(255,192,203,0.12),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(160,231,255,0.12),transparent_35%)]

          pointer-events-none
        "
      />

      <div className="relative mx-auto max-w-[1450px] px-10">

        <SectionHeader
          eyebrow="ABOUT"
          title="A frontend developer who treats UI like craft"
          subtitle="I like making interfaces feel tactile, alive, and effortless."
        />

        <AboutCards />

        <div
          className="
            mt-8

            grid
            gap-5

            lg:grid-cols-[1.15fr_0.85fr]
          "
        >

          <JourneyTimeline />

          <StatsGrid />

        </div>

      </div>

    </section>
  );
};

export default About;