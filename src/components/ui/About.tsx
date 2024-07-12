// About.tsx
import React from 'react';
import { FaBullseye, FaEye } from 'react-icons/fa';
import Contact from './Contact';

const About = () => {
  const teamMembers = [
    { id: 1, name: 'John Doe', position: 'CEO', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Jane Smith', position: 'CTO', image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Sam Wilson', position: 'Marketing Head', image: 'https://via.placeholder.com/150' },
    // Add more team members as needed
  ];

  const storeLocations = [
    { id: 1, name: 'Main Store', address: '123 Main St, City, Country' },
    { id: 2, name: 'Second Store', address: '456 Second St, City, Country' },
    // Add more store locations as needed
  ];

  return (
    <div className="bg-gray-100 p-8">
      {/* Information about the company */}


      <section className="mb-8">
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold text-primaryColor mb-8">Our Mission & Vision</h2>
          <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center md:items-start w-full md:w-1/2">
              <FaBullseye className="text-6xl text-primaryColor mb-4" />
              <h3 className="text-xl font-semibold text-primaryColor mb-2">Mission</h3>
              <p className="text-lg text-gray-700 text-center md:text-left">
                To inspire and enable people to lead active and healthy lives through high-quality sports equipment and apparel.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center md:items-start w-full md:w-1/2">
              <FaEye className="text-6xl text-primaryColor mb-4" />
              <h3 className="text-xl font-semibold text-primaryColor mb-2">Vision</h3>
              <p className="text-lg text-gray-700 text-center md:text-left">
                To be the leading provider of sporting goods, known for our commitment to excellence and customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Our Team */}
      <section className="mb-8">
        <h2 className="text-3xl font-bold text-primaryColor mb-4">Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-white p-4 rounded-lg shadow-md text-center">
              <img src={member.image} alt={member.name} className="rounded-full w-24 h-24 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-primaryColor mb-2">{member.name}</h3>
              <p className="text-gray-700">{member.position}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Store Locations */}
      <section>
        <h2 className="text-3xl font-bold text-primaryColor mb-4">Our Store Locations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {storeLocations.map((location) => (
            <div key={location.id} className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-primaryColor mb-2">{location.name}</h3>
              <p className="text-gray-700">{location.address}</p>
            </div>
          ))}
        </div>
      </section>

      <Contact/>
    </div>
  );
};

export default About;
