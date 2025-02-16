import Image from "next/image";
import { motion } from "framer-motion";
import { FiTwitter, FiLinkedin, FiGithub, FiDribbble } from "react-icons/fi";

const AboutTeam = () => {
  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "CEO & Founder",
      image: "https://picsum.photos/400/400?random=1",
      description: "Digital strategy visionary with 12+ years in tech innovation",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      },
    },
    {
      name: "James Rodriguez",
      role: "Creative Director",
      image: "https://picsum.photos/400/400?random=2",
      description: "Brand experience architect and design system expert",
      social: {
        dribbble: "#",
        linkedin: "#",
      },
    },
    {
      name: "Priya Patel",
      role: "Tech Lead",
      image: "https://picsum.photos/400/400?random=3",
      description: "Full-stack wizard specializing in scalable solutions",
      social: {
        github: "#",
        linkedin: "#",
      },
    },
    {
      name: "Emma Wilson",
      role: "UX Researcher",
      image: "https://picsum.photos/400/400?random=4",
      description: "User behavior analyst and interaction specialist",
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 120, damping: 20 },
    },
  };

  return (
    <section className="bg-white p-8 rounded-xl shadow-md border border-gray-200">
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Meet Our Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {teamMembers.map((member) => (
          <motion.div
            key={member.name}
            className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={cardVariants}
          >
            <div className="flex flex-col items-center">
              <div className="relative w-32 h-32 mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={128}
                  height={128}
                  className="rounded-full object-cover border-4 border-white shadow-md"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
              <p className="text-blue-600 font-medium">{member.role}</p>
              <p className="mt-2 text-gray-600 text-center text-sm">{member.description}</p>
              <div className="mt-4 flex space-x-4">
                {member.social.twitter && (
                  <a href={member.social.twitter} aria-label={`${member.name} Twitter`} className="text-gray-500 hover:text-blue-600">
                    <FiTwitter size={20} />
                  </a>
                )}
                {member.social.linkedin && (
                  <a href={member.social.linkedin} aria-label={`${member.name} LinkedIn`} className="text-gray-500 hover:text-blue-600">
                    <FiLinkedin size={20} />
                  </a>
                )}
                {member.social.github && (
                  <a href={member.social.github} aria-label={`${member.name} GitHub`} className="text-gray-500 hover:text-blue-600">
                    <FiGithub size={20} />
                  </a>
                )}
                {member.social.dribbble && (
                  <a href={member.social.dribbble} aria-label={`${member.name} Dribbble`} className="text-gray-500 hover:text-blue-600">
                    <FiDribbble size={20} />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AboutTeam; 