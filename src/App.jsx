import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Tech from "./components/Tech";
import Works from "./components/Works";
import Contact from "./components/Contact";
import { StarsCanvas } from "./components/canvas";
import HireMe from "./components/HireMe";
import Certificates from "./components/Certificates";
import {TagSphereBackground } from "./components/canvas";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <TagSphereBackground /> 
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Certificates />
        <div className="relative z-0">
          <Contact />
          { <StarsCanvas /> }
        </div>
        <HireMe />
      </div>
    </BrowserRouter>
  );
};

export default App;
