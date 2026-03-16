import dish1 from "@/assets/dish-1.jpg";
import dish2 from "@/assets/dish-2.jpg";
import dish3 from "@/assets/dish-3.jpg";

const dishes = [
  {
    name: "Seared Hokkaido Scallops",
    description: "Cauliflower purée, beurre noisette, microgreens, aged balsamic",
    price: "$48",
    image: dish1,
  },
  {
    name: "A5 Wagyu Ribeye",
    description: "Truffle butter, seasonal vegetables, red wine jus, edible flowers",
    price: "$125",
    image: dish2,
  },
  {
    name: "Valrhona Chocolate Dome",
    description: "24k gold leaf, raspberry coulis, salted caramel, crumble base",
    price: "$32",
    image: dish3,
  },
];

const MenuSection = () => {
  return (
    <section id="menu" className="bg-secondary px-8 py-24 md:px-16 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <div className="mb-6 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-gold/30" />
            <span className="font-sans-elegant text-xs tracking-[0.4em] uppercase text-gold">The Menu</span>
            <span className="h-px w-12 bg-gold/30" />
          </div>
          <h2 className="font-display text-3xl font-light tracking-wide text-cream md:text-5xl">
            Signature <span className="italic text-gold">Creations</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {dishes.map((dish) => (
            <div key={dish.name} className="group overflow-hidden border border-border bg-card transition-all hover:border-gold/30">
              <div className="aspect-square overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <h3 className="font-display text-lg font-medium text-cream">{dish.name}</h3>
                  <span className="font-sans-elegant text-sm text-gold">{dish.price}</span>
                </div>
                <p className="mt-2 font-body text-sm text-muted-foreground">{dish.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
