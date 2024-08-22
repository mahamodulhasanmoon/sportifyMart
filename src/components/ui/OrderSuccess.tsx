import { Link } from "react-router-dom";

export default function OrderSuccess() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <div className="text-green-500 text-6xl mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7 12l2 2-4-4" />
          </svg>
        </div>
        <h1 className="text-2xl font-semibold mb-2">Order Successful!</h1>
        <p className="text-gray-600 mb-6">Thank you for your purchase. Your order has been placed successfully.</p>
        <Link to='/products' className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}
