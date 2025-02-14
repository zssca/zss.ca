const HomeHero = () => (
  <section aria-labelledby="hero-heading" className="">
    <h1
      id="hero-heading"
      className="mx-auto text-left flex flex-col items-start justify-center font-bold text-soil"
      style={{
        fontSize: "clamp(1.75rem, 4vw, 2.9rem)", // Adjusts between 1.75rem (small) and 3rem (large)
        lineHeight: "1.2",
      }}
    >
      Zenith is a Canadian branding agency
    </h1>
  </section>
);

export default HomeHero;
