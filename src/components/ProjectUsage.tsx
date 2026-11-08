import snapshot from "@/data/projectUsage.json";

export function ProjectUsage({ project }: { project: "axiom" | "buzzer" }) {
  const metric = snapshot.projects[project];
  if (!Number.isSafeInteger(metric?.visitors) || metric.visitors < 0) return null;
  const date = new Date(snapshot.until).toLocaleDateString("en-GB", {day: "numeric", month: "short", year: "numeric", timeZone: "UTC"});
  return <p className="text-xs text-muted-foreground mt-4 mb-4" title={`Vercel Web Analytics · ${snapshot.since.slice(0, 10)} to ${snapshot.until.slice(0, 10)} (UTC). Visitors are not registered or monthly active users.`}>
    <strong className="text-foreground">{metric.visitors.toLocaleString("en-GB")}</strong> visitors · 30 days ending {date}
  </p>;
}
