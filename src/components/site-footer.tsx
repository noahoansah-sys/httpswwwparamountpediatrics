import { Link } from "@tanstack/react-router";
import { Heart, Phone, MapPin, Clock } from "lucide-react";
import { practice } from "@/lib/practice";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-muted/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-2">
          <Link to="/" className="flex items-center gap-2.5">
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-primary/10 text-primary">
              <Heart className="h-5 w-5" fill="currentColor" />
            </span>
            <span>
              <span className="block text-lg font-extrabold text-foreground">{practice.name}</span>
              <span className="text-[11px] font-medium uppercase tracking-widest text-muted-foreground">
                {practice.tagline}
              </span>
            </span>
          </Link>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
            Compassionate, evidence-based pediatric care for newborns through teens.
            We're here for the well-check appointments and the 2 AM worry alike.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-bold text-foreground">Visit us</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>
                {practice.address.line1}
                <br />
                {practice.address.line2}
              </span>
            </li>
            <li className="flex gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <a href={practice.phoneHref} className="hover:text-foreground">
                {practice.phone}
              </a>
            </li>
            <li className="flex gap-2">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>Mon–Thu 8:30–5, Fri 8:30–4, Sat 9–1</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold text-foreground">Explore</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/team" className="hover:text-foreground">Meet the team</Link></li>
            <li><Link to="/services" className="hover:text-foreground">Services</Link></li>
            <li><Link to="/new-patients" className="hover:text-foreground">New patients</Link></li>
            <li><Link to="/faqs" className="hover:text-foreground">FAQs</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact & booking</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-2 px-4 py-6 text-xs text-muted-foreground sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} {practice.name}. All rights reserved.</p>
          <p>If your child has a medical emergency, call 911.</p>
        </div>
      </div>
    </footer>
  );
}
