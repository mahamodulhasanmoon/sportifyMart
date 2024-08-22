import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../redux/hook';
import { clearCart } from '../redux/Features/products/productSlice.ts';
import { useBulkUpdateMutation } from '../redux/Features/products/productApi.ts';
import { toast } from 'react-toastify';


const CheckoutForm = () => {
  const cart = useAppSelector(state => state.product.cart);
  const [bulkUpdate, { isLoading }] = useBulkUpdateMutation()

  const dispatch = useAppDispatch()
  const { register, handleSubmit, formState: { errors, isDirty } } = useForm({
    defaultValues: {
      email: '',
      yourName: '',
      phoneNumber: '',
      address: '',
      paymentType: 'cashOnDelivery',
    }
  });
  const navigate = useNavigate()

  const onSubmit = async (data: any) => {
    console.log( data);

    try {
      // Make the API call
      await bulkUpdate({ formData: cart }).unwrap();
      dispatch(clearCart());
      navigate('/success')
    } catch (err) {
      // Handle the error if the API call fails
      toast.error("Please try again");
    }


  };
  const handleBeforeUnload = (e: BeforeUnloadEvent) => {
    if (isDirty) {
      e.preventDefault();
      e.returnValue = '';
    }
  };

  useEffect(() => {
    if (isDirty) {
      window.addEventListener('beforeunload', handleBeforeUnload);
    }

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [isDirty]);

  return (
    <form className="mt-8" autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
        <div>
          <input
            aria-label="emailAddress"
            className="border-b-2 border-gray-300 pb-3 text-base text-gray-600 font-normal placeholder-gray-600 focus:outline-none"
            type="email"
            placeholder="Email address"
            {...register('email', { required: true })}
          />
          {errors.email && <p className="text-red-500">Email is required</p>}
        </div>


        <div>
          <input
            aria-label="yourName"
            className="border-b-2 border-gray-300 pb-3 text-base text-gray-600 font-normal placeholder-gray-600 focus:outline-none"
            type="text"
            placeholder="Your name"
            {...register('yourName', { required: true })}
          />
          {errors.yourName && <p className="text-red-500">Name is required</p>}
        </div>

        <div>
          <input
            aria-label="phoneNumber"
            className="border-b-2 border-gray-300 pb-3 text-base text-gray-600 font-normal placeholder-gray-600 focus:outline-none"
            type="text"
            placeholder="Phone Number"
            {...register('phoneNumber', { required: true })}
          />
          {errors.phoneNumber && <p className="text-red-500">Phone number is required</p>}
        </div>

        <div>
          <input
            aria-label="address"
            className="border-b-2 border-gray-300 pb-3 text-base text-gray-600 font-normal placeholder-gray-600 focus:outline-none"
            type="text"
            placeholder="Address"
            {...register('address', { required: true })}
          />
          {errors.address && <p className="text-red-500">Address is required</p>}
        </div>
      </div>

      <div className="mt-6">
        <label className="block text-base text-gray-600 font-normal">Payment Type</label>
        <div className="flex items-center mt-3">
          <input
            type="radio"
            id="cashOnDelivery"
            value="cashOnDelivery"
            {...register('paymentType')}
          />
          <label htmlFor="cashOnDelivery" className="ml-2 text-gray-600">Cash on Delivery</label>
        </div>
        <div className="flex items-center mt-3">
          <input
            type="radio"
            id="stripePayment"
            value="stripePayment"
            {...register('paymentType')}
          />
          <label htmlFor="stripePayment" className="ml-2 text-gray-600">Stripe Payment</label>
        </div>
      </div>

      <button type='submit' className="bg-gray-800 hover:bg-gray-900 text-white p-4 text-lg my-3 mt-10 w-full md:w-auto">{isLoading ? "Please wait..." : "Proceed to shipping"} </button>
    </form>
  );
};

export default CheckoutForm;
