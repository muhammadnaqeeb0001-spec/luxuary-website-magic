const FooterSection = () => {
  return (
    <footer id="contact" className="border-t border-border bg-secondary px-8 py-16 md:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div>
            <div className="font-display text-2xl font-bold tracking-[0.3em] text-gold">
              LUX<span className="font-light text-foreground">UARY</span>
            </div>
            <p className="mt-4 font-body text-sm text-muted-foreground">
              An extraordinary culinary journey awaits. Where every dish tells a story and every evening becomes a memory.
            </p>
          </div>
          <div>
            <h3 className="font-sans-elegant text-xs tracking-[0.3em] uppercase text-gold">Hours</h3>
            <div className="mt-4 space-y-2 font-body text-sm text-muted-foreground">
              <p>Tuesday – Thursday: 6PM – 11PM</p>
              <p>Friday – Saturday: 5:30PM – 12AM</p>
              <p>Sunday: 5:30PM – 10PM</p>
              <p>Monday: Closed</p>
            </div>
          </div>
          <div>
            <h3 className="font-sans-elegant text-xs tracking-[0.3em] uppercase text-gold">Contact</h3>
            <div className="mt-4 space-y-2 font-body text-sm text-muted-foreground">
              <p>42 Grand Boulevard</p>
              <p>New York, NY 10013</p>
              <p className="mt-4">+1 (212) 555-0198</p>
              <p>reservations@luxuary.com</p>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-8 text-center font-sans-elegant text-xs tracking-[0.2em] text-muted-foreground">
          © 2026 LUXuary. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
