import Image from "next/image";

const AboutTeam = () => {
  return (
    <div className="w-full max-w-7xl mx-auto">
      <Image
        src="/zss-team.webp"
        alt="Our Team"
        layout="responsive"
        width={16} // Aspect ratio reference
        height={9} // Aspect ratio reference
        className="w-full h-auto rounded-xl object-cover"
        priority
      />
    </div>
  );
};

export default AboutTeam;
