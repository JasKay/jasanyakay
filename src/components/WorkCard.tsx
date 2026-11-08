import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { buildingProjects } from "@/data/buildingProjects";
import { ProductVisual } from "./ProductVisual";

export const WorkCard = ({ project, index }: { project: Project; index: number }) => {
  const productUrl = project.externalLink ?? buildingProjects.find(build => build.name === project.title)?.url;
  return (
  <article className="work-card">
    <Link to={`/project/${project.slug}`} className="project-art-link" aria-label={`Explore ${project.title} case study`}><ProductVisual slug={project.slug} /><span className="project-open" aria-hidden="true"><ArrowUpRight size={21} /></span></Link>
    <div className="project-meta"><span>{String(index + 1).padStart(2, "0")} / {project.category}</span><span>{project.status ?? project.timeline}</span></div>
    <h3><Link to={`/project/${project.slug}`}>{project.title}</Link><span>{project.timeline}</span></h3>
    <p className="project-headline">{project.headline ?? project.subtitle}</p>
    <div className="project-links">
      <Link to={`/project/${project.slug}`} className="text-link" aria-label={`Read ${project.title} case study`}>Inside the case study <ArrowRight size={15} aria-hidden="true" /></Link>
      {productUrl && <a href={productUrl} target="_blank" rel="noopener noreferrer" className="product-external" aria-label={`Open ${project.title} product in a new tab`}>{project.slug === "citiwatch" ? "Publication" : "Live product"} <ArrowUpRight size={13} aria-hidden="true" /></a>}
      {project.extensionLink && <a href={project.extensionLink} target="_blank" rel="noopener noreferrer" className="product-external">Get Edge extension <ArrowUpRight size={13} aria-hidden="true" /></a>}
    </div>
  </article>
);
};
