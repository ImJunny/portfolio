import { Badge } from "./ui/badge";
import Link from "next/link";
import Carousel from "./carousel/carousel";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Book, Github, Globe } from "lucide-react";
import { MotionEffect } from "./animate-ui/effects/motion-effect";

type ProjectEntryProps = {
  data: {
    title: string;
    date: string;
    description: string;
    main_tags: string[];
    redirect?: string;
    images?: string[];
    repo?: string;
    blog?: string;
    awards?: string[];
  };
};

export type ProjectEntryType = ProjectEntryProps["data"];

export default function ProjectEntry({ data }: ProjectEntryProps) {
  const { description, images, repo, redirect, blog, awards } = data;

  return (
    <MotionEffect
      slide={{ direction: "down", offset: 50 }}
      transition={{ type: "tween", delay: 0.15 }}
      inView
      fade
    >
      <Card className="border-border-dark p-4 gap-4 md:p-6 md:gap-6 bg-foreground grid grid-cols:1 md:grid-cols-2  text-background">
        <ProjectEntryHeader data={data} className="sm:hidden" />

        {images ? <Carousel slides={images} /> : null}

        <div className="flex flex-col sm:gap-2">
          <ProjectEntryHeader data={data} className="hidden sm:block" />

          <p className="whitespace-pre-wrap text-sm lg:text-base">
            {description}
          </p>

          {awards && (
            <div className="mt-2">
              <h3 className="font-semibold text-sm lg:text-base">Awards</h3>
              {awards.map((award, index) => (
                <li
                  key={index}
                  className="text-sm lg:text-base list-disc list-inside indent-[-1.25rem] ml-8"
                >
                  {award}
                </li>
              ))}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-4">
            {blog && (
              <Button
                className="border-border-dark bg-foreground text-background border-1"
                asChild
              >
                <Link href={blog} target="_blank">
                  <Book /> Read more
                </Link>
              </Button>
            )}
            {repo && (
              <Button
                className="border-border-dark bg-foreground text-background border-1"
                asChild
              >
                <Link href={repo} target="_blank">
                  <Github /> View repository
                </Link>
              </Button>
            )}
            {redirect && (
              <Button
                className="border-border-dark bg-foreground text-background border-1"
                asChild
              >
                <Link href={redirect} target="_blank">
                  <Globe /> Visit site
                </Link>
              </Button>
            )}
          </div>
        </div>
      </Card>
    </MotionEffect>
  );
}

function ProjectEntryHeader({
  className,
  data,
}: ProjectEntryProps & { className?: string }) {
  const { title, date, main_tags } = data;

  return (
    <div className={className}>
      <h1 className="text-xl font-semibold">{title}</h1>
      <h2 className="text-sm lg:text-base">{date}</h2>
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
