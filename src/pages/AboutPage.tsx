import Company from "../components/about/Company";
import StoreLocation from "../components/about/StoreLocation";
import Team from "../components/about/Team";
import Contact from "../components/ui/Contact";

export default function AboutPage() {
  return (
    <div className="container mx-auto">
    {/* <About/> */}
    <Company/>
    <Team/>
    <StoreLocation/>
    <Contact/>
    </div>
  )
}
