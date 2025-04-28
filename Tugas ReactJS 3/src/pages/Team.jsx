import Footer from "../component/Footer/Footer.jsx";
import Header from "../component/Header/Header.jsx";
import imageRayyan from "../assets/image11s.png";
import imageZikri from "../assets/itmngmnt.png";
import imageFikri from "../assets/wd.png";

const teamMembers = [
  {
    name: "Rayyan Ghifari",
    role: "Chief of IT Support",
    image: imageRayyan, // <--- gunakan di sini
  },
  {
    name: "Muhammad Zikri",
    role: "IT Management",
    image: imageZikri,
  },
  {
    name: "Fikri Naufal Maulana",
    role: "Web Developer",
    image: imageFikri,

  }
];

function Team() {
  return (
    <div className="bg-gray-50 min-h-screen px-6 py-12">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10 border-b pb-4">
        Our Team
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow p-6 flex flex-col items-center text-center"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-24 h-24 rounded-full mb-4 object-cover border-4 border-gray-200"
            />
            <h3 className="text-xl font-semibold text-gray-900">
              {member.name}
            </h3>
            <p className="text-gray-600 mb-2">{member.role}</p>
            <span className="text-sm text-gray-400">{member.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TeamLayout() {
  return (
    <>
      <Header />
      <Team />
      <Footer />
    </>
  );
}
