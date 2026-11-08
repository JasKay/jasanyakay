export type BuildingProject = {
  name: string;
  description?: string;
  status: "BUILDING" | "PROTOTYPE" | "EXPERIMENT" | "LIVE";
  url?: string;
  links?: { label: string; url: string }[];
  icon: string;
};

export const buildingGroups: { title: string; projects: BuildingProject[] }[] = [
  {
    title: "Apps",
    projects: [
      {
        name: "Axiom",
        description: "Presentation, service planning, and connected church workflows.",
        url: "https://useaxiom.org/",
        status: "BUILDING",
        icon: "A",
      },
      {
        name: "Ede",
        description: "An experiment in African-language AI and NLP.",
        status: "EXPERIMENT",
        url: "https://ede-kay-jasanyas-projects.vercel.app/?kind=word&q=kind",
        icon: "E",
      },
      {
        name: "Gradezy",
        description: "Tools for assessment review and workflow automation.",
        status: "BUILDING",
        url: "https://gradezy-website.vercel.app/",
        icon: "G",
      },
      {
        name: "OpsFlow",
        description: "Tools for education operations.",
        url: "https://opsflow-rosy.vercel.app/",
        status: "BUILDING",
        icon: "O",
      },
    ],
  },
  {
    title: "Extensions",
    projects: [
      {
        name: "CareerFill",
        description: "Tools for making the career application process easier.",
        status: "LIVE",
        links: [
          {
            label: "Chrome Web Store",
            url: "https://chromewebstore.google.com/detail/careerfill/epjobojmofeagcflodnhnhmbggmjegpd",
          },
          {
            label: "Microsoft Edge Add-ons",
            url: "https://microsoftedge.microsoft.com/addons/detail/careerfill/dcohagjpgmcijgakkkeocggjdookebcg",
          },
        ],
        icon: "C",
      },
    ],
  },
  {
    title: "In Progress",
    projects: [
      {
        name: "Paperly",
        status: "BUILDING",
        url: "https://paperly-peach.vercel.app/",
        icon: "P",
      },
      {
        name: "Ven Studio",
        status: "BUILDING",
        url: "https://venstudio-mu.vercel.app/",
        icon: "V",
      },
    ],
  },
];

export const buildingProjects = buildingGroups.flatMap((group) => group.projects);
