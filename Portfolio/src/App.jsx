import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header"
import Home from "./components/Home";
import Project from "./components/Projects";
import Resume from "./components/Resume";
import Skills from "./components/Skills";
import Certification from "./components/Certification";
function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Skills />
      <Project />
      <Certification />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;