import { Link } from "react-router-dom";
import { useAppSelector } from "../redux/hook";
import CheckoutForm from "./CheckoutForm";

const Checkout = () => {
    const {cart} = useAppSelector(state=>state.product)
    const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
    const  discount = 0.00
    const  shippingCharge = cart.length > 0 ? 2.00 : 0.00
   const vatAmount = totalPrice * 0.15;
    return (
        <div className="lg:container lg:mx-auto grid grid-cols-9 lg:grid-cols-12">
            <div className="col-span-9 lg:col-span-8 xl:col-span-7 bg-white h-auto lg:h-screen relative lg:px-10 p-6 lg:py-12">
              
                <h3 className="font-semibold text-gray-800 text-4xl mt-2">Checkout</h3>

                <div className="mt-7 lg:mt-20">
                    <p className="font-normal text-sm text-gray-600 mb-3">Your details</p>
                    <h3 className="text-2xl text-gray-800 font-medium">Enter your details</h3>

                </div>
                <CheckoutForm/>

  
            </div>
            <div className="relative col-span-9 lg:col-span-4 xl:col-span-5 bg-gray-100 lg:h-auto xl:min-h-screen px-8 py-14 xl:px-12 xl:py-20">
                <div className="flex flex-1">
                    <h3 className="text-gray-800 font-semibold text-2xl">Items</h3>
                    <div className="flex-auto"></div>
                    <Link to='/cart' className="text-gray-600 hover:text-gray-800 cursor-pointer text-base font-normal underline">Edit Cart</Link>
                </div>

{
    cart?.map(({name,quantity,price} ,i)=> (
        <div key={i}  className="mt-7 flex flex-1 text-gray-800 text-lg font-normal">
                    <h3>{name}</h3>
                    <h3 className="flex-auto text-right pr-4 md:pr-5 lg:pr-4">{quantity} x</h3>
                    <h3>${price * quantity}</h3>
                </div>
    ))
}
                

               

                
                <div className="-bottom-7 px-8 xl:px-12 pb-5 md:-bottom-96 bg-gray-100 md:pt-80 md:pb-10 lg:pb-10 lg:pt-0 lg:mt-0 lg:bottom-0 absolute left-0 w-full text-lg font-medium text-gray-800">
                    <span aria-label="Total" className="float-left text-2xl text-gray-800 font-normal">
                        Total  <sub>(Including VAT with Shipment)</sub>
                    </span>
                    <span aria-label="Total Price" className="float-right font-semibold text-gray-800 text-2xl">
                        ${(totalPrice-discount + shippingCharge+vatAmount).toFixed(2)}
                    </span>
                    <div className="clear-both"></div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
