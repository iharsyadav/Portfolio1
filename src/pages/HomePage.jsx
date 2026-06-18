import { lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";

import Hero from "../components/hero/Hero";
import { Navbar } from "../components/layout/Navbar";

const About = lazy(() => import("../components/about/About"));
const Skills = lazy(() => import("../components/skills/Skills"));
const Resume = lazy(() => import("../components/resume/Resume"));
const Projects = lazy(() => import("../components/projects/Projects"));
const Lab = lazy(() => import("../components/lab/Lab"));
const Contact = lazy(() => import("../components/contact/Contact"));

const Home = () => {
  return (
    <>
      {" "}
      <Helmet>
        <title>Harsh Yadav | Frontend Developer</title>

        <meta
          name="description"
          content="Frontend Developer specializing in React, JavaScript, Tailwind CSS, and modern web applications."
        />

        <meta
          name="keywords"
          content="Harsh Yadav, React Developer, Frontend Developer, Portfolio"
        />

        <meta name="robots" content="index, follow" />
      </Helmet>
      <main className="bg-[#f8edf5] overflow-hidden">
        <Navbar />

        <Hero />

        <Suspense fallback={null}>
          <About />
        </Suspense>

        <Suspense fallback={null}>
          <Skills />
        </Suspense>

        <Suspense fallback={null}>
          <Resume />
        </Suspense>

        <Suspense fallback={null}>
          <Projects />
        </Suspense>

        <Suspense fallback={null}>
          <Lab />
        </Suspense>

        <Suspense fallback={null}>
          <Contact />
        </Suspense>
      </main>
    </>
  );
};

export default Home;
