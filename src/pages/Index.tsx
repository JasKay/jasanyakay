import { ProjectUsage } from "@/components/ProjectUsage";
import { Link } from "react-router-dom";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { OriginPalette } from "@/components/OriginPalette";
import { Layout } from "@/components/Layout";
import { WorkCard } from "@/components/WorkCard";
import { AxiomFeature } from "@/components/AxiomFeature";
import { selectedWork } from "@/data/projects";

const perspectives = [
  { title: "Begin with the real question.", body: "Three years playing for Morgan State in the Honda Campus All-Star Challenge shaped Buzzer: a place to learn, practise, and compete through quiz-based play.", to: "/work#more-builds", label: "Discovery & direction" },
  { title: "Understand the system around it.", body: "City data becomes useful when it connects to an operational decision. My civic work brings analysis, geographic priorities, and the people responsible for action together.", to: "/project/citiwatch", label: "Systems & decisions" },
  { title: "Stay close to the making.", body: "From Axiom’s presentation workspace to small browser extensions, building keeps me close to the details that shape how a product feels and works.", to: "/work#more-builds", label: "Craft & execution" },
];

export default function Index() {
  const visibleProjects = selectedWork.filter(project => project.slug !== "bracket").slice(0, 1);

  return <Layout>
    <section className="premium-hero" aria-labelledby="intro-title">
      <div className="premium-hero-top"><p className="eyebrow">Kay Jasanya · Product, data & systems</p></div>
      <h1 id="intro-title">Clarity in thought.<br /><em>Care in the making.</em></h1>
      <div className="premium-hero-bottom"><p>I’m Kay, a product leader with an engineer’s instinct.<br className="hidden sm:block" /> I turn complex problems into thoughtful products —<br className="hidden sm:block" /> across data, civic systems, fintech, and applied AI.</p><OriginPalette /></div>
      <a className="hero-scroll" href="#selected-work"><span>Explore selected work</span><ArrowDown size={16} strokeWidth={1} aria-hidden="true" /></a>
    </section>

    <section id="selected-work" className="premium-work" aria-labelledby="work-heading"><div className="section-title-line"><h2 id="work-heading" className="eyebrow">Selected work</h2><span>01 — {String(visibleProjects.length + 2).padStart(2, "0")}</span></div><AxiomFeature />
      <div className="portfolio-filter"><p className="eyebrow">Further selected work</p><Link to="/work" className="text-link">See all projects <ArrowUpRight size={14} aria-hidden="true" /></Link></div><div className="project-grid"><article className="work-card"><a className="project-art-link" href="https://hcascquiz.vercel.app" target="_blank" rel="noopener noreferrer" aria-label="Explore Buzzer"><div className="product-visual visual-bracket" aria-hidden="true"><span className="visual-label">Learn. Play. Compete.</span><div className="bracket-art"><div><span>Quiz practice & competition</span><b>Buzzer</b><span className="visual-arrow">→</span></div></div><span className="visual-footnote">LEARNING / QUIZ COMPETITION</span></div></a><div className="project-meta"><span>02 / Learning & games</span><span>Independent product</span></div><h3><a href="https://hcascquiz.vercel.app" target="_blank" rel="noopener noreferrer">Buzzer</a><span>2026</span></h3><p className="project-headline">A quiz platform bringing structured learning, solo practice, and multiplayer competition together, inspired by the Honda Campus All-Star Challenge.</p><ProjectUsage project="buzzer" /><div className="project-links"><a href="https://hcascquiz.vercel.app" target="_blank" rel="noopener noreferrer" className="text-link">Explore Buzzer <ArrowUpRight size={15} aria-hidden="true" /></a></div></article>{visibleProjects.map((project,index)=><WorkCard key={project.slug} project={project} index={index+2} />)}</div><div className="all-work-link"><Link to="/work" className="text-link">View the complete portfolio <ArrowUpRight size={15} aria-hidden="true" /></Link></div>
    </section>

    <section className="premium-about" aria-labelledby="about-heading"><p className="eyebrow">A little perspective</p><div className="premium-about-grid"><h2 id="about-heading">Different disciplines.<br /><em>One considered approach.</em></h2><div><p>Engineering taught me to understand the system. Data taught me to question the evidence. Product taught me to care about what people can actually do with both.</p><p>That thread runs from enterprise technology at Morgan Stanley and Oracle to public-sector data products and the independent tools I build today.</p><Link to="/resume" className="text-link">Explore my résumé <ArrowUpRight size={15} aria-hidden="true" /></Link></div></div><div className="editorial-evidence"><div><strong>41K+</strong><p>city service records analyzed</p></div><div><strong>15+</strong><p>agencies supported by reporting</p></div><div><strong>3 years</strong><p>of HCASC experience behind Buzzer</p></div></div></section>

    <section className="premium-perspectives" aria-labelledby="perspectives-heading"><div className="section-title-line"><h2 id="perspectives-heading" className="eyebrow">Principles, put into practice</h2><span>A way of working</span></div><div className="field-note-grid">{perspectives.map((note,index)=><article key={note.to}><span className="note-number">0{index+1}</span><h3>{note.title}</h3><p>{note.body}</p><Link to={note.to} className="text-link">{note.label}<ArrowUpRight size={15} aria-hidden="true" /></Link></article>)}</div></section>

    <aside className="collection-home-link"><div><p className="eyebrow">There’s more in the collection</p><h2>Tools, experiments,<br /><em>and things taking shape.</em></h2></div><Link to="/work#more-builds" className="text-link">Explore all builds <ArrowUpRight size={16} aria-hidden="true" /></Link></aside>

    <section className="research-home" aria-labelledby="research-home-heading">
      <p className="eyebrow">Research / Beyond the product</p>
      <div><h2 id="research-home-heading">Better questions.<br /><em>Stronger foundations.</em></h2><div><p>My research explores how policy, technology, and public systems shape people’s lives—from carbon emissions in Sub-Saharan Africa to community engagement in Baltimore.</p><Link to="/research" className="text-link">Explore my research <ArrowUpRight size={15} aria-hidden="true" /></Link></div></div>
    </section>

  </Layout>;
}
