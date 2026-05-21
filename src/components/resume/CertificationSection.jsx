// src/components/resume/CertificationSection.jsx

import { certs } from "./resumeData";

const CertificationSection = () => {
  return (
    <div
      className="
        clay-yellow

        col-span-12
        lg:col-span-4

        rounded-[38px]

        p-9

        shadow-[0_18px_40px_rgba(215,205,230,0.35)]
      "
    >
      <h3
        className="
          text-[2rem]

          font-black

          tracking-[-0.04em]

          text-[#23163a]
        "
      >
        Certifications
      </h3>

      <div className="mt-7 space-y-4">
        {certs.map((item) => (
          <div
            key={item}
            className="
              flex
              items-center
              gap-3

              rounded-[22px]

              bg-white/45

              px-5
              py-4

              border
              border-white/35
            "
          >
            <div
              className="
                h-3
                w-3

                rounded-full

                bg-[#91dfb1]
              "
            />

            <p
              className="
                text-[1rem]

                font-bold

                text-[#23163a]
              "
            >
              {item}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificationSection;