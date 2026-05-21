// src/components/lab/Lab.jsx



import MagneticCard from "./MagneticCard";
import SpotlightCard from "./SpotlightCard";
import LoaderCard from "./LoaderCard";
import CounterCard from "./CounterCard";
import OrbCard from "./OrbCard";
import TiltCard from "./TiltCard";
import SectionHeader from "../common/SectionHeader";

const Lab = () => {
  return (
    <section id="lab" className="py-28">

      <div className="mx-auto max-w-[1320px] px-8">

        <SectionHeader
          eyebrow="UI LAB"
          title="Tiny experiments, big delight"
          subtitle="A playground of hover effects, loaders and motion ideas."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

          <MagneticCard />
          <SpotlightCard />
          <LoaderCard />
          <CounterCard />
          <OrbCard />
          <TiltCard />

        </div>

      </div>

    </section>
  );
};

export default Lab;