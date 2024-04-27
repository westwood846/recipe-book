import { entries } from "./entries";
import { Entry } from "./entry";

export default function Home() {
  return (
    <article className="flex flex-col gap-16">
      {entries.map((entry, i) => (
        <Entry key={entry.videoId} index={i} entry={entry} />
      ))}
    </article>
  );
}
