import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/reviews")({
  component: ReviewsPage,
  head: () => ({
    meta: [
      { title: "Press & Reviews — The Sugar Shack Cafe" },
      {
        name: "description",
        content:
          "What the Orange County Register, Huntington Beach Independent, and SAVEUR.com have written about the Sugar Shack Cafe.",
      },
    ],
  }),
});

const reviews = [
  {
    quote:
      "There is a tradition in Huntington Beach that says that no one is a true surfer unless they have been to the Sugar Shack.",
    author: "Huntington Beach Independent",
  },
  {
    quote:
      "The Shack is primarily a breakfast and lunch place, with any kind of wake-you-up egg dish you have a craving for and possibly the best burgers in Huntington Beach.",
    author: "John Reger, Orange County Register",
  },
  {
    quote:
      "Michele Turner and her family have been operating the landmark eatery since 1967, and they really care about every customer. Michele gets to the kitchen before the sun rises and starts preparing the daily special.",
    author: "Orange County Register",
  },
  {
    quote:
      "A block from the waves in Huntington Beach, surfers fill up on breakfast burritos and camaraderie.",
    author: "SAVEUR.com",
  },
  {
    quote:
      "Every surfer, from the world champion Kelly Slater to the little grom who's just starting out, has had a meal at the Shack.",
    author: "Andy Verdone, HB High School Surf Team Coach",
  },
  {
    quote:
      "Who in this town doesn't love Michele Turner? So many days I come out of the water freezing cold, and I've got to get a cup of coffee and some of Michele's pancakes.",
    author: "Corky Carroll, Pro Surfer",
  },
];

function ReviewsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <SiteNav />

      <header className="px-6 pt-16 pb-12 max-w-7xl mx-auto">
        <span className="font-mono text-xs uppercase tracking-widest text-accent">
          Press & Reviews
        </span>
        <h1 className="mt-4 font-display text-6xl md:text-8xl uppercase leading-[0.9] tracking-tighter">
          What They Say
        </h1>
        <p className="mt-6 max-w-xl italic text-lg opacity-80">
          TripAdvisor Certificate of Excellence five years running (2011–2015) and
          MyFox Hot List Best Breakfast (2009 & 2010).
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
              <figcaption className="font-mono text-xs uppercase tracking-widest opacity-70 text-accent">
                — {r.author}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
