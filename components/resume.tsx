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
  sameAs: [profile.githubHref, profile.telegramHref],
  knowsLanguage: ["en", "ru", "be"],
};

export function Resume() {
  return (
    <>
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-10 focus:bg-surface focus:px-3 focus:py-2"
      >
        Skip to content
      </a>
      <div className="mx-auto w-full max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
        <header className="border-t-2 border-accent pt-8">
          <p className="font-mono text-[0.7rem] tracking-[0.2em] text-accent uppercase">
            {profile.title}
          </p>
          <h1 className="mt-3 font-serif text-[2.75rem] leading-none tracking-tight text-balance sm:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-5 max-w-prose text-base leading-relaxed text-muted">
            {profile.summary}
          </p>
          <address id="contact" className="mt-6 text-sm not-italic">
            <ul className="grid max-w-xl gap-x-8 gap-y-1.5 sm:grid-cols-2">
              <li className="grid grid-cols-[5.25rem_1fr] gap-2">
                <span className="text-faint">Phone</span>
                <a className="hover:text-accent" href={profile.phoneHref}>
                  {profile.phone}
                </a>
              </li>
              <li className="grid grid-cols-[5.25rem_1fr] gap-2">
                <span className="text-faint">Email</span>
                <a className="hover:text-accent" href={`mailto:${profile.email}`}>
                  {profile.email}
                </a>
              </li>
              <li className="grid grid-cols-[5.25rem_1fr] gap-2">
                <span className="text-faint">GitHub</span>
                <a
                  className="hover:text-accent"
                  href={profile.githubHref}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {profile.github}
                </a>
              </li>
              <li className="grid grid-cols-[5.25rem_1fr] gap-2">
                <span className="text-faint">Telegram</span>
                <a
                  className="hover:text-accent"
                  href={profile.telegramHref}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {profile.telegram}
                </a>
              </li>
            </ul>
          </address>
          <nav aria-label="Sections" className="mt-8 flex flex-wrap gap-x-5 gap-y-2 font-mono text-[0.7rem] tracking-[0.16em] text-faint uppercase">
            <a className="hover:text-accent" href="#experience">
              Experience
            </a>
            <a className="hover:text-accent" href="#skills">
              Skills
            </a>
            <a className="hover:text-accent" href="#education">
              Education
            </a>
            <a className="hover:text-accent" href="#courses">
              Courses
            </a>
          </nav>
        </header>

        <main id="content">
          <Section id="experience" index="01" title="Experience">
            <div className="space-y-12">
              {roles.map((role) => (
                <article key={role.id} id={role.id} className="scroll-mt-8">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 className="font-serif text-2xl tracking-tight">
                      {role.href ? (
                        <a
                          href={role.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline decoration-line underline-offset-4 hover:text-accent hover:decoration-accent"
                        >
                          {role.company}
                        </a>
                      ) : (
                        role.company
                      )}
                    </h3>
                    <p className="font-mono text-xs tracking-wide text-faint">
                      {role.dates}
                    </p>
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
                  <ul className="mt-4 space-y-1.5 text-[0.95rem] leading-relaxed">
                    {role.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span aria-hidden="true" className="mt-[0.65rem] h-px w-3 shrink-0 bg-accent" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  {role.stack ? (
                    <p className="mt-4 text-sm leading-relaxed text-muted">
                      <span className="text-foreground">Stack. </span>
                      {role.stack.join(", ")}
                    </p>
                  ) : null}
                  {role.projects ? (
                    <div className="mt-5 border-l border-line pl-4">
                      <p className="font-mono text-[0.65rem] tracking-[0.16em] text-faint uppercase">
                        Projects
                      </p>
                      <div className="mt-3 space-y-4">
                        {role.projects.map((project) => (
                          <ProjectBlock key={project.name} project={project} />
                        ))}
                      </div>
                    </div>
                  ) : null}
                </article>
              ))}
            </div>
          </Section>

          <Section id="skills" index="02" title="Skills">
            <dl className="space-y-4">
              {skillGroups.map((group) => (
                <div key={group.label} className="grid gap-1 sm:grid-cols-[9.5rem_1fr] sm:gap-6">
                  <dt className="text-sm text-faint">{group.label}</dt>
                  <dd className="text-[0.95rem] leading-relaxed">{group.items.join(", ")}</dd>
                </div>
              ))}
              <div className="grid gap-1 sm:grid-cols-[9.5rem_1fr] sm:gap-6">
                <dt className="text-sm text-faint">Spoken languages</dt>
                <dd className="text-[0.95rem] leading-relaxed">
                  {languages.map((language, index) => (
                    <span key={language.name}>
                      {index > 0 ? ", " : null}
                      {language.name}
                      {"level" in language ? (
                        <span className="text-muted"> ({language.level})</span>
                      ) : null}
                    </span>
                  ))}
                </dd>
              </div>
            </dl>
          </Section>

          <Section id="education" index="03" title="Education">
            <article>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="max-w-xl font-serif text-2xl leading-snug tracking-tight">
                  BSUIR MRC
                </h3>
                <p className="shrink-0 font-mono text-xs tracking-wide text-faint">
                  {education.dates}
                </p>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted">{education.school}</p>
              <p className="mt-2 text-[0.95rem]">{education.credential}</p>
              <p className="mt-1 text-sm text-muted">{education.place}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                <span className="text-foreground">Subjects. </span>
                {education.subjects.join(", ")}
              </p>
              <div className="mt-5 border-l border-line pl-4">
                <p className="font-mono text-[0.65rem] tracking-[0.16em] text-faint uppercase">
                  Projects
                </p>
                <div className="mt-3 space-y-4">
                  {education.projects.map((project) => (
                    <ProjectBlock key={project.name} project={project} />
                  ))}
                </div>
              </div>
            </article>
          </Section>

          <Section id="courses" index="04" title="Courses">
            <div className="space-y-12">
              {courses.map((course) => (
                <article key={course.id} id={course.id} className="scroll-mt-8">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 className="font-serif text-2xl tracking-tight">
                      <a
                        href={course.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline decoration-line underline-offset-4 hover:text-accent hover:decoration-accent"
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
                  <ul className="mt-4 space-y-1.5 text-[0.95rem] leading-relaxed">
                    {course.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span aria-hidden="true" className="mt-[0.65rem] h-px w-3 shrink-0 bg-accent" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  {"projects" in course ? (
                    <div className="mt-5 border-l border-line pl-4">
                      <p className="font-mono text-[0.65rem] tracking-[0.16em] text-faint uppercase">
                        Projects
                      </p>
                      <div className="mt-3 space-y-4">
                        {course.projects.map((project) => (
                          <ProjectBlock key={project.name} project={project} />
                        ))}
                      </div>
                    </div>
                  ) : null}
                </article>
              ))}
            </div>
          </Section>
        </main>

        <footer className="mt-16 border-t border-line pt-6 text-sm text-faint">
          <p>
            {profile.name}
            <span aria-hidden="true"> · </span>
            {profile.title}
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

function Section({
  id,
  index,
  title,
  children,
}: {
  id: string;
  index: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="scroll-mt-8 mt-16">
      <h2
        id={`${id}-heading`}
        className="mb-6 flex items-baseline gap-3 border-b border-line pb-2 font-mono text-[0.7rem] tracking-[0.2em] uppercase"
      >
        <span className="text-accent">{index}</span>
        <span>{title}</span>
      </h2>
      {children}
    </section>
  );
}

function ProjectBlock({ project }: { project: Project }) {
  return (
    <div>
      <h4 className="text-[0.95rem] font-medium">{project.name}</h4>
      {project.meta ? (
        <p className="mt-0.5 font-mono text-[0.68rem] tracking-wide text-faint">{project.meta}</p>
      ) : null}
      <p className="mt-1 text-sm leading-relaxed text-muted">{project.description}</p>
      {project.note ? <p className="mt-1 text-sm leading-relaxed">{project.note}</p> : null}
      {project.points ? (
        <ul className="mt-2 space-y-1 text-sm leading-relaxed text-muted">
          {project.points.map((point) => (
            <li key={point} className="flex gap-3">
              <span aria-hidden="true" className="mt-[0.55rem] h-px w-3 shrink-0 bg-accent" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
