import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Baby,
  Stethoscope,
  Syringe,
  Activity,
  Trophy,
  Brain,
  Ear,
  HeartPulse,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Paramount Pediatrics" },
      {
        name: "description",
        content:
          "Well-child visits, same-day sick appointments, vaccinations, developmental screenings, sports physicals, and more — for kids from newborn to teen.",
      },
      { property: "og:title", content: "Services — Paramount Pediatrics" },
      {
        property: "og:description",
        content:
          "Everyday pediatric care and specialty services in Burnaby. Booked with time to actually talk.",
      },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: Baby,
    title: "Well-child visits",
    desc: "Comprehensive checkups tracking growth, nutrition, sleep, and development at every stage — with unhurried time for your questions.",
  },
  {
    icon: Stethoscope,
    title: "Same-day sick visits",
    desc: "Fevers, sore throats, ear infections, rashes, stomach bugs. We hold room in every schedule for the unexpected.",
  },
  {
    icon: Syringe,
    title: "Vaccinations & immunizations",
    desc: "On-schedule or catch-up immunization plans, delivered with a gentle, kid-friendly approach and honest answers to your questions.",
  },
  {
    icon: Activity,
    title: "Developmental screening",
    desc: "Milestone check-ins for speech, motor, and social development, with clear next steps and specialist referrals when needed.",
  },
  {
    icon: Trophy,
    title: "Sports & school physicals",
    desc: "Fast, thorough physicals for camps, sports teams, and school forms — usually completed in a single visit.",
  },
  {
    icon: Brain,
    title: "ADHD, anxiety & behaviour",
    desc: "Compassionate assessments, family-centered plans, and coordination with therapists and schools.",
  },
  {
    icon: Ear,
    title: "Newborn & lactation support",
    desc: "First-week checkups, feeding help, sleep guidance, and a nurse practitioner who's held a lot of babies.",
  },
  {
    icon: HeartPulse,
    title: "Chronic condition care",
    desc: "Ongoing management for asthma, allergies, eczema, and other conditions — with plans that fit your family's real life.",
  },
];

function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-[radial-gradient(50%_50%_at_90%_0%,color-mix(in_oklab,var(--color-sunshine)_35%,transparent),transparent_60%)]"
        />
        <div className="mx-auto max-w-4xl px-4 pb-8 pt-16 text-center sm:px-6 md:pt-24 lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary">
            <Sparkles className="h-3.5 w-3.5" />
            Services
          </span>
          <h1 className="mt-5 text-4xl font-black tracking-tight text-foreground sm:text-5xl">
            Everyday pediatric care, without the rush.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            From your baby's first checkup to your teen's college physical, our team covers the
            full range of pediatric care — always in plain language, always with time to talk.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 pt-6 sm:px-6 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.title}
              className="rounded-3xl border border-border/60 bg-card p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary">
                <s.icon className="h-6 w-6" />
              </span>
              <h2 className="mt-5 text-lg font-extrabold text-foreground">{s.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </article>
          ))}
        </div>

        <div className="mt-14 rounded-[2rem] border border-border/60 bg-secondary/40 p-8 text-center sm:p-12">
          <h2 className="text-2xl font-black tracking-tight text-foreground sm:text-3xl">
            Not sure what your child needs?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-muted-foreground">
            Give us a call — our staff will help you figure out the right visit type and get you
            on the calendar.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-coral px-5 py-3 text-sm font-bold text-coral-foreground shadow-lg shadow-coral/25"
            >
              Book an appointment <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/faqs"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-bold text-foreground hover:bg-muted"
            >
              Common questions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
