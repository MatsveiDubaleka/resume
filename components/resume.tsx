import { PortraitGallery } from "@/components/portrait-gallery";
import { SectionNav } from "@/components/section-nav";
import {
  courses,
  education,
  languages,
  profile,
  roles,
  skillGroups,
  type Project,
} from "@/lib/resume";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.title,
  email: profile.email,
  telephone: "+375447151103",
  image: "/portraits/studio.jpg",
  sameAs: [profile.githubHref, profile.telegramHref],
  knowsLanguage: ["en", "ru", "be"],
};

const roleStyles: Record<string, { bar: string; hover: string }> = {
  ogon: { bar: "bg-fill-coral", hover: "hover:border-coral/50" },
  tonraffles: { bar: "bg-fill-teal", hover: "hover:border-teal/50" },
  enrex: { bar: "bg-fill-green", hover: "hover:border-green/50" },
  alijc: { bar: "bg-fill-amber", hover: "hover:border-amber/50" },
};

const chipStyles = [
  "bg-coral/10 ring-coral/25 hover:bg-coral/20",
  "bg-amber/15 ring-amber/30 hover:bg-amber/25",
  "bg-teal/10 ring-teal/25 hover:bg-teal/20",
  "bg-indigo/10 ring-indigo/25 hover:bg-indigo/20",
] as const;

export function Resume() {
  return (
    <>
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-30 focus:bg-surface focus:px-3 focus:py-2"
      >
        Skip to content
      </a>
      <div className="mx-auto w-full max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
        <header className="flex flex-col gap-8 sm:flex-row sm:items-start">
          <PortraitGallery />
          <div className="min-w-0 flex-1">
            <p className="font-mono text-[0.7rem] tracking-[0.2em] text-coral uppercase">
              {profile.title}
            </p>
            <h1 className="mt-3 font-serif text-5xl leading-none tracking-tight text-balance sm:text-6xl">
              {profile.name}
            </h1>
            <p className="mt-5 max-w-prose text-base leading-relaxed text-muted">{profile.summary}</p>
            <address id="contact" className="mt-6 text-sm not-italic">
              <ul className="grid max-w-xl gap-x-8 gap-y-1.5 sm:grid-cols-2">
                <ContactRow label="Phone" href={profile.phoneHref}>
                  {profile.phone}
                </ContactRow>
                <ContactRow label="Email" href={`mailto:${profile.email}`}>
                  {profile.email}
                </ContactRow>
                <ContactRow label="GitHub" href={profile.githubHref} external>
                  {profile.github}
                </ContactRow>
                <ContactRow label="Telegram" href={profile.telegramHref} external>
                  {profile.telegram}
                </ContactRow>
              </ul>
            </address>
          </div>
        </header>

        <SectionNav />

        <main id="content">
          <Section id="experience" index="01" title="Experience" tone="text-coral">
            <div className="space-y-5">
              {roles.map((role) => {
                const tone = roleStyles[role.id] ?? roleStyles.ogon;
                return (
                  <article
                    key={role.id}
                    id={role.id}
                    className={`scroll-mt-24 rounded-2xl border border-line bg-surface/80 p-5 shadow-sm transition motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-md ${tone.hover}`}
                  >
                    <div className={`mb-4 h-1.5 w-14 rounded-full ${tone.bar}`} />
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                      <h3 className="font-serif text-2xl tracking-tight">
                        {role.href ? (
                          <a
                            href={role.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline decoration-line underline-offset-4 hover:text-coral hover:decoration-coral"
                          >
                            {role.company}
                          </a>
                        ) : (
                          role.company
                        )}
                      </h3>
                      <p className="font-mono text-xs tracking-wide text-faint">{role.dates}</p>
                    </div>
                    <p className="mt-1 text-sm text-muted">
                      {role.title}
                      <span aria-hidden="true"> · </span>
                      {role.place}
                      {role.hrefLabel ? (
                        <>
                          <span aria-hidden="true"> · </span>
                          {role.hrefLabel}
                        </>
                      ) : null}
                    </p>
                    <BulletList items={role.points} marker={tone.bar} />
                    {role.stack ? (
                      <ul className="mt-4 flex flex-wrap gap-2">
                        {role.stack.map((item, index) => (
                          <li key={item}>
                            <span
                              className={`inline-block rounded-full px-2.5 py-1 text-xs ring-1 transition motion-safe:hover:-translate-y-0.5 ${chipStyles[index % chipStyles.length]}`}
                            >
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                    {role.projects ? (
                      <div className="mt-5">
                        <p className="font-mono text-[0.65rem] tracking-[0.16em] text-faint uppercase">
                          Projects
                        </p>
                        <div className="mt-3 grid gap-3 sm:grid-cols-2">
                          {role.projects.map((project) => (
                            <ProjectBlock key={project.name} project={project} marker={tone.bar} />
                          ))}
                        </div>
                      </div>
                    ) : null}
                  </article>
                );
              })}
            </div>
          </Section>

          <Section id="skills" index="02" title="Skills" tone="text-teal">
            <dl className="space-y-6">
              {skillGroups.map((group) => (
                <div key={group.label}>
                  <dt className="text-sm text-faint">{group.label}</dt>
                  <dd className="mt-2">
                    <ul className="flex flex-wrap gap-2">
                      {group.items.map((item, index) => (
                        <li key={item}>
                          <span
                            className={`inline-block rounded-full px-2.5 py-1 text-sm ring-1 transition motion-safe:hover:-translate-y-0.5 ${chipStyles[index % chipStyles.length]}`}
                          >
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
              ))}
              <div>
                <dt className="text-sm text-faint">Spoken languages</dt>
                <dd className="mt-2 flex flex-wrap gap-2">
                  {languages.map((language, index) => (
                    <span
                      key={language.name}
                      className={`inline-block rounded-full px-2.5 py-1 text-sm ring-1 ${chipStyles[index % chipStyles.length]}`}
                    >
                      {language.name}
                      {"level" in language ? <span className="text-muted"> · {language.level}</span> : null}
                    </span>
                  ))}
                </dd>
              </div>
            </dl>
          </Section>

          <Section id="education" index="03" title="Education" tone="text-indigo">
            <article className="rounded-2xl border border-line bg-surface/80 p-5 shadow-sm transition motion-safe:hover:-translate-y-0.5 motion-safe:hover:border-indigo/40 motion-safe:hover:shadow-md">
              <div className="mb-4 h-1.5 w-14 rounded-full bg-fill-indigo" />
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="font-serif text-2xl tracking-tight">BSUIR MRC</h3>
                <p className="shrink-0 font-mono text-xs tracking-wide text-faint">{education.dates}</p>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted">{education.school}</p>
              <p className="mt-2 text-[0.95rem]">{education.credential}</p>
              <p className="mt-1 text-sm text-muted">{education.place}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {education.subjects.map((subject, index) => (
                  <li key={subject}>
                    <span
                      className={`inline-block rounded-full px-2.5 py-1 text-sm ring-1 ${chipStyles[index % chipStyles.length]}`}
                    >
                      {subject}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-5">
                <p className="font-mono text-[0.65rem] tracking-[0.16em] text-faint uppercase">Projects</p>
                <div className="mt-3 grid gap-3">
                  {education.projects.map((project) => (
                    <ProjectBlock key={project.name} project={project} marker="bg-fill-indigo" />
                  ))}
                </div>
              </div>
            </article>
          </Section>

          <Section id="courses" index="04" title="Courses" tone="text-amber">
            <div className="space-y-5">
              {courses.map((course) => (
                <article
                  key={course.id}
                  id={course.id}
                  className="scroll-mt-24 rounded-2xl border border-line bg-surface/80 p-5 shadow-sm transition motion-safe:hover:-translate-y-0.5 motion-safe:hover:border-amber/40 motion-safe:hover:shadow-md"
                >
                  <div className="mb-4 h-1.5 w-14 rounded-full bg-fill-amber" />
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 className="font-serif text-2xl tracking-tight">
                      <a
                        href={course.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline decoration-line underline-offset-4 hover:text-amber hover:decoration-amber"
                      >
                        {course.name}
                      </a>
                      {"organization" in course ? (
                        <span className="text-muted"> · {course.organization}</span>
                      ) : null}
                    </h3>
                    <p className="font-mono text-xs tracking-wide text-faint">{course.dates}</p>
                  </div>
                  <p className="mt-1 text-sm text-muted">
                    {course.place}
                    <span aria-hidden="true"> · </span>
                    {course.hrefLabel}
                  </p>
                  <BulletList items={course.points} marker="bg-fill-amber" />
                  {"projects" in course ? (
                    <div className="mt-5">
                      <p className="font-mono text-[0.65rem] tracking-[0.16em] text-faint uppercase">
                        Projects
                      </p>
                      <div className="mt-3 grid gap-3 sm:grid-cols-2">
                        {course.projects.map((project) => (
                          <ProjectBlock key={project.name} project={project} marker="bg-fill-amber" />
                        ))}
                      </div>
                    </div>
                  ) : null}
                </article>
              ))}
            </div>
          </Section>
        </main>

        <footer className="mt-16 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-6 text-sm text-faint">
          <p>
            {profile.name}
            <span aria-hidden="true"> · </span>
            {profile.title}
          </p>
          <p className="flex gap-3" aria-hidden="true">
            <span className="size-2 rounded-full bg-fill-coral" aria-hidden="true" />
            <span className="size-2 rounded-full bg-fill-amber" aria-hidden="true" />
            <span className="size-2 rounded-full bg-fill-teal" aria-hidden="true" />
            <span className="size-2 rounded-full bg-fill-indigo" aria-hidden="true" />
          </p>
        </footer>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
    </>
  );
}

function ContactRow({
  label,
  href,
  external,
  children,
}: {
  label: string;
  href: string;
  external?: boolean;
  children: React.ReactNode;
}) {
  return (
    <li className="grid grid-cols-[5.25rem_1fr] gap-2">
      <span className="text-faint">{label}</span>
      <a
        className="hover:text-coral"
        href={href}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    </li>
  );
}

function Section({
  id,
  index,
  title,
  tone,
  children,
}: {
  id: string;
  index: string;
  title: string;
  tone: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="mt-14 scroll-mt-24">
      <h2
        id={`${id}-heading`}
        className="mb-5 flex items-baseline gap-3 font-mono text-[0.7rem] tracking-[0.2em] uppercase"
      >
        <span className={tone}>{index}</span>
        <span>{title}</span>
      </h2>
      {children}
    </section>
  );
}

function BulletList({ items, marker }: { items: readonly string[]; marker: string }) {
  return (
    <ul className="mt-4 space-y-1.5 text-[0.95rem] leading-relaxed">
      {items.map((point) => (
        <li key={point} className="flex gap-3">
          <span aria-hidden="true" className={`mt-[0.55rem] size-1.5 shrink-0 rounded-full ${marker}`} />
          <span>{point}</span>
        </li>
      ))}
    </ul>
  );
}

function ProjectBlock({ project, marker }: { project: Project; marker: string }) {
  return (
    <div className="rounded-xl border border-line bg-background/70 p-4 transition motion-safe:hover:-translate-y-0.5 motion-safe:hover:border-foreground/15">
      <h4 className="flex items-center gap-2 text-[0.95rem] font-medium">
        <span aria-hidden="true" className={`size-1.5 rounded-full ${marker}`} />
        {project.name}
      </h4>
      {project.meta ? (
        <p className="mt-1 font-mono text-[0.68rem] tracking-wide text-faint">{project.meta}</p>
      ) : null}
      <p className="mt-1 text-sm leading-relaxed text-muted">{project.description}</p>
      {project.note ? <p className="mt-1 text-sm leading-relaxed">{project.note}</p> : null}
      {project.points ? <BulletList items={project.points} marker={marker} /> : null}
    </div>
  );
}
