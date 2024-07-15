import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to='/' className={`flex items-center justify-center h-12  text-white font-bold text-2xl  rounded-md`}>
      <span>Sportify</span>
      <span className="text-accentColor">Mart</span>
    </Link>

  )
}
