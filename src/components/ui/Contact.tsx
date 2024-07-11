import contact from './../../assets/contact.jpg'
import { ActionButton } from './Button';

 
 const Contact = () => {
   return (
     <div className="bg-gray-100 p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
       {/* Left Column (with image) */}
       <div className="mb-4 md:mb-0">
         <img src={contact} alt="Contact Us" className="shadow-drop" />
       </div>
 
       {/* Right Column (Contact Form) */}
       <div className="bg-white p-6 my-10 shadow-drop">
         <div className="text-center md:text-left">
           <h2 className="text-3xl font-bold text-primaryColor mb-4">Contact Us</h2>
           <form>
             <div className="mb-4">
               <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                 Name
               </label>
               <input
                 type="text"
                 id="name"
                 name="name"
                 placeholder="Your Name"
                 className="w-full border rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:border-primaryColor"
               />
             </div>
             <div className="mb-4">
               <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                 Email
               </label>
               <input
                 type="email"
                 id="email"
                 name="email"
                 placeholder="Your Email"
                 className="w-full border rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:border-primaryColor"
               />
             </div>
             <div className="mb-4">
               <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
                 Message
               </label>
               <textarea
                 id="message"
                 name="message"
                 rows={4}
                 placeholder="Your Message"
                 className="w-full border rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:border-primaryColor"
               ></textarea>
             </div>
           <ActionButton>Message</ActionButton>
           </form>
         </div>
       </div>
     </div>
   );
 };
 
 export default Contact;
 