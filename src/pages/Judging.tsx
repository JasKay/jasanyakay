import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";

const engagements = [
  {
    organization: "Business Intelligence Group",
    title: "Awards judge",
    period: "Judge profile",
    description: "Listed on the organisation’s judging panel, drawing on my experience across product and data. The public profile documents the judge listing and awards judged.",
    href: "https://www.bintelligence.com/judge/oluwakayode-jasanya",
    link: "View my judge profile",
    status: "Completed service",
  },
  {
    organization: "DECA Inc.",
    title: "School-based Enterprise evaluator",
    period: "2025",
    description: "Evaluated student-run school-based enterprises, bringing a practical product and business perspective to student work.",
    href: "https://www.deca.org/sbe",
    link: "Explore DECA’s SBE programme",
    status: "Completed service",
  },
  {
    organization: "STEM Racing UK",
    title: "Competition judge",
    period: "Upcoming · February 2027",
    description: "Looking forward to judging student teams as they bring engineering, design and enterprise together through STEM Racing.",
    href: "https://www.stemracing.co.uk/",
    link: "About STEM Racing UK",
    status: "Upcoming",
  },
];

export default function Judging() {
  return <Layout>
    <header className="judging-intro">
      <p className="eyebrow">Judging / Evaluation & service</p>
      <h1>Thoughtful work.<br /><em>Thoughtful review.</em></h1>
      <div className="judging-intro-bottom">
        <p>I enjoy helping people develop ideas and take their work further. As a judge and evaluator, I bring a product, data and systems perspective to student enterprise, innovation and research.</p>
        <a href="/extraordinaire/judging" className="text-link">Explore my judging archive <ArrowUpRight size={14} aria-hidden="true" /></a>
      </div>
    </header>

    <nav className="speaking-section-nav" aria-label="Judging page sections">
      <a href="#engagements">Judging engagements <span>03</span></a>
      <a href="#peer-review">Academic peer review</a>
    </nav>

    <section id="engagements" aria-labelledby="judging-engagements-heading">
      <div className="section-title-line"><h2 id="judging-engagements-heading" className="eyebrow">Selected judging engagements</h2><span>2025—2027</span></div>
      <div className="judging-engagements">
        {engagements.map((engagement, index) => <article className="judging-engagement" key={engagement.organization}>
          <div className="judging-engagement-meta"><span>0{index + 1}</span><span>{engagement.period}</span></div>
          <div>
            <p className="eyebrow">{engagement.organization}</p>
            <h3>{engagement.title}</h3>
            <p className="judging-description">{engagement.description}</p>
            <div className="judging-engagement-footer"><span className={engagement.status === "Upcoming" ? "judging-status upcoming" : "judging-status"}>{engagement.status}</span><a href={engagement.href} target="_blank" rel="noopener noreferrer" className="text-link">{engagement.link}<ArrowUpRight size={14} aria-hidden="true" /></a></div>
          </div>
        </article>)}
      </div>
    </section>

    <section id="peer-review" className="judging-peer-review" aria-labelledby="judging-review-heading">
      <div><p className="eyebrow">Academic service</p><h2 id="judging-review-heading">Reviewing ideas<br /><em>with care.</em></h2></div>
      <div>
        <p className="eyebrow">PREreview · Discover Sustainability</p>
        <h3>Independent, considered feedback.</h3>
        <p>My peer-review work includes structured open reviews of preprints through PREreview and completed journal review assignments for Discover Sustainability. These experiences extend the same care I bring to evaluating student and business ideas.</p>
        <p className="judging-review-record">8 PREreview assessments · 7 distinct preprints · 2025<br />3 completed journal review assignments · 2026</p>
        <div className="judging-review-links"><a href="https://pub.orcid.org/v3.0/0009-0005-5732-799X/peer-reviews" target="_blank" rel="noopener noreferrer" className="text-link">View public review records<ArrowUpRight size={14} aria-hidden="true" /></a><Link to="/research#peer-review" className="text-link">Read about peer review in Research<ArrowUpRight size={14} aria-hidden="true" /></Link></div>
      </div>
    </section>
  </Layout>;
}
