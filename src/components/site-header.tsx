import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Phone, Menu, X, Calendar, Heart } from "lucide-react";
import { practice } from "@/lib/practice";

const nav = [
  { to: "/", label: "Home" },
  { to: "/team", label: "Our Team" },
  { to: "/services", label: "Services" },
  { to: "/new-patients", label: "New Patients" },
  { to: "/faqs", label: "FAQs" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border/60"
          : "bg-background/60 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex min-w-0 items-center gap-2.5">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary">
            <Heart className="h-5 w-5" fill="currentColor" />
          </span>
          <span className="min-w-0">
            <span className="block truncate text-base font-extrabold leading-tight text-foreground sm:text-lg">
              {practice.name}
            </span>
            <span className="hidden text-[11px] font-medium uppercase tracking-widest text-muted-foreground sm:block">
              {practice.tagline}
            </span>
          </span>
        </Link>

        <nav className="ml-auto hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-full px-3.5 py-2 text-sm font-semibold text-foreground/75 transition-colors hover:bg-muted hover:text-foreground"
              activeProps={{ className: "!bg-muted !text-foreground" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2 lg:ml-2">
          <a
            href={practice.phoneHref}
            className="hidden items-center gap-2 rounded-full px-3.5 py-2 text-sm font-bold text-primary transition-colors hover:bg-primary/10 sm:inline-flex"
          >
            <Phone className="h-4 w-4" />
            {practice.phone}
          </a>
          <a
            href={practice.phoneHref}
            className="grid h-10 w-10 place-items-center rounded-full bg-primary/10 text-primary sm:hidden"
            aria-label={`Call ${practice.phone}`}
          >
            <Phone className="h-4 w-4" />
          </a>
          <Link
            to="/contact"
            className="hidden items-center gap-2 rounded-full bg-coral px-4 py-2.5 text-sm font-bold text-coral-foreground shadow-sm shadow-coral/25 transition-transform hover:scale-[1.02] sm:inline-flex"
          >
            <Calendar className="h-4 w-4" />
            Book Appointment
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full bg-muted text-foreground lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-border/60 bg-background lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3 sm:px-6">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2.5 text-base font-semibold text-foreground/80 hover:bg-muted"
                activeProps={{ className: "!bg-muted !text-foreground" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-coral px-4 py-3 text-sm font-bold text-coral-foreground sm:hidden"
            >
              <Calendar className="h-4 w-4" />
              Book Appointment
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
