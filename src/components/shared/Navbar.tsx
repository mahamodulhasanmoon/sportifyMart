import  { useEffect, useState } from "react";
import { BsCart2 } from "react-icons/bs";

import Logo from "../ui/Logo";
import { ActionButton } from "../ui/Button";
import { Link } from "react-router-dom";
import { navItems } from "../../constants/navitem";
import {  useAppSelector } from "../../redux/hook";

const Navbar = () => {
  const {cart} = useAppSelector(state => state.product)

  // useBeforeload()

  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${
        scrolling && "backdrop-blur-lg shadow-md "
      } sticky top-0  left-0 w-full  bg-primaryColor mx-auto px-6 py-4 items-center justify-between gap-5 z-30 hidden md:flex `}
    >
      {/* <img src="/logo.png" alt="logo" className="w-[130px]" /> */}

<Logo/>
      <ul className="flex items-center gap-12 font-[500] text-white z-30">
        {
          navItems.map(({label,path},i)=>(
            <li key={i}>
            <Link to={path}>{label}</Link>
          </li>
          ))
        }
       <Link className="relative" to='/cart'>
      <BsCart2 size={30} color="white"/>
      <span style={{lineHeight:'25px'}} className=" w-6 h-6  text-center line-clamp-1 inline-block rounded-full bg-accentColor text-black absolute top-[-14px] right-[-16px]">{cart.length}</span>
       </Link>

     <Link to={'/dashboard'}><ActionButton>Dashboard</ActionButton></Link>
      </ul>

    </nav>
  );
};

export default Navbar;
