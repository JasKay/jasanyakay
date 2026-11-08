import { ProjectUsage } from "@/components/ProjectUsage";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { axiom } from "@/data/axiom";

export function AxiomFeature() {
  return <article className="axiom-feature">
    <Link to="/project/axiom" className="axiom-cover" aria-label="Explore Axiom, church presentation and planning software"><div className="axiom-cover-heading"><span>Axiom</span><span>Presentation & service planning</span></div><div className="axiom-product-frame"><div className="screen-chrome"><span /><span /><span /><p>Axiom Pro</p></div><img src="/images/axiom-studio.png" alt="Actual Axiom Pro presentation editor with service sections, slides, Preview, and Program panels" width="1600" height="1000" loading="lazy" /></div><div className="axiom-cover-foot"><span>A connected product system</span><span>Pro · Leader · AxiomU</span></div><span className="cover-open" aria-hidden="true"><ArrowUpRight size={24} strokeWidth={1} /></span></Link>
    <div className="axiom-feature-details"><div><p className="eyebrow">01 / Church technology</p><h3><Link to="/project/axiom">Axiom</Link></h3><p className="feature-subtitle">A considered system for the people behind the service.</p></div><div className="axiom-feature-summary"><p>{axiom.description}</p><ProjectUsage project="axiom" /><div className="feature-actions"><Link to="/project/axiom" className="text-link">Explore the project <ArrowUpRight size={15} aria-hidden="true" /></Link><a href={axiom.demoUrl} target="_blank" rel="noopener noreferrer" className="text-link secondary-text-link">Try the live demo <ArrowUpRight size={14} aria-hidden="true" /></a></div></div></div>
  </article>;
}
