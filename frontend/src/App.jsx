import HeroSection from "./assets/HeroSection"
import Navbar from "./assets/Navbar"
import AboutMe from "./assets/AboutME"
import Project from "./assets/Project"
import ContactMe from "./assets/ContactMe"
import Footer from "./assets/Footer"

function App() {
  return (
    <div className="container">
      <Navbar />
      <section id="home">
        <HeroSection />
      </section>
      <section id="about">
        <AboutMe />
      </section>
      <section id="projects">
        <Project />
      </section>
      <section id="contact">
        <ContactMe />
      </section>
      <Footer />
    </div>
  );
}

export default App
