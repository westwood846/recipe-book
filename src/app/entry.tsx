import { cyrb64Hash } from "./simple-hash";

export interface IEntry {
  title: string;
  videoId: string;
  description: string[];
  effort?: string;
  ngon?: string;
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
      className="flex-shrink-0 max-[960px]:order-2"
      key="video"
    />
  );
  const content = (
    <div className="grow basis-[337px]" key="content">
      <h2 className="mb-2">{entry.title}</h2>
      <div className="flex gap-4 mb-4 text-gray-600 text-sm">
        {entry.effort && <span>Effort: {entry.effort}</span>}
        {entry.ngon && <span>Ngon-ness: {entry.ngon}</span>}
      </div>
      {entry.description.map((paragraph) => (
        <p key={cyrb64Hash(paragraph)} className="mb-4">
          {paragraph}
        </p>
      ))}
    </div>
  );
  const elements = isEven ? [video, content] : [content, video];
  return <div className="flex gap-x-8 gap-y-0 flex-wrap">{elements}</div>;
};
