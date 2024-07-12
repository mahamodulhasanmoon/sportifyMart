import Heading from "../ui/Heading";
import map from '../../assets/map.png'


export default function StoreLocation() {


  return (
    <div className="container mx-auto my-20">
        <Heading
  title="Our Store Locations"
  subtitle="Find us at convenient locations to serve you better."
/>

<div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-between">
        {/* Left Side (Static Map Section) */}
        <div className=" pr-4">
         
            <div  className="mb-4">
              <img src={map} alt={`Map of`} className="rounded-lg " />
            </div>
      
        </div>

        {/* Right Side (Content Section) */}
        <div >
          <div className=" p-6 rounded-lg ">
            <h2 className="text-xl font-bold text-primaryColor mb-4">Store Locations</h2>
        
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-textColor-heading"></h3>
                <div className="mb-4">
              <p className="text-lg text-gray-700 mb-2"> SportifyMart Store A is located in the heart of Cityville, offering a wide selection of sports equipment and apparel for enthusiasts of all levels.</p>
              <p className="text-lg font-semibold text-textColor-paragraph">Contact: +1 123 456 7890</p>
              <p className="text-lg font-semibold text-textColor-paragraph">Address: 123 Main St, Cityville</p>
            </div>
              </div>
        
          </div>
        </div>
      </div>

    </div>
  )
}
