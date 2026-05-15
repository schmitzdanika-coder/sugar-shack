import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import exterior from "@/assets/exterior.jpg";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "Our Story — The Sugar Shack Cafe Since 1967" },
      {
        name: "description",
        content:
          "Three generations of surfers, locals and lifeguards have crowded our counter on Main Street since 1967. Here's how it started.",
      },
      { property: "og:image", content: exterior },
    ],
  }),
});

const timeline = [
  { year: "1967", text: "The Sugar Shack opens on Main Street, half a block from the pier." },
  { year: "1976", text: "The U.S. Open of Surfing comes to town. Surfers find the counter." },
  { year: "1989", text: "Second generation of the family takes over the kitchen." },
  { year: "2010", text: "Awarded Best Breakfast in Huntington Beach by local readers." },
  { year: "2017", text: "Fifty years of breakfast on Main Street." },
  { year: "Today", text: "Same kitchen. Same regulars. Same coffee pot." },
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <SiteNav />

      <header className="px-6 pt-16 pb-12 max-w-7xl mx-auto">
        <span className="font-mono text-xs uppercase tracking-widest text-accent">
          Est. 1967
        </span>
        <h1 className="mt-4 font-display text-6xl md:text-8xl uppercase leading-[0.9] tracking-tighter">
          Our Story
        </h1>
      </header>

      <section className="px-6 pb-16 max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-7 space-y-6 text-lg leading-relaxed opacity-90">
          <p>
            We opened the doors at 213½ Main Street in 1967, when downtown
            Huntington Beach was still a sleepy oil town with one stoplight and a
            wood-plank pier. Surfers paddled out at sunrise, came in for breakfast,
            and never really left.
          </p>
          <p>
            Three generations later, the Shack is still family-owned. The booths are
            the same vinyl. The plates are the same heavy ceramic. The regulars are
            sometimes the grandkids of the original regulars — and they still order
            the Main Street Omelette.
          </p>
          <p>
            We don't have a hostess. We don't take reservations. We don't have a
            patio. What we have is a counter, a grill, a coffee pot that's never
            empty, and a half-century of practice making the best breakfast in Surf
            City.
          </p>
          <p className="font-display text-2xl uppercase tracking-tight pt-4">
            Pull up a stool. We saved you a seat.
          </p>
        </div>
        <div className="lg:col-span-5">
          <img
            src={exterior}
            alt="The exterior of the Sugar Shack Cafe on Main Street, Huntington Beach"
            width={1280}
            height={896}
            loading="lazy"
            className="w-full aspect-[4/5] object-cover rounded-sm border border-border -rotate-2 shadow-2xl"
          />
        </div>
      </section>

      <section className="bg-foreground text-background py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl uppercase tracking-tighter mb-16 border-b border-background/20 pb-4">
            A Half-Century, In Brief
          </h2>
          <ol className="space-y-10">
            {timeline.map((t) => (
              <li
                key={t.year}
                className="grid grid-cols-[6rem_1fr] md:grid-cols-[10rem_1fr] gap-6 items-baseline"
              >
                <span className="font-display text-3xl md:text-5xl uppercase text-accent">
                  {t.year}
                </span>
                <p className="text-lg opacity-90 leading-relaxed">{t.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
