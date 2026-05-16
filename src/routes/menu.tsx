import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/menu")({
  component: MenuPage,
  head: () => ({
    meta: [
      { title: "Menu — The Sugar Shack Cafe, Huntington Beach" },
      {
        name: "description",
        content:
          "Breakfast served all day at the Sugar Shack: omelettes, burritos, pancakes, and combo plates. 213½ Main St, Huntington Beach.",
      },
    ],
  }),
});

type Item = { name: string; price: string; note?: string };
type Section = { title: string; intro?: string; items: Item[] };

const sections: Section[] = [
  {
    title: "2 Egg Combo Plates",
    intro: "Includes hash browns & toast. Sub fresh fruit for hash browns +$2.",
    items: [
      { name: "Bacon (4 slices) & 2 Eggs", price: "16.50" },
      { name: "Sausage Patties (2) & 2 Eggs", price: "16.50" },
      { name: "Ham & 2 Eggs", price: "16.75" },
      { name: "Chicken Breast & 2 Eggs", price: "16.75" },
      { name: "Hamburger Patty & 2 Eggs", price: "17.50" },
      { name: "Center Cut Pork Chops & 2 Eggs", price: "18.50" },
      { name: "Top Sirloin Steak & 2 Eggs", price: "19.25" },
    ],
  },
  {
    title: "Breakfast Burritos",
    intro:
      "Three eggs, hash browns & salsa. Served with American, cheddar, swiss or jack.",
    items: [
      { name: "Main Street Burrito", price: "18.00", note: "Avocado, mushrooms, onions, sprouts & cheese" },
      { name: "Bacon, Avocado & Cheese", price: "18.00" },
      { name: "Avocado & Cheese", price: "17.00" },
      { name: "Bacon & Cheese", price: "16.75" },
      { name: "Sausage & Cheese", price: "16.75" },
      { name: "Ham & Cheese", price: "16.85" },
      { name: "Cheese", price: "15.50" },
    ],
  },
  {
    title: "3 Egg Omelettes",
    intro: "Includes hash browns. Sub fresh fruit for hash browns +$2.",
    items: [
      { name: "Main Street Omelette", price: "18.00", note: "Avocado, mushrooms, onions, sprouts & cheese" },
      { name: "Bacon, Avocado & Cheese", price: "18.00" },
      { name: "Popeye & Cheese", price: "16.75" },
      { name: "Ham & Cheese", price: "16.85" },
      { name: "Avocado & Cheese", price: "16.75" },
      { name: "Mushroom, Onion & Cheese", price: "16.75" },
      { name: "Sausage & Cheese", price: "16.75" },
      { name: "Chili & Cheese", price: "16.75" },
      { name: "Cheese Omelette", price: "15.50" },
    ],
  },
  {
    title: "Add-ons",
    items: [
      { name: "Add Meat (Bacon, Sausage or Ham)", price: "3.00" },
      { name: "Add Veggies (Mushroom, Tomato, Pepper, Onion)", price: "1.25" },
      { name: "Side Sour Cream", price: "1.00" },
      { name: "Sub Egg Whites", price: "2.00" },
      { name: "Avocado", price: "3.00" },
      { name: "Popeye (Spinach)", price: "1.75" },
    ],
  },
];

function MenuPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <SiteNav />

      <header className="px-6 pt-16 pb-12 max-w-7xl mx-auto">
        <span className="font-mono text-xs uppercase tracking-widest text-accent">
          Breakfast & Lunch
        </span>
        <h1 className="mt-4 font-display text-6xl md:text-8xl uppercase leading-[0.9] tracking-tighter">
          The Menu
        </h1>
      </header>

      <section className="px-6 pb-24 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-20">
          {sections.map((section) => (
            <div key={section.title}>
              <div className="flex items-baseline gap-4 border-b border-foreground/20 pb-3 mb-6">
                <h2 className="font-display text-3xl uppercase tracking-tight">
                  {section.title}
                </h2>
              </div>
              {section.intro && (
                <p className="font-mono text-xs uppercase tracking-wider opacity-60 mb-6">
                  {section.intro}
                </p>
              )}
              <ul className="space-y-5">
                {section.items.map((item) => (
                  <li key={item.name} className="flex items-baseline gap-4">
                    <span className="font-display text-lg uppercase tracking-tight">
                      {item.name}
                    </span>
                    <span
                      className="flex-1 border-b border-dotted border-foreground/30"
                      aria-hidden
                    />
                    <span className="font-mono text-sm">${item.price}</span>
                    {item.note && (
                      <span className="block w-full text-sm italic opacity-70 mt-1">
                        {item.note}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-24 border-t border-border pt-12 text-center">
          <p className="font-mono text-xs uppercase tracking-widest opacity-70">
            To order ahead, give us a call
          </p>
          <a
            href="tel:7145360355"
            className="block mt-4 font-display text-5xl md:text-7xl uppercase text-accent hover:text-foreground transition-colors"
          >
            714.536.0355
          </a>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
