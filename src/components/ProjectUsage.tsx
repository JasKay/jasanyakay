import snapshot from "@/data/projectUsage.json";

export function ProjectUsage({ project }: { project: "axiom" | "buzzer" }) {
  const metric = snapshot.projects[project];
  if (!Number.isSafeInteger(metric?.visitors) || metric.visitors < 0) return null;
  const date = new Date(snapshot.until).toLocaleDateString("en-GB", {day: "numeric", month: "short", year: "numeric", timeZone: "UTC"});
  return <div className="my-6 flex flex-wrap items-center gap-x-5 gap-y-3 rounded-xl border border-foreground/15 bg-muted/50 px-5 py-4"
    title={`Vercel Web Analytics · ${snapshot.since.slice(0, 10)} to ${snapshot.until.slice(0, 10)} (UTC). Visitors are not registered or monthly active users.`}>
    <strong className="text-4xl sm:text-5xl font-semibold tracking-tight leading-none text-foreground tabular-nums">{metric.visitors.toLocaleString("en-GB")}</strong>
    <div><span className="block text-sm font-semibold text-foreground">Visitors · last 30 days</span>
      <span className="block text-xs text-muted-foreground mt-1">Through {date} · Vercel Analytics</span>
    </div>
  </div>;
}
