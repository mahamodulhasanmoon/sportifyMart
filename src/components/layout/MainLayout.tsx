import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import Breadcrumb from "../ui/BreadCumb";
import MobileNav from "../shared/MobileNav";

export default function MainLayout() {
  return (
    <>
    <Navbar/>
    <MobileNav/>
    <main className="min-h-screen">
        <Breadcrumb/>

    <Outlet/>

    </main>
 
    <Footer/>
    </>
  )
}
