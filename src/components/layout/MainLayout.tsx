import { Outlet } from "react-router-dom";
import MobileNav from "../shared/MobileNav";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

export default function MainLayout() {
  return (
    <>
    <Navbar/>
    <MobileNav/>
    <main className="min-h-screen">

    <Outlet/>

    </main>
 
    <Footer/>
    </>
  )
}
