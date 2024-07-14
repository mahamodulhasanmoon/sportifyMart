import AddCart from "../components/cards/AddCart";
import { useAppSelector } from "../redux/hook"

export default function Cart() {
  const {cart} = useAppSelector(state=>state.product)
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
 const  discount = 0.00
 const  shippingCharge = cart.length > 0 ? 2.00 : 0.00
const vatAmount = totalPrice * 0.15;
  return (
    <div className="container mx-auto my-20">
      <div className="font-sans  mx-auto bg-white py-4">
  <div className="grid md:grid-cols-3 gap-4">
    <div className="md:col-span-2 bg-gray-100 p-4 rounded-md">
      <h2 className="text-2xl font-bold text-gray-800">Cart</h2>
      <hr className="border-gray-300 mt-4 mb-8" />
      {
        cart.map(item=> (
<AddCart key={item._id} item={item}/>
        ))
      }

         {/* ProductInformation End */}
    </div>
    <div className="bg-gray-100 rounded-md p-4 md:sticky top-0">
      <div className="flex border border-blue-600 overflow-hidden rounded-md">
        <input type="email" placeholder="Promo code" className="w-full outline-none bg-white text-gray-600 text-sm px-4 py-2.5" />
        <button type="button" className="flex items-center justify-center font-semibold tracking-wide bg-blue-600 hover:bg-blue-700 px-4 text-sm text-white">
          Apply
        </button>
      </div>
      <ul className="text-gray-800 mt-8 space-y-4">
        <li className="flex flex-wrap gap-4 text-base font-bold">Subtotal <span className="ml-auto">${totalPrice.toFixed(2)}</span></li>
        <li className="flex flex-wrap gap-4 text-base">Discount <span className="ml-auto font-bold">${discount.toFixed(2)}</span></li>
        <li className="flex flex-wrap gap-4 text-base">Shipping <span className="ml-auto font-bold">${shippingCharge.toFixed(2)}</span></li>
        <li className="flex flex-wrap gap-4 text-base">Tax <span className="ml-auto font-bold">${vatAmount.toFixed(2)}</span></li>
        <hr />
        <li className="flex flex-wrap gap-4 text-base font-bold">Total <span className="ml-auto">${(totalPrice-discount + shippingCharge+vatAmount).toFixed(2)}</span></li>
      </ul>
      <div className="mt-8 space-y-2">
        <button type="button" className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-blue-600 hover:bg-blue-700 text-white rounded-md">Checkout</button>
        <button type="button" className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-transparent text-gray-800 border border-gray-300 rounded-md">Continue Shopping</button>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}


