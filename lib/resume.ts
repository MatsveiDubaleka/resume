export const profile = {
  name: "Matsvei Dubaleka",
  title: "Front-end Engineer",
  summary:
    "I build product interfaces with React, Next.js, and TypeScript — community platforms, Web3 tools on TON, and full-stack web applications.",
  phone: "+375 (44) 715-11-03",
  phoneHref: "tel:+375447151103",
  email: "me@duboleko.ru",
  github: "MatsveiDubaleka",
  githubHref: "https://github.com/MatsveiDubaleka",
  telegram: "@MatsveiDubaleka",
  telegramHref: "https://t.me/MatsveiDubaleka",
} as const;

export const skillGroups = [
  {
    label: "Programming",
    items: ["JavaScript", "HTML5", "CSS3", "React", "Next.js", "Node.js"],
  },
  {
    label: "Version control",
    items: ["Git", "GitHub", "GitKraken"],
  },
  {
    label: "In recent work",
    items: [
      "TypeScript",
      "Vite",
      "Express",
      "MongoDB",
      "Firebase",
      "Tailwind CSS",
      "SCSS",
      "Material UI",
      "shadcn/ui",
      "TanStack Query",
      "TanStack Router",
      "Zod",
      "Valibot",
      "Redux Toolkit",
      "Supabase",
      "Drizzle",
      "S3",
      "Telegram API",
    ],
  },
] as const;

export const languages = [
  { name: "Belarusian", level: "Native" },
  { name: "Russian" },
  { name: "English", level: "B2" },
] as const;

export type Project = {
  name: string;
  description: string;
  meta?: string;
  note?: string;
  points?: readonly string[];
};

export type Role = {
  id: string;
  company: string;
  href?: string;
  hrefLabel?: string;
  title: string;
  dates: string;
  place: string;
  current: boolean;
  points: readonly string[];
  stack?: readonly string[];
  projects?: readonly Project[];
};

export const roles: readonly Role[] = [
  {
    id: "ogon",
    company: "Ogon.Team",
    href: "https://ogon.team",
    hrefLabel: "ogon.team",
    title: "Front-end Developer",
    dates: "Jun 2025 — Oct 2026",
    place: "Full-time, remote",
    current: true,
    points: [
      "Rewriting pages from client-side rendering to server-side rendering with Next.js.",
      "Improving SEO and increasing how many pages show up in Google Search.",
      "Building a messenger inside the platform.",
    ],
    stack: [
      "Vite",
      "React",
      "TypeScript",
      "Next.js",
      "Redux Toolkit",
      "Valibot",
      "Zod",
      "Supabase",
      "Drizzle",
      "Material UI",
      "Tailwind CSS",
      "SCSS Modules",
    ],
    projects: [
      {
        name: "Hub Ogon Team",
        description:
          "A hub for support, growth, and new connections — a place to be yourself.",
      },
      {
        name: "Ogon Team",
        description:
          "A branded community platform for engaging members, managing events, and monetizing a community in one app.",
      },
    ],
  },
  {
    id: "tonraffles",
    company: "TonRaffles",
    href: "https://tonraffles.app",
    hrefLabel: "tonraffles.app",
    title: "Front-end Developer",
    dates: "Apr 2025 — May 2026",
    place: "Part-time, remote",
    current: true,
    points: [
      "Migrating functions and interfaces from Web2 to Web3.",
      "Creating pages and integrating Web3 data.",
      "Adding API calls and caching them with TanStack Query.",
      "Defining schemas with TypeScript and Zod.",
      "Working with the Telegram API.",
    ],
    stack: [
      "Vite",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "TanStack Router",
      "TanStack Query",
      "Zod",
    ],
    projects: [
      {
        name: "TonID",
        description:
          "Digital identity on the TON blockchain, recognizable across the network.",
      },
      {
        name: "TonRaffles V2",
        description:
          "A grow-community ecosystem on TON: tools to launch and grow a project, or contribute to other products.",
      },
    ],
  },
  {
    id: "enrex",
    company: "Enrex",
    href: "https://enrex.io",
    hrefLabel: "enrex.io",
    title: "Full-Stack Developer",
    dates: "Dec 2022 — May 2025",
    place: "Hybrid, Vilnius, Lithuania",
    current: false,
    points: [
      "Built websites with Next.js and React.",
      "Set up ChatGPT: prompts, settings, and accuracy.",
      "Built an API with Node.js and Express — MongoDB models, schemas, services, and routes.",
      "Designed authentication with Firebase.",
      "Worked with S3 and Multer.",
      "Set and revised styles with CSS, SCSS, Material UI, Tailwind CSS, and SCSS Modules.",
    ],
    projects: [
      {
        name: "G4Green",
        description:
          "Collects a business’s sustainability information into one report and suggests how to become more sustainable.",
      },
      {
        name: "GreenHunting",
        description:
          "A community of sustainability experts who hunt greenwashing and share what they know.",
      },
      {
        name: "Starsicum",
        description:
          "Personalized astrological insights and natal chart readings — love, clarity, and purpose.",
      },
    ],
  },
  {
    id: "alijc",
    company: "AlIJC",
    title: "Full-Stack Developer",
    dates: "Mar 2021 — Jan 2022",
    place: "Minsk, Belarus",
    current: false,
    points: [
      "Developed websites.",
      "Tested the system through to completion.",
      "Assisted the team.",
    ],
    projects: [
      {
        name: "Keep IT",
        description:
          "A COVID web app for segmenting lung lesions. Sberbank, Moscow.",
        note: "Finalist of an international artificial intelligence competition. Mar — Nov 2021.",
        points: [
          "Developed the web app.",
          "Added a responsive layout.",
          "Maintained segmentation in the project.",
        ],
      },
    ],
  },
];

export const education = {
  school:
    "Belarusian State University of Informatics and Radioelectronics, Minsk Radio Engineering College (BSUIR MRC)",
  credential:
    "Diploma of vocational education in electronic computer equipment",
  dates: "Sep 2019 — Feb 2022",
  place: "Minsk, Belarus",
  subjects: [
    "Microcontroller programming",
    "Computer-aided design",
    "Basic electronics and radioelectronics",
    "Design of digital devices on integrated circuits",
  ],
  projects: [
    {
      name: "WLED",
      meta: "BSUIR MRC · Sep — Nov 2021 · Minsk",
      description: "Smart LED lighting for the home.",
      points: [
        "Programmed an ESP8266 microcontroller.",
        "Programmed an addressable LED strip on Arduino UNO.",
        "Developed the website for the LED strip.",
      ],
    },
    {
      name: "Timer on a microcontroller",
      meta: "BSUIR MRC · Nov 2021 — Mar 2022 · Minsk",
      description: "A timer built around a microcontroller.",
      points: [
        "Developed the element base for the controller.",
        "Designed the board in AutoCAD.",
        "Disassembled the components.",
      ],
    },
    {
      name: "3D motherboard layout",
      meta: "BSUIR MRC · Dec — May 2020 · Minsk",
      description: "Board layout for a motherboard.",
      points: [
        "Developed radio elements in Altium.",
        "Formed contact pads and tracks on the board.",
        "Routed the board.",
      ],
    },
  ],
} as const;

export const courses = [
  {
    id: "html-academy",
    name: "HTML Academy",
    href: "https://htmlacademy.ru",
    hrefLabel: "htmlacademy.ru",
    dates: "Dec 2020 — Jan 2021",
    place: "Minsk, Belarus",
    points: [
      "Studied the basic and advanced intensives.",
      "Built responsive layouts and automation.",
      "Made professional website layouts.",
    ],
  },
  {
    id: "rs-school",
    name: "RS School",
    organization: "EPAM",
    href: "https://rsschool.by",
    hrefLabel: "rsschool.by",
    dates: "Feb 2021 — Oct 2022",
    place: "Minsk, Belarus",
    points: [
      "Developed adaptive websites.",
      "Solved problems on Codewars.",
      "Learned the Document Object Model.",
    ],
    projects: [
      {
        name: "Wildlife",
        description: "A map of animal species that are disappearing.",
      },
      {
        name: "Virtual Piano",
        description: "An online piano you can play from the keyboard.",
      },
      {
        name: "Online Zoo",
        description:
          "A service for feeding animals online, with live streams from zoos.",
        points: [
          "Developed the websites.",
          "Maintained the live-streaming service.",
          "Tested the payment system.",
        ],
      },
    ],
  },
] as const;
