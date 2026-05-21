// src/components/resume/Resume.jsx

import ResumeHeader from "./ResumeHeader";
import ExperienceSection from "./ExperienceSection";
import EducationSection from "./EducationSection";
import AchievementSection from "./AchievementSection";
import CertificationSection from "./CertificationSection";
import ResumeCTA from "./ResumeCTA";

const Resume = () => {
  return (
    <section
      id="resume"
      className="
        relative
        overflow-hidden
        py-32
      "
    >
      {/* BACKGROUND BLOBS */}
      <div
        className="
          absolute
          top-20
          left-[-180px]

          h-[520px]
          w-[520px]

          rounded-full

          bg-[#ffd7e7]

          opacity-35

          blur-3xl
        "
      />

      <div
        className="
          absolute
          bottom-0
          right-[-200px]

          h-[620px]
          w-[620px]

          rounded-full

          bg-[#cfe9ff]

          opacity-40

          blur-3xl
        "
      />

      <div className="relative mx-auto max-w-[1320px] px-8">
        <ResumeHeader />

        <div className="mt-20 grid grid-cols-12 gap-6">
          <ExperienceSection />

          <EducationSection />

          <AchievementSection />

          <CertificationSection />

          <ResumeCTA />
        </div>
      </div>
    </section>
  );
};

export default Resume;