import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Header from "./components/Header"
import Home from "./Components/Home";
import Project from "./components/Projects";
import Resume from "./Components/Resume";
import Skills from "./Components/Skills";
import Certification from "./Components/Certification";
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