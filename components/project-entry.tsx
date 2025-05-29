import { ChevronRight } from "lucide-react";
import { Badge } from "./ui/badge";
import Link from "next/link";
import Carousel from "./carousel/carousel";

type ProjectEntryProps = {
  data: {
    title: string;
    date: string;
    description: string;
    main_tags: string[];
    tags: string[];
    redirect?: string;
    images?: string[];
  };
};

export type ProjectEntryType = ProjectEntryProps["data"];

export default function ProjectEntry({ data }: ProjectEntryProps) {
  const { description, images } = data;
  const SLIDES = images ? images : [];

  return (
    <div className="grid grid-cols:1 md:grid-cols-2 gap-x-8 gap-y-4">
      <ProjectEntryHeader data={data} className="sm:hidden" />

      <Carousel slides={SLIDES} />
      <div className="flex flex-col sm:gap-2">
        <ProjectEntryHeader data={data} className="hidden sm:block" />
        <p>{description}</p>
      </div>
    </div>
  );
}

function ProjectEntryHeader({
  className,
  data,
}: ProjectEntryProps & { className?: string }) {
  const { title, date, main_tags, redirect } = data;

  return (
    <div className={className}>
      {redirect ? (
        <Link
          href={redirect}
          target="_blank"
          className="inline-flex gap-2 items-center"
        >
          <h1 className="text-xl font-semibold">{title}</h1>
          <ChevronRight className="transition-transform group-hover:translate-x-1" />
        </Link>
      ) : (
        <h1 className="text-xl font-semibold">{title}</h1>
      )}
      <h2>{date}</h2>
      <div className="flex gap-2 mt-2 flex-wrap">
        {main_tags.map((tag) => (
          <Badge key={tag} variant="secondary">
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  );
}
