import Heading from "../ui/Heading";

export default function Team() {

        const teamMembers = [
          { id: 1, name: 'John Doe', position: 'CEO', image: 'https://via.placeholder.com/150' },
          { id: 2, name: 'Jane Smith', position: 'CTO', image: 'https://via.placeholder.com/150' },
          { id: 3, name: 'Sam Wilson', position: 'Marketing Head', image: 'https://via.placeholder.com/150' },
          // Add more team members as needed
        ];
  return (
    <section className="my-20">
<Heading
  title="Meet Our Team"
  subtitle="Dedicated professionals committed to excellence and customer satisfaction."
/>

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

  )
}
