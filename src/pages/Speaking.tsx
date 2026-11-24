import { useEffect, useRef, useState } from "react";
import { ArrowDown, ArrowUpRight, ChevronLeft, ChevronRight, Play, X } from "lucide-react";
import { Layout } from "@/components/Layout";
import { siteLinks } from "@/data/projects";
import { speakingEngagements, mentoringEngagements, speakingLinks } from "@/data/speaking";
import "./speaking-gallery.css";

const invitation = `mailto:${siteLinks.email}?subject=${encodeURIComponent("Speaking invitation")}&body=${encodeURIComponent("Hello Kay,\n\nEvent or organisation:\nProposed date:\nAudience:\nTopic or format:\nLocation or online:\n\nA little more about the invitation:\n")}`;

const icorpsPhotos = [
  {
    src: "/images/speaking/black-founders-host.webp",
    alt: "Kay Jasanya hosting Black Founders in I-Corps 2024 at a microphone and lectern at Morgan State University.",
    caption: "Hosting the program",
  },
  {
    src: "/images/speaking/black-founders-group.webp",
    alt: "Founders, event guests and organizers gathered for a group photograph at Black Founders in I-Corps 2024.",
    caption: "The Black Founders in I-Corps community",
  },
  {
    src: "/images/speaking/black-founders-networking.webp",
    alt: "Two founders speaking with an event guest during networking at Black Founders in I-Corps 2024.",
    caption: "Networking between sessions",
  },
  {
    src: "/images/speaking/black-founders-conversation.webp",
    alt: "Two founders in conversation with an event guest at Black Founders in I-Corps 2024.",
    caption: "A conversation with founders",
  },
];

function BlackFoundersGallery() {
  const [activePhoto, setActivePhoto] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (activePhoto !== null && !dialog.open) dialog.showModal();
    if (activePhoto === null && dialog.open) dialog.close();
  }, [activePhoto]);

  const movePhoto = (direction: -1 | 1) => {
    setActivePhoto((current) => current === null ? null : (current + direction + icorpsPhotos.length) % icorpsPhotos.length);
  };

  return <>
    <div className="icorps-gallery" aria-label="Photographs from Black Founders in I-Corps 2024">
      {icorpsPhotos.map((photo, index) => <figure key={photo.src} className={index === 0 ? "icorps-photo icorps-photo--feature" : "icorps-photo"}>
        <button type="button" className="icorps-photo-button" onClick={() => setActivePhoto(index)} aria-label={`View larger: ${photo.alt}`}>
          <img src={photo.src} alt={photo.alt} width="1536" height="1024" loading="lazy" />
          <span className="icorps-photo-open" aria-hidden="true">View photograph</span>
        </button>
        <figcaption>{photo.caption}</figcaption>
      </figure>)}
    </div>
    <dialog ref={dialogRef} className="icorps-lightbox" aria-label="Black Founders in I-Corps photographs" onClose={() => setActivePhoto(null)} onClick={(event) => { if (event.target === event.currentTarget) setActivePhoto(null); }}>
      {activePhoto !== null && <div className="icorps-lightbox-content">
        <div className="icorps-lightbox-bar"><p className="eyebrow">Black Founders in I-Corps · Morgan State University</p><button type="button" onClick={() => setActivePhoto(null)} aria-label="Close photograph"><X size={20} aria-hidden="true" /></button></div>
        <div className="icorps-lightbox-image-wrap">
          <button type="button" onClick={() => movePhoto(-1)} className="icorps-lightbox-nav icorps-lightbox-nav--previous" aria-label="Previous photograph"><ChevronLeft size={22} aria-hidden="true" /></button>
          <img src={icorpsPhotos[activePhoto].src} alt={icorpsPhotos[activePhoto].alt} width="1536" height="1024" />
          <button type="button" onClick={() => movePhoto(1)} className="icorps-lightbox-nav icorps-lightbox-nav--next" aria-label="Next photograph"><ChevronRight size={22} aria-hidden="true" /></button>
        </div>
        <p className="icorps-lightbox-caption">{icorpsPhotos[activePhoto].caption}<span>{String(activePhoto + 1).padStart(2, "0")} / {String(icorpsPhotos.length).padStart(2, "0")}</span></p>
      </div>}
    </dialog>
  </>;
}

export default function Speaking() {

  return <Layout>
    <header className="speaking-intro"><div><p className="eyebrow">Speaking & mentoring</p><h1>A conversation can<br /><em>change the trajectory.</em></h1><p>I speak, host, and mentor at the intersection of learning, careers, and entrepreneurship. I care about making ideas useful—and helping people see what could come next.</p><div className="speaking-intro-actions"><a href={invitation} className="primary-link">Invite me to speak <ArrowUpRight size={15} aria-hidden="true" /></a><a href="#mentoring" className="text-link">The mentoring side <ArrowDown size={14} aria-hidden="true" /></a></div></div><figure className="speaking-portrait"><img src="/images/speaking/level-up.jpeg" alt="Kay speaking with a microphone to students at the Level Up event at Morgan State University" width="1080" height="1080" fetchPriority="high" /><figcaption><span>Level Up · Morgan State University</span><span>2023</span></figcaption></figure></header>
    <nav className="speaking-section-nav" aria-label="Speaking page sections"><a href="#engagements">On stage <span>{String(speakingEngagements.length).padStart(2, "0")}</span></a><a href="#in-conversation">In conversation <span>01</span></a><a href="#mentoring">Mentoring <span>{String(mentoringEngagements.length).padStart(2, "0")}</span></a></nav>

    <section id="engagements" className="speaking-engagements" aria-labelledby="engagements-heading"><div className="section-title-line"><h2 id="engagements-heading" className="eyebrow">Selected engagements</h2><span>Hosting · talks · workshops</span></div><div className="speaking-event-list">{speakingEngagements.map((event,index)=><article key={event.title} className={`speaking-event${event.title === "Black Founders in I-Corps" ? " speaking-event--icorps" : ""}`}><div className="speaking-event-date"><span>0{index+1}</span><time>{event.date}</time><span className="speaking-role">{event.role}</span></div><div><p className="speaking-event-host">{event.host}</p><h3><a href={event.link} target="_blank" rel="noopener noreferrer">{event.title}</a></h3><p className="speaking-event-description">{event.description}</p><a href={event.link} target="_blank" rel="noopener noreferrer" className="text-link">{event.linkLabel}<ArrowUpRight size={14} aria-hidden="true" /></a></div>{event.title === "Black Founders in I-Corps" ? <BlackFoundersGallery /> : event.title.startsWith("LinkedIn") ? <a href={event.link} target="_blank" rel="noopener noreferrer" className="speaking-slide-link" aria-label="Open the Coppin State LinkedIn presentation"><img src="/images/speaking/coppin-session.png" alt="Opening slide of Kay’s LinkedIn workshop for Coppin State University, dated 21 November 2024" width="1711" height="961" loading="lazy" /></a> : <span className="speaking-event-arrow" aria-hidden="true"><ArrowUpRight size={22} strokeWidth={1} /></span>}</article>)}</div><figure className="speaking-event-gallery"><div className="section-title-line"><p className="eyebrow">From the room / Jesus Alive Conference</p><a href={speakingLinks.jesusAlivePhotos} target="_blank" rel="noopener noreferrer" className="text-link">See the full photo set <ArrowUpRight size={14} aria-hidden="true" /></a></div><div className="speaking-gallery-grid"><a href={speakingLinks.jesusAlivePhotos} target="_blank" rel="noopener noreferrer" aria-label="View Jesus Alive Conference panel photographs on Instagram"><img src="/images/speaking/jesus-alive-01.jpg" alt="Panelists in conversation on stage at Jesus Alive Conference" width="2048" height="1365" loading="lazy" /></a><a href={speakingLinks.jesusAlivePhotos} target="_blank" rel="noopener noreferrer" aria-label="View more photographs from the Jesus Alive panel"><img src="/images/speaking/jesus-alive-02.jpg" alt="A panel speaker sharing with the audience at Jesus Alive Conference" width="2048" height="1365" loading="lazy" /></a></div><figcaption>Jesus Alive Conference · London, 2026. Photographs from the event’s published panel highlights.</figcaption></figure></section>

    <section id="in-conversation" className="speaking-podcast" aria-labelledby="podcast-heading"><div className="podcast-cover"><img src="/images/speaking/educatorstalk.jpg" alt="EducatorsTalk episode artwork featuring Kay Jasanya and host Gift Esema" width="400" height="400" loading="lazy" /></div><div className="podcast-copy"><p className="eyebrow">In conversation / EducatorsTalk with Gift Esema</p><h2 id="podcast-heading">Academic excellence<br /><em>is for you.</em></h2><p>A conversation about the practical steps behind academic progress, drawing on my own experience of learning and finding opportunities.</p><p className="podcast-meta">Guest appearance · 7 March 2023 · 26 min</p><a href={speakingLinks.podcast} target="_blank" rel="noopener noreferrer" className="primary-link"><Play size={13} strokeWidth={1.5} aria-hidden="true" />Listen on Spotify<ArrowUpRight size={15} aria-hidden="true" /></a><p className="podcast-original-title">Episode: “Academic Excellence is for you NOT geniuses”</p></div></section>

    <section id="mentoring" className="speaking-mentoring" aria-labelledby="mentoring-heading"><div className="section-title-line"><p className="eyebrow">Beyond the microphone</p><a href={speakingLinks.mentoring} target="_blank" rel="noopener noreferrer" className="text-link">The mentoring archive<ArrowUpRight size={14} aria-hidden="true" /></a></div><div className="mentoring-intro"><h2 id="mentoring-heading">Making room<br /><em>for the next person.</em></h2><div><p>The work continues in smaller conversations: with students, early-career professionals, and people turning an idea into something tangible.</p><p>Through youth mentoring programmes, university communities, and hackathons, I make time to share what I’ve learned and help others think through their next step.</p></div></div><div className="mentoring-records">{mentoringEngagements.map(event=><article key={event.title}><p className="eyebrow">{event.organization}</p><h3>{event.title}</h3><p className="mentoring-detail">{event.detail}</p><p>{event.description}</p><a href={event.link} target="_blank" rel="noopener noreferrer" className="text-link">{event.linkLabel}<ArrowUpRight size={14} aria-hidden="true" /></a></article>)}</div></section>

    <aside className="speaking-invitation"><div><p className="eyebrow">An invitation to connect</p><h2>A room full of possibilities.<br /><em>Let’s start a conversation.</em></h2><p>For a student workshop, founder event, podcast, or mentoring session, tell me about the audience and what you’d like them to take away.</p></div><a href={invitation} className="primary-link">Discuss an invitation <ArrowUpRight size={15} aria-hidden="true" /></a></aside>
  </Layout>;
}
