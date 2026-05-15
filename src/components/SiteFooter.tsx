export function SiteFooter() {
  return (
    <footer className="border-t border-border py-12 px-6 bg-background">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start">
          <p className="font-display text-xl uppercase tracking-tight">
            Sugar Shack Cafe
          </p>
          <p className="font-mono text-[10px] opacity-50 uppercase tracking-widest">
            See you on the sand.
          </p>
        </div>
        <p className="font-mono text-[10px] uppercase tracking-widest opacity-50 text-center">
          213½ Main Street · Huntington Beach, CA · (714) 536-0355
        </p>
        <div className="flex gap-6 font-mono text-[10px] uppercase tracking-widest opacity-70">
          <a href="https://www.instagram.com/" className="hover:text-accent">Instagram</a>
          <a href="https://www.yelp.com/" className="hover:text-accent">Yelp</a>
        </div>
      </div>
    </footer>
  );
}
