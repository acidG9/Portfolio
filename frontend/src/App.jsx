import HeroSection from "./assets/HeroSection"
import Navbar from "./assets/Navbar"
import AboutMe from "./assets/AboutME"
import Project from "./assets/Project"
import ContactMe from "./assets/ContactMe"
import Footer from "./assets/Footer"

function App() {

  return (
    <div className="container">
      <Navbar/>
      <HeroSection />
      <AboutMe />
      <Project />
      <ContactMe />
      <Footer />
    </div>
  )
}

export default App
