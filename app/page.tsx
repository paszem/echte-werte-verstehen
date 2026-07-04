import About from "./components/About";
import Calculator from "./components/Calculator";
import Contact from "./components/Contact";
import Discover from "./components/Discover";
import Intro from "./components/Intro";
import GoldKnowledge from "./components/GoldKnowledge";
import ConceptFlow from "./components/ConceptFlow";
import FAQ from "./components/FAQ";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Navbar from "./components/Navbar";
import Principle from "./components/Principle";
import Stats from "./components/Stats";
import Why from "./components/Why";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#040404] text-white">
      <Navbar />
      <Hero />
      <Intro />
      <Why />
      <GoldKnowledge />
      <Principle />
      <ConceptFlow />
      <Discover />
      <Calculator />
      <Stats />
      <FAQ />
      <About />
      <Contact />
    </main>
  );
}