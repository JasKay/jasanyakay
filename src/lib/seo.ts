import { projects, siteLinks } from "@/data/projects";
import { caseNarratives } from "@/data/caseNarratives";

export const SITE_URL = (import.meta.env.VITE_SITE_URL || "https://www.kayjasanya.com").replace(/\/$/, "");
export const SHARE_IMAGE = SITE_URL + "/images/social-card.png";
export const pageMetadata: Record<string, { title: string; description: string }> = {
  "/": { title: "Kay Jasanya | Senior Product Manager, Data & AI", description: "Kay Jasanya is a Senior Product Manager and hands-on builder in London. Explore product strategy, data, applied AI, Axiom, and selected case studies." },
  "/work": { title: "Product Work & Case Studies | Kay Jasanya", description: "Explore Kay Jasanya's product portfolio: Axiom, Ede, Gradezy, Bracket, and civic data products. Read the decisions, trade-offs, and outcomes behind the work." },
  "/about": { title: "About Kay Jasanya | Product, Data & Applied AI", description: "Meet Kay Jasanya, a London-based Senior Product Manager with experience across enterprise technology, financial services, civic systems, and startups." },
  "/resume": { title: "Resume & Product Experience | Kay Jasanya", description: "Explore Kay Jasanya's product management experience, technical capabilities, education, and work across data products, enterprise systems, and applied AI." },
  "/speaking": { title: "Speaking & Mentoring | Kay Jasanya", description: "Explore Kay Jasanya's talks, workshops, hosting, and mentoring in learning, careers, and entrepreneurship. Get in touch about a speaking engagement." },
  "/judging": { title: "Judging & Peer Review | Kay Jasanya", description: "Explore Kay Jasanya's judging, student enterprise evaluation, STEM competition service, and academic peer review." },
  "/research": { title: "Research & Publications | Kay Jasanya", description: "Read Kay Jasanya's research on sustainability, financial security, and civic systems, alongside publications, working papers, and academic peer review." },
  "/thoughts": { title: "Product Essays & Thinking in Public | Kay Jasanya", description: "Essays and research by Kay Jasanya on product strategy, data products, civic systems, fintech, and applied AI." },
  "/bookmarks": { title: "Recognition, Awards & Fellowships | Kay Jasanya", description: "Explore Kay Jasanya's awards, fellowships, publications, press, teaching, and mentorship, with links to the supporting work." },
  "/tutoring": { title: "Tutoring & Learning Support | Kay Jasanya", description: "Explore tutoring and learning support with Kay Jasanya. Find out about the approach, subjects, and how to get in touch." },
  "/project/axiom": { title: "Axiom | Church Technology by Kay Jasanya", description: "Explore Axiom, Kay Jasanya's church technology product for service planning and presentation, with a public demo and a look inside the workspace." },
};
for (const project of projects) {
  if (!caseNarratives[project.slug]) continue;
  pageMetadata["/project/" + project.slug] = {
    title: project.title + " | Product Case Study by Kay Jasanya",
    description: (caseNarratives[project.slug].hook || project.subtitle).replace(/\s+/g, " ").slice(0, 170),
  };
}
export const routeAliases: Record<string, string> = {
  "/portfolio": "/work", "/experience": "/resume", "/thinking": "/thoughts",
  "/building": "/work#more-builds", "/case-studies": "/work#case-studies", "/contact": "/#contact",
};
export function getSeo(pathname: string) {
  const path = pathname.replace(/\/+$/, "") || "/";
  const canonicalPath = routeAliases[path]?.split("#")[0] ?? path.replace(/^\/case-studies\//, "/project/");
  const meta = pageMetadata[canonicalPath];
  const privatePage = path === "/extraordinaire" || path.startsWith("/extraordinaire/");
  const title = privatePage ? "Extraordinaire | Kay Jasanya" : meta?.title ?? "Page Not Found | Kay Jasanya";
  const description = privatePage ? "Supporting records and evidence." : meta?.description ?? "This page could not be found. Explore Kay Jasanya's product work, research, or speaking.";
  const url = SITE_URL + canonicalPath;
  const personId = SITE_URL + "/#person";
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Person", "@id": personId, name: "Kay Jasanya", url: SITE_URL + "/", jobTitle: "Senior Product Manager", sameAs: [siteLinks.linkedin, siteLinks.github, "https://orcid.org/0009-0005-5732-799X"] },
      { "@type": "WebSite", "@id": SITE_URL + "/#website", url: SITE_URL + "/", name: "Kay Jasanya", publisher: { "@id": personId }, inLanguage: "en" },
      { "@type": path === "/" ? "ProfilePage" : "WebPage", "@id": url + "#webpage", url, name: title, description, ...(path === "/" ? { mainEntity: { "@id": personId } } : {}), isPartOf: { "@id": SITE_URL + "/#website" }, about: { "@id": personId }, inLanguage: "en" },
      ...(meta && canonicalPath !== "/" ? [{ "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL + "/" },
        ...(canonicalPath.startsWith("/project/") ? [{ "@type": "ListItem", position: 2, name: "Work", item: SITE_URL + "/work" }] : []),
        { "@type": "ListItem", position: canonicalPath.startsWith("/project/") ? 3 : 2, name: title.split(" | ")[0], item: url },
      ] }] : []),
    ],
  };
  return { title, description, url, robots: privatePage ? "noindex, nofollow" : meta ? "index, follow, max-image-preview:large" : "noindex, follow", schema };
}
export const escapeHtml = (value: string) => value.replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char]!));
export function renderSeo(path: string) {
  const seo = getSeo(path);
  const meta = (attribute: string, name: string, content: string) => '<meta ' + attribute + '="' + name + '" content="' + escapeHtml(content) + '" data-seo />';
  return [
    "<title>" + escapeHtml(seo.title) + "</title>",
    '<link rel="canonical" href="' + escapeHtml(seo.url) + '" data-seo />',
    meta("name", "description", seo.description), meta("name", "robots", seo.robots),
    meta("property", "og:type", "website"), meta("property", "og:site_name", "Kay Jasanya"),
    meta("property", "og:title", seo.title), meta("property", "og:description", seo.description),
    meta("property", "og:url", seo.url), meta("property", "og:locale", "en_GB"),
    meta("property", "og:image", SHARE_IMAGE), meta("property", "og:image:width", "1200"), meta("property", "og:image:height", "630"),
    meta("property", "og:image:alt", "Kay Jasanya — Senior Product Manager. Product, data and applied AI."),
    meta("name", "twitter:card", "summary_large_image"), meta("name", "twitter:creator", "@JasanyaKayode"),
    meta("name", "twitter:title", seo.title), meta("name", "twitter:description", seo.description),
    meta("name", "twitter:image", SHARE_IMAGE), meta("name", "twitter:image:alt", "Kay Jasanya — Senior Product Manager"),
    '<script type="application/ld+json" data-seo>' + JSON.stringify(seo.schema).replace(/</g, "\\u003c") + "</script>",
  ].join("\n");
}

