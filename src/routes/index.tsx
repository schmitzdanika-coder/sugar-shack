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
      { title: "The Sugar Shack Cafe — Huntington Beach, Established 1967" },
      {
        name: "description",
        content:
          "The Sugar Shack Cafe. Family-owned since 1967. 213½ Main Street, Huntington Beach, CA. (714) 536-0355.",
      },
      { property: "og:title", content: "The Sugar Shack Cafe" },
      {
        property: "og:description",
        content:
          "Family-owned since 1967. 213½ Main Street, Huntington Beach.",
      },
    ],
  }),
});

function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <SiteNav />

      {/* Hero */}
      <header className="relative px-6 pt-12 pb-24 max-w-7xl mx-auto overflow-hidden">
        <div className="grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-7 animate-reveal">
            <div className="text-[#1f5a3a]">
              <span className="block text-sm md:text-base italic opacity-90 -mb-2">Michele's</span>
              <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl uppercase leading-[0.9] tracking-tight text-balance">
                The Sugar <br /> Shack Cafe
              </h1>
              <span className="block mt-3 text-[10px] md:text-xs uppercase tracking-[0.25em] opacity-90 pt-2">
                Family Owned &amp; Operated Since 1967
              </span>
            </div>
            <p className="mt-8 text-xl max-w-md text-pretty leading-relaxed italic">
              “There is a tradition in Huntington Beach that says that no one is a
              true surfer unless they have been to the Sugar Shack.”
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
              alt="The Sugar Shack diner counter"
              width={1024}
              height={1280}
              className="w-full aspect-[4/5] object-cover rounded-sm shadow-2xl rotate-2 border border-border"
            />
          </div>
        </div>
      </header>

      {/* Menu CTA */}
      <section className="bg-foreground text-background py-20 px-6 text-center">
        <Link
          to="/menu"
          className="inline-block font-display text-4xl md:text-6xl uppercase tracking-tighter underline decoration-accent underline-offset-8 hover:text-accent transition-colors"
        >
          View the Menu →
        </Link>
      </section>

      {/* Heritage */}
      <section id="story" className="py-24 px-6 max-w-4xl mx-auto text-center">
        <span className="font-mono text-xs uppercase tracking-widest text-accent block mb-6">
          Sugar Shack Cafe History
        </span>
        <h2 className="text-3xl md:text-4xl font-body italic mb-8 leading-tight">
          “Many regulars come to The Sugar Shack everyday, sometimes twice a day
          because they feel at home. They say that it is their kitchen too, where
          good friends meet and eat!”
        </h2>
        <div className="space-y-6 text-lg opacity-80 leading-relaxed">
          <p>
            The Sugar Shack Cafe was established in 1967 at 213 Main Street, the
            same location where it sits today. It was established by Pat and Mary
            Williams, long time Huntington Beach residents.
          </p>
          <p>
            In 1979 the Williams offered the cafe to their children. All of them
            turned it down except for Michele Turner and her husband Tim Turner.
            The rest is history.
          </p>
        </div>
        <div className="mt-10">
          <Link
            to="/about"
            className="font-mono text-xs uppercase tracking-widest underline decoration-accent underline-offset-8 hover:text-accent transition-colors"
          >
            Read the full story →
          </Link>
        </div>
      </section>

      {/* Image strip */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6">
          <img
            src={breakfastImg}
            alt="Breakfast at the Sugar Shack"
            width={1024}
            height={1024}
            loading="lazy"
            className="w-full aspect-square object-cover rounded-sm border border-border"
          />
          <img
            src={pierImg}
            alt="The Huntington Beach pier"
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
                <p className="uppercase text-accent mb-2 tracking-widest">Phone</p>
                <a
                  href="tel:7145360355"
                  className="underline decoration-accent underline-offset-4 hover:text-accent transition-colors"
                >
                  (714) 536-0355
                </a>
              </div>
              <div>
                <Link
                  to="/directions"
                  className="underline decoration-accent underline-offset-4 hover:text-accent transition-colors"
                >
                  Get Directions →
                </Link>
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
