import { Outlet } from "react-router-dom";
import Sidebar from "../shared/Sidebar";



export default function Admin() {
  return (
    <div className="flex">
      <Sidebar/>
      <div className="flex-1 min-h-screen bg-gray-300 ml-64 ">
        <div className="p-10">
         
        <Outlet/>
        </div>
      </div>
    </div>
  )
}
