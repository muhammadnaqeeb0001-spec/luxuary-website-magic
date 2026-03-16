const AboutSection = () => {
  return (
    <section id="about" className="bg-background px-8 py-24 md:px-16 lg:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-6 flex items-center justify-center gap-4">
          <span className="h-px w-12 bg-gold/30" />
          <span className="font-sans-elegant text-xs tracking-[0.4em] uppercase text-gold">Our Story</span>
          <span className="h-px w-12 bg-gold/30" />
        </div>
        <h2 className="font-display text-3xl font-light tracking-wide text-cream md:text-5xl">
          Crafted with <span className="italic text-gold">Passion</span>
        </h2>
        <p className="mx-auto mt-8 max-w-2xl font-body text-lg leading-relaxed text-muted-foreground">
          Since 2008, LUXuary has been a sanctuary for those who appreciate the art of fine dining.
          Our award-winning chefs blend classical French techniques with bold, contemporary flavors
          to create dishes that are as visually stunning as they are unforgettable.
        </p>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {[
            { number: "16+", label: "Years of Excellence" },
            { number: "2", label: "Michelin Stars" },
            { number: "∞", label: "Memorable Evenings" },
          ].map((stat) => (
            <div key={stat.label} className="border border-border p-8">
              <div className="font-display text-4xl font-semibold text-gold">{stat.number}</div>
              <div className="mt-2 font-sans-elegant text-xs tracking-[0.2em] uppercase text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
