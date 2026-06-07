import './App.css'

import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import StatsBar from './Components/StatsBar'
import About from './Components/About'
import GameModeCard from './Components/GameModeCard'
import FeatureCards from './Components/FeatureCards'
import Services from './Components/Services'
const navlinks = ["About Us", "Services","Events", "Coaches", "Contacts"]

const stats = [
  { number: "12,000+", label: "Hours of play annually" },
  { number: "89%", label: "Player Retention Rate" },
   { number: "1,200+", label: "Active Members" },
    { number: "125+", label: "Annual tournaments" },
]

function App() {
  return(
    <div>
      <Navbar links={navlinks}/>
      <div className="hero-wrapper">
  <Hero />
</div>
      <StatsBar stats={stats} />
      <About />
      <FeatureCards />
      <Services />
    </div>
   
  )
}

export default App
