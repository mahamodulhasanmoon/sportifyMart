import  {  useState } from "react";

// react icons
import { RiMenu3Line } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
import Logo from "../ui/Logo";
import { Link } from "react-router-dom";
import { navItems } from "../../constants/navitem";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);



  return (
    <div className=" text-white ">
      <nav
        className="backdrop-blur-lg bg-primaryColor shadow-md
         sticky top-0 left-0 w-full max-w-full  mx-auto px-6 py-4 flex items-center justify-between gap-5 md:hidden"
      >
       <Logo/>

        <RiMenu3Line
          className="text-[1.5rem] text-textColor"
          onClick={() => setIsOpen(true)}
        />
      </nav>
      <ul
        className={`${
          isOpen
            ? " translate-x-0 opacity-100"
            : " translate-x-[400px] opacity-0"
        } transition-all duration-300 flex items-center gap-8 font-[500] flex-col fixed top-0 right-0 h-screen overflow-y-scroll w-[70%] max-w-[250px] bg-primaryColor overflow-hidden text-white z-50`}
      >
        <div className="flex z-50 items-end justify-end p-6 w-full">
          <RxCross1
            className="text-[1.2rem]"
            onClick={() => setIsOpen(false)}
          />
        </div>
        {
          navItems.map(({label,path},i)=>(
            <li key={i}>
            <Link to={path}>{label}</Link>
          </li>
          ))
        }




        <button className="py-2 px-6 bg-secondaryColor rounded-md text-[#fff]">
          Dashboard
        </button>
      </ul>
    </div>
  );
};

export default MobileNav;
