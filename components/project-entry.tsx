import { ChevronRight } from "lucide-react";
import { Badge } from "./ui/badge";
import Link from "next/link";

type ProjectEntryProps = {
  data: {
    title: string;
    date: string;
    description: string;
    tags: string[];
    redirect?: string;
  };
};

export type ProjectEntryType = ProjectEntryProps["data"];

export default function ProjectEntry({ data }: ProjectEntryProps) {
  const { title, date, description, tags, redirect } = data;

  return (
    <div className="grid grid-cols:1 md:grid-cols-2 gap-8">
      <div className="min-h-72 bg-muted-foreground rounded-sm" />
      <div>
        <h2 className="text-sm font-semibold">{date}</h2>

        {redirect ? (
          <Link
            href="https://ieee.hackpsh.org/"
            target="_blank"
            className="inline-flex gap-2 items-center mt-4 group"
          >
            <h1 className="text-xl font-semibold">{title}</h1>
            <ChevronRight className="transition-transform group-hover:translate-x-1" />
          </Link>
        ) : (
          <h1 className="text-xl font-semibold mt-4">{title}</h1>
        )}

        <div className="flex gap-2 my-2 flex-wrap">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
}
