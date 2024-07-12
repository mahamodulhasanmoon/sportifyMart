import Heading from "../ui/Heading";

const companyImage = 'https://dummyimage.com/600x400/ccc/000.jpg&text=Company+Image';

export default function Company() {
  return (
    <section className="my-20">
        <Heading
        title="About Our Company"
        subtitle="Our company, SportifyMart, is dedicated to providing high-quality sporting goods and exceptional customer service. We have a wide range of products catering to various sports, ensuring that every athlete finds what they need."
        />
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div className="order-2 md:order-1 ">
        <div className="bg-white  rounded-lg  my-5 shadow-drop p-4">
        <h2 className="text-3xl font-bold text-primaryColor mb-4">our mission</h2>
        <p className="text-lg text-gray-700">
        Our mission is to inspire and enable people to lead active and healthy lives through high-quality sports equipment and apparel. We are committed to providing our customers with the best products and services to help them achieve their fitness goals.
        </p>
        </div>
        <div className="bg-white  rounded-lg   shadow-drop p-4">
        <h2 className="text-3xl font-bold text-primaryColor mb-4">our vision</h2>
        <p className="text-lg text-gray-700">
        Our vision is to be the leading provider of sporting goods, known for our commitment to excellence and customer satisfaction. We strive to set the standard in the industry and continuously innovate to meet the needs of our customers.
        </p>
        </div>
      

      </div>
      <div className="order-1 md:order-2">
        <img src={companyImage} alt="Company" className="rounded-lg shadow-md" />
      </div>
    </div>
  </section>
  )
}
