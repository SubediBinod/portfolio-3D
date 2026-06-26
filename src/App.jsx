import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Tech from "./components/Tech";
import Works from "./components/Works";
import Contact from "./components/Contact";
import { StarsCanvas, LazyMount } from "./components/canvas";
import HireMe from "./components/HireMe";
import Collaborate from "./components/Collaborate";
import Certificates from "./components/Certificates";
import Blog from "./components/Blog.jsx";
import ServicesPage from "./components/ServicesPage";

const MainContent = () => (
  <>
    <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
      <Hero />
    </div>
    <About />
    <Experience />
    <Tech />
    <Works />
    <Certificates />
    <Blog />
    <div className="relative z-0">
      <Contact />
      <LazyMount>
        <StarsCanvas />
      </LazyMount>
    </div>
  </>
);

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <Navbar />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/services" element={<ServicesPage />} />
        </Routes>
        <HireMe />
        <Collaborate />
      </div>
    </BrowserRouter>
  );
};

export default App;
