import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/reviews")({
  component: ReviewsPage,
  head: () => ({
    meta: [
      { title: "Reviews — The Sugar Shack Cafe, Huntington Beach" },
      {
        name: "description",
        content:
          "What locals, surfers and visitors are saying about the Sugar Shack Cafe in Huntington Beach.",
      },
    ],
  }),
});

const reviews = [
  {
    quote:
      "If you only eat one breakfast in Huntington Beach, eat it at the Sugar Shack. The Main Street Omelette is unreal and the coffee just keeps coming.",
    author: "Lauren K.",
    source: "Yelp",
  },
  {
    quote:
      "Surfed at sunrise, ate here at 7. The bacon was crispy, the eggs were perfect, and the woman at the counter remembered my name from last year.",
    author: "Mike D.",
    source: "Google",
  },
  {
    quote:
      "It feels like nothing has changed since 1975 and that's exactly the point. Tiny, busy, perfect. Bring cash and patience.",
    author: "Anya P.",
    source: "Tripadvisor",
  },
  {
    quote:
      "The Shack Burrito is the size of my forearm. Three of us split one and still couldn't finish. Best $18 I've spent in HB.",
    author: "Ben R.",
    source: "Yelp",
  },
  {
    quote:
      "Half a block from the sand, no pretense, no wait at 6:30 AM. This is what a beach-town diner is supposed to be.",
    author: "Carlos M.",
    source: "Google",
  },
  {
    quote:
      "My grandfather brought my dad here. My dad brought me here. I'm bringing my kids here. Some places you just don't change.",
    author: "Jess W.",
    source: "Facebook",
  },
];

function ReviewsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <SiteNav />

      <header className="px-6 pt-16 pb-12 max-w-7xl mx-auto">
        <span className="font-mono text-xs uppercase tracking-widest text-accent">
          From the Counter
        </span>
        <h1 className="mt-4 font-display text-6xl md:text-8xl uppercase leading-[0.9] tracking-tighter">
          Reviews
        </h1>
        <p className="mt-6 max-w-xl italic text-lg opacity-80">
          Fifty years of regulars, surfers, and first-timers. Here's a few of them.
        </p>
      </header>

      <section className="px-6 pb-24 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-px bg-border border border-border">
          {reviews.map((r, i) => (
            <figure
              key={i}
              className="bg-background p-10 md:p-12 flex flex-col justify-between gap-8"
            >
              <blockquote className="text-xl md:text-2xl italic leading-snug">
                “{r.quote}”
              </blockquote>
              <figcaption className="font-mono text-xs uppercase tracking-widest flex justify-between opacity-70">
                <span>{r.author}</span>
                <span className="text-accent">{r.source}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
