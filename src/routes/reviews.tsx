import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import ryanCeremony from "@/assets/ryan-handprints-ceremony.jpg";
import ryanStone from "@/assets/ryan-handprints-stone.jpg";
import mascotImg from "@/assets/sugar-shack-mascot.png";

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

      <header className="px-6 pt-16 pb-12 max-w-7xl mx-auto relative">
        <img
          src={mascotImg}
          alt="Sugar Shack Cafe mascot holding a trophy and a stack of pancakes"
          className="hidden sm:block absolute top-4 right-6 w-24 md:w-32 h-auto"
        />
        <span className="font-mono text-xs uppercase tracking-widest text-accent">
          Press & Reviews
        </span>
        <p className="mt-6 max-w-xl italic text-lg opacity-80">
          TripAdvisor Certificate of Excellence five years running (2011–2015) and
          MyFox Hot List Best Breakfast (2009 & 2010).
        </p>
      </header>

      {/* Featured: Ryan Turner — Surfers' Hall of Fame */}
      <section className="px-6 pb-24 max-w-7xl mx-auto">
        <div className="border border-accent/40 bg-accent/5 p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div className="grid grid-cols-2 gap-4">
              <img
                src={ryanCeremony}
                alt="Ryan Turner pressing his hands into wet cement at the Surfers' Hall of Fame ceremony"
                className="w-full aspect-[4/5] object-cover rounded-sm border border-border"
              />
              <img
                src={ryanStone}
                alt="Ryan Turner's handprints and footprints in cement, dated 7-29-16, with the inscription 'Enjoy Life! Ryan Turner'"
                className="w-full aspect-[4/5] object-cover rounded-sm border border-border"
              />
            </div>
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-accent">
                Featured Press · 2016
              </span>
              <h2 className="mt-3 font-display text-3xl md:text-5xl uppercase leading-[0.95] tracking-tight">
                Ryan Turner — Surfers' Hall of Fame
              </h2>
              <div className="mt-6 space-y-4 text-base md:text-lg leading-relaxed italic opacity-90">
                <p>
                  “Ryan Turner is a great surfer, mentor, big wave charger and pillar of the
                  Huntington Beach surfing community, running the Famous Sugar Shack Restaurant
                  that his family has owned since the 60's!
                </p>
                <p>
                  With younger brother and acclaimed surf filmmaker Timmy, life from an early age
                  was about the beach and surfing. Part of the Huntington Beach High School surf
                  team, Ryan enjoyed a lot of junior surf contest success, but as he got older it
                  was travel and surfing solid barrels which focused his surfing talent.
                </p>
                <p>
                  It doesn't matter where you put Ryan, Mexico, Canada or Indonesia the chances
                  are he will be the man notching up the most tube time. It is this reputation for
                  tube riding which leads to yearly invitations to the Padang Padang Cup in Bali,
                  among the most coveted barrel riding events in the world.
                </p>
                <p>
                  He proved in 2009 that he ranked among the world's best tube riders, losing only
                  in the semi-final to Jamie O'Brien, a future Pipeline Masters Champion, by less
                  than two points. Considered the ‘best unknown surfer in the world' by Coach Andy
                  Verdone, Ryan is one of the top 10 backside barrel riders in the world and has
                  proven this point again and again with his many Indonesia surfing trips.
                </p>
                <p>
                  In Mainland Mexico, Ryan also finished 3rd at Puerto during another Barrel
                  riding event scoring a perfect 10 along the way. Sponsored by Rusty as a
                  teenager, Ryan captained the Huntington Beach High School surf team to the NSSA
                  Team Title. Many times he would win heats for his team riding a shortboard,
                  longboard and Boogie Board!
                </p>
                <p>
                  He traveled around the world in High School to Australia, Hawaii, Mexico and
                  South Africa while competing for his team. Later as an adult, he chaperoned a
                  trip to Jeffrey's Bay for the high school team with a young Brett Simpson on the
                  trip.
                </p>
                <p>
                  When he isn't getting shacked in Mexico or Indo, Ryan is back in Huntington,
                  surfing the pier, pulling shifts in the family restaurant and hanging with his
                  wife and family. Any traveling surfer worth their salt has come in and swapped
                  surf stories with Ryan...over a plate of eggs with a cup of coffee on Main
                  Street, Surf City, USA!”
                </p>
              </div>
              <a
                href="https://www.malakye.com/news/9435/local-legends-ryan-turner-shawn-stussy-and-blaine-sumo-sate-to-enter-2016-surfers-hall-of-fame-on-friday-july-29-2016"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block font-mono text-xs uppercase tracking-widest text-accent underline decoration-accent underline-offset-4 hover:text-foreground transition-colors"
              >
                Read on Malakye.com →
              </a>
            </div>
          </div>
        </div>
      </section>

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
