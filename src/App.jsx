import { BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Skills from "./Pages/Skills";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";
import Experience from "./Pages/Experience";
import Footer from "./Components/Footer";
import ScrollTop from "./Components/ScrollTop";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Home />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <ScrollTop />
    </BrowserRouter>
  );
};

export default App;
