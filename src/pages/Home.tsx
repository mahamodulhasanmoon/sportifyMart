import Category from "../components/ui/Category";
import Contact from "../components/ui/Contact";
import FeaturedSection from "../components/ui/FeatureSection";
import HeroSection from "../components/ui/HeroSection";

export default function Home() {
  return (
    <div>
        <HeroSection/>
        <Category/>
        <FeaturedSection/>
        <Contact/>
    </div>
  )
}
