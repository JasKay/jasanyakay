import { buildingProjects } from "@/data/buildingProjects";
import { useState } from "react";
import { BuildCollection } from "@/components/BuildCollection";
import { Layout } from "@/components/Layout";
import { projects } from "@/data/projects";
import { AxiomFeature } from "@/components/AxiomFeature";
import { WorkCard } from "@/components/WorkCard";

const orderedProjects = ["ede", "gradezy", "bracket", "citiwatch"].map(slug => projects.find(project => project.slug === slug)!).filter(Boolean);

const categories = [
  "All",
  "Church Tech",
  "Learning & games",
  ...Array.from(new Set(projects.map((p) => p.category).filter(Boolean))),
];

const Work = () => {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? orderedProjects : orderedProjects.filter((p) => p.category === active);

  const axiomVisible = active === "All" || active === "Church Tech";
  const buzzerVisible = active === "All" || active === "Learning & games";
  const visibleCount = filtered.length + (axiomVisible ? 1 : 0) + (buzzerVisible ? 1 : 0);

  return (
    <Layout>
      <header className="page-intro"><p className="eyebrow">The selected portfolio</p><h1>A body of work.<br /><em>A way of thinking.</em></h1><p>From financial decisions to city services: the problems I chose, the trade-offs I made, and what happened next.</p></header>

      <div className="work-page-sections"><a href="#case-studies">Selected projects <span>06</span></a><a href="#more-builds">More builds <span>{String(buildingProjects.length).padStart(2, "0")}</span></a></div>
      <section id="case-studies" aria-labelledby="case-studies-heading">
      <h2 id="case-studies-heading" className="eyebrow mb-7">Selected projects & case studies</h2>
      <div className="flex flex-wrap gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat!)}
            aria-pressed={active === cat}
            className={`text-xs px-3 py-1.5 border transition-colors ${
              active === cat
                ? "bg-foreground text-background border-foreground"
                : "border-border text-muted-foreground hover:text-foreground"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <p className="text-xs text-muted-foreground mb-5" role="status">{visibleCount} {visibleCount === 1 ? "project" : "projects"}{active !== "All" ? ` · ${active}` : ""}</p>
      <h2 className="sr-only">Project case studies</h2>
      {axiomVisible && <div className="mb-14"><AxiomFeature /></div>}
      <div className="project-grid">
{buzzerVisible && <article className="work-card"><a href="https://hcascquiz.vercel.app" target="_blank" rel="noopener noreferrer" className="project-art-link" aria-label="Explore Buzzer"><div className="product-visual visual-bracket" aria-hidden="true"><span className="visual-label">Learn. Play. Compete.</span><div className="bracket-art"><div><span>Quiz practice & competition</span><b>Buzzer</b><span className="visual-arrow">→</span></div></div><span className="visual-footnote">LEARNING / QUIZ COMPETITION</span></div></a><div className="project-meta"><span>02 / Learning & games</span><span>Independent product</span></div><h3><a href="https://hcascquiz.vercel.app" target="_blank" rel="noopener noreferrer">Buzzer</a><span>2026</span></h3><p className="project-headline">A quiz platform bringing structured learning, solo practice, and multiplayer competition together, inspired by the Honda Campus All-Star Challenge.</p><div className="project-links"><a href="https://hcascquiz.vercel.app" target="_blank" rel="noopener noreferrer" className="text-link">Explore Buzzer ↗</a></div></article>}

        {filtered.map((project) => <WorkCard key={project.slug} project={project.slug === "citiwatch" ? {...project, title: "Citiwatch Cameras"} : project} index={orderedProjects.indexOf(project) + 2} />)}
      </div>


      </section>
      <BuildCollection />
    </Layout>
  );
};

export default Work;
