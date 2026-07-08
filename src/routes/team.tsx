import { createFileRoute } from "@tanstack/react-router";
import { ImageIcon, Sparkles } from "lucide-react";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Meet the Team — Paramount Pediatrics" },
      {
        name: "description",
        content:
          "Meet the pediatricians, nurses, therapists, and support staff who care for kids and families at Paramount Pediatrics in Surrey.",
      },
      { property: "og:title", content: "Meet the Team — Paramount Pediatrics" },
      {
        property: "og:description",
        content:
          "Our multidisciplinary team of pediatricians, allied health professionals, and support staff.",
      },
    ],
  }),
  component: TeamPage,
});

type Member = {
  name: string;
  role: string;
  creds?: string;
  bio: string;
};

type Group = {
  title: string;
  blurb?: string;
  members: Member[];
};

const groups: Group[] = [
  {
    title: "Pediatricians",
    blurb: "Board-certified pediatricians providing newborn and general pediatric care.",
    members: [
      {
        name: "Dr. Kevin Ansah",
        role: "Pediatrics & Newborn Care",
        creds: "FRCPC, MB ChB, BSc (Hons)",
        bio: "Dr. Ansah is a UK-trained, Canadian-certified and fully licensed pediatrician with a special interest in newborn care and general pediatrics.",
      },
      {
        name: "Dr. Isaac M. Elias",
        role: "Pediatrics & Newborn Care",
        creds: "FRCPC, MD, MSc, MA",
        bio: "Dr. Elias is a Vancouver-trained pediatrician who completed his Pediatrics training at BC Children's Hospital before joining Paramount.",
      },
      {
        name: "Dr. Alexandra Lowry",
        role: "Pediatrics & Newborn Care",
        creds: "FRCPC, MD",
        bio: "Dr. Lowry completed both her medical school and Pediatrics Residency at the University of British Columbia.",
      },
      {
        name: "Dr. Jimmy Abraham",
        role: "Pediatrics & Newborn Care",
        creds: "FRCPC, MD",
        bio: "Dr. Abraham is a dedicated pediatrician with over 10 years of experience providing compassionate, family-centered care.",
      },
    ],
  },
  {
    title: "Allied Health & Therapy",
    blurb: "Specialists who work alongside our physicians to support your child's whole health.",
    members: [
      {
        name: "Michele Shilvock",
        role: "Behaviour Analyst",
        bio: "Michele is a Board Certified Behaviour Analyst who has worked in the field of autism and family support for many years.",
      },
      {
        name: "Dr. Prabhleen Sandhu",
        role: "Clinical Psychologist",
        creds: "D.Clin.Psy",
        bio: "Dr. Sandhu is a UK-trained Clinical Psychologist currently practicing at Paramount Pediatrics.",
      },
      {
        name: "Hilary Evans",
        role: "Canadian Certified Counsellor",
        bio: "Hilary is a clinical counsellor supporting children and families through emotional, behavioural, somatic, and relationship concerns.",
      },
      {
        name: "Caroline Abedrabboh",
        role: "Psychiatric Nurse Specialist",
        bio: "Caroline has been a registered nurse for 15 years and has spent her entire nursing career in pediatrics.",
      },
      {
        name: "Jessy Jagpal",
        role: "Respiratory Therapist",
        bio: "Jessy is a Respiratory Therapist who also works at BC Women's and Children's Hospital in Vancouver.",
      },
      {
        name: "Shivali Lekhi",
        role: "Respiratory Therapist",
        bio: "Shivali is a Respiratory Therapist who also currently works at BC Women's and Children's Hospital in Vancouver.",
      },
      {
        name: "Soleina Karamali",
        role: "Registered Dietitian",
        bio: "Soleina is a Registered Dietitian of British Columbia and graduated with honours from the University of British Columbia.",
      },
      {
        name: "Vikki Lalari",
        role: "Registered Dietitian",
        bio: "Vikki is a Registered Dietitian with over 20 years of experience in pediatric nutrition.",
      },
    ],
  },
  {
    title: "Nursing & Newborn Support",
    blurb: "Nurses and lactation support for babies and new parents.",
    members: [
      {
        name: "Cheryl Podgornik",
        role: "Registered Nurse",
        bio: "Cheryl graduated from Camosun College in Victoria, B.C. as a Registered Nurse in 1990 and has spent decades caring for patients.",
      },
      {
        name: "Leslie Parker",
        role: "Lactation Consultant",
        bio: "Leslie is a Registered Nurse specialized in newborn care and an International Board Certified Lactation Consultant (IBCLC).",
      },
      {
        name: "Sheridan Pavich",
        role: "Ready Set Baby — Prenatal Classes",
        bio: "Sheridan has been a Maternity and Labour & Delivery Nurse for the past 10 years and leads our prenatal education classes.",
      },
    ],
  },
  {
    title: "Administration & Office",
    blurb: "The friendly faces who keep the clinic running and appointments on track.",
    members: [
      {
        name: "Erica Ansah",
        role: "Financial Manager",
        bio: "Together with her husband, Dr. Kevin Ansah, Erica has been instrumental in shaping the mission of Paramount Pediatrics.",
      },
      {
        name: "Nicole Haughian",
        role: "Office Manager",
        bio: "Nicole started with Paramount Pediatrics in April 2019 as a Medical Office Assistant and now plays an integral role in office leadership.",
      },
      {
        name: "Jasmeet Kaur",
        role: "Medical Office Assistant",
        bio: "Jasmeet recently moved to BC from Ontario and is one of our welcoming MOAs at the front desk.",
      },
      {
        name: "Melyssa Dumond",
        role: "Medical Office Assistant",
        bio: "Melyssa has been a Medical Office Assistant for 5 years and is a proud mom.",
      },
    ],
  },
];

function PhotoPlaceholder({ name }: { name: string }) {
  return (
    <div
      className="flex aspect-[4/5] w-full items-center justify-center bg-gradient-to-br from-secondary/50 via-muted to-primary/10"
      role="img"
      aria-label={`Photo placeholder for ${name}`}
    >
      <div className="flex flex-col items-center gap-2 text-muted-foreground/70">
        <ImageIcon className="h-10 w-10" strokeWidth={1.5} />
        <span className="text-xs font-semibold uppercase tracking-widest">Photo coming soon</span>
      </div>
    </div>
  );
}

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
            Meet our team
          </span>
          <h1 className="mt-5 text-4xl font-black tracking-tight text-foreground sm:text-5xl">
            The people who'll know your child's name.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Paramount Pediatrics is a multidisciplinary team of pediatricians, allied health
            professionals, nurses, and support staff — all working together to promote the good
            health of your child.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 pb-20 pt-6 sm:px-6 lg:px-8">
        {groups.map((group) => (
          <section key={group.title} className="mt-12 first:mt-0">
            <div className="mb-8 max-w-2xl">
              <h2 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
                {group.title}
              </h2>
              {group.blurb && (
                <p className="mt-2 text-base text-muted-foreground">{group.blurb}</p>
              )}
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {group.members.map((m) => (
                <article
                  key={m.name}
                  className="flex flex-col overflow-hidden rounded-[1.75rem] border border-border/60 bg-card shadow-sm transition hover:shadow-md"
                >
                  <PhotoPlaceholder name={m.name} />
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="text-lg font-extrabold text-foreground">{m.name}</h3>
                    <p className="mt-1 text-sm font-semibold text-primary">{m.role}</p>
                    {m.creds && (
                      <p className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                        {m.creds}
                      </p>
                    )}
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.bio}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
