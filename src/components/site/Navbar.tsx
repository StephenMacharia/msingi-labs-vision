import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Cpu } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/programs", label: "Programs" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass py-3" : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-hero flex items-center justify-center glow-cyan group-hover:scale-110 transition-transform">
            <Cpu className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-display font-bold text-xl">
            Msingi<span className="text-gradient">Labs</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-primary" }}
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg"
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="ml-4 px-5 py-2.5 rounded-full bg-gradient-hero text-primary-foreground font-semibold text-sm glow-cyan hover:scale-105 transition-transform"
          >
            Get Started
          </Link>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 rounded-lg glass"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <nav className="lg:hidden glass mt-3 mx-6 rounded-2xl p-4 flex flex-col gap-1 animate-fade-up">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-primary bg-muted" }}
              className="px-4 py-3 rounded-lg text-sm font-medium hover:bg-muted transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
