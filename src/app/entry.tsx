import { cyrb64Hash } from "./simple-hash";

export interface IEntry {
  title: string;
  videoId: string;
  description: string[];
}

interface Props {
  entry: IEntry;
  index: number;
}

export const Entry = ({ entry, index }: Props) => {
  const isEven = index % 2 === 0;
  const video = (
    <iframe
      width="560"
      height="315"
      src={`https://www.youtube.com/embed/${entry.videoId}`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
      className="flex-shrink-0"
      key="video"
    ></iframe>
  );
  const content = (
    <div className="" key="content">
      <h2 className="mb-4">{entry.title}</h2>
      {entry.description.map((paragraph) => (
        <p key={cyrb64Hash(paragraph)} className="mb-4">
          {paragraph}
        </p>
      ))}
    </div>
  );
  const elements = isEven ? [video, content] : [content, video];
  return <div className="flex gap-8">{elements}</div>;
};
