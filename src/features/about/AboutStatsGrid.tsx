const Counter = ({ value }: { value: number }) => {
  return <>{Math.round(value)}</>;
};

const AboutStatsGrid = () => {
  const stats = [
    { title: "Client Outcomes", value: 45, suffix: "%" },
    { title: "Traffic Growth", value: 30, suffix: "%" },
    { title: "Lead Increase", value: 3.5, suffix: "x" },
    { title: "ROI Boost", value: 50, suffix: "%" },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="w-full grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-3">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="group relative flex flex-col items-center justify-center text-center p-5 rounded-lg transition-all bg-white border border-blue-50 hover:border-blue-100"
          >
            <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-blue-50 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                {stat.value % 1 === 0 ? (
                  <Counter value={stat.value} />
                ) : (
                  stat.value
                )}
                <span className="text-3xl font-medium">{stat.suffix}</span>
              </div>
              <p className="mt-4 text-sm text-gray-600">
                {stat.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutStatsGrid;