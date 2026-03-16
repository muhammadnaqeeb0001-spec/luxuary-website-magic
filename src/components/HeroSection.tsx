import heroImg from "@/assets/hero-restaurant.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="LUXuary fine dining interior with candlelit tables"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-background/70" />
      </div>

      <nav className="relative z-10 flex items-center justify-between px-8 py-6 md:px-16">
        <div className="font-display text-2xl font-bold tracking-[0.3em] text-gold">
          LUX<span className="font-light text-foreground">UARY</span>
        </div>
        <div className="hidden gap-8 font-sans-elegant text-xs tracking-[0.25em] uppercase md:flex">
          <a href="#about" className="text-foreground/70 transition-colors hover:text-gold">About</a>
          <a href="#menu" className="text-foreground/70 transition-colors hover:text-gold">Menu</a>
          <a href="#reservation" className="text-foreground/70 transition-colors hover:text-gold">Reserve</a>
          <a href="#contact" className="text-foreground/70 transition-colors hover:text-gold">Contact</a>
        </div>
      </nav>

      <div className="relative z-10 flex h-[calc(100%-88px)] flex-col items-center justify-center text-center">
        <div className="mb-6 flex items-center gap-4">
          <span className="h-px w-12 bg-gold/50" />
          <span className="font-sans-elegant text-xs tracking-[0.4em] uppercase text-gold">
            Fine Dining Experience
          </span>
          <span className="h-px w-12 bg-gold/50" />
        </div>
        <h1 className="font-display text-5xl font-light leading-tight tracking-wide md:text-7xl lg:text-8xl animate-fade-in-up">
          <span className="text-cream">A Taste of</span>
          <br />
          <span className="gold-text-gradient font-semibold italic">Elegance</span>
        </h1>
        <p className="mt-6 max-w-md font-body text-lg font-light text-foreground/60 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          Where culinary artistry meets timeless sophistication
        </p>
        <a
          href="#reservation"
          className="mt-10 border border-gold/60 px-10 py-3 font-sans-elegant text-xs tracking-[0.3em] uppercase text-gold transition-all hover:bg-gold hover:text-primary-foreground animate-fade-in"
          style={{ animationDelay: "0.8s" }}
        >
          Reserve a Table
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
