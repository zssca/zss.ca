const HomeHero = () => (
  <section aria-labelledby="hero-heading" className="px-5 py-4 md:py-4 lg:py-6">
    <div className="max-w-4xl mx-auto">
      <h1 
        id="hero-heading"
        className="text-4xl md:text-6xl lg:text-6xl font-bold
                   bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500
                   text-transparent bg-clip-text tracking-tight
                   flex flex-wrap gap-x-3"
      >
        {"Zenith is a Canadian branding agency".split(' ').map((word, i) => (
          <span key={i}>{word}</span>
        ))}
      </h1>
    </div>
  </section>
);

export default HomeHero;