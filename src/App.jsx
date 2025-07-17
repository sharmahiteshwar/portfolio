import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Achievements from "./components/Achievements";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
// import ScrollProgress from "./components/Scrollprogress";
import Education from "./components/Education";
import FloatingActions from "./components/FloatingActions";



const App = () => {
  return (
    <>
    {/* <ScrollProgress /> */}
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth bg-[#0f0f11]">
      <FloatingActions />

      {/* <Sidebar /> */}
      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section className="snap-start">
        <div className="grid md:grid-cols-2 gap-16 px-6 md:px-20 py-24">
          <About />
          <Skills />
        </div>
      </section>

      <section className="snap-start">
        <div className="grid md:grid-cols-2 gap-16 px-6 md:px-20 py-24">
          <Projects />
          <Experience />
        </div>
      </section>

      <section className="snap-start">
        <div className="grid md:grid-cols-2 gap-16 px-6 md:px-20 py-24">
          <Certifications />
          <Achievements />
          <Education />
        </div>
      </section>

      {/* <section className="snap-start px-6 md:px-20 py-24">
        <Testimonials />
      </section> */}

      <section className="snap-start px-6 md:px-20 py-24">
        <Contact />
      </section>

      <section className="snap-end">
        <Footer />
      </section>
    </div>
    </>
  );
};

export default App;
