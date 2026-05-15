import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import heroImg from "@/assets/hero-counter.jpg";
import breakfastImg from "@/assets/breakfast.jpg";
import pierImg from "@/assets/pier.jpg";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "The Sugar Shack Cafe — Huntington Beach Breakfast Since 1967" },
      {
        name: "description",
        content:
          "A half-block from the Huntington Beach Pier. Family-run breakfast, served all day. 213½ Main St. Call (714) 536-0355.",
      },
      { property: "og:title", content: "The Sugar Shack Cafe" },
      {
        property: "og:description",
        content:
          "Surf City's favorite breakfast counter since 1967. Half a block from the Huntington Beach Pier.",
      },
    ],
  }),
});

const dishes = [
  {
    name: "Main St. Omelette",
    price: "$18",
    desc: "Three eggs, mushrooms, sprouts, cheddar, and avocado. The local gold standard.",
  },
  {
    name: "Shack Burrito",
    price: "$18",
    desc: "Avocado, mushrooms, onions, sprouts and cheese in a warm flour tortilla with hash browns.",
  },
  {
    name: "Bacon & 2 Eggs",
    price: "$16.50",
    desc: "Four thick slices, two eggs any style, hash browns and toast. Hot coffee on the house.",
  },
];

function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <SiteNav />

      {/* Hero */}
      <header className="relative px-6 pt-12 pb-24 max-w-7xl mx-auto overflow-hidden">
        <div className="grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-7 animate-reveal">
            <h1 className="font-display text-7xl sm:text-8xl md:text-[10rem] lg:text-[12rem] uppercase leading-[0.85] tracking-tighter text-balance">
              Main <br /> <span className="text-accent">Street</span> <br /> Soul.
            </h1>
            <p className="mt-8 text-xl max-w-md text-pretty leading-relaxed italic">
              A half-block from the Huntington Beach Pier. Where the surfers fuel up,
              the locals catch up, and the coffee never stops flowing.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 font-mono text-xs uppercase tracking-widest">
              <Link
                to="/menu"
                className="bg-foreground text-background px-6 py-3 hover:bg-accent transition-colors"
              >
                See the Menu
              </Link>
              <a
                href="tel:7145360355"
                className="border border-foreground/30 px-6 py-3 hover:border-accent hover:text-accent transition-colors"
              >
                (714) 536-0355
              </a>
            </div>
          </div>
          <div className="lg:col-span-5 animate-reveal [animation-delay:200ms]">
            <img
              src={heroImg}
              alt="Sun-faded photo of the Sugar Shack diner counter with surfboards outside"
              width={1024}
              height={1280}
              className="w-full aspect-[4/5] object-cover rounded-sm shadow-2xl rotate-2 border border-border"
            />
          </div>
        </div>
      </header>

      {/* Signature Dishes */}
      <section id="menu" className="bg-foreground text-background py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16 border-b border-background/20 pb-4">
            <h2 className="font-display text-4xl md:text-5xl uppercase tracking-tighter">
              Signature Dishes
            </h2>
            <span className="font-mono text-xs opacity-60 uppercase mb-2">
              Served All Day
            </span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {dishes.map((d) => (
              <div key={d.name} className="group cursor-default">
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="font-display text-2xl uppercase group-hover:text-accent transition-colors">
                    {d.name}
                  </h3>
                  <span className="font-mono text-sm italic">{d.price}</span>
                </div>
                <p className="text-sm opacity-70 leading-relaxed font-light">
                  {d.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <Link
              to="/menu"
              className="font-mono text-xs uppercase tracking-widest underline decoration-accent underline-offset-8 hover:text-accent transition-colors"
            >
              View the full menu →
            </Link>
          </div>
        </div>
      </section>

      {/* Heritage */}
      <section id="story" className="py-24 px-6 max-w-4xl mx-auto text-center">
        <span className="font-mono text-xs uppercase tracking-widest text-accent block mb-6">
          Our Heritage
        </span>
        <h2 className="text-3xl md:text-4xl font-body italic mb-8 leading-tight">
          “Fifty years of flipping eggs a half-block from the sand. Same kitchen.
          Same regulars. Same coffee pot.”
        </h2>
        <div className="space-y-6 text-lg opacity-80 leading-relaxed">
          <p>
            Since 1967, the Sugar Shack has been a Huntington Beach institution.
            Three generations of surfers, lifeguards, locals, and lost tourists have
            crowded our counter for breakfast served all day, every day.
          </p>
          <p>
            We don't do fancy. We do fresh, we do fast, and we treat you like you've
            been sitting at our counter for fifty years — even if it's your first
            time in Surf City.
          </p>
        </div>
      </section>

      {/* Image strip */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6">
          <img
            src={breakfastImg}
            alt="Classic American breakfast plate with eggs, bacon, hash browns and pancakes"
            width={1024}
            height={1024}
            loading="lazy"
            className="w-full aspect-square object-cover rounded-sm border border-border"
          />
          <img
            src={pierImg}
            alt="Hand-drawn illustration of the Huntington Beach pier at sunset"
            width={1280}
            height={896}
            loading="lazy"
            className="w-full aspect-square object-cover rounded-sm border border-border bg-secondary"
          />
        </div>
      </section>

      {/* Location */}
      <section id="location" className="px-6 pb-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-px bg-border border border-border">
          <div className="bg-background p-12">
            <h2 className="font-display text-4xl uppercase mb-8">Visit Us</h2>
            <div className="space-y-8 font-mono text-sm">
              <div>
                <p className="uppercase text-accent mb-2 tracking-widest">Address</p>
                <p>
                  213½ Main Street
                  <br />
                  Huntington Beach, CA 92648
                </p>
              </div>
              <div>
                <p className="uppercase text-accent mb-2 tracking-widest">
                  Kitchen Hours
                </p>
                <p>
                  Open Daily
                  <br />
                  6:00 AM – 2:00 PM
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/directions"
                  className="underline decoration-accent underline-offset-4 hover:text-accent transition-colors"
                >
                  Get Directions
                </Link>
                <span className="opacity-30">/</span>
                <a
                  href="tel:7145360355"
                  className="underline decoration-accent underline-offset-4 hover:text-accent transition-colors"
                >
                  714.536.0355
                </a>
              </div>
            </div>
          </div>
          <div className="relative min-h-[400px] bg-secondary">
            <iframe
              title="Map to Sugar Shack Cafe"
              src="https://www.google.com/maps?q=213+Main+St,+Huntington+Beach,+CA+92648&output=embed"
              loading="lazy"
              className="absolute inset-0 w-full h-full grayscale-[40%]"
            />
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
