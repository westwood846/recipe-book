import { entries } from "./entries";
import { Entry } from "./entry";

export default function Home() {
  return (
    <main className="container mx-auto max-w-screen-lg p-4 px-1">
      <h1 className="mb-12 text-center">Hanny&apos;s Cookbook</h1>
      <p className="mb-12 text-center">
        {
          "'What do I have and what do I want?' I slowly pull out different ingredients, some of which I'm not super excited about, but need to be eaten soon. The kitchen is my stage and I'm an improviser, welcome to my show. Everything is real. I might clean up the counter a bit here and there, but generally, I show up on stage as it is. Pretty messy, confused, unscripted and most of the time hungry."
        }
      </p>
      <article className="flex flex-col gap-16">
        {entries.map((entry, i) => (
          <Entry key={entry.videoId} index={i} entry={entry} />
        ))}
      </article>
    </main>
  );
}
