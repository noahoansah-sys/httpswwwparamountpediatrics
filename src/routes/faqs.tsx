import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown, Phone } from "lucide-react";
import { practice } from "@/lib/practice";

export const Route = createFileRoute("/faqs")({
  head: () => ({
    meta: [
      { title: "FAQs — Paramount Pediatrics" },
      {
        name: "description",
        content:
          "Answers to common parent questions: sick-day guidance, after-hours care, vaccine schedules, and when to worry.",
      },
      { property: "og:title", content: "FAQs — Paramount Pediatrics" },
      {
        property: "og:description",
        content: "Plain-language answers to the questions parents actually ask us.",
      },
    ],
  }),
  component: FaqsPage,
});

const faqs = [
  {
    q: "When should I bring my child in for a fever?",
    a: "For babies under 3 months, any fever over 100.4°F (38°C) needs same-day care — call us first. For older kids, come in if a fever lasts more than 3 days, is above 104°F (40°C), or your child seems unusually sluggish, dehydrated, or in pain. When in doubt, call us. That's what we're here for.",
  },
  {
    q: "What if my child gets sick after hours?",
    a: "Our after-hours line connects you with a pediatric nurse who can help you decide whether it can wait until morning, needs urgent care, or is a 911 situation. You'll never get a generic call center.",
  },
  {
    q: "Do you follow the standard vaccine schedule?",
    a: "Yes — we follow the recommended immunization schedule from the Canadian Paediatric Society and Health Canada. We're also happy to walk you through each vaccine, what it protects against, and answer any questions. Nothing is a lecture; everything is a conversation.",
  },
  {
    q: "How do I get a prescription refill?",
    a: "Call the office or use the patient portal. Refills for ongoing medications are usually processed within one business day.",
  },
  {
    q: "Do you offer telehealth visits?",
    a: "Yes, for established patients. Video visits work well for follow-ups, medication check-ins, rashes, and quick questions. We'll help you decide if in-person is better.",
  },
  {
    q: "What if my child is anxious about doctor's visits?",
    a: "We move at your child's pace — always. We explain everything before we do it, and we're happy to do a 'meet the doctor' visit first if that helps. Sensory-friendly appointments available on request.",
  },
  {
    q: "Do you see teenagers?",
    a: "Absolutely — we care for kids from birth through age 18 (and often longer for patients transitioning to adult care). Teen visits include time alone with the doctor when they'd like.",
  },
  {
    q: "How do I switch to Paramount Pediatrics from another practice?",
    a: "Give us a call. We'll walk you through requesting your child's records and getting the first visit scheduled — usually within a week.",
  },
];

function FaqsPage() {
  return (
    <>
      <section className="mx-auto max-w-4xl px-4 pb-8 pt-16 text-center sm:px-6 md:pt-24 lg:px-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary">
          Frequently asked
        </span>
        <h1 className="mt-5 text-4xl font-black tracking-tight text-foreground sm:text-5xl">
          Answers written for parents, not textbooks.
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          The questions we hear most often — answered the way we'd answer a friend.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <FaqItem key={f.q} q={f.q} a={f.a} defaultOpen={i === 0} />
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-border/60 bg-secondary/40 p-8 text-center">
          <h2 className="text-2xl font-black text-foreground">Still have a question?</h2>
          <p className="mt-2 text-muted-foreground">
            We'd rather you called than worried. Really.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href={practice.phoneHref}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-bold text-primary-foreground"
            >
              <Phone className="h-4 w-4" />
              Call {practice.phone}
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-bold text-foreground hover:bg-muted"
            >
              Send a message
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function FaqItem({ q, a, defaultOpen }: { q: string; a: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(!!defaultOpen);
  return (
    <div className="overflow-hidden rounded-2xl border border-border/60 bg-card">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
        aria-expanded={open}
      >
        <span className="text-base font-bold text-foreground">{q}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-primary transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open ? (
        <div className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">{a}</div>
      ) : null}
    </div>
  );
}
