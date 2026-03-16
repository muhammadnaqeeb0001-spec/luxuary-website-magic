import { useState } from "react";

const ReservationSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="reservation" className="bg-background px-8 py-24 md:px-16 lg:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <div className="mb-6 flex items-center justify-center gap-4">
          <span className="h-px w-12 bg-gold/30" />
          <span className="font-sans-elegant text-xs tracking-[0.4em] uppercase text-gold">Reservations</span>
          <span className="h-px w-12 bg-gold/30" />
        </div>
        <h2 className="font-display text-3xl font-light tracking-wide text-cream md:text-5xl">
          Book Your <span className="italic text-gold">Evening</span>
        </h2>
        <p className="mt-4 font-body text-muted-foreground">
          Join us for an unforgettable dining experience
        </p>

        {submitted ? (
          <div className="mt-12 border border-gold/30 p-12">
            <div className="font-display text-2xl text-gold">Thank You</div>
            <p className="mt-3 font-body text-muted-foreground">
              Your reservation request has been received. We will confirm shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-12 space-y-6 text-left">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block font-sans-elegant text-xs tracking-[0.2em] uppercase text-muted-foreground">
                  Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full border border-border bg-card px-4 py-3 font-body text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="mb-2 block font-sans-elegant text-xs tracking-[0.2em] uppercase text-muted-foreground">
                  Email
                </label>
                <input
                  type="email"
                  required
                  className="w-full border border-border bg-card px-4 py-3 font-body text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div>
                <label className="mb-2 block font-sans-elegant text-xs tracking-[0.2em] uppercase text-muted-foreground">
                  Date
                </label>
                <input
                  type="date"
                  required
                  className="w-full border border-border bg-card px-4 py-3 font-body text-foreground focus:border-gold focus:outline-none"
                />
              </div>
              <div>
                <label className="mb-2 block font-sans-elegant text-xs tracking-[0.2em] uppercase text-muted-foreground">
                  Time
                </label>
                <select
                  required
                  className="w-full border border-border bg-card px-4 py-3 font-body text-foreground focus:border-gold focus:outline-none"
                >
                  <option value="">Select time</option>
                  <option>6:00 PM</option>
                  <option>7:00 PM</option>
                  <option>8:00 PM</option>
                  <option>9:00 PM</option>
                  <option>10:00 PM</option>
                </select>
              </div>
              <div>
                <label className="mb-2 block font-sans-elegant text-xs tracking-[0.2em] uppercase text-muted-foreground">
                  Guests
                </label>
                <select
                  required
                  className="w-full border border-border bg-card px-4 py-3 font-body text-foreground focus:border-gold focus:outline-none"
                >
                  <option value="">Guests</option>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                    <option key={n}>{n} {n === 1 ? "Guest" : "Guests"}</option>
                  ))}
                </select>
              </div>
            </div>
            <button
              type="submit"
              className="w-full border border-gold bg-gold px-10 py-4 font-sans-elegant text-xs tracking-[0.3em] uppercase text-primary-foreground transition-all hover:bg-gold-dark"
            >
              Request Reservation
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default ReservationSection;
