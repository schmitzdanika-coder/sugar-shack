import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/directions")({
  component: DirectionsPage,
  head: () => ({
    meta: [
      { title: "Directions & Hours — The Sugar Shack Cafe, Huntington Beach" },
      {
        name: "description",
        content:
          "Find the Sugar Shack at 213½ Main Street, half a block from the Huntington Beach Pier. Open daily 6 AM – 2 PM.",
      },
    ],
  }),
});

function DirectionsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <SiteNav />

      <header className="px-6 pt-16 pb-12 max-w-7xl mx-auto">
        <span className="font-mono text-xs uppercase tracking-widest text-accent">
          213½ Main Street, Huntington Beach
        </span>
        <h1 className="mt-4 font-display text-6xl md:text-8xl uppercase leading-[0.9] tracking-tighter">
          Find Us
        </h1>
      </header>

      <section className="px-6 pb-24 max-w-7xl mx-auto grid lg:grid-cols-2 gap-px bg-border border border-border">
        <div className="bg-background p-10 md:p-14 space-y-10 font-mono text-sm">
          <div>
            <p className="uppercase text-accent mb-2 tracking-widest">Address</p>
            <p className="text-base">
              213½ Main Street
              <br />
              Huntington Beach, CA 92648
            </p>
          </div>
          <div>
            <p className="uppercase text-accent mb-2 tracking-widest">Phone</p>
            <a
              href="tel:7145360355"
              className="text-base underline decoration-accent underline-offset-4 hover:text-accent"
            >
              (714) 536-0355
            </a>
          </div>
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=213+Main+St+Huntington+Beach+CA+92648"
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-foreground text-background px-6 py-3 uppercase tracking-widest text-xs hover:bg-accent transition-colors"
          >
            Open in Google Maps →
          </a>
        </div>
        <div className="relative min-h-[500px] bg-secondary">
          <iframe
            title="Map to Sugar Shack Cafe, Huntington Beach"
            src="https://www.google.com/maps?q=213+Main+St,+Huntington+Beach,+CA+92648&output=embed"
            loading="lazy"
            className="absolute inset-0 w-full h-full grayscale-[40%]"
          />
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
