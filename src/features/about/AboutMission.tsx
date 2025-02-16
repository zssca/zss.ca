const AboutMission = () => {
    return (
      <div className="h-full flex flex-col justify-center p-4">
        <h2 className="text-xl font-semibold text-blue-600 mb-6 inline-flex items-center gap-2">
          <span className="h-[2px] w-8 bg-blue-600 rounded-full" />
          Our Mission
        </h2>
        
        <p className="text-3xl/normal lg:text-xl/tight font-medium text-gray-900">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
            Creating digital experiences
          </span>
          that combine technical excellence with artistic vision to drive meaningful, 
          measurable results.
        </p>
      </div>
    );
  };
  
  export default AboutMission;
  