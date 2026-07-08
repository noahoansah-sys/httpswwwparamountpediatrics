import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Calendar,
  Phone,
  Stethoscope,
  Syringe,
  Baby,
  Activity,
  ShieldCheck,
  Award,
  HeartHandshake,
  Sparkles,
  ArrowRight,
  Quote,
  Clock,
  MapPin,
} from "lucide-react";
import heroImg from "@/assets/hero-family.jpg";
import familyImg from "@/assets/family-moment.jpg";
import { practice } from "@/lib/practice";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Paramount Pediatrics — Compassionate care from newborn to teen" },
      {
        name: "description",
        content:
          "Warm, evidence-based pediatric care in Burnaby. Book online, call anytime, and meet a team that treats your child like family.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Welcome />
      <ServicesPreview />
      <WhyUs />
      <Testimonials />
      <CtaBanner />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_20%_10%,color-mix(in_oklab,var(--color-secondary)_55%,transparent),transparent_60%),radial-gradient(50%_50%_at_90%_0%,color-mix(in_oklab,var(--color-sunshine)_35%,transparent),transparent_60%)]"
      />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 pb-16 pt-10 sm:px-6 md:grid-cols-2 md:items-center md:gap-14 md:pb-24 md:pt-16 lg:px-8">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-sage/40 bg-sage/15 px-3 py-1 text-xs font-bold uppercase tracking-widest text-sage-foreground">
            <Sparkles className="h-3.5 w-3.5" />
            Accepting new patients
          </span>
          <h1 className="mt-5 text-4xl font-black leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Compassionate care for your child,{" "}
            <span className="text-primary">from newborn to teen.</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
            A calm, welcoming pediatric clinic in Burnaby where anxious parents get straight
            answers and kids feel safe. Same-day sick visits, gentle checkups, and a team that
            treats your family like our own.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-coral px-5 py-3 text-sm font-bold text-coral-foreground shadow-lg shadow-coral/25 transition-transform hover:scale-[1.02]"
            >
              <Calendar className="h-4 w-4" />
              Book an appointment
            </Link>
            <a
              href={practice.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-background px-5 py-3 text-sm font-bold text-primary transition-colors hover:bg-primary/5"
            >
              <Phone className="h-4 w-4" />
              Call {practice.phone}
            </a>
          </div>

          <dl className="mt-10 grid max-w-lg grid-cols-3 gap-4 text-left">
            {[
              { k: `${practice.yearsInPractice}+ yrs`, v: "In the community" },
              { k: "Board-certified", v: "Pediatricians" },
              { k: "Most plans", v: "Insurance accepted" },
            ].map((s) => (
              <div
                key={s.v}
                className="rounded-2xl border border-border/60 bg-card/70 p-4 backdrop-blur"
              >
                <dt className="text-sm font-extrabold text-foreground">{s.k}</dt>
                <dd className="mt-1 text-xs text-muted-foreground">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="absolute -left-6 -top-6 hidden h-24 w-24 rounded-full bg-sunshine/60 blur-2xl md:block" />
          <div className="absolute -bottom-6 -right-6 hidden h-32 w-32 rounded-full bg-coral/30 blur-2xl md:block" />
          <div className="relative overflow-hidden rounded-[2rem] border border-border/60 bg-card shadow-xl shadow-primary/10">
            <img
              src={heroImg}
              alt="Pediatrician smiling with a toddler and their parent in a bright clinic"
              width={1600}
              height={1200}
              className="aspect-[4/5] w-full object-cover md:aspect-[5/6]"
            />
          </div>
          <div className="absolute -bottom-5 left-6 hidden items-center gap-3 rounded-2xl border border-border/60 bg-card px-4 py-3 shadow-lg sm:flex">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-sage/20 text-sage">
              <Clock className="h-5 w-5" />
            </span>
            <div className="text-left">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Open today
              </p>
              <p className="text-sm font-bold text-foreground">8:30 AM – 5:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  const items = [
    { icon: ShieldCheck, label: "Board-certified pediatricians" },
    { icon: HeartHandshake, label: "Judgement-free family care" },
    { icon: Award, label: "20+ years serving Burnaby" },
    { icon: Activity, label: "After-hours nurse line" },
  ];
  return (
    <section className="border-y border-border/60 bg-muted/30">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 py-6 sm:px-6 md:grid-cols-4 lg:px-8">
        {items.map((i) => (
          <div key={i.label} className="flex items-center gap-3">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
              <i.icon className="h-4 w-4" />
            </span>
            <span className="text-sm font-semibold text-foreground/80">{i.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Welcome() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid gap-12 md:grid-cols-2 md:items-center">
        <div className="relative order-2 md:order-1">
          <div className="overflow-hidden rounded-[2rem] border border-border/60 bg-card shadow-md">
            <img
              src={familyImg}
              alt="A mother laughing with her baby in a sunlit room"
              width={1200}
              height={1400}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <div className="absolute -right-4 -top-4 hidden rounded-2xl border border-border/60 bg-card p-4 shadow-lg md:block">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Written for parents
            </p>
            <p className="mt-1 max-w-[14rem] text-sm font-semibold text-foreground">
              "Plain-language answers, not scary jargon."
            </p>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <p className="text-sm font-bold uppercase tracking-widest text-primary">Welcome</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-foreground sm:text-4xl">
            Prevention first. Reassurance always.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            When it comes to your child's health, prevention is the best tool we have. That's
            why we focus on partnership — with clear guidance for the everyday questions,
            unhurried well-child visits, and same-day appointments when something feels off.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            No sterile waiting rooms. No dismissive rushed visits. Just a team of pediatric
            specialists who remember your child's name and take the time to listen.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/team"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-bold text-background hover:bg-foreground/90"
            >
              Meet our doctors
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/new-patients"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-bold text-foreground hover:bg-muted"
            >
              New patient info
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    icon: Baby,
    title: "Well-child visits",
    desc: "Growth, development, and gentle checkups from newborn through the teen years.",
    tint: "bg-sage/15 text-sage-foreground",
  },
  {
    icon: Stethoscope,
    title: "Same-day sick visits",
    desc: "Fevers, coughs, ear infections — we save room every day for the unexpected.",
    tint: "bg-primary/10 text-primary",
  },
  {
    icon: Syringe,
    title: "Vaccinations",
    desc: "On-schedule immunizations with a calm, kid-friendly approach and clear answers.",
    tint: "bg-coral/15 text-coral",
  },
  {
    icon: Activity,
    title: "Developmental screening",
    desc: "Milestone check-ins, learning support, and referrals when your child needs more.",
    tint: "bg-sunshine/40 text-foreground",
  },
];

function ServicesPreview() {
  return (
    <section className="bg-muted/40 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-primary">Services</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-foreground sm:text-4xl">
              Care for every stage of childhood
            </h2>
          </div>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline"
          >
            See all services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <article
              key={s.title}
              className="group rounded-3xl border border-border/60 bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <span className={`grid h-12 w-12 place-items-center rounded-2xl ${s.tint}`}>
                <s.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg font-extrabold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const points = [
    {
      title: "We answer at 2 AM worries too",
      body:
        "Real advice for the questions you're actually googling. Our after-hours line connects you with a pediatric nurse — not a call center.",
    },
    {
      title: "Unhurried, thorough visits",
      body:
        "Well-child appointments are scheduled with time to spare so nothing important gets skipped.",
    },
    {
      title: "One warm home for the whole childhood",
      body:
        "From the first newborn weigh-in to the last sports physical before college — a team that grows with your family.",
    },
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-3">
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-primary">Why families choose us</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-foreground sm:text-4xl">
            Care that feels like it's on your side.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Modern pediatric medicine, delivered with the kind of warmth you'd hope for from
            a family friend who happens to be a doctor.
          </p>
        </div>
        <ul className="grid gap-5 sm:grid-cols-2 lg:col-span-2">
          {points.map((p) => (
            <li
              key={p.title}
              className="rounded-3xl border border-border/60 bg-card p-6 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-secondary text-secondary-foreground">
                  <ShieldCheck className="h-4 w-4" />
                </span>
                <h3 className="text-base font-extrabold text-foreground">{p.title}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const testimonials = [
  {
    quote:
      "They took my worry seriously without making me feel silly. My daughter actually asks when her next checkup is.",
    name: "Priya S.",
    role: "Mom of two",
  },
  {
    quote:
      "Same-day appointment for a scary fever, real answers, and a follow-up call that evening. This is what pediatric care should be.",
    name: "Marcus L.",
    role: "Dad of a 3-year-old",
  },
  {
    quote:
      "We've been coming here since our son was 5 days old. Ten years later they still remember the little things.",
    name: "Alicia & Danny R.",
    role: "Family since 2015",
  },
];

function Testimonials() {
  return (
    <section className="bg-secondary/40 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-widest text-primary">Parents say</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-foreground sm:text-4xl">
            The kind of care worth telling a friend about.
          </h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-3xl border border-border/60 bg-card p-6 shadow-sm"
            >
              <Quote className="h-6 w-6 text-primary" />
              <blockquote className="mt-4 flex-1 text-base leading-relaxed text-foreground">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 border-t border-border/60 pt-4">
                <p className="text-sm font-bold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaBanner() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-[2rem] bg-primary px-6 py-14 text-primary-foreground shadow-xl sm:px-12">
        <div
          aria-hidden
          className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-sunshine/40 blur-3xl"
        />
        <div
          aria-hidden
          className="absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-coral/40 blur-3xl"
        />
        <div className="relative grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-center">
          <div>
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
              Ready to feel calmer about your child's care?
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-primary-foreground/85">
              Booking your first visit takes about two minutes. If you'd rather talk to a
              person, we're always a phone call away.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-coral px-5 py-3 text-sm font-bold text-coral-foreground shadow-lg shadow-coral/40 transition-transform hover:scale-[1.02]"
              >
                <Calendar className="h-4 w-4" />
                Book appointment
              </Link>
              <a
                href={practice.phoneHref}
                className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-5 py-3 text-sm font-bold text-primary-foreground hover:bg-primary-foreground/20"
              >
                <Phone className="h-4 w-4" />
                {practice.phone}
              </a>
            </div>
          </div>
          <ul className="grid gap-3 text-sm">
            <li className="flex items-start gap-3 rounded-2xl bg-primary-foreground/10 p-4">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0" />
              <span>
                {practice.address.line1}
                <br />
                {practice.address.line2}
              </span>
            </li>
            <li className="flex items-start gap-3 rounded-2xl bg-primary-foreground/10 p-4">
              <Clock className="mt-0.5 h-5 w-5 shrink-0" />
              <span>Mon–Thu 8:30–5, Fri 8:30–4, Sat 9–1</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
