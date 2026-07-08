import { createFileRoute } from "@tanstack/react-router";
import { GraduationCap, Sparkles } from "lucide-react";
import doc1 from "@/assets/doctor-1.jpg";
import doc2 from "@/assets/doctor-2.jpg";
import doc3 from "@/assets/doctor-3.jpg";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Meet the Team — Paramount Pediatrics" },
      {
        name: "description",
        content:
          "Meet the board-certified pediatricians and nurse practitioners caring for kids at Paramount Pediatrics in Burnaby.",
      },
      { property: "og:title", content: "Meet the Team — Paramount Pediatrics" },
      {
        property: "og:description",
        content:
          "Warm, experienced pediatric specialists who take the time to know your family.",
      },
    ],
  }),
  component: TeamPage,
});

const team = [
  {
    name: "Dr. Elena Martins, MD",
    role: "Pediatrician · Practice Lead",
    img: doc1,
    creds: ["MD, University of British Columbia", "Board-certified Pediatrician (FRCPC)"],
    philosophy:
      "Parents know their kids best. My job is to translate the medicine, honour your instincts, and make sure nobody leaves with unanswered questions.",
    fact: "Weekend hiker with a very opinionated golden retriever named Miso.",
  },
  {
    name: "Dr. Rajiv Patel, MD",
    role: "Pediatrician",
    img: doc2,
    creds: ["MD, McGill University", "20+ years in general pediatrics"],
    philosophy:
      "The best visits feel like a conversation, not a checklist. I love the long-term relationships — watching newborns turn into thoughtful teenagers.",
    fact: "Amateur cellist. Once played a lullaby to calm a very nervous 4-year-old patient.",
  },
  {
    name: "Soleina Karamali, RN, NP",
    role: "Nurse Practitioner",
    img: doc3,
    creds: ["Nurse Practitioner (Pediatrics)", "Certified Lactation Consultant"],
    philosophy:
      "New parents deserve unhurried support. Whether it's feeding, sleep, or the tenth 'is this normal?' question — I'm here for it.",
    fact: "Runs our monthly newborn class. Has held approximately a million babies.",
  },
];

function TeamPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-[radial-gradient(50%_50%_at_10%_10%,color-mix(in_oklab,var(--color-secondary)_45%,transparent),transparent_60%)]"
        />
        <div className="mx-auto max-w-4xl px-4 pb-8 pt-16 text-center sm:px-6 md:pt-24 lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary">
            <Sparkles className="h-3.5 w-3.5" />
            Meet the team
          </span>
          <h1 className="mt-5 text-4xl font-black tracking-tight text-foreground sm:text-5xl">
            The people who'll know your child's name.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Our clinicians combine deep pediatric training with the kind of warmth that turns a
            doctor's visit into something your kid doesn't dread.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 pt-6 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {team.map((m) => (
            <article
              key={m.name}
              className="overflow-hidden rounded-[2rem] border border-border/60 bg-card shadow-sm"
            >
              <div className="aspect-[4/5] overflow-hidden bg-muted">
                <img
                  src={m.img}
                  alt={`Portrait of ${m.name}`}
                  width={800}
                  height={1000}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-extrabold text-foreground">{m.name}</h2>
                <p className="mt-1 text-sm font-semibold text-primary">{m.role}</p>

                <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                  {m.creds.map((c) => (
                    <li key={c} className="flex gap-2">
                      <GraduationCap className="mt-0.5 h-4 w-4 shrink-0 text-sage" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 rounded-2xl bg-muted/60 p-4">
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    Philosophy of care
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-foreground">{m.philosophy}</p>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  <span className="font-bold text-foreground">Off the clock:</span> {m.fact}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
