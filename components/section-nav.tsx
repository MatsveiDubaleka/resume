const links = [
  {
    id: "experience",
    label: "Experience",
    className: "bg-coral/15 text-coral hover:bg-fill-coral hover:text-on-fill",
  },
  {
    id: "skills",
    label: "Skills",
    className: "bg-teal/15 text-teal hover:bg-fill-teal hover:text-on-fill",
  },
  {
    id: "education",
    label: "Education",
    className: "bg-indigo/15 text-indigo hover:bg-fill-indigo hover:text-on-fill",
  },
  {
    id: "courses",
    label: "Courses",
    className: "bg-amber/15 text-amber hover:bg-fill-amber hover:text-on-fill",
  },
] as const;

export function SectionNav() {
  return (
    <nav
      aria-label="Sections"
      className="sticky top-3 z-20 mt-8 flex max-w-full flex-nowrap gap-2 overflow-x-auto rounded-full border border-line bg-surface/85 p-1.5 shadow-sm backdrop-blur print:static print:border-0 print:bg-transparent print:p-0 print:shadow-none"
    >
      {links.map((link) => (
        <a
          key={link.id}
          href={`#${link.id}`}
          className={`shrink-0 rounded-full px-3 py-1.5 font-mono text-[0.68rem] tracking-[0.14em] whitespace-nowrap uppercase transition ${link.className}`}
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}
