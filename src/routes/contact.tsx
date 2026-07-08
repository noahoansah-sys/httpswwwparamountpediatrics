import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, MapPin, Clock, Mail, Car, Send, CheckCircle2 } from "lucide-react";
import { practice } from "@/lib/practice";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Booking — Paramount Pediatrics" },
      {
        name: "description",
        content:
          "Book an appointment, get directions, or send us a message. Paramount Pediatrics is in Surrey, BC with plenty of parking.",
      },
      { property: "og:title", content: "Contact — Paramount Pediatrics" },
      {
        property: "og:description",
        content:
          "Book an appointment or get in touch. Warm pediatric care, easy to reach.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <section className="mx-auto max-w-4xl px-4 pb-8 pt-16 text-center sm:px-6 md:pt-24 lg:px-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary">
          Get in touch
        </span>
        <h1 className="mt-5 text-4xl font-black tracking-tight text-foreground sm:text-5xl">
          Book an appointment or ask us anything.
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Prefer to talk? Call the office at{" "}
          <a href={practice.phoneHref} className="font-bold text-primary hover:underline">
            {practice.phone}
          </a>
          . Prefer to type? Use the form below.
        </p>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 pb-20 sm:px-6 lg:grid-cols-[1.2fr_1fr] lg:px-8">
        <ContactForm />
        <aside className="space-y-5">
          <InfoCard icon={MapPin} title="Visit us">
            <p className="text-sm leading-relaxed text-foreground">
              {practice.address.line1}
              <br />
              {practice.address.line2}
            </p>
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(
                `${practice.address.line1}, ${practice.address.line2}`,
              )}`}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex text-sm font-bold text-primary hover:underline"
            >
              Get directions →
            </a>
          </InfoCard>

          <InfoCard icon={Clock} title="Hours">
            <ul className="space-y-1.5 text-sm text-foreground">
              {practice.hours.map((h) => (
                <li key={h.day} className="flex justify-between gap-4">
                  <span className="text-muted-foreground">{h.day}</span>
                  <span className="font-semibold">{h.time}</span>
                </li>
              ))}
            </ul>
          </InfoCard>

          <InfoCard icon={Phone} title="Call us">
            <a
              href={practice.phoneHref}
              className="text-lg font-extrabold text-primary hover:underline"
            >
              {practice.phone}
            </a>
            <p className="mt-2 text-sm text-muted-foreground">
              After-hours nurse line available for established patients.
            </p>
          </InfoCard>

          <InfoCard icon={Car} title="Parking & transit">
            <p className="text-sm leading-relaxed text-muted-foreground">
              Free underground parking with elevator access. Two blocks from Patterson SkyTrain
              station; multiple bus routes stop at the door.
            </p>
          </InfoCard>
        </aside>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] border border-border/60 bg-card shadow-sm">
          <iframe
            title="Map to Paramount Pediatrics"
            src={`https://www.google.com/maps?q=${encodeURIComponent(
              `${practice.address.line1}, ${practice.address.line2}`,
            )}&output=embed`}
            className="h-[420px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}

function InfoCard({
  icon: Icon,
  title,
  children,
}: {
  icon: typeof Phone;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-3xl border border-border/60 bg-card p-6 shadow-sm">
      <div className="flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-2xl bg-primary/10 text-primary">
          <Icon className="h-5 w-5" />
        </span>
        <h2 className="text-base font-extrabold text-foreground">{title}</h2>
      </div>
      <div className="mt-4">{children}</div>
    </div>
  );
}

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-[2rem] border border-sage/40 bg-secondary/40 p-10 text-center">
        <span className="grid h-14 w-14 place-items-center rounded-full bg-sage text-sage-foreground">
          <CheckCircle2 className="h-7 w-7" />
        </span>
        <h2 className="mt-5 text-2xl font-black text-foreground">Message received.</h2>
        <p className="mt-3 max-w-md text-muted-foreground">
          Thank you — a member of our team will get back to you within one business day.
          If it's urgent, please call us at{" "}
          <a href={practice.phoneHref} className="font-bold text-primary hover:underline">
            {practice.phone}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="rounded-[2rem] border border-border/60 bg-card p-6 shadow-sm sm:p-8"
    >
      <h2 className="text-2xl font-black tracking-tight text-foreground">Send us a message</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Please don't share urgent medical concerns here. For same-day needs, call the office.
      </p>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <Field label="Parent / guardian name" required>
          <input type="text" required autoComplete="name" className={inputCls} />
        </Field>
        <Field label="Email" required>
          <input type="email" required autoComplete="email" className={inputCls} />
        </Field>
        <Field label="Phone" required>
          <input type="tel" required autoComplete="tel" className={inputCls} />
        </Field>
        <Field label="Child's name">
          <input type="text" className={inputCls} />
        </Field>
        <Field label="Child's age">
          <input type="text" placeholder="e.g. 3 years, 6 months" className={inputCls} />
        </Field>
        <Field label="Reason for visit">
          <select className={inputCls} defaultValue="">
            <option value="" disabled>
              Choose one…
            </option>
            <option>New patient / meet & greet</option>
            <option>Well-child checkup</option>
            <option>Sick visit</option>
            <option>Vaccinations</option>
            <option>Sports / school physical</option>
            <option>General question</option>
          </select>
        </Field>
      </div>

      <Field label="Anything we should know?" className="mt-5">
        <textarea rows={4} className={`${inputCls} resize-none`} />
      </Field>

      <button
        type="submit"
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-coral px-6 py-3 text-sm font-bold text-coral-foreground shadow-lg shadow-coral/25 transition-transform hover:scale-[1.02]"
      >
        <Send className="h-4 w-4" />
        Send message
      </button>

      <p className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
        <Mail className="h-3.5 w-3.5" />
        We reply within one business day.
      </p>
    </form>
  );
}

const inputCls =
  "w-full rounded-2xl border border-input bg-background px-4 py-2.5 text-sm text-foreground shadow-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/30";

function Field({
  label,
  required,
  className = "",
  children,
}: {
  label: string;
  required?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-1.5 block text-sm font-bold text-foreground">
        {label} {required ? <span className="text-coral">*</span> : null}
      </span>
      {children}
    </label>
  );
}
