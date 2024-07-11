import Footer from "./components/shared/Footer"
import MobileNav from "./components/shared/MobileNav"
import Navbar from "./components/shared/Navbar"
import HeroSection from "./components/ui/HeroSection"

function App() {

  return (
    <div className="bg-backgroundColor">
 <Navbar/>
 <MobileNav/>
 <HeroSection/>
 <div className="min-h-screen flex items-center justify-center"> hello</div>
 <Footer/>
    </div>
  )
}

export default App
