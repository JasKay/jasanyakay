import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Layout } from "@/components/Layout";
import { projects } from "@/data/projects";
import { buildingProjects } from "@/data/buildingProjects";
import { caseNarratives } from "@/data/caseNarratives";

export default function ProjectPage() {
  const { slug } = useParams<{ slug: string }>();
  if (slug === "axiom") return <Navigate to="/project/axiom" replace />;
  const project = projects.find(item => item.slug === slug);
  const story = slug ? caseNarratives[slug] : undefined;
  if (!project || !story) return <Layout><h1 className="text-4xl mb-5">Case study not found.</h1><Link to="/work" className="text-link">← Back to work</Link></Layout>;
  const url = project.externalLink ?? buildingProjects.find(item=>item.name===project.title)?.url;
  const minutes = Math.max(1, Math.ceil(JSON.stringify(story).split(/\s+/).length / 220));
  const next = projects[(projects.indexOf(project) + 1) % projects.length];

  return <Layout><article className="case-story">
    <Link to="/work#case-studies" className="text-link mb-9">← Selected work</Link>
    <header className="case-story-header"><p className="eyebrow">{project.title} / {project.category}</p><h1>{story.title}</h1><p className="case-story-hook">{story.hook}</p><div className="case-story-meta"><div><span>My role</span><p>{project.role}</p></div><div><span>When</span><p>{project.timeline}</p></div><div><span>Reading time</span><p>{minutes} min</p></div>{url && <a href={url} target="_blank" rel="noopener noreferrer" className="text-link">{slug === "citiwatch" ? "Related publication" : "View the product"}<ArrowUpRight size={15} aria-hidden="true" /></a>}{project.extensionLink && <a href={project.extensionLink} target="_blank" rel="noopener noreferrer" className="text-link">Get Edge extension<ArrowUpRight size={15} aria-hidden="true" /></a>}</div></header>
    <nav className="case-story-nav" aria-label="Case study sections"><a href="#tension">The tension</a><a href="#decisions">The decisions</a><a href="#delivery">The build</a><a href="#outcomes">The outcome</a></nav>
    <section id="tension" className="case-story-section"><p className="eyebrow">01 / The tension</p><div>{story.tension.map(text=><p key={text}>{text}</p>)}</div></section>
    <section id="decisions" className="case-story-section"><p className="eyebrow">02 / The decisions</p><div className="case-decisions">{story.decisions.map((decision,index)=><div key={decision.title}><span className="case-decision-number">0{index+1}</span><h2>{decision.title}</h2><p>{decision.choice}</p><div className="case-tradeoff"><span>The trade-off</span><p>{decision.tradeoff}</p></div></div>)}</div></section>
    <section id="delivery" className="case-story-section"><p className="eyebrow">03 / What I built</p><div><p>{story.delivery}</p></div></section>
    <section id="outcomes" className="case-story-section"><p className="eyebrow">04 / What changed</p><div><div className="case-outcome-grid">{story.outcomes.map(outcome=><div key={outcome.label}><strong>{outcome.value}</strong><h2>{outcome.label}</h2><p>{outcome.detail}</p></div>)}</div><div className="case-reflection"><h2>The lesson I’m taking forward.</h2><p>{story.reflection}</p></div></div></section>
    <nav className="case-story-end" aria-label="More work"><Link to="/project/axiom" className="text-link">Explore Axiom <ArrowUpRight size={15} aria-hidden="true" /></Link><Link to={`/project/${next.slug}`} className="text-link">Next: {next.title}<ArrowRight size={15} aria-hidden="true" /></Link></nav>
  </article></Layout>;
}
