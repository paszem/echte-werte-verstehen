import About from "./components/About";
import Calculator from "./components/Calculator";
import Contact from "./components/Contact";
import Discover from "./components/Discover";
import GoldKnowledge from "./components/GoldKnowledge";
import FAQ from "./components/FAQ";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Stats from "./components/Stats";
import Intro from "./components/Intro";
import Recommendation from "./components/Recommendation";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#040404] text-white">
      <Navbar />
      <Hero />
      <Intro />
      <GoldKnowledge />
      <Discover />
      <Calculator />
      <Stats />
      <FAQ />
      <About />
      <Recommendation />
      <Contact />
    </main>
  );
}