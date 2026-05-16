import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import exterior from "@/assets/storefront.jpg";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "Sugar Shack Cafe History — Established 1967" },
      {
        name: "description",
        content:
          "The Sugar Shack Cafe was established in 1967 at 213 Main Street by Pat and Mary Williams. Family-owned ever since.",
      },
      { property: "og:image", content: exterior },
    ],
  }),
});

const timeline = [
  { year: "1967", text: "The Sugar Shack Cafe is established by Pat and Mary Williams at 213 Main Street. The cafe seats 22 and offers only inside dining." },
  { year: "1979", text: "The Williams offer the cafe to their children. Michele Turner (their second born) and her husband Tim Turner take it over." },
  { year: "2014", text: "Timmy Turner is inducted into the Surfers' Hall of Fame on August 1." },
  { year: "2016", text: "Ryan Turner is inducted into the Surfers' Hall of Fame on July 29." },
  { year: "2022", text: "Michele Turner — the “Surf Mother of Main Street” — is inducted into the Surfers' Hall of Fame." },
  { year: "Today", text: "10 tables at the front dining area, 16 tables at the back, and 34 seats inside. Still family-owned." },
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <SiteNav />

      <header className="px-6 pt-16 pb-12 max-w-7xl mx-auto">
        <span className="font-mono text-xs uppercase tracking-widest text-accent">
          Established 1967
        </span>
        <h1 className="mt-4 font-display text-6xl md:text-8xl uppercase leading-[0.9] tracking-tighter">
          Our Story
        </h1>
      </header>

      <section className="px-6 pb-16 max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-7 space-y-6 text-lg leading-relaxed opacity-90">
          <p>
            The Sugar Shack Cafe was established in 1967 at 213 Main Street, the
            same location where it sits at today. The Sugar Shack was established
            by Pat and Mary Williams. The Williams were long time Huntington Beach
            residents, with four daughters and one son.
          </p>
          <p>
            One day they were walking down Main Street and saw a for sale sign on
            a small cafe. Mary thought to herself — this will be the perfect place
            for my children to learn the value of money and how to work hard. They
            bought the restaurant and raised their children working there.
          </p>
          <p>
            The cafe sat 22 people and had only inside dining. In 1979 the
            Williams decided they wanted to sell the business and move out of
            town. They offered it to their children. All of them turned it down
            except for Michele Turner (Williams' second born) and her husband Tim
            Turner. The rest is history.
          </p>
          <p>
            At first the Turners added two front tables to the outside dining
            area. The Sugar Shack Cafe has now grown to 10 tables at the front
            dining area, 16 tables at the back dining area and 34 seats at the
            inside dining area.
          </p>
          <p>
            Michele Turner has always worked behind the counter taking orders and
            making sure everyone is happy. Michele has been known as the “Mother
            Theresa” of Main Street as she is always there to help out someone
            down on their luck, or just there with an open ear and an open heart.
          </p>
          <p>
            Michele and Tim Turner have 3 grown children, Holly, Ryan and Timmy
            that help run the business now. These young adults also wait tables
            and help out with the day to day operations.
          </p>
          <p className="text-lg leading-relaxed pt-4 italic">
            Many regulars come to The Sugar Shack everyday, sometimes twice a
            day, because they feel at home.
          </p>
        </div>
        <div className="lg:col-span-5">
          <img
            src={exterior}
            alt="The Sugar Shack Cafe on Main Street, Huntington Beach"
            width={1280}
            height={896}
            loading="lazy"
            className="w-full aspect-[4/5] object-cover rounded-sm border border-border -rotate-2 shadow-2xl"
          />
        </div>
      </section>

      <section className="bg-foreground text-background py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-2xl md:text-3xl uppercase tracking-tighter mb-10 border-b border-background/20 pb-3 text-center">
            Timeline
          </h2>
          <ol className="relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {timeline.map((t, i) => (
              <li key={t.year} className="relative flex flex-col items-center text-center">
                <div className="w-3 h-3 rounded-full bg-accent mb-3 ring-4 ring-background/10" />
                {i < timeline.length - 1 && (
                  <span className="hidden lg:block absolute top-[5px] left-[calc(50%+0.5rem)] right-[-50%] h-px bg-background/20" />
                )}
                <span className="font-display text-xl md:text-2xl uppercase text-accent leading-none">
                  {t.year}
                </span>
                <p className="mt-2 text-xs opacity-80 leading-snug">{t.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
