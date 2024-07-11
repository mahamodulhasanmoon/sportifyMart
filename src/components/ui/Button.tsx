import { IButtonProps } from "../../interfaces/IButonProps";



export default function Button({children}:IButtonProps) {
  return (
    <button className="bg-secondaryColor hover:bg-accentColor hover:text-textColor-paragraph text-white py-3 px-8 rounded-full uppercase text-lg font-semibold shadow-md transition duration-300">
   {children}
  </button>
  )
}


export  function ActionButton({children}:IButtonProps) {
  return (
    <button className="py-2 px-6 bg--700 rounded-md bg-secondaryColor  hover:text-textColor-paragraph hover:bg-accentColor text-[#fff]">
   {children}
  </button>
  )
}


