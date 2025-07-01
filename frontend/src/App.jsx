import HeroSection from "./assets/HeroSection"
import Navbar from "./assets/Navbar"
import AboutMe from "./assets/AboutME"
import Project from "./assets/Project"

function App() {

  return (
    <div className="container">
      <Navbar/>
      <HeroSection />
      <AboutMe />
      <Project />
    </div>
  )
}

export default App
