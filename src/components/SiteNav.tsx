import { Link } from "@tanstack/react-router";

const links = [
  { to: "/menu", label: "The Menu" },
  { to: "/about", label: "Our Story" },
  { to: "/directions", label: "Find Us" },
  { to: "/reviews", label: "Reviews" },
] as const;

export function SiteNav() {
  return (
    <nav className="sticky top-0 z-50 bg-background/85 backdrop-blur-md border-b border-border px-6 py-4 flex justify-between items-center">
      <Link
        to="/"
        className="inline-flex flex-col items-center bg-[#1f5a3a] text-[#f5ecd6] px-4 py-1.5 rounded-sm shadow-md border border-[#143d27] -rotate-1"
        style={{ fontFamily: "'Lora', serif" }}
      >
        <span className="text-[9px] italic self-start -mb-1 opacity-90">Michele's</span>
        <span className="font-display text-xl md:text-2xl uppercase leading-none tracking-tight">
          Sugar Shack Cafe
        </span>
        <span className="text-[8px] uppercase tracking-[0.15em] mt-0.5 opacity-90">
          Family Owned &amp; Operated Since 1967
        </span>
      </Link>
      <div className="hidden md:flex gap-8 font-mono text-xs uppercase tracking-tighter">
        {links.map((l) => (
          <Link
            key={l.to}
            to={l.to}
            className="hover:text-accent transition-colors"
            activeProps={{ className: "text-accent" }}
          >
            {l.label}
          </Link>
        ))}
      </div>
      <a
        href="tel:7145360355"
        className="bg-foreground text-background px-4 py-2 font-mono text-xs uppercase tracking-widest hover:bg-accent transition-all"
      >
        Call to Order
      </a>
    </nav>
  );
}
