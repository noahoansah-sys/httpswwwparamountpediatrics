import { createFileRoute, Link } from "@tanstack/react-router";
import { FileText, ClipboardList, ShieldCheck, Clock, ArrowRight, Download } from "lucide-react";

export const Route = createFileRoute("/new-patients")({
  head: () => ({
    meta: [
      { title: "New Patients — Paramount Pediatrics" },
      {
        name: "description",
        content:
          "What to bring to your first visit, forms to download, insurance we accept, and exactly what to expect at Paramount Pediatrics.",
      },
      { property: "og:title", content: "New Patients — Paramount Pediatrics" },
      {
        property: "og:description",
        content: "Everything you need to know before your child's first appointment.",
      },
    ],
  }),
  component: NewPatientsPage,
});

function NewPatientsPage() {
  return (
    <>
      <section className="mx-auto max-w-4xl px-4 pb-8 pt-16 text-center sm:px-6 md:pt-24 lg:px-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary">
          New here?
        </span>
        <h1 className="mt-5 text-4xl font-black tracking-tight text-foreground sm:text-5xl">
          Your first visit, made simple.
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Here's exactly what to bring, what to expect, and how to make check-in as painless as
          possible — for you and your child.
        </p>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 pb-16 sm:px-6 md:grid-cols-2 lg:px-8">
        <Card icon={ClipboardList} title="What to bring">
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• Photo ID and insurance card</li>
            <li>• Your child's immunization records</li>
            <li>• A list of medications, allergies, and past conditions</li>
            <li>• Any specialist reports or hospital summaries</li>
            <li>• A comfort item — favourite toy, book, or blanket</li>
          </ul>
        </Card>

        <Card icon={FileText} title="Forms to complete">
          <p className="text-sm text-muted-foreground">
            Fill these out ahead of time so we can spend the visit talking, not writing.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {["New patient intake", "Medical history", "Consent to treat"].map((f) => (
              <a
                key={f}
                href="#"
                className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary hover:bg-primary/10"
              >
                <Download className="h-4 w-4" /> {f}
              </a>
            ))}
          </div>
        </Card>

        <Card icon={ShieldCheck} title="Insurance we accept">
          <ul className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
            {[
              "MSP (BC)",
              "Pacific Blue Cross",
              "Sun Life",
              "Manulife",
              "Green Shield",
              "Great-West Life",
              "Direct pay",
              "Extended benefits",
            ].map((p) => (
              <li key={p} className="rounded-xl bg-muted/60 px-3 py-2 font-semibold text-foreground">
                {p}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-muted-foreground">
            Don't see your plan? Call us — we most likely still work with them.
          </p>
        </Card>

        <Card icon={Clock} title="What to expect at your first visit">
          <ol className="space-y-3 text-sm text-muted-foreground">
            <li>
              <span className="font-bold text-foreground">1. Warm welcome.</span> Check-in takes
              a few minutes. Kids get a sticker and a tour of the exam room.
            </li>
            <li>
              <span className="font-bold text-foreground">2. Unhurried conversation.</span> We
              cover history, current concerns, growth, and what matters to you.
            </li>
            <li>
              <span className="font-bold text-foreground">3. Gentle exam.</span> Head to toe,
              paced to your child's comfort level. Nothing is a surprise.
            </li>
            <li>
              <span className="font-bold text-foreground">4. Clear plan.</span> You'll leave with
              written next steps and know exactly who to call between visits.
            </li>
          </ol>
        </Card>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] bg-primary p-8 text-primary-foreground sm:p-12">
          <div className="grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-center">
            <div>
              <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
                Ready to book your child in?
              </h2>
              <p className="mt-3 max-w-lg text-primary-foreground/85">
                We aim to schedule new patient visits within one week. Same-day appointments
                available for existing patients.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-coral px-5 py-3 text-sm font-bold text-coral-foreground shadow-lg shadow-coral/40"
              >
                Book appointment <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/faqs"
                className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-5 py-3 text-sm font-bold text-primary-foreground hover:bg-primary-foreground/20"
              >
                Read FAQs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Card({
  icon: Icon,
  title,
  children,
}: {
  icon: typeof FileText;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <article className="rounded-3xl border border-border/60 bg-card p-6 shadow-sm sm:p-8">
      <div className="flex items-center gap-3">
        <span className="grid h-11 w-11 place-items-center rounded-2xl bg-secondary text-secondary-foreground">
          <Icon className="h-5 w-5" />
        </span>
        <h2 className="text-xl font-extrabold text-foreground">{title}</h2>
      </div>
      <div className="mt-5">{children}</div>
    </article>
  );
}
