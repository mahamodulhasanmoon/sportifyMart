import { useGetProductsQuery } from "../../../../redux/Features/products/productApi";

export default function ProductTable() {
    const {data} = useGetProductsQuery(undefined)
    return (
        <div className=" py-12">
            {/* Desktop Responsive Start */}
            <div className="
             flex flex-col justify-start items-start">
                <div className="flex items-center justify-between w-full">
                <div className="pl-4 lg:px-10 2xl:px-20 flex flex-row justify-center items-end space-x-4">
                    <h1 className="text-4xl font-semibold leading-9 text-gray-800">All Products</h1>
                    <p className="text-base leading-4 text-gray-600 pb-1">(12 Items)</p>
                </div>
                <div>
                    <button className="py-2 px-6 mx-3 bg--700 rounded-md bg-secondaryColor  hover:text-textColor-paragraph hover:bg-accentColor text-[#fff]">Add New Product</button>
                </div>
                </div>
                <table className="w-full mt-16 whitespace-nowrap">
                    <thead aria-label="table heading" className="w-full h-16 text-left py-6 bg-gray-50 border-gray-200 border-b ">
                       
                        <tr>
                            <th className="text-base font-medium leading-4 text-center text-gray-600 ">Thumbnail</th>
                            <th className="text-base font-medium leading-4 text-center text-gray-600 ">Product Name</th>
                            <th className="text-base font-medium leading-4 text-center text-gray-600 ">PRICE</th>
                            <th className="text-base font-medium leading-4 text-center text-gray-600 ">category</th>
                            <th className="text-base font-medium leading-4 text-center text-gray-600 ">

                                action
                            </th>
                        </tr>
                    </thead>
                    <tbody className="w-full text-left">

                        {
                            data?.map(({_id,name,thumbnail,price,category})=>(
<tr key={_id} className="border-gray-200 border-b  ">
                            <th className="text-center flex justify-center mx-auto">
                                <img className="my-5 h-24 " src={thumbnail} alt="shoe" />
                            </th>
                            <th className="m-5 text-base text-center font-medium leading-4 text-gray-600 ">
                                <p className=" text-base leading-4 text-gray-800">{name}</p>
                            </th>
                            <th className="m-5 base text-center text-base font-bold leading-4 text-gray-600 ">
                                <p >${price}</p>
                            </th>
                            <th className="m-5 base text-center text-base font-medium leading-4 text-gray-600 ">
                                {category}
                            </th>
                            <th className="my-10 pl-4 base text-center lg:pl-12  2xl:pl-28 pr-4 2xl:pr-20">
                                <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-800 text-base leading-none text-red-600 hover:text-red-800">
                                    <div>
                                        <button className="py-2 px-6 mx-3 bg--700 rounded-md bg-secondaryColor  hover:text-textColor-paragraph hover:bg-accentColor text-[#fff]">
                                            Edit
                                        </button>
                                        <button className="py-2 px-6 bg--700 rounded-md bg-red-500  hover:text-textColor-paragraph hover:bg-accentColor text-[#fff]">
                                            delete
                                        </button>
                                    </div>
                                </button>
                            </th>
                        </tr>
                            ))
                        }
                        


                    </tbody>
                </table>
            </div>

        </div>
    );
}
