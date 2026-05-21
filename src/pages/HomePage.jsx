import About from "../components/about/About";
import Contact from "../components/contact/Contact";
import Hero from "../components/hero/Hero";
import Lab from "../components/lab/Lab";
import { Navbar } from "../components/layout/Navbar";
import Projects from "../components/projects/Projects";
import Resume from "../components/Resume/Resume";
import Skills from "../components/skills/Skills";




const Home = () => {
  return (
    <main className="bg-[#f8edf5] overflow-hidden">
      <Navbar />
      <Hero/>
      <About/>
      <Skills/>
      <Resume/>
      <Projects/>
      <Lab/>
      <Contact/>
    </main>
  );
};

export default Home;