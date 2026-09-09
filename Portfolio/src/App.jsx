import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Project from "./components/Projects";
import Resume from "./components/Resume";
import Skills from "./components/Skills";
import Certification from "./components/Certification";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Experience />
      <Skills />
      <Project />
      <Certification />
      <Resume />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
